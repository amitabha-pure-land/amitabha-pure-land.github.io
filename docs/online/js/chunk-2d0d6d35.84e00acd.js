(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6d35"],{"73cf":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"auth-page"},[o("div",{staticClass:"container page"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[o("h1",{staticClass:"text-xs-center"},[e._v("新用户注册")]),o("p",{staticClass:"text-xs-center"},[o("router-link",{attrs:{to:{name:"login"}}},[e._v("\n            已有用户账号?\n          ")])],1),e.errors?o("ul",{staticClass:"error-messages"},e._l(e.errors,(function(t,s){return o("li",{key:s},[e._v(e._s(s)+" "+e._s(e._f("error")(t)))])})),0):e._e(),o("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[o("fieldset",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"姓名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),o("fieldset",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"电邮地址"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),o("fieldset",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"form-control form-control-lg",attrs:{type:"phone",placeholder:"电话号码"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),o("fieldset",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"密码",autocomplete:"new-password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),o("fieldset",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"确认密码",autocomplete:"new-password"},domProps:{value:e.confirmPassword},on:{input:function(t){t.target.composing||(e.confirmPassword=t.target.value)}}})]),o("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n            注册\n          ")])])])])])])},r=[],a=o("2f62"),n=o("6c33"),i={name:"Register",data(){return{name:"",email:"",password:"",confirmPassword:"",phone:""}},computed:{...Object(a["d"])({errors:e=>e.auth.errors})},methods:{onSubmit(){this.$store.dispatch(n["o"],{email:this.email,password:this.password,confirmPassword:this.confirmPassword,name:this.name,phone:this.phone}).then(()=>this.$router.push({name:"home"}))}}},l=i,m=o("2877"),c=Object(m["a"])(l,s,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0d6d35.84e00acd.js.map