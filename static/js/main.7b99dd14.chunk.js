(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.2bad8a98.svg"},20:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),s=a(5),o=a(1),i=function(e){var t=e.image,a=e.name,n=e.id,l=e.info,c=e.glass;return r.a.createElement("article",{className:"col-sm-6 col-md-4 col-lg-3  mb-5"},r.a.createElement("div",{className:"img-container mb-3"},r.a.createElement("img",{src:t,alt:a,class:"w-100"})),r.a.createElement("div",{className:"cocktail-footer"},r.a.createElement("h4",null,a),r.a.createElement("h6",null,c),r.a.createElement("p",null,r.a.createElement("em",null,l)),r.a.createElement(s.b,{to:"/cocktail/".concat(n),className:"btn btn-secondary"}," See details")))},m=function(){return r.a.createElement("section",{className:"container",class:"d-flex justify-content-center"},r.a.createElement("div",{className:"row px-5"},r.a.createElement("div",{class:"loader-glass"}),r.a.createElement("div",{class:"item"})),r.a.createElement("h3",null," Loading..."))},u=a(9),d=a.n(u),p=a(11),E=a(8),h=r.a.createContext(),b=function(e){var t=e.children,a=Object(n.useState)(!0),l=Object(E.a)(a,2),c=l[0],s=l[1],o=Object(n.useState)("ma"),i=Object(E.a)(o,2),m=i[0],u=i[1],b=Object(n.useState)([]),g=Object(E.a)(b,2),f=g[0],v=g[1],k=Object(n.useCallback)(Object(p.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(m));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,(n=a.drinks)?(r=n.map((function(e){return{id:e.idDrink,name:e.strDrink,image:e.strDrinkThumb,info:e.strAlcoholic,glass:e.strGlass}})),v(r)):v([]),s(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0),s(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])}))),[m]);return Object(n.useEffect)((function(){k()}),[m,k]),r.a.createElement(h.Provider,{value:{loading:c,cocktails:f,setSearchTerm:u}},t)},g=function(){return Object(n.useContext)(h)},f=function(){var e=g(),t=e.cocktails;return e.loading?r.a.createElement(m,null):t.length<1?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row px-5"},r.a.createElement("h3",null,"No cocktails match your search criteria, try something else..."))):r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"row px-5"},t.map((function(e){return r.a.createElement(i,Object.assign({key:e.id},e))}))))},v=function(){var e=g().setSearchTerm,t=r.a.useRef("");r.a.useEffect((function(){t.current.focus()}),[]);return r.a.createElement("div",{class:"container my-5"},r.a.createElement("div",{class:"row bg-light px-5 py-3 shadow"},r.a.createElement("div",{class:"col-4"},r.a.createElement("strong",null,r.a.createElement("em",null,"Start typing the cocktail name "))),r.a.createElement("div",{class:"col-8"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("input",{type:"text",id:"name",class:"form-control",ref:t,onChange:function(){e(t.current.value)}})))))},k=function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row px-5 align-items-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,r.a.createElement("small",null,"Featured")),r.a.createElement("h4",null,"Black Lady Cocktail"),r.a.createElement("h6",null,"Coupe glass"),r.a.createElement("p",null," This striking cocktail gets its color from cr\xe8me de noir and a creamy boost from an egg white shaken into the mix. The subtle, sweet perfume of blackberry is a perfect complement to herby gin. Together, they taste like the height of sophistication"),r.a.createElement("p",null,r.a.createElement("em",null,"Alcoholic"))),r.a.createElement("div",{className:"col-1"}),r.a.createElement("div",{className:"col-md-5"},r.a.createElement("img",{src:"https://ik.imagekit.io/stcl/Drinks/black_cocktail_okXSP3nR0?ik-sdk-version=javascript-1.4.3&updatedAt=1662702948939",alt:"black colour cocktail",className:"w-100"}))))),r.a.createElement(v,null),r.a.createElement(f,null))},y=function(){return r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"row px-5"},r.a.createElement("h4",null,"About us"),r.a.createElement("p",null,"Cocktails lorem ipsum text placeholder below: offers a wide range of cocktails to make at home, from martinis and shorts to larger punches and pitchers for everyone to share. With step-by-step instructions and full-colour photography, each recipe is easy to follow and even easier to enjoy! ",r.a.createElement("br",null)," ",r.a.createElement("br",null),"Cocktails were introduced lorem ipsum text placeholder below - in the drawing rooms of Downton Abbey in the 1920s, when US prohibition inspired the insurgence and popularity of American-style bars and bartenders in Britain. This well-curated selection of recipes is organized by the rooms in the Abbey in which the drinks were served and spans everyday sips to party drinks plus hangover helpers and more. In addition to classic concoctions like a Mint Julep, Prince of Wales Punch, and Ginger Beer, this collection features character-specific variations such as Downton Heir, Turkish Attach\xe9, The Valet, and The Chauffeur. The recipes reflect drinks concocted and served upstairs and down, as well as libations from village fairs, cocktail parties, and restaurant menus typical of the time. Features 40+ color photographs, including drink images professionaly photographed.")))},w="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",x=function(){var e=Object(o.f)().id,t=r.a.useState(!1),a=Object(E.a)(t,2),n=a[0],l=a[1],c=r.a.useState(null),i=Object(E.a)(c,2),u=i[0],h=i[1];if(r.a.useEffect((function(){function t(){return(t=Object(p.a)(d.a.mark((function t(){var a,n,r,c,s,o,i,m,u,p,E,b,g,f;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(w).concat(e));case 3:return a=t.sent,t.next=6,a.json();case 6:(n=t.sent).drinks?(r=n.drinks[0],c=r.strDrink,s=r.strDrinkThumb,o=r.strAlcoholic,i=r.strCategory,m=r.strGlass,u=r.strInstructions,p=r.strIngredient1,E=r.strIngredient2,b=r.strIngredient3,g=r.strIngredient4,f=r.strIngredient5,h({name:c,image:s,info:o,category:i,glass:m,instructions:u,ingredients:[p,E,b,g,f]})):h(null),l(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),l(!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}l(!0),function(){t.apply(this,arguments)}()}),[e]),n)return r.a.createElement(m,null);if(!u)return r.a.createElement("h2",null," no cocktails to display, try another one");var b=u.name,g=u.image,f=u.info,v=u.category,k=u.glass,y=u.instructions,x=u.ingredients;return r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"row px-5"},r.a.createElement("h2",null,"Cocktail ",b),r.a.createElement("div",{className:"img-container mb-3"},r.a.createElement("img",{src:g,alt:b,class:"w-50"})),r.a.createElement("p",null,r.a.createElement("strong",null," Name : "),b),r.a.createElement("p",null,r.a.createElement("strong",null," Glass : "),k),r.a.createElement("p",null,r.a.createElement("strong",null," Category: "),v),r.a.createElement("p",null,r.a.createElement("strong",null," Alcoholic : "),f),r.a.createElement("p",null,r.a.createElement("strong",null," Ingredients : "),x.map((function(e,t){return e?r.a.createElement("p",{key:t},e):null}))),r.a.createElement("p",null,r.a.createElement("strong",null," Instructions : "),y),r.a.createElement(s.b,{to:"/",className:"btn btn-secondary w-50"}," back home ")))},N=function(){return r.a.createElement("section",{className:"error-page section"},r.a.createElement("div",{className:"error-container"},r.a.createElement("h1",null," Oops, it is an error"),r.a.createElement(s.b,{to:"/",className:"btn btn-primary"},"back home")))},j=a(19),O=a.n(j),S=function(){return r.a.createElement("nav",{class:"navbar navbar-expand-lg"},r.a.createElement("div",{class:"container"},r.a.createElement(s.b,{to:"/",class:"navbar-brand"},r.a.createElement("img",{src:O.a,alt:"the cocktail club est 1896",className:"logo"})),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("div",{class:"w-100 d-flex justify-content-end"},r.a.createElement("ul",{class:"navbar-nav mb-2 mb-lg-0"},r.a.createElement("li",{class:"nav-item"},r.a.createElement(s.b,{class:"nav-link active","aria-current":"page",to:"/"},"Home")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(s.b,{to:"/about",class:"nav-link"},"About")))))))};var C=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(S,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(k,null)),r.a.createElement(o.a,{exact:!0,path:"/about"},r.a.createElement(y,null)),r.a.createElement(o.a,{exact:!0,path:"/cocktail/:id"},r.a.createElement(x,null)),r.a.createElement(o.a,{exact:!0,path:"*"},r.a.createElement(N,null)))))};a(31),a(32);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null,r.a.createElement(C,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7b99dd14.chunk.js.map