(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{499:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("JS是一门"),n("strong",[t._v("单线程的非阻塞")]),t._v("的脚本语言，即使在后来引入了Html5引入了Web Worker概念使其能在另外一个线程中执行计算密集的JS代码而不引起页面卡死，但为了保证线程安全，所有新线程都受主线程的完全控制，worker代码无法访问DOM，所以JS内部其实是利用了事件循环机制来实现的其非阻塞特性，其实这一点和操作系统的时间片轮询很相似，其本质还是一个串行系统，只是利用了分时操作让用户感觉在并发")]),t._v(" "),n("h3",{attrs:{id:"js-eventloop理解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js-eventloop理解"}},[t._v("#")]),t._v(" JS EventLoop理解")]),t._v(" "),n("p",[t._v("那么JS内部究竟是如何实现事件循环的呢？我翻阅了相关资料，许多人讲的也有些一知半解，最终我综合了一下这其中的思想，想尽可能简单的将其表述出来")]),t._v(" "),n("p",[t._v("为了方便理解我们认为JS线程内部是有三个数据结构做驱动和调度的，分别是")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("调用栈：和函数调用栈类似，每一个函数操作(帧)都在此入栈出栈")])]),t._v(" "),n("li",[n("strong",[t._v("消息队列")])]),t._v(" "),n("li",[n("strong",[t._v("微任务队列")])])]),t._v(" "),n("p",[t._v("虽然js引擎只维护一个主线程用来解释执行JS代码，但实际上浏览器环境中还存在其他的线程，例如处理"),n("strong",[t._v("AJAX，DOM，定时器")]),t._v("等，我们可以称他们为"),n("strong",[t._v("工作线程")]),t._v("；同时浏览器中还维护了一个"),n("strong",[t._v("消息队列")]),t._v("，主线程会将执行过程中遇到的"),n("strong",[t._v("异步请求")]),t._v("发送给这个消息队列，等到主线程空闲时再来执行消息队列中的任务。")]),t._v(" "),n("span",{staticStyle:{float:"left"}},[n("img",{staticStyle:{width:"auto",height:"300px"},attrs:{src:"http://leesdog.oss-cn-shanghai.aliyuncs.com/QQ%E6%88%AA%E5%9B%BE20220112185731_1641985126416.png",alt:"js运行态"}})]),t._v(" "),n("img",{staticStyle:{width:"auto",height:"300px"},attrs:{src:"http://leesdog.oss-cn-shanghai.aliyuncs.com/image_1641985696925.png",alt:"v8引擎"}}),t._v(" "),n("p",[t._v("我们经常使用的一些API并不是js引擎中提供的，例如setTimeout。它们其实是在浏览器中提供的，也就是运行时提供的，因此，实际上除了JavaScript引擎以外，还有其他的组件。其中有个组件就是由浏览器提供的，叫Web APIs，像DOM，AJAX，setTimeout等等。")]),t._v(" "),n("p",[t._v("诸如promise/then，async/await创建的异步操作的"),n("strong",[t._v("回调消息加入到微任务队列")]),t._v("中，微任务队列中的消息会在"),n("strong",[t._v("主线程上调用栈无法加入新的函数(script被弹出)为空后立即执行，且在执行期间新加入的微任务也会被执行")]),t._v("；\n主线程在执行过程中遇到了异步任务，就发起函数或者称为注册函数，通过event loop线程通知相应的工作线程（如ajax，dom，setTimout等），同时主线程继续向后执行，不会等待。等到"),n("strong",[t._v("工作线程完成了任务(例如setTimeout计时器线程计时结束)")]),t._v("，eventloop线程会将"),n("strong",[t._v("回调消息添加到消息队列")]),t._v("中，如果此时"),n("strong",[t._v("主线程上调用栈无法加入新的函数（script被弹出）且为空且微任务队列为空")]),t._v("就执行消息队列中排在最前面的消息，依次执行。\n新的消息进入队列的时候，会自动排在队列的尾端。")]),t._v(" "),n("blockquote",[n("p",[t._v("这里为了辨析两个概念，我们用一种可能并不标准的说法来区分下面两种情况，一个是"),n("strong",[t._v("广义回调函数")]),t._v("，一个是"),n("strong",[t._v("回调函数内容")])]),t._v(" "),n("ul",[n("li",[t._v("举个例子\nsetTimeout(()=>code,0);\n其中\n广义回调函数是箭头函数()=>code这一个整体\n回调函数内容指的是里面的code；")]),t._v(" "),n("li",[t._v("另一个例子\nlet p=new Promise((res,rej)=>{\nothercode\nresolve(code)\n});\n广义回调函数是(res,rej)=>{\nresolve(code)\n}整个整体\n而回调函数内容是只指里面的resolve(code);\n如果接上p.then(function(){\ncode\n});\n此时广义回调函数是function(){\ncode\n}整个整体\n而回调函数内容是里面的code")]),t._v(" "),n("li",[t._v("再举个例子\nasync func()\n{\nawait func1();\ncode\n}\n广义回调函数指的是await func1()，而后面的code是回调函数内容")])])]),t._v(" "),n("blockquote",[n("p",[t._v("然后我们将上述语句表述的再通俗一些，意思就是：\n"),n("strong",[t._v("JS异步操作")]),t._v("(promise/then、async/await)的"),n("strong",[t._v("回调函数内容")]),t._v("会随着执行被排入"),n("strong",[t._v("微任务队列")]),t._v("中；这里需要注意的是，"),n("strong",[t._v("广义回调函数本身")]),t._v("是被压入"),n("strong",[t._v("主调用栈")]),t._v("的")])]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("工作线程")]),t._v("(WebAPI)执行完后的"),n("strong",[t._v("回调函数内容")]),t._v("，将会随着执行被排入"),n("strong",[t._v("消息队列")]),t._v("中，这里需要注意的是，"),n("strong",[t._v("广义回调函数本身")]),t._v("是被压入"),n("strong",[t._v("主调用栈的")]),t._v("\n当主线程调用栈为空的时候会首先立即执行微任务队列中的操作，依次出队直至队空；\n当主线程调用栈和微任务队列均为空后会依次执行消息队列中的消息，依次出队直至队空；\n可以这么理解，调用栈优先级>微任务队列优先级>消息队列优先级")])]),t._v(" "),n("ul",[n("li",[t._v("针对上述描述我们举一个简单的例子")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script start'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nPromise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script end'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出script start, script end, promise1, promise2, setTimeout")]),t._v("\n\n")])])]),n("p",[t._v("过程如下：\n"),n("img",{attrs:{src:"http://leesdog.oss-cn-shanghai.aliyuncs.com/image_1642066200864.png",alt:"简单的例子"}})]),t._v(" "),n("p",[t._v("一些浏览器的打印的顺序是 script start, script end, setTimeout, promise1, promise2。它们在setTimeout之后运行promise回调。很可能他们调用promise回调是作为新任务的一部分，而不是作为一个微任务。")]),t._v(" "),n("p",[t._v("这也是可以理解的，因为promise来自 ECMAScript 而不是 HTML。ECMAScript 有“作业”的概念，类似于微任务，但是除了模糊的邮件列表讨论之外，这种关系并不明确。然而，普遍的共识是，promise应该是微任务队列的一部分并且有充足的理由。")]),t._v(" "),n("p",[t._v("将promise 看作任务会导致性能问题，因为回调没有必要因为任务相关的事（比如渲染）而延迟执行。它还会由于与其他任务源的交互而导致非确定性，并可能中断与其他api的交互")]),t._v(" "),n("ul",[n("li",[t._v("我们这里为了理解更加清晰，再举一个例子：")])]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("async1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async1 start'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主4")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("async2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主5")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async1 end'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("async2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主6")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script start'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主1")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主2")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 队1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("async1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主3")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主7")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主8")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resolve'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主9")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主10")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微3")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//微4")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script end'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主11")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按 主1-11，微1-4，队1 执行顺序，输出如下")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// script start -> 主1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// async1 start -> 主4")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// async2       -> 主6")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// promise1     -> 主8")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// script end   -> 主11")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// async1 end   -> 微1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// promise2     -> 微3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve      -> 微4")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// setTimeout   -> 队1")]),t._v("\n")])])]),n("p",[t._v("上面的过程表述起来就是：\n主0（压入script，准备执行script代码）\n主1（直接入栈后出栈输出）\n主2（计时器线程在0s后将console消息放入消息队列1）\n主3（async1压栈，保存当前指针位置信息，此时进入该函数内部）\n主4（直接入栈后出栈输出）\n主5（await后面的函数async2入栈，其后面的函数内容(本质上也是个回调)async1 end被阻塞放在微任务队列1中，此时进入async2内部）\n主6（直接入栈后出栈输出）\n此时async2出栈\n主7（function（resolve）入栈，其回调函数内容resolve被阻塞放在微任务队列2中，此时进入function（resolve）该函数内部）\n主8（直接入栈后出栈输出）\n主9（直接入栈后调用resolve出栈，此时resolve回传的值为'resolve'）\n主10（then入栈，then的回调函数内容promise2被阻塞放在微任务队列3中）\n主11（直接入栈后出栈输出）\n此时script出栈，主调用栈为空，此时开始立即执行微任务队列中的任务\n微1 微2 微3 微4\n此时微任务队列为空，开始执行消息队列中的任务\n队1")]),t._v(" "),n("ul",[n("li",[t._v("最后再举一个理解上容易出问题的例子")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cv")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rej")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cv")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出3 0 2 1")]),t._v("\n")])])]),n("p",[t._v("按顺序走首先new Promise入栈，此时其箭头函数整个入栈,按顺序走先将第一个setTimeout入栈，其里面的内容console.log('0')进入消息队列；接下来第二个setTimeout入栈，其里面的内容console.log('2')进入消息队列,这里"),n("strong",[t._v("需要注意")]),t._v(",和上面不同，这里"),n("strong",[t._v("不会直接进入then")]),t._v("，上面那个例子之所以进入了then是因为其promise里面的内容是普通函数，会直接压栈后执行，所以"),n("strong",[t._v("promise执行完了可以进入then")]),t._v("；而这里promise里的内容是带setTimeout的，其"),n("strong",[t._v("里面的函数在消息队列中还未被执行")]),t._v("，所以这里不会直接进入then，而是去执行下面的console.log('3')，等到消息队列中相应的函数执行完以后，then才可以被调用，里面的回调函数入栈，而回调函数内容则入微消息队列")]),t._v(" "),n("p",[t._v("从设计上理解，单线程意味着js任务需要排队，如果前一个任务出现大量的耗时操作，后面的任务得不到执行，任务的积累会导致页面的“假死”。这也是js编程一直在强调需要回避的“坑”。\n主线程会循环上述步骤，事件循环就是主线程重复从微任务队列、消息队列中取消息、执行的过程。\n需要注意的是 GUI渲染线程与JS引擎是互斥的，当JS引擎执行时GUI线程会被挂起，GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。因此页面渲染都是在js引擎主线程调用栈为空时进行的。")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://leesdog.oss-cn-shanghai.aliyuncs.com/image_1641987064753.png",alt:"JS运行时"}})]),t._v(" "),n("blockquote",[n("p",[t._v("参考资料：\n"),n("a",{attrs:{href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tasks, microtasks, queues and schedules"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://www.bilibili.com/video/BV1kf4y1U7Ln",target:"_blank",rel:"noopener noreferrer"}},[t._v("2分钟了解 JavaScript Event Loop"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://www.jianshu.com/p/50ab99baf026",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript中的事件循环与消息队列"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://www.zhihu.com/question/412373735",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎-JS消息队列只有普通队列和延迟队列吗"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);