#!/usr/bin/env bash

set -ex

with_docker() {
    docker run -v $(pwd):$(pwd) -t 192.168.10.221:5000/library/node:8.11.1 bash -c "cd $(pwd); $1"
}

git clean -xd --force --exclude=node_modules

VERSION=$(node -e "console.log(require('./package.json').version.split('.').slice(0, 2).join('.'))")

with_docker "sh build.sh"
cd output
tar -xzvf *.tgz
cd package
npm version $VERSION.$BUILD_NUMBER
npm publish
