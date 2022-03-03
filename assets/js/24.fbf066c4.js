(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{502:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"q-learning与ε-greedy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-learning与ε-greedy"}},[t._v("#")]),t._v(" Q-learning与ε-greedy")]),t._v(" "),s("blockquote",[s("p",[t._v("题目链接：https://inst.eecs.berkeley.edu//~cs188/sp20/project3/")])]),t._v(" "),s("h2",{attrs:{id:"q6-q-learning"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q6-q-learning"}},[t._v("#")]),t._v(" Q6:Q-Learning")]),t._v(" "),s("p",[t._v("这一题在经过之前课上的讲解以后比较清楚了,关键公式就是下面的式子：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.mathpix.com/snip/images/GsNSYWyu5Uq_vivGWWbCMRHRUVWzNtf_YKUroSoElHc.original.fullsize.png",alt:""}})]),t._v(" "),s("p",[t._v("这个式子老师课上也讲过了，其实前半部分就是Q值，后半部分是带入V值进行更新，后半部分的V值中的R（S,a）就是眼前利益，$\\max _{a} Q\\left(S^{\\prime}, a\\right)$ 其实就是记忆中的利益，从这个公式我们也可以分析出γ越小选择越重视眼前利益，反之越重视以往经验")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reward"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Q(S,A)")]),t._v("\n        QValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Q_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Q值")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (R(S,a)+γmaxQ(S',a)-Q(s,a))")]),t._v("\n        VValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reward "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("computeValueFromQValues"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("QValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# V值")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Q(S,A)=Q(S,A)+α{R(S,a)+γmaxQ(S',a)-Q(s,a)}")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Q_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  QValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alpha "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" VValue  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#更新Q值")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reward"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Q(S,A)")]),t._v("\n        QValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Q_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Q值")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#(R(S,a)+γmaxQ(S',a))")]),t._v("\n        VValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reward "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("computeValueFromQValues"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# V值")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Q(S,A)=（1-α）Q(S,A)+α{R(S,a)+γmaxQ(S',a)}")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Q_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alpha"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" QValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alpha "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" VValue  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#更新Q值")]),t._v("\n")])])]),s("p",[t._v("其他部分的内容和之前类似，最终测试结果：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://image.leesdog.space/ai501.png",alt:"image-20210614222152551"}})]),t._v(" "),s("h2",{attrs:{id:"q7-epsilon-greedy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q7-epsilon-greedy"}},[t._v("#")]),t._v(" Q7 Epsilon Greedy")]),t._v(" "),s("p",[t._v("这里使用的是ε-greedy方法，即每个状态以"),s("strong",[t._v("ε的概率进行探索")]),t._v("，此时将随机选取action，而"),s("strong",[t._v("剩下的1-ε的概率则进行正常选择")]),t._v("，即按上述方法，选取当前状态下效用值较大的动作，事实上就是在getaction这里加入几率搜索：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Pick Action")]),t._v("\n        legalActions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getLegalActions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        action "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这一步是在得到动作，但因为加入的探索值所以有几率进行探索")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flipCoin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("epsilon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            action "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("choice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("legalActions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            action "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getPolicy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" action\n        util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("raiseNotDefined"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://image.leesdog.space/ai502.png",alt:"image-20210614224633392"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);