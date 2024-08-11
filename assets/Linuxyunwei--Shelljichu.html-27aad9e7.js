import{_ as n,o as s,c as a,e}from"./app-9f97bd3a.js";const t={},l=e(`<h2 id="shell概述" tabindex="-1"><a class="header-anchor" href="#shell概述" aria-hidden="true">#</a> Shell概述</h2><p>Shell是一个命令行解释器，它接收应用程序/用户命令，然后调用操作系统内核。</p><p><img src="https://blog-pic-music.oss-cn-guangzhou.aliyuncs.com/picture/202408102112686.png" alt="image-20240810211158626"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 Shell 解释器</span>
<span class="token punctuation">[</span>cc@CentOSByCC ~<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/shells
/bin/sh
/bin/bash
/usr/bin/sh
/usr/bin/bash
/bin/tcsh
/bin/csh
<span class="token comment"># Centos 默认的解析器是 bash</span>
<span class="token punctuation">[</span>cc@CentOSByCC ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚本编写入门" tabindex="-1"><a class="header-anchor" href="#脚本编写入门" aria-hidden="true">#</a> 脚本编写入门</h2><h3 id="规范" tabindex="-1"><a class="header-anchor" href="#规范" aria-hidden="true">#</a> 规范</h3><p>脚本以 #!/bin/bash 开头（指定解析器）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;helloworld!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行方式" tabindex="-1"><a class="header-anchor" href="#执行方式" aria-hidden="true">#</a> 执行方式</h3><p>Shell文件后缀名为 .sh，在终端中的执行方式有多种：</p><ul><li><p>bash 文件路径</p></li><li><p>sh 文件路径</p></li><li><p>. 文件路径</p></li><li><p>source 文件路径</p></li><li><p>文件路径（需要先 赋予 Shell 文件的 +x 权限）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">chmod</span> +x helloworld.sh 
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ ./helloworld.sh
helloword<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><blockquote><p>区别：</p><p>bash 与 sh 执行为一个独立的环境（打开一个子shell来执行脚本内容，当脚本内容结束，则 子 shell 关闭，回到父 shell 中），. 和 source 为脚本执行环境。</p><p>开子 shell 与不开子 shell 的区别就在于，环境变量的继承关系，如在子 shell 中设置的 当前变量，父 shell 是不可见的。</p></blockquote><h3 id="输入与输出" tabindex="-1"><a class="header-anchor" href="#输入与输出" aria-hidden="true">#</a> 输入与输出</h3><ul><li><p>echo：回响（输出）；</p></li><li><p>read：读取信息（输入）；</p><blockquote><p>read 选项：</p><ul><li>-p：指定读取值时的提示符；</li><li>-t：指定读取值时等待的时间（秒）如果-t 不加表示一直等待</li></ul></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入你的姓名：&quot;</span> name<span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;你好，<span class="token variable">$name</span>&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><h3 id="系统预定义变量" tabindex="-1"><a class="header-anchor" href="#系统预定义变量" aria-hidden="true">#</a> 系统预定义变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 常用系统变量有 $HOME 、$PWD 、$SHELL、$USER 等</span>
<span class="token comment"># 查看系统变量的值</span>
<span class="token punctuation">[</span>cc@CentOSByCC ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
/bin/bash
<span class="token punctuation">[</span>cc@CentOSByCC ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$USER</span>
cc
<span class="token comment"># 显示当前 Shell 中所有的变量</span>
<span class="token punctuation">[</span>cc@CentOSByCC ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">set</span>
<span class="token comment"># 显示当前 Shell 中所有的全局变量</span>
<span class="token punctuation">[</span>cc@CentOSByCC ~<span class="token punctuation">]</span>$ <span class="token function">env</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义变量" tabindex="-1"><a class="header-anchor" href="#自定义变量" aria-hidden="true">#</a> 自定义变量</h3><h4 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h4><ul><li><p>定义变量：变量名=变量值 ( = 号前后不能有空格)</p></li><li><p>撤销变量: unset 变量名</p></li><li><p>声明静态变量: readonly 变量名 （只读，不能修改、撤销）</p></li><li><p>声明全局变量：export 变量名 （提供给子 shell 使用）</p></li></ul><h4 id="变量定义规则" tabindex="-1"><a class="header-anchor" href="#变量定义规则" aria-hidden="true">#</a> 变量定义规则</h4><ul><li><p>变量名可以由字母，数字和下划线组成，但是不能以数组开头，环境变量名建议大写</p></li><li><p>等号左右两侧不能有空格</p></li><li><p>在bash中，变量默认类型都是字符串类型，无法直接进行数值运算</p></li><li><p>变量的值如果有空格，必须用双引号或者单引号括起来</p></li></ul><h3 id="特殊变量" tabindex="-1"><a class="header-anchor" href="#特殊变量" aria-hidden="true">#</a> 特殊变量</h3><h4 id="n" tabindex="-1"><a class="header-anchor" href="#n" aria-hidden="true">#</a> $n</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># n 为数字，$0 代表该脚本名称，$1-$9 代表第一到第九个参数，十以上的参数，十以上的参数需要用大括号包含，如\${10}</span>

<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">vim</span> test.sh
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$0</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$1</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$2</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">bash</span> test.sh <span class="token number">1</span> <span class="token number">2</span>
test.sh
<span class="token number">1</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> $#</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取所有输入参数个数，常用于循环，判断参数的个数是否正确</span>

<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">vim</span> test.sh
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$0</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$1</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;---------&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$#</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">bash</span> test.sh <span class="token number">1</span> <span class="token number">2</span>
test.sh
<span class="token number">1</span>
<span class="token number">2</span>
---------
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> $*</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># $* 代表命令行中所有的参数，$* 把所有的参数看成一个整体</span>
<span class="token comment"># $@ 也代表命令行中所有的参数，不过$@把每个参数区分对待</span>

<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">vim</span> test.sh
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$0</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$1</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;---------&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$#</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$@</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">bash</span> test.sh <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
test.sh
<span class="token number">1</span>
<span class="token number">2</span>
---------
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>区别：</p><p>$* 可用于查看参数</p><p>$@ 可看作参数的一个数组集合，可用于遍历参数</p></blockquote><h4 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> $?</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 最后一次执行的命令的返回状态。如果这个变量的值为 0，证明上一个命令正确执行；如果这个变量的值为非 0（具体是哪个数，由命令自己来决定），则证明上一个命令执行不正确了</span>

<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">bash</span> helloworld.sh 
helloword<span class="token operator">!</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>$$ 代表当前程序的 PID</p></blockquote><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><h3 id="整数运算" tabindex="-1"><a class="header-anchor" href="#整数运算" aria-hidden="true">#</a> 整数运算</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># expr （乘法运算需要转译 \\* ）</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">expr</span> <span class="token number">4</span> / <span class="token number">2</span>
<span class="token number">2</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">expr</span> <span class="token number">4</span> <span class="token punctuation">\\</span>* <span class="token number">2</span>
<span class="token number">8</span>
	
<span class="token comment"># $(())</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">5</span><span class="token operator">*</span><span class="token number">2</span><span class="token variable">))</span></span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
<span class="token number">10</span>

<span class="token comment"># $[]</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token assign-left variable">b</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token number">6</span>-3<span class="token punctuation">]</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token variable">$b</span>
<span class="token number">3</span>

<span class="token comment"># let</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token builtin class-name">let</span> <span class="token assign-left variable">sum</span><span class="token operator">=</span><span class="token number">2</span>*3
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token variable">$sum</span>
<span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小数运算" tabindex="-1"><a class="header-anchor" href="#小数运算" aria-hidden="true">#</a> 小数运算</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装计算器程序bc</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">bc</span>
<span class="token comment"># 基本使用</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;1+2&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;scale=2;10/3&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span>  <span class="token comment"># scale=2 表示保留小数点后两位</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件判断" tabindex="-1"><a class="header-anchor" href="#条件判断" aria-hidden="true">#</a> 条件判断</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 基本语法</span>
<span class="token builtin class-name">test</span> condition
<span class="token punctuation">[</span> condition <span class="token punctuation">]</span>  <span class="token comment"># 注意 condition 前后要有空格</span>

<span class="token comment"># 条件非空为 true ，即空返回 false</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token punctuation">[</span> shell <span class="token punctuation">]</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">0</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token punctuation">[</span>  <span class="token punctuation">]</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整数比较" tabindex="-1"><a class="header-anchor" href="#整数比较" aria-hidden="true">#</a> 整数比较</h3><table><thead><tr><th style="text-align:center;">判断符</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">-eq</td><td style="text-align:center;">等于（equal）</td></tr><tr><td style="text-align:center;">-ne</td><td style="text-align:center;">不等于（not equal）</td></tr><tr><td style="text-align:center;">-lt</td><td style="text-align:center;">小于（less than）</td></tr><tr><td style="text-align:center;">-le</td><td style="text-align:center;">小于等于（less equal）</td></tr><tr><td style="text-align:center;">-gt</td><td style="text-align:center;">大于（greater than）</td></tr><tr><td style="text-align:center;">-ge</td><td style="text-align:center;">大于等于（greater equal）</td></tr></tbody></table><h3 id="字符串判断" tabindex="-1"><a class="header-anchor" href="#字符串判断" aria-hidden="true">#</a> 字符串判断</h3><table><thead><tr><th style="text-align:center;">判断符</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">=</td><td style="text-align:center;">相等</td></tr><tr><td style="text-align:center;">!=</td><td style="text-align:center;">不等</td></tr><tr><td style="text-align:center;">-z</td><td style="text-align:center;">长度为0</td></tr><tr><td style="text-align:center;">-n</td><td style="text-align:center;">长度不为0</td></tr></tbody></table><blockquote><p>查看字符串变量长度： \${#变量名}</p></blockquote><h3 id="文件权限判断" tabindex="-1"><a class="header-anchor" href="#文件权限判断" aria-hidden="true">#</a> 文件权限判断</h3><table><thead><tr><th style="text-align:center;">判断符</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">-r</td><td style="text-align:center;">有读的权限（read）</td></tr><tr><td style="text-align:center;">-w</td><td style="text-align:center;">有写的权限（write）</td></tr><tr><td style="text-align:center;">-x</td><td style="text-align:center;">有执行的权限（execute）</td></tr></tbody></table><h3 id="文件类型判断" tabindex="-1"><a class="header-anchor" href="#文件类型判断" aria-hidden="true">#</a> 文件类型判断</h3><table><thead><tr><th style="text-align:center;">判断符</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">-e</td><td style="text-align:center;">文件存在（existence）</td></tr><tr><td style="text-align:center;">-f</td><td style="text-align:center;">文件存在并且是一个常规的文件（file）</td></tr><tr><td style="text-align:center;">-d</td><td style="text-align:center;">文件存在并且是一个目录（directory）</td></tr></tbody></table><h3 id="多条件判断" tabindex="-1"><a class="header-anchor" href="#多条件判断" aria-hidden="true">#</a> 多条件判断</h3><p>语法：[ 条件1 判断符 条件2 ]</p><table><thead><tr><th style="text-align:center;">判断符</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">-a</td><td style="text-align:center;">两个条件都成立时为真</td></tr><tr><td style="text-align:center;">-o</td><td style="text-align:center;">其中一个成立就为真</td></tr></tbody></table><blockquote><p>&amp;&amp; 表示前一条命令执行成功时，才执行后一条命令</p><p>|| 表示上一条命令执行失败后，才执行下一条命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 判断 30 是否大于 25</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token punctuation">[</span> <span class="token number">30</span> <span class="token parameter variable">-ge</span> <span class="token number">25</span> <span class="token punctuation">]</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">0</span>
<span class="token comment"># 判断 helloworld.sh 是否具有写权限</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token punctuation">[</span> <span class="token parameter variable">-w</span> helloworld.sh <span class="token punctuation">]</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">0</span>
<span class="token comment"># 多条件判断</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token punctuation">[</span> atguigu <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> OK <span class="token operator">||</span> <span class="token builtin class-name">echo</span> notOK
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h2><h3 id="if判断" tabindex="-1"><a class="header-anchor" href="#if判断" aria-hidden="true">#</a> if判断</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 单分支(1)</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> 条件判断式 <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	程序
<span class="token keyword">fi</span>
<span class="token comment"># 单分支(2)</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> 条件判断式 <span class="token punctuation">]</span>
<span class="token keyword">then</span>
	程序
<span class="token keyword">fi</span>

<span class="token comment"># 双分支</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> 条件判断式 <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	程序
<span class="token keyword">else</span>
	程序
<span class="token keyword">fi</span>

<span class="token comment"># 多分支</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> 条件判断式 <span class="token punctuation">]</span>
<span class="token keyword">then</span>
	程序
<span class="token keyword">elif</span> <span class="token punctuation">[</span> 条件判断式 <span class="token punctuation">]</span>
<span class="token keyword">then</span>
	程序
<span class="token keyword">else</span>
	程序
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意事项：</p><ul><li>[ 条件判断式 ] 中括号和条件判断式之间必须有空格</li><li>if 后要有空格</li></ul></blockquote><h3 id="case语句" tabindex="-1"><a class="header-anchor" href="#case语句" aria-hidden="true">#</a> case语句</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 基本语法</span>
<span class="token keyword">case</span> $变量名 <span class="token keyword">in</span>
<span class="token string">&quot;值 1&quot;</span>）
如果变量的值等于值 <span class="token number">1</span>，则执行程序 <span class="token number">1</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token string">&quot;值 2&quot;</span>）
如果变量的值等于值 <span class="token number">2</span>，则执行程序 <span class="token number">2</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
…省略其他分支…
*）
如果变量的值都不是以上的值，则执行此程序
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意事项：</p><ul><li>case 行尾必须为单词“in”，每一个模式匹配必须以右括号“）”结束</li><li>双分号“;;”表示命令序列结束，相当于 java 中的 break</li><li>最后的“*）”表示默认模式，相当于 java 中的 default</li></ul></blockquote><h3 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环" aria-hidden="true">#</a> for循环</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 基本语法1</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> 初始值<span class="token punctuation">;</span>循环控制条件<span class="token punctuation">;</span>变量变化 <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
程序
<span class="token keyword">done</span>

<span class="token comment"># 计算 1 加到 100</span>
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">sum</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
        <span class="token assign-left variable">sum</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$sum</span>+<span class="token variable">$i</span><span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$sum</span>

<span class="token comment"># 基本语法2</span>
<span class="token keyword">for</span> 变量 <span class="token keyword">in</span> 值 <span class="token number">1</span> 值 <span class="token number">2</span> 值 <span class="token number">3</span>…
<span class="token keyword">do</span>
程序
<span class="token keyword">done</span>

<span class="token comment"># 打印参数</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
<span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;现在打印的是&quot;</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>

<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">bash</span> for2.sh
现在打印的是 <span class="token number">1</span>
现在打印的是 <span class="token number">2</span>
现在打印的是 <span class="token number">3</span>
现在打印的是 <span class="token number">4</span>
现在打印的是 <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>{1..10}、$(seq 1 10)、<code>seq 10</code> 都可以表示1到10</p></blockquote><h3 id="while循环" tabindex="-1"><a class="header-anchor" href="#while循环" aria-hidden="true">#</a> while循环</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 基本语法</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> 条件判断式 <span class="token punctuation">]</span>
<span class="token keyword">do</span>
程序
<span class="token keyword">done</span>

<span class="token comment"># 计算 1 加到 100</span>
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">sum</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$i</span> <span class="token parameter variable">-le</span> <span class="token number">100</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
<span class="token assign-left variable">sum</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$sum</span>+<span class="token variable">$i</span><span class="token punctuation">]</span>
<span class="token assign-left variable">i</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$i</span>+1<span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$sum</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>调试脚本：</p><p>在执行脚本时加上参数，比如：bash -n test.sh</p><ul><li>-n：仅调试脚本中的语法错误</li><li>-vx：以调试的方式执行，查询整个执行过程</li></ul></blockquote><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="系统函数" tabindex="-1"><a class="header-anchor" href="#系统函数" aria-hidden="true">#</a> 系统函数</h3><table><thead><tr><th style="text-align:center;">语法</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">basename</td><td style="text-align:center;">取文件路径里的文件名称</td></tr><tr><td style="text-align:center;">dirname</td><td style="text-align:center;">取路径里的绝对路径名称</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># basename [string / pathname] [suffix]</span>
<span class="token comment"># basename 命令会删掉所有的前缀包括最后一个（‘/’）字符，然后将字符串显示出来。</span>
<span class="token comment"># suffix 为文件后缀，如果指定，则只显示不带后缀的文件名</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">basename</span> test1/test.txt
test.txt
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">basename</span> test1/test.txt .txt
<span class="token builtin class-name">test</span>

<span class="token comment"># dirname 文件绝对路径</span>
<span class="token comment"># 从给定的包含绝对路径的文件名中去除文件名（非目录的部分），然后返回剩下的路径（目录的部分）</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">dirname</span> test1/test.txt
test1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义函数" tabindex="-1"><a class="header-anchor" href="#自定义函数" aria-hidden="true">#</a> 自定义函数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 基本语法</span>
<span class="token punctuation">[</span> <span class="token keyword">function</span> <span class="token punctuation">]</span> funname<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">{</span>
Action<span class="token punctuation">;</span>
<span class="token punctuation">[</span>return int<span class="token punctuation">;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># 计算两输入参数之和</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">function</span> <span class="token function-name function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
        <span class="token assign-left variable">sum</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$1</span>+<span class="token variable">$2</span><span class="token punctuation">]</span>
        <span class="token builtin class-name">echo</span> <span class="token variable">$sum</span>
<span class="token punctuation">}</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Please input the number1: &quot;</span> n1<span class="token punctuation">;</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Please input the number2: &quot;</span> n2<span class="token punctuation">;</span>
<span class="token function">sum</span> <span class="token variable">$n1</span> <span class="token variable">$n2</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">bash</span> fun.sh
Please input the number1: <span class="token number">2</span>
Please input the number2: <span class="token number">3</span>
<span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>（1）必须在调用函数地方之前，先声明函数，shell 脚本是逐行运行。不会像其它语言一样先编译。 （2）函数返回值，只能通过$?系统变量获得，可以显示加：return 返回，如果不加，将以最后一条命令运行结果，作为返回值。return 后跟数值 n(0-255)。</p></blockquote><h2 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h2><p>正则表达式使用单个字符串来描述、匹配一系列符合某个语法规则的字符串。在很多文本编辑器里，正则表达式通常被用来检索、替换那些符合某个模式的文本。</p><h3 id="常规匹配" tabindex="-1"><a class="header-anchor" href="#常规匹配" aria-hidden="true">#</a> 常规匹配</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 匹配所有包含 root 的行</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特殊字符匹配" tabindex="-1"><a class="header-anchor" href="#特殊字符匹配" aria-hidden="true">#</a> 特殊字符匹配</h3><table><thead><tr><th style="text-align:center;">特殊字符</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">^</td><td style="text-align:center;">匹配一行的开头</td></tr><tr><td style="text-align:center;">$</td><td style="text-align:center;">匹配一行的结束</td></tr><tr><td style="text-align:center;">.</td><td style="text-align:center;">匹配一个任意的字符</td></tr><tr><td style="text-align:center;">*</td><td style="text-align:center;">表示匹配上一个字符 0 次或多次</td></tr><tr><td style="text-align:center;">[]</td><td style="text-align:center;">表示匹配某个范围内的一个字符</td></tr><tr><td style="text-align:center;">\\</td><td style="text-align:center;">将转义字符和特殊字符连用，来表示特殊字符本身</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 匹配出所有以 a 开头的行</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> ^a
<span class="token comment"># 匹配出所有以 b 结尾的行</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> b$
<span class="token comment"># 匹配包含 ayub,auib,aiob,ajib等的所有行</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> a<span class="token punctuation">..</span>b
<span class="token comment"># 匹配包含 ac,abc,abbc,abbbc等的所有行</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> ab*c

<span class="token punctuation">[</span><span class="token number">6,8</span><span class="token punctuation">]</span> <span class="token comment"># 匹配 6 或 8</span>
<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span> <span class="token comment"># 匹配一个 0-9 的数字</span>
<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>* <span class="token comment"># 匹配任意长度的数字字符串</span>
<span class="token punctuation">[</span>a-z<span class="token punctuation">]</span> <span class="token comment"># 匹配一个 a-z 之间的字符</span>
<span class="token punctuation">[</span>a-z<span class="token punctuation">]</span>* <span class="token comment"># 匹配任意长度的字母字符串</span>
<span class="token punctuation">[</span>a-c, e-f<span class="token punctuation">]</span> <span class="token comment"># 匹配 a-c 或者 e-f 之间的任意字符</span>
<span class="token comment"># 匹配 rt,rat, rbt, rabt, rbact,rabccbaaacbt 等所有行</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> r<span class="token punctuation">[</span>a,b,c<span class="token punctuation">]</span>*t

<span class="token comment"># 会匹配所有包含 a$b 的行</span>
<span class="token punctuation">[</span>cc@CentOSByCC 桌面<span class="token punctuation">]</span>$ <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> ‘a<span class="token punctuation">\\</span><span class="token variable">$b</span>’
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本处理工具" tabindex="-1"><a class="header-anchor" href="#文本处理工具" aria-hidden="true">#</a> 文本处理工具</h2><h3 id="cut" tabindex="-1"><a class="header-anchor" href="#cut" aria-hidden="true">#</a> cut</h3><p>从文件的每一行剪切字节、字符和字段并将这些字节、字符和字段输出。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 基本语法</span>
<span class="token function">cut</span> <span class="token punctuation">[</span>选项参数<span class="token punctuation">]</span> filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">选项参数</th><th style="text-align:center;">功能</th></tr></thead><tbody><tr><td style="text-align:center;">-f</td><td style="text-align:center;">列号，提取第几列</td></tr><tr><td style="text-align:center;">-d</td><td style="text-align:center;">分隔符，按照指定分隔符分割列，默认是制表符“\\t”</td></tr><tr><td style="text-align:center;">-c</td><td style="text-align:center;">按字符进行切割 后加加 n 表示取第几列 比如 -c 1</td></tr></tbody></table><h3 id="awk" tabindex="-1"><a class="header-anchor" href="#awk" aria-hidden="true">#</a> awk</h3>`,87),i=[l];function c(p,o){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","Linuxyunwei--Shelljichu.html.vue"]]);export{r as default};
