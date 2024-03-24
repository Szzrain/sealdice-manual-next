import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as s,c as r,a as e,d as t,b as i,w as a,e as o}from"./app-3dGJw9wW.js";const p="/sealdice-manual-next/assets/censor-ui-DLNYMxtg.png",d="/sealdice-manual-next/assets/censor-config1-Bip8x8md.png",h="/sealdice-manual-next/assets/censor-config2-DGoTrdv-.png",u="/sealdice-manual-next/assets/censor-words-Dn7Hjhhz.png",g="/sealdice-manual-next/assets/censor-log-BUJg4eNS.png",m={},f=o('<h1 id="拦截" tabindex="-1"><a class="header-anchor" href="#拦截"><span>拦截</span></a></h1><div class="hint-container info"><p class="hint-container-title">本节内容</p><p>本节将介绍拦截功能和相关设置，请善用侧边栏和搜索，按需阅读文档。</p></div><h2 id="什么是拦截功能" tabindex="-1"><a class="header-anchor" href="#什么是拦截功能"><span>什么是拦截功能？</span></a></h2><blockquote><ul><li><p>我不希望我的骰子被用来跑粉红团，如何避免？</p></li><li><p>发生了超过普通人类认知的离谱事情，如何设置骰子收到了某些词语时自动拦截掉这些用户？</p></li><li><p>……</p></li></ul></blockquote><p>「拦截管理」提供检查骰子收到的消息内容中是否有敏感词汇，命中时进行相应处理的能力。</p><p>点击海豹 UI 界面的「扩展功能 - 拦截管理」选项，你就可以进入拦截管理页面。</p><figure><img src="'+p+'" alt="拦截管理" tabindex="0"><figcaption>拦截管理</figcaption></figure><p>如果显示未启用的话，点击左上角开关来启用拦截。</p><h2 id="配置拦截" tabindex="-1"><a class="header-anchor" href="#配置拦截"><span>配置拦截</span></a></h2><p>拦截设置主要分为两部分：「匹配选项」，即设置拦截什么样的消息；「响应设置」，即命中敏感词后要如何处理。下面我们将一一介绍。</p><h3 id="匹配选项" tabindex="-1"><a class="header-anchor" href="#匹配选项"><span>匹配选项</span></a></h3><figure><img src="'+d+'" alt="匹配选项" width="75%" height="75%" tabindex="0"><figcaption>匹配选项</figcaption></figure><p>匹配选项中最重要的设置就是 <strong>「拦截范围」</strong>，这个选项决定了什么范围的内容会进行拦截检查。</p><ul><li>发出的消息：拦截骰子发出的消息文本（包括指令回复和自定义回复，总之所有骰子发的内容）进行检查</li><li>收到的指令：拦截骰子收到的命令文本进行检查，如收到「.rd 进行一次骰点」时，会检查其中的「进行一次骰点」，不受 bot off 影响</li><li>收到的所有消息：拦截骰子收到的所有消息进行检查，包括不以 <code>.</code> 等开头的消息，不受 bot off 影响</li></ul><p>其余选项可以参看对应的提示，悬浮在问号上即可看见对应帮助。</p><h3 id="响应设置" tabindex="-1"><a class="header-anchor" href="#响应设置"><span>响应设置</span></a></h3><p>海豹核心的敏感词主要分为四个等级：<code>提醒</code> <code>注意</code> <code>警告</code> <code>危险</code>，程度依次升高。你可以对不同等级的处理方式做不同的设置。</p><p>当消息命中敏感词的时候，将取命中词汇中的 <strong>最高等级</strong> 作为处理等级。当同一个用户触发同一等级的次数超过对应设置时，将进行对应等级配置的操作，同时清空用户该等级的计数，重新计算。</p><figure><img src="'+h+'" alt="匹配设置" tabindex="0"><figcaption>匹配设置</figcaption></figure>',19),_=e("li",null,"发送警告：会向触发用户发送警告信息；",-1),x=e("li",null,"通知 Master：会通知骰主；",-1),b=o('<h2 id="敏感词管理" tabindex="-1"><a class="header-anchor" href="#敏感词管理"><span>敏感词管理</span></a></h2><p>将标签页切换到「敏感词管理」，可以看到如下的两个列表：「词库列表」和「敏感词列表」。</p><p>页面中也提供了相应的帮助信息，可以点开查看。</p><figure><img src="'+u+'" alt="敏感词管理" tabindex="0"><figcaption>敏感词管理</figcaption></figure><p>敏感词库通常为 <code>txt</code> 或 <code>toml</code> 格式的文件，通过「导入」按钮可以导入多个词库，词库同时生效，其中重复的词取设置的最高等级。导入后点击「重载拦截」按钮以生效变更。</p><div class="hint-container tip"><p class="hint-container-title">为什么没有默认的敏感词库？</p><blockquote><p><em>「当你在凝视深渊的时候，深渊也正在凝视着你。」</em></p></blockquote><p>敏感词库本身属于敏感信息，故海豹官方不提供默认的敏感词库。</p></div><p>下方的敏感词列表会展示当前加载的敏感词，如果设置中勾选了「匹配拼音」，也会将实际去匹配的拼音展示出来。</p><h2 id="查看拦截日志" tabindex="-1"><a class="header-anchor" href="#查看拦截日志"><span>查看拦截日志</span></a></h2><p>在「拦截日志」标签页，你可以看到在何时、何地、哪个用户触发了什么等级的敏感词，具体的内容是什么。</p><figure><img src="'+g+'" alt="拦截日志" tabindex="0"><figcaption>拦截日志</figcaption></figure><h2 id="如何让用户-群豁免检查" tabindex="-1"><a class="header-anchor" href="#如何让用户-群豁免检查"><span>如何让用户/群豁免检查？</span></a></h2>',11),v=e("h2",{id:"如何编写敏感词库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何编写敏感词库"},[e("span",null,"如何编写敏感词库？")])],-1),k=e("p",null,"在「敏感词管理」标签页，提供了词库模板的下载。",-1);function y(T,D){const n=c("RouteLink");return s(),r("div",null,[f,e("ul",null,[_,x,e("li",null,[t("拉黑用户/群/邀请人，增加怒气值：拉黑和怒气值机制，见 "),i(n,{to:"/config/ban.html"},{default:a(()=>[t("黑白名单")]),_:1}),t("。")])]),b,e("p",null,[t("给用户/群配置白名单，即可豁免检查。设置白名单见 "),i(n,{to:"/config/ban.html"},{default:a(()=>[t("黑白名单")]),_:1}),t("。")]),v,k,e("p",null,[t("具体的编写帮助见 "),i(n,{to:"/advanced/edit_sensitive_words.html"},{default:a(()=>[t("进阶 - 编写敏感词库")]),_:1}),t("。")])])}const w=l(m,[["render",y],["__file","censor.html.vue"]]),z=JSON.parse('{"path":"/config/censor.html","title":"拦截","lang":"zh-cn","frontmatter":{"lang":"zh-cn","title":"拦截","description":"拦截 本节内容 本节将介绍拦截功能和相关设置，请善用侧边栏和搜索，按需阅读文档。 什么是拦截功能？ 我不希望我的骰子被用来跑粉红团，如何避免？ 发生了超过普通人类认知的离谱事情，如何设置骰子收到了某些词语时自动拦截掉这些用户？ …… 「拦截管理」提供检查骰子收到的消息内容中是否有敏感词汇，命中时进行相应处理的能力。 点击海豹 UI 界面的「扩展功能 -...","head":[["meta",{"property":"og:url","content":"http://localhost:8080/sealdice-manual-next/config/censor.html"}],["meta",{"property":"og:site_name","content":"海豹手册"}],["meta",{"property":"og:title","content":"拦截"}],["meta",{"property":"og:description","content":"拦截 本节内容 本节将介绍拦截功能和相关设置，请善用侧边栏和搜索，按需阅读文档。 什么是拦截功能？ 我不希望我的骰子被用来跑粉红团，如何避免？ 发生了超过普通人类认知的离谱事情，如何设置骰子收到了某些词语时自动拦截掉这些用户？ …… 「拦截管理」提供检查骰子收到的消息内容中是否有敏感词汇，命中时进行相应处理的能力。 点击海豹 UI 界面的「扩展功能 -..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-cn"}],["meta",{"property":"og:updated_time","content":"2023-10-29T17:01:34.000Z"}],["meta",{"property":"article:author","content":"SealDice Team"}],["meta",{"property":"article:modified_time","content":"2023-10-29T17:01:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"拦截\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-29T17:01:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SealDice Team\\",\\"url\\":\\"https://github.com/sealdice\\"}]}"]]},"headers":[{"level":2,"title":"什么是拦截功能？","slug":"什么是拦截功能","link":"#什么是拦截功能","children":[]},{"level":2,"title":"配置拦截","slug":"配置拦截","link":"#配置拦截","children":[{"level":3,"title":"匹配选项","slug":"匹配选项","link":"#匹配选项","children":[]},{"level":3,"title":"响应设置","slug":"响应设置","link":"#响应设置","children":[]}]},{"level":2,"title":"敏感词管理","slug":"敏感词管理","link":"#敏感词管理","children":[]},{"level":2,"title":"查看拦截日志","slug":"查看拦截日志","link":"#查看拦截日志","children":[]},{"level":2,"title":"如何让用户/群豁免检查？","slug":"如何让用户-群豁免检查","link":"#如何让用户-群豁免检查","children":[]},{"level":2,"title":"如何编写敏感词库？","slug":"如何编写敏感词库","link":"#如何编写敏感词库","children":[]}],"git":{"createdTime":1698059111000,"updatedTime":1698598894000,"contributors":[{"name":"JustAnotherID","email":"just-another-id@outlook.com","commits":4}]},"readingTime":{"minutes":3.41,"words":1024},"filePathRelative":"config/censor.md","localizedDate":"2023年10月23日","autoDesc":true,"excerpt":"\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">本节内容</p>\\n<p>本节将介绍拦截功能和相关设置，请善用侧边栏和搜索，按需阅读文档。</p>\\n</div>\\n<h2>什么是拦截功能？</h2>\\n<blockquote>\\n<ul>\\n<li>\\n<p>我不希望我的骰子被用来跑粉红团，如何避免？</p>\\n</li>\\n<li>\\n<p>发生了超过普通人类认知的离谱事情，如何设置骰子收到了某些词语时自动拦截掉这些用户？</p>\\n</li>\\n<li>\\n<p>……</p>\\n</li>\\n</ul>\\n</blockquote>\\n"}');export{w as comp,z as data};