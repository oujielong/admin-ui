webpackJsonp([30],{"m+hO":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("au-panel",{staticClass:"section",attrs:{title:"组件描述"}},[a("p",{staticClass:"paragraph"},[t._v("\n      多选框组件，还提供了部分选中的样式\n    ")]),t._v(" "),a("div",{staticClass:"component-example"},[a("au-checkbox",{attrs:{label:"All above",indeterminate:t.indeterminate},on:{change:t.checkAll},model:{value:t.allChecked,callback:function(e){t.allChecked=e},expression:"allChecked"}}),a("br"),a("br"),t._v(" "),a("au-checkbox",{attrs:{label:"Please check what kinds of dances do u love",checkboxes:t.checkboxes,validators:t.validators},on:{change:t.kindsCheck},model:{value:t.kinds,callback:function(e){t.kinds=e},expression:"kinds"}}),a("br"),a("br")],1)]),t._v(" "),a("au-panel",{staticClass:"section",attrs:{title:"Props"}},[a("au-table",[a("thead",[a("tr",[a("th",[t._v("字段")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认")]),t._v(" "),a("th",[t._v("可选")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("label")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"times"}})],1),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),a("td",[a("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),a("td",[t._v("\n            提示文字\n          ")])]),t._v(" "),a("tr",[a("td",[t._v("label-width")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"times"}})],1),t._v(" "),a("td"),t._v(" "),a("td",[a("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),a("td",[t._v("合法的css宽度值，仅支持px单位")]),t._v(" "),a("td",[t._v("\n            输入框前的提示文字的宽度"),a("br"),t._v("\n            仅inline为true时有效\n          ")])]),t._v(" "),a("tr",[a("td",[t._v("tips")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"times"}})],1),t._v(" "),a("td",[t._v("\n            Array"),a("br"),t._v("\n            -String\n          ")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),a("td",[a("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),a("td",[t._v("\n            需要显示的解释信息"),a("br")])]),t._v(" "),a("tr",[a("td",[t._v("inline")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"times"}})],1),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[a("ol",{staticClass:"option-list"},[a("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),a("td",[t._v("\n            是否横向放置label\n          ")])]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"times"}})],1),t._v(" "),a("td",[a("ol",{staticClass:"option-list"},[a("li",{staticClass:"au-theme-border-color--base-8"},[t._v("All")]),t._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[t._v("Array")])])]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),a("td",[a("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),a("td",[t._v("\n            值"),a("br"),t._v("\n            当传递Checkboxes时（单个多选框），value为Array类型"),a("br"),t._v("\n            当不传递Checkboxes时（多个多选款），value为任意类型\n          ")])]),t._v(" "),a("tr",[a("td",[t._v("text")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"times"}})],1),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),a("td",[a("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),a("td",[t._v("当不传递checkboxes时该属性表示选框后的文字")])]),t._v(" "),a("tr",[a("td",[t._v("checkboxes")]),t._v(" "),a("td",[a("au-icon",{staticClass:"au-theme-color--success",attrs:{type:"check"}})],1),t._v(" "),a("td",[t._v("\n            Array"),a("br"),t._v("\n            -Object\n          ")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),a("td",[a("ol",{staticClass:"option-list"},[a("li",{staticClass:"au-theme-border-color--base-8"},[t._v("text: String，选项显示的文字")]),t._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[t._v("value: 任意类型，选项的值")])])]),t._v(" "),a("td",[t._v("\n            选项配置\n          ")])]),t._v(" "),a("tr",[a("td",[t._v("indeterminate")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"times"}})],1),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[a("ol",{staticClass:"option-list"},[a("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),a("td",[t._v("模糊（部分选中）状态"),a("br"),t._v("这里只是样式，只在不传递Checkboxes（单个多选框）时有效")])]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"times"}})],1),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[a("ol",{staticClass:"option-list"},[a("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),a("td",[t._v("禁用")])]),t._v(" "),a("tr",[a("td",[t._v("warning")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"times"}})],1),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[a("ol",{staticClass:"option-list"},[a("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),a("td",[t._v("是否显示警告样式")])]),t._v(" "),a("tr",[a("td",[t._v("warnings")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"times"}})],1),t._v(" "),a("td",[t._v("\n            Array"),a("br"),t._v("\n            -String\n          ")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),a("td",[a("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),a("td",[t._v("\n            需要显示的警告信息"),a("br"),t._v("\n            如果给定了需要显示的警告信息，则组件将不执行validators中提供的验证器，而只是简单显示给定的警告"),a("br"),t._v("\n            不管warning选项是true还是false，只要给定了警告信息就一定会显示警告样式"),a("br")])]),t._v(" "),a("tr",[a("td",[t._v("validators")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"times"}})],1),t._v(" "),a("td",[t._v("\n            Array"),a("br"),t._v("\n            -Object\n          ")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),a("td",[a("ol",{staticClass:"option-list"},[a("li",{staticClass:"au-theme-border-color--base-8"},[t._v("validator: Function，接受一个表示当前值的参数value")]),t._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[t._v("warning: String，当验证失败时需要显示的警告信息")]),t._v(" "),a("li",{staticClass:"au-theme-border-color--base-8"},[t._v("async: Boolean，是否为异步验证，默认为false")])])]),t._v(" "),a("td",[t._v("\n            验证器配置"),a("br"),t._v("\n            同步验证时，验证器函数只需要返回Booean类型的验证结果即可"),a("br"),t._v("\n            异步验证时，需要额外配置async为true"),a("br"),t._v("\n            同时，验证器函数需要返回一个promise，并在resolve函数中传递Boolean类型的验证结果给验证器"),a("br"),t._v("\n            既有同步验证，又有异步验证时，验证器首先执行同步验证"),a("br"),t._v("\n            只有通过了全部的同步验证时，才会执行异步验证"),a("br"),t._v("\n            不管warning选项是true还是false，只要验证未通过就一定会显示警告样式"),a("br")])])])])],1),t._v(" "),a("au-panel",{staticClass:"section",attrs:{title:"Slots"}},[a("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),a("au-panel",{staticClass:"section",attrs:{title:"Events"}},[a("au-table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("@change")]),t._v(" "),a("td",[a("ol",{staticClass:"option-list"},[a("li",{staticClass:"au-theme-border-color--base-8"},[t._v("value")])])]),t._v(" "),a("td",[t._v("\n            值改变事件"),a("br"),t._v("\n            参数value表示当前值\n          ")])])])])],1),t._v(" "),a("au-panel",{staticClass:"section",attrs:{title:"Methods"}},[a("au-table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("validate()")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),a("td",[t._v("\n            在给定了验证器的情况下执行验证"),a("br"),t._v("\n            返回一个Promise实例"),a("br"),t._v("\n            需要同时验证多个表单时请使用Promise.all()方法\n          ")])]),t._v(" "),a("tr",[a("td",[t._v("clear()")]),t._v(" "),a("td",[a("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),a("td",[t._v("清除值和警告")])])])])],1),t._v(" "),a("au-panel",{staticClass:"section",attrs:{title:"使用示例"}},[a("h4",{staticClass:"title-1"},[t._v("基础用例--部分选中")]),t._v(" "),a("code-h",{attrs:{lang:"html",content:'\n      <au-checkbox\n        v-model="allChecked"\n        label="Please check witch kind of dance would you like"\n        text="All above"\n        @change="checkAll"\n        :indeterminate="indeterminate"></au-checkbox><br><br>\n      <au-checkbox\n        v-model="kinds"\n        label="Please check what kinds of dances do u love"\n        :checkboxes="checkboxes"\n        :validators="validators"\n        :inline="false"\n        @change="kindsCheck"></au-checkbox><br><br>\n    '}}),t._v(" "),a("code-h",{attrs:{lang:"js"}},[t._v("\n      export default {\n        data () {\n          return {\n            allChecked: false,\n            indeterminate: false,\n            kinds: [],\n            checkboxes: [\n              {\n                text: 'Breaking',\n                value: 'b'\n              },\n              {\n                text: 'Jazz',\n                value: 'j'\n              },\n              {\n                text: 'Popppin',\n                value: 'p'\n              },\n              {\n                text: 'Locking',\n                value: 'l'\n              }\n            ]\n          }\n        },\n        computed: {\n          validators () {\n            let vm = this\n            return [\n              {\n                validator (v) {\n                  return vm.kinds ? v.includes('b') : true\n                },\n                warning: 'Bboy forever'\n              }\n            ]\n          }\n        },\n        methods: {\n          kindsCheck (v) {\n            if (!this.allChecked || !v.length) {\n              this.allChecked = v.length === this.checkboxes.length\n            }\n            this.indeterminate = v.length > 0 && v.length < this.checkboxes.length\n          },\n          checkAll (v) {\n            this.indeterminate = false\n            this.kinds = v ? this.checkboxes.map(e => e.value) : []\n          }\n        }\n      }\n    ")])],1)],1)},staticRenderFns:[]},s=a("VU/8")({name:"checkbox-examples",data:function(){return{allChecked:!1,indeterminate:!1,kinds:[],checkboxes:[{text:"Breaking",value:"b"},{text:"Jazz",value:"j"},{text:"Popppin",value:"p"},{text:"Locking",value:"l"}]}},computed:{validators:function(){var t=this;return[{validator:function(e){return!t.kinds||e.includes("b")},warning:"Bboy forever"}]}},methods:{kindsCheck:function(t){this.allChecked&&t.length||(this.allChecked=t.length===this.checkboxes.length),this.indeterminate=t.length>0&&t.length<this.checkboxes.length},checkAll:function(t){this.indeterminate=!1,this.kinds=t?this.checkboxes.map(function(t){return t.value}):[]}}},n,!1,null,null,null);e.default=s.exports}});
//# sourceMappingURL=30.4f5d3c78fc343078f967.js.map