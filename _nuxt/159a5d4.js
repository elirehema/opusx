(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{219:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={data:function(){return{email:"",password:""}}}},222:function(t,e,n){"use strict";n.r(e);n(23),n(8),n(24);var o={mixins:[n(219).a],data:function(){return{selected:[2]}},computed:{items:function(){return this.$store.getters.questionsdata}},beforeMount:function(){Promise.all([this.$store.dispatch("getAllQuestionsData")]).then((function(){}))},methods:{handleLogin:function(){console.log("email :",this.email),console.log("Password :",this.password)}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{attrs:{"three-line":""}},[n("v-list-item-group",{attrs:{multiple:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._l(t.items,(function(e,o){return[n("v-card",{key:e._id,staticClass:"mx-auto mt-1"},[n("v-list-item",{scopedSlots:t._u([{key:"default",fn:function(o){var l=o.active;return[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline",domProps:{textContent:t._s(e.question)}}),t._v(" "),n("v-list-item-subtitle",{staticClass:"text--primary",domProps:{textContent:t._s(e.headline)}}),t._v(" "),n("v-list-item-subtitle",{domProps:{textContent:t._s(e.description)}})],1),t._v(" "),n("v-list-item-action",[n("v-list-item-action-text",{domProps:{textContent:t._s(e.upvotes)}}),t._v(" "),l?n("v-icon",{attrs:{color:"yellow"}},[t._v("\n                mdi-star\n              ")]):n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("\n                mdi-star-outline\n              ")]),t._v(" "),n("v-list-item-action-text",{domProps:{textContent:t._s(e.downvotes)}})],1)]}}],null,!0)})],1),t._v(" "),o+1<t.items.length?n("v-divider",{key:o}):t._e()]}))],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);