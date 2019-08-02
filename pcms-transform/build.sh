#!/usr/bin/env bash

PACKAGE_LOCK_SHA=$(cat package.json | openssl sha -sha256 | rev | cut -d ' ' -f 1 | rev)
if [ ! -f "node_modules/$PACKAGE_LOCK_SHA" ]; then
	npm install --registry=http://192.168.10.223:7001 --disturl=https://npm.taobao.org/dist
	touch node_modules/$PACKAGE_LOCK_SHA
fi

npm run build
mkdir -p output
cd output
npm pack ..
cd ..
