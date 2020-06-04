(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e17ac5ec"],{"4c4a":function(t,e,a){t.exports=a.p+"img/banner.0d5edfab.jpg"},c705:function(t,e,a){t.exports=a.p+"img/hero_2.dc92bd32.jpeg"},d115:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("core-toolbar"),s("v-parallax",{attrs:{src:a("c705"),height:"400"}},[s("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[s("h1",{staticClass:"white--text mb-2 display-1 text-center"},[t._v(" Team player software engineer with a can-do attitude,"),s("br"),t._v(" phenomenal time management skills, and a strong user focus looking"),s("br"),t._v(" to work with companies to add value to the them as well"),s("br")]),s("h1",{staticClass:"white--text mb-2 display-1 text-center"},[t._v(" Rish Kumaria Portfolio ")]),s("div",{staticClass:"subheading mb-4 text-center"},[t._v(" Developed in Calgary ")])])],1),s("v-layout",{attrs:{column:"",wrap:"","align-center":""}},[s("v-flex",{attrs:{xs12:""}},[s("v-container",{attrs:{"grid-list-xl":""}},[s("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[s("v-flex",{attrs:{xs12:"",md6:""}},[s("v-card",{staticClass:"transparent",attrs:{elevation:0}},[s("v-card-text",{staticClass:"text-center"},[s("v-icon",{staticClass:"blue--text text--lighten-2 layout justify-center",attrs:{"x-large":""}},[t._v(" mdi-account ")])],1),s("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[s("div",{staticClass:"headline text-center"},[t._v(" Academically Developed Skills ")])]),s("v-card-text",[t._v(" I was always a keen and curious problem solver."),s("br"),t._v(" The first language I learned was C++ in grade 12. I perceived it like a puzzle."),s("br"),t._v(" Since then, I have gained proficiency in Python, Java, Vue.js and SQL"),s("br")]),s("v-btn",{staticClass:"mt-12",attrs:{color:"blue lighten-2",dark:"",large:"",href:"/student"}},[t._v(" Learn more about my academic projects! ")])],1)],1),s("v-flex",{attrs:{xs12:"",md6:""}},[s("v-card",{staticClass:"transparent",attrs:{elevation:0}},[s("v-card-text",{staticClass:"text-center"},[s("v-icon",{staticClass:"blue--text text--lighten-2 layout justify-center",attrs:{"x-large":""}},[t._v(" mdi-flash ")])],1),s("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[s("div",{staticClass:"headline"},[t._v(" Professionally Developed Skills ")])]),s("v-card-text",[t._v(" My first professional endeavor was for an android development firm in Calgary "),s("br"),t._v(" I have worked as a JavaScript QA Test Developer for QHR Tech."),s("br")]),s("v-btn",{staticClass:"mt-12",attrs:{color:"blue lighten-2",dark:"",large:"",href:"/institution"}},[t._v(" Learn More About My Professional Projects ")])],1)],1)],1)],1)],1)],1),s("v-parallax",{attrs:{src:a("4c4a"),height:"380"}},[s("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[s("div",{staticClass:"headline white--text mb-4 text-center"},[t._v(" My versatile skillset allows me to thrive in Java, Junit Testing, Vue.js, Python, SQL and HTML."),s("br"),t._v(" I take pleasure in challenging myself to learn new frameworks and languages."),s("br")])])],1),s("v-container",{attrs:{"grid-list-xl":""}},[s("v-layout",{staticClass:"my-12",attrs:{row:"",wrap:"","justify-center":""}},[s("v-flex",{attrs:{xs12:"",sm4:""}},[s("v-card",{staticClass:"transparent",attrs:{elevation:0,flat:""}},[s("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[s("div",{staticClass:"headline"},[t._v(" More About Me ")])]),s("v-card-text",[t._v(" Energetic software engineering student with 16+ months experience of developing robust code for a medical technology and an android development company."),s("br"),t._v(" My versatile skillset allows me to thrive in Java, Junit Testing, Vue.js, Python, SQL and HTML. "),s("br"),t._v(" I take pleasure in challenging myself to learn new frameworks and languages."),s("br")])],1)],1),s("v-flex",{attrs:{xs12:"",sm4:"","offset-sm1":""}},[s("v-card",{staticClass:"transparent",attrs:{elevation:0,flat:""}},[s("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[s("div",{staticClass:"headline"},[t._v(" Contact Information ")])]),s("v-list",{staticClass:"transparent"},[s("v-list-item",[s("v-list-item-action",[s("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v(" mdi-phone ")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("587-576-7136")])],1)],1),s("v-list-item",[s("v-list-item-action",[s("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v(" mdi-map-marker ")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Calgary, AB")])],1)],1),s("v-list-item",[s("v-list-item-action",[s("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v(" mdi-email ")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("rishabhpk@hotmail.com")])],1)],1)],1)],1)],1)],1)],1)],1)},i=[],n=(a("b0c0"),a("bc3a")),r={data:function(){return{searchString:" ",items:["Fun Degree","noPermission"],values:["foo"]}},methods:{toProgram:function(){var t=this;console.log(),n.get("http://localhost:8080/nonuser/programs/"+this.searchString,{}).then((function(e){console.log(e);var a=Object.assign({},e.data);console.log(e.data.id),t.$store.dispatch("gotoAndCarryNU",a),t.$router.push("/profileprogramNU/")})).catch((function(t){console.log(t)}))},toInstitution:function(){var t=this;console.log(),n.post("http://localhost:8080/nonuser/institutions/"+this.searchString,{}).then((function(e){console.log(e);var a=Object.assign({},e.data);console.log(e.data.name),t.$store.dispatch("gotoAndCarryNU",a),t.$router.push("/institutionProfileNU/")})).catch((function(t){console.log(t)}))}}},l=r,o=a("2877"),c=a("6544"),v=a.n(c),d=a("8336"),u=a("b0af"),m=a("99d9"),h=a("a523"),g=a("0e8f"),p=a("132d"),f=a("a722"),y=a("8860"),x=a("da13"),b=a("1800"),C=a("5d23"),w=a("8b9c"),_=Object(o["a"])(l,s,i,!1,null,null,null);e["default"]=_.exports;v()(_,{VBtn:d["a"],VCard:u["a"],VCardText:m["b"],VCardTitle:m["c"],VContainer:h["a"],VFlex:g["a"],VIcon:p["a"],VLayout:f["a"],VList:y["a"],VListItem:x["a"],VListItemAction:b["a"],VListItemContent:C["a"],VListItemTitle:C["b"],VParallax:w["a"]})}}]);
//# sourceMappingURL=chunk-e17ac5ec.a3a41e17.js.map