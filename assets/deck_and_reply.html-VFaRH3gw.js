import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as d,c as r,a as e,d as t,b as n,w as c,e as s}from"./app-3dGJw9wW.js";const p={},h=e("h1",{id:"牌堆-自定义回复",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#牌堆-自定义回复"},[e("span",null,"牌堆 自定义回复")])],-1),_=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"本节内容"),e("p",null,"本节将展示牌堆和自定义回复相关的指令，请善用侧边栏和搜索，按需阅读文档。")],-1),u={class:"hint-container tip"},m=e("p",{class:"hint-container-title"},"如何自定义？",-1),g=e("h2",{id:"draw-抽牌-管理牌堆",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#draw-抽牌-管理牌堆"},[e("span",null,[e("code",null,".draw"),t(" 抽牌 / 管理牌堆")])])],-1),w=s('<p><code>.draw help</code> 显示帮助信息。</p><h3 id="信息查询" tabindex="-1"><a class="header-anchor" href="#信息查询"><span>信息查询</span></a></h3><p><code>.draw list</code> 列出当前装载的牌堆列表。</p><p><code>.draw keys &lt;牌堆&gt;</code> 查看特定牌堆可抽取的牌组列表。</p><p><code>.draw search &lt;牌组名称&gt;</code> 模糊搜索指定牌组。</p><p><code>.draw desc &lt;牌组名称&gt;</code> 查看牌组所属牌堆的详细信息。</p>',6),y={class:"hint-container note"},f=e("p",{class:"hint-container-title"},"示例",-1),v=s('<p>需要说明，在以上的例子中，「GRE单词」同时是牌堆名与牌组名。在 <code>.draw keys GRE单词</code> 中，它作为牌堆名出现；在 <code>.draw desc GRE单词</code> 中，它作为牌组名出现。</p><p><code>.draw keys</code> 列出所有可抽取的牌组列表。</p><div class="hint-container warning"><p class="hint-container-title">谨慎使用</p><p>这一指令会将<strong>所有</strong>可抽取的牌组列出，在牌组较多时造成刷屏。</p></div><h3 id="抽牌" tabindex="-1"><a class="header-anchor" href="#抽牌"><span>抽牌</span></a></h3><p><code>.draw &lt;牌组名称&gt; (&lt;数量&gt;#)</code> 在指定牌组抽指定数量的牌，默认为抽 1 张。</p>',5),E={class:"hint-container note"},k=e("p",{class:"hint-container-title"},"示例",-1),x=e("p",null,[t("当指定的牌组名称不存在时，将会进行模糊搜索，效果与 "),e("code",null,"draw search"),t(" 类似。")],-1),R={class:"hint-container note"},G=e("p",{class:"hint-container-title"},"示例",-1),T=e("h3",{id:"牌堆管理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#牌堆管理"},[e("span",null,"牌堆管理")])],-1),D=e("p",null,[e("code",null,".draw reload"),t(" 重新加载牌堆，仅限 Master 使用。")],-1),b=e("h2",{id:"reply-管理自定义回复",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reply-管理自定义回复"},[e("span",null,[e("code",null,".reply"),t(" 管理自定义回复")])])],-1),L=e("p",null,[e("code",null,".reply (on|off)"),t(" 开启、关闭本群的自定义回复功能。")],-1),S=e("p",null,[t("以上指令等价于 "),e("code",null,".ext reply (on|off)"),t("。")],-1);function z(B,N){const a=l("RouteLink"),o=l("ChatBox");return d(),r("div",null,[h,_,e("div",u,[m,e("p",null,[t("牌堆和自定义回复都是海豹提供的扩展性功能，此处只展示相关控制指令，如果你想知道如何进行自定义，请转到 "),n(a,{to:"/advanced/introduce.html"},{default:c(()=>[t("进阶介绍")]),_:1}),t("。")])]),g,e("p",null,[t("关于牌堆功能的一般性介绍，请参阅 "),n(a,{to:"/config/deck.html"},{default:c(()=>[t("配置 - 牌堆")]),_:1}),t("。")]),w,e("div",y,[f,n(o,{messages:[{content:".draw list",send:!0},{content:`载入并开启的牌堆:
- GRE单词 格式: Dice! 作者:于言诺 版本:1.0.1 牌组数量: 1
- IELTS单词 格式: Dice! 作者:于言诺 版本:1.0.1 牌组数量: 1
- TOEFL单词 格式: Dice! 作者:于言诺 版本:1.0.1 牌组数量: 1
- SealDice内置牌堆 格式: Dice! 作者:<因过长略去> 版本:1.2.0 牌组数量: 8`},{content:".draw keys GRE单词",send:!0},{content:`牌组关键字列表:
GRE单词`},{content:".draw search 单词",send:!0},{content:`找到以下牌组:
- GRE单词
- TOEFL单词
- IELTS单词`},{content:".draw desc GRE单词",send:!0},{content:`牌堆信息:
牌堆: GRE单词
格式: Dice!
作者: 于言诺
版本: 1.0.1
牌组数量: 1
时间: 2022/5/23
更新时间: 2022/8/16
牌组: GRE单词`}]},null,8,["messages"])]),v,e("div",E,[k,n(o,{messages:[{content:".draw GRE单词 3#",send:!0},{content:`<木落>抽出了：
GRE3178
invoice n.
发票, 发货单, 货物。`},{content:`<木落>抽出了：
GRE4889
rig n.
索具装备, 钻探设备, 钻探平台, 钻塔。`},{content:`<木落>抽出了：
GRE5421
austerity n.
严峻, 严厉, 朴素, 节俭, 苦行。`}]},null,8,["messages"])]),x,e("div",R,[G,n(o,{messages:[{content:".draw 单词",send:!0},{content:`找不到这个牌组，但发现一些相似的:
- GRE单词
- TOEFL单词
- IELTS单词`}]},null,8,["messages"])]),T,D,b,e("p",null,[t("关于自定义回复功能的一般性介绍，请参阅 "),n(a,{to:"/config/reply.html"},{default:c(()=>[t("配置 - 自定义回复")]),_:1}),t("。")]),L,S])}const O=i(p,[["render",z],["__file","deck_and_reply.html.vue"]]),V=JSON.parse('{"path":"/use/deck_and_reply.html","title":"牌堆 自定义回复","lang":"zh-cn","frontmatter":{"lang":"zh-cn","title":"牌堆 自定义回复","description":"牌堆 自定义回复 本节内容 本节将展示牌堆和自定义回复相关的指令，请善用侧边栏和搜索，按需阅读文档。 如何自定义？ 牌堆和自定义回复都是海豹提供的扩展性功能，此处只展示相关控制指令，如果你想知道如何进行自定义，请转到 。 .draw 抽牌 / 管理牌堆 关于牌堆功能的一般性介绍，请参阅 。 .draw help 显示帮助信息。 信息查询 .draw l...","head":[["meta",{"property":"og:url","content":"http://localhost:8080/sealdice-manual-next/use/deck_and_reply.html"}],["meta",{"property":"og:site_name","content":"海豹手册"}],["meta",{"property":"og:title","content":"牌堆 自定义回复"}],["meta",{"property":"og:description","content":"牌堆 自定义回复 本节内容 本节将展示牌堆和自定义回复相关的指令，请善用侧边栏和搜索，按需阅读文档。 如何自定义？ 牌堆和自定义回复都是海豹提供的扩展性功能，此处只展示相关控制指令，如果你想知道如何进行自定义，请转到 。 .draw 抽牌 / 管理牌堆 关于牌堆功能的一般性介绍，请参阅 。 .draw help 显示帮助信息。 信息查询 .draw l..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-cn"}],["meta",{"property":"og:updated_time","content":"2023-11-07T03:30:33.000Z"}],["meta",{"property":"article:author","content":"SealDice Team"}],["meta",{"property":"article:modified_time","content":"2023-11-07T03:30:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"牌堆 自定义回复\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-07T03:30:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SealDice Team\\",\\"url\\":\\"https://github.com/sealdice\\"}]}"]]},"headers":[{"level":2,"title":".draw 抽牌 / 管理牌堆","slug":"draw-抽牌-管理牌堆","link":"#draw-抽牌-管理牌堆","children":[{"level":3,"title":"信息查询","slug":"信息查询","link":"#信息查询","children":[]},{"level":3,"title":"抽牌","slug":"抽牌","link":"#抽牌","children":[]},{"level":3,"title":"牌堆管理","slug":"牌堆管理","link":"#牌堆管理","children":[]}]},{"level":2,"title":".reply 管理自定义回复","slug":"reply-管理自定义回复","link":"#reply-管理自定义回复","children":[]}],"git":{"createdTime":1698072668000,"updatedTime":1699327833000,"contributors":[{"name":"JustAnotherID","email":"just-another-id@outlook.com","commits":3},{"name":"Xiangze Li","email":"lee_johnson@qq.com","commits":3}]},"readingTime":{"minutes":2.61,"words":782},"filePathRelative":"use/deck_and_reply.md","localizedDate":"2023年10月23日","autoDesc":true,"excerpt":"\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">本节内容</p>\\n<p>本节将展示牌堆和自定义回复相关的指令，请善用侧边栏和搜索，按需阅读文档。</p>\\n</div>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">如何自定义？</p>\\n<p>牌堆和自定义回复都是海豹提供的扩展性功能，此处只展示相关控制指令，如果你想知道如何进行自定义，请转到 <a href=\\"/sealdice-manual-next/advanced/introduce.html\\" target=\\"_blank\\">进阶介绍</a>。</p>\\n</div>"}');export{O as comp,V as data};
