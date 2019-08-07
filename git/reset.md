## 撤销 commit git reset

1. --mixed 默认：不删除工作空间代码改动撤销 commit 和 add
2. --soft：不删除工作区修改代码，撤销 commit 不撤销 add
3. --hard：删除工作区改动代码，撤销 commit 和 add，相当于代码恢复到上一次的 commit 状态
4. 只是想改注释：git commit --amend 进入编辑器修改保存即可
