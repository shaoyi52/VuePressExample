import{_ as i,o as t,c as e,f as a,e as l}from"./app-bc70983f.js";const d={},n=l(`<h1 id="git-常用命令" tabindex="-1"><a class="header-anchor" href="#git-常用命令" aria-hidden="true">#</a> Git 常用命令</h1><h1 id="git-基本概念" tabindex="-1"><a class="header-anchor" href="#git-基本概念" aria-hidden="true">#</a> git 基本概念</h1><blockquote><p>Git 是目前世界上最优秀最流行的分布式版本控制系统；对源代码进行版本管理</p></blockquote><p>Git 项目有 3 个区域：工作区、暂存区和 Git 仓库（分成本地仓库和远程仓库）</p><h2 id="git-常用命令-1" tabindex="-1"><a class="header-anchor" href="#git-常用命令-1" aria-hidden="true">#</a> Git 常用命令</h2><ol><li>git add ：会将工作区的文件标记为已暂存，保存在暂存区</li><li>git commit： 会将标记为已暂存的文件保存都本地 Git 仓库，并生成一个快照</li><li>git diff：令查看本地修改</li><li>git log: 查看提交日志；</li></ol><h2 id="git-常用回退操作命令" tabindex="-1"><a class="header-anchor" href="#git-常用回退操作命令" aria-hidden="true">#</a> Git 常用回退操作命令</h2><ol><li>git checkout -- . 一次性撤销所有本地修改</li><li>git reset . 一次性撤销暂存区的全部修改</li><li>git checkout a18c6fa 撤销了本次提交</li><li>git reset --hard HEAD~1 重置之前的提交</li><li>git commit --amend -m &quot;add test container&quot; 提交信息修改</li><li>git revert 711bb0b 撤销该次提交（将提交的内容“反操作”），并生成一个新的提交在最前面</li><li>git merge --abort 合并出现冲突时，撤销合并操作</li><li>git rm --cached src/test.pptx 暂存区的文件加多了，想移除，又不想删掉本地的文件</li><li>git br -m [old_br][new_br] 分支重命名</li><li>撤销变基操作</li><li>git filter-branch --tree-filter &#39;rm -f passwords.txt&#39; 该命令执行完会将提交历史中所有提交的 passwords.txt 文件彻底删除，永远没法通过 Git 找回</li></ol><h2 id="git-修改多次-commit-注释" tabindex="-1"><a class="header-anchor" href="#git-修改多次-commit-注释" aria-hidden="true">#</a> git 修改多次 commit 注释</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># n：需要修改的最近n此commit
git rebase -i HEAD~n
# 按i进行编辑，需要修改那个注释，就将其前面的pick修改为edit
# 然后按Esc后再按:wq保存并退出
git commit --amend -m &#39;注释&#39;

git rebase --continue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-恢复存" tabindex="-1"><a class="header-anchor" href="#git-恢复存" aria-hidden="true">#</a> git 恢复存</h2><ol><li>git stash -m &quot;保存暂存&quot;</li><li>git stash list 查看暂存列表</li><li>git stash apply fileIndex 应用暂存</li><li>git stash drop fileIndex 删除暂存</li><li>git stash pop 恢复最后一次暂存的同时把stash内容也删了</li></ol>`,12);function r(s,c){return t(),e("div",null,[a(`
 * @Description: Do not ed"
 * @Author: yzf
 * @Date: 2020-07-17 09:22:00
 * @LastEditors: yzf
 * @LastEditTime: 2023-05-19 17:18:30
 * @FilePath: \\yudao-ui-adminh:\\gitHub\\days_blog\\git文档\\git常用命令.md
`),n])}const h=i(d,[["render",r],["__file","git常用命令.html.vue"]]);export{h as default};
