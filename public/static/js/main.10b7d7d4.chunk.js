(this.webpackJsonpsaper=this.webpackJsonpsaper||[]).push([[0],{13:function(e,t,n){},27:function(e,t,n){e.exports=n(44)},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(9),c=n.n(o),i=(n(32),n(3)),l=(n(33),n(13),n(4)),u=(n(34),n(35),"#232124"),s="#323134",m={1:"#ffe082",2:"#ffb74d",3:"#c75b39",4:"#c41c00",5:"#b91400",6:"#ac0800",7:"#9f0000",8:"#870000"},f=function(e){var t=e.index,n=e.isMined,a=e.isClicked,o=e.handleClick,c=e.numberOfMinedAdjacentCells;return r.a.createElement("button",{disabled:a,className:"cell flex-center",style:{backgroundColor:a?s:u,color:n?"white":m[c]},onClick:function(){return o(t)}},!n&&a&&0!==c&&c,n&&a&&"X")},d=n(8),E={height:20,width:20,numberOfBombs:40,isFetching:!1},b={token:void 0,isTryingToLogin:!1,loginError:void 0,isTryingToRegister:!1,registerError:void 0},p=n(7),O=n(23),h=Object(d.c)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BOARD_HEIGHT":return Object(l.a)({},e,{height:t.payload.height});case"SET_BOARD_WIDTH":return Object(l.a)({},e,{width:t.payload.width});case"SET_NUMBER_OF_BOMBS":return Object(l.a)({},e,{numberOfBombs:t.payload.numberOfBombs});case"START_OF_REQUEST":return Object(l.a)({},e,{isFetching:!0});case"END_OF_REQUEST":return Object(l.a)({},e,{isFetching:!1});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGIN_START":return Object(l.a)({},e,{isTryingToLogin:!0});case"SET_LOGIN_SUCCESS":return Object(l.a)({},e,{isTryingToLogin:!1,token:t.payload.token});case"SET_LOGIN_ERROR":return Object(l.a)({},e,{isTryingToLogin:!1,loginError:t.payload.error});case"SET_REGISTER_START":return Object(l.a)({},e,{isTryingToRegister:!0});case"SET_REGISTER_SUCCESS":return Object(l.a)({},e,{isTryingToRegister:!1});case"SET_REGISTER_ERROR":return Object(l.a)({},e,{registerError:t.payload.error});default:return e}}}),g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,S=Object(d.e)(h,g(Object(d.a)(O.a))),v=p.c,R=S,T=n(46),j=function(e,t,n,a){e.forEach((function(e){var r=function(e,t,n){return{isCellFromFirstRow:e+1<=n,isCellFromLastRow:e+1>n*t-n,isCellFromFirstColumn:(e+1)%n===1,isCellFromLastColumn:(e+1)%n===0}}(e,t,n),o=r.isCellFromFirstRow,c=r.isCellFromFirstColumn,i=r.isCellFromLastColumn,l=r.isCellFromLastRow;a(e,o&&c?[e+1,e+n,e+n+1]:o&&i?[e-1,e+n,e+n-1]:l&&c?[e+1,e-n,e-n+1]:l&&i?[e-1,e-n,e-n-1]:o?[e-1,e+1,e+n,e+n+1,e+n-1]:l?[e-1,e+1,e-n,e-n-1,e-n+1]:c?[e+1,e-n,e-n+1,e+n,e+n+1]:i?[e-1,e-n,e-n-1,e+n,e+n-1]:[e-1,e+1,e-n,e-n-1,e-n+1,e+n,e+n-1,e+n+1])}))},C=function(e,t,n){var a=function(e,t){for(var n=[];n.length<e;){var a=Math.floor(Math.random()*t.length);n.includes(a)||n.push(a)}return n.forEach((function(e){t[e].isMined=!0})),{cells:t,indexesOfMinedCells:n}}(e,function(e){return Array.from({length:e}).map((function(e,t){return{isMined:!1,isClicked:!1,numberOfMinedAdjacentCells:0,indexesOfAdjacentCells:[],id:Object(T.a)()}}))}(t*n)),r=a.cells,o=a.indexesOfMinedCells;return j(o,t,n,(function(e,t){t.forEach((function(e){r[e].numberOfMinedAdjacentCells++}))})),j(r.map((function(e,t){return t})),t,n,(function(e,t){r[e].indexesOfAdjacentCells=t})),r};var y=function(e){var t=e.isGameReseted,n=e.setIsGameReseted,o=v((function(e){return e.board.width})),c=v((function(e){return e.board.height})),u=v((function(e){return e.board.numberOfBombs})),s=Object(a.useState)((function(){return C(u,c,o)})),m=Object(i.a)(s,2),d=m[0],E=m[1],b=Object(a.useState)(!1),p=Object(i.a)(b,2),O=(p[0],p[1]);Object(a.useEffect)((function(){t&&(E(C(u,c,o)),n(!1))}),[t]),Object(a.useEffect)((function(){E(C(u,c,o))}),[u,o,c]);var h={width:"".concat(40*o+2,"px"),height:"".concat(40*c+2,"px")},g=function(e){var t=d[e];if(t.isMined)return O(!0),void E((function(e){return e.map((function(e){return Object(l.a)({},e,{isClicked:!0})}))}));var n=d.map((function(e){return Object(l.a)({},e)}));n[e].isClicked=!0,0===t.numberOfMinedAdjacentCells&&function e(t,n){n.forEach((function(n){var a=t[n];a.isClicked||(a.isClicked=!0,0===a.numberOfMinedAdjacentCells&&e(t,a.indexesOfAdjacentCells))}))}(n,t.indexesOfAdjacentCells),E(n)};return r.a.createElement("div",{id:"container-board"},r.a.createElement("div",{id:"board",style:h},d.map((function(e,t){var n=e.isMined,a=e.isClicked,o=e.numberOfMinedAdjacentCells,c=e.id;return r.a.createElement(f,{key:c,index:t,isMined:n,isClicked:a,numberOfMinedAdjacentCells:o,handleClick:g})}))))},_=(n(40),n(24)),w=n(25),N=(n(41),function(e){var t=e.children,n=e.isOpened;if(Object(a.useEffect)((function(){var e=document.getElementById("root");return function(){if(!n||!e)return null;e.style.filter="blur(3px)"}(),function(){!function(){if(!e)return null;e.style.filter="none"}()}}),[n]),!n)return null;var o=document.getElementById("modal");return o?c.a.createPortal(r.a.createElement("div",{className:"container-modal flex-center"},t),o):null}),I=function(e){return{type:"SET_BOARD_WIDTH",payload:{width:e}}},k=function(e){return{type:"SET_BOARD_HEIGHT",payload:{height:e}}},x=function(e){return{type:"SET_NUMBER_OF_BOMBS",payload:{numberOfBombs:e}}},M=(n(42),function(e){var t=e.closeModal,n=Object(p.b)(),o=(v((function(e){return e.board.isFetching})),v((function(e){return e.board.width}))),c=v((function(e){return e.board.height})),l=v((function(e){return e.board.numberOfBombs})),u=Object(a.useState)(o),s=Object(i.a)(u,2),m=s[0],f=s[1],d=Object(a.useState)(c),E=Object(i.a)(d,2),b=E[0],O=E[1],h=Object(a.useState)(l),g=Object(i.a)(h,2),S=g[0],R=g[1];return r.a.createElement("div",{className:"container-settings pd-20"},r.a.createElement("h1",{className:"settings-title"},"Saving this options will reset the game"),r.a.createElement("div",{className:"flex-space-between"},r.a.createElement("label",{htmlFor:"input-board-width"},"WIDTH",r.a.createElement("input",{id:"input-board-width",type:"number",step:1,min:4,max:20,value:m,onChange:function(e){return f(parseInt(e.target.value))}})),r.a.createElement("label",{htmlFor:"input-board-height"},"HEIGTH",r.a.createElement("input",{id:"input-board-height",type:"number",step:1,min:4,max:20,value:b,onChange:function(e){return O(parseInt(e.target.value))}})),r.a.createElement("label",{htmlFor:"input-number-of-bombs"},"NUMBER OF BOMBS",r.a.createElement("input",{id:"input-number-of-bombs",type:"number",step:1,min:4,max:20,value:S,onChange:function(e){return R(parseInt(e.target.value))}}))),r.a.createElement("div",{className:"flex-space-between mg-top-30"},r.a.createElement("button",{className:"btn btn--neutral",onClick:function(){t(),console.log("FIRED")}},"Cancel"),r.a.createElement("button",{className:"btn",onClick:function(e){var a,r,o;e.preventDefault(),t(),n((a=m,r=b,o=S,function(e,t){e({type:"START_OF_REQUEST"});var n=t();fetch("/user/settings",{method:"PUT",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(n.user.token)},body:JSON.stringify({width:a,height:r,numberOfBombs:o})}).then((function(e){return e.json()})).then((function(t){console.log("data: ",t);var n=t.boardSettings,a=n.width,r=n.height,o=n.numberOfBombs;e(I(a)),e(k(r)),e(x(o))})).catch((function(e){return console.log("ERROR: ",e)})).finally((function(){return e({type:"END_OF_REQUEST"})}))})),console.log("CLOSE FUNC: ",t)}},"Save")))}),B=function(e){var t=e.setIsGameReseted,n=Object(a.useState)(!1),o=Object(i.a)(n,2),c=o[0],l=o[1];return Object(a.useEffect)((function(){console.log("IS MODAL OPENED: ",c)}),[c]),r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"container-icon flex-center flex-wrap pd-10",onClick:function(){return t(!0)}},r.a.createElement("button",null,r.a.createElement(_.a,null)),r.a.createElement("span",null,"Reset")),r.a.createElement("div",{className:"container-icon flex-center flex-wrap pd-10",onClick:function(){return l(!0)}},r.a.createElement("button",null,r.a.createElement(w.a,null)),r.a.createElement("span",null,"Ustawienia")),r.a.createElement(N,{isOpened:c},r.a.createElement(M,{closeModal:function(){return l(!1)}})))};var F=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",{className:"container-full-screen container-main"},r.a.createElement(y,{isGameReseted:n,setIsGameReseted:o}),r.a.createElement(B,{setIsGameReseted:o}))},A=(0,n(6).createBrowserHistory)(),G=function(e){return{type:"SET_LOGIN_ERROR",payload:{error:e}}},L=function(e){return{type:"SET_REGISTER_ERROR",payload:{error:e}}},D=n(11),U=function(){var e=Object(p.b)(),t=v((function(e){return e.user.loginError})),n=Object(a.useState)(""),o=Object(i.a)(n,2),c=o[0],l=o[1],u=Object(a.useState)(""),s=Object(i.a)(u,2),m=s[0],f=s[1];return r.a.createElement("div",{className:"container-full-screen dark-bg flex-center pd-10"},r.a.createElement("form",{className:"form pd-10",onSubmit:function(t){t.preventDefault(),e(function(e,t){return function(n){n({type:"SET_LOGIN_START"}),fetch("/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){if(e.error)return n(G(e.error));console.log("LOGIN DATA: ",e);var t=e.token,a=e.boardSettings,r=a.width,o=a.height,c=a.numberOfBombs;localStorage.setItem("minesweeper_token",t),n(function(e){return{type:"SET_LOGIN_SUCCESS",payload:{token:e}}}(t)),n(I(r)),n(k(o)),n(x(c)),A.push("/game")})).catch((function(e){console.log("ERROR: ",e),n(G(e))}))}}(c,m))}},r.a.createElement("fieldset",null,r.a.createElement("legend",null," Minesweeper"),r.a.createElement("label",null,"Email",r.a.createElement("input",{type:"email",name:"email",value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement("label",null,"Password",r.a.createElement("input",{type:"password",name:"password",value:m,onChange:function(e){return f(e.target.value)}})),t&&r.a.createElement("span",{className:"form-error"},t),r.a.createElement("button",{className:"size-auto flex-center"},"Login")),r.a.createElement(D.a,{to:"/register",className:"form-link"},"Register here")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(2),P=n(26),J=function(e){var t=e.component,n=Object(P.a)(e,["component"]);return r.a.createElement(H.b,Object.assign({},n,{render:function(e){return localStorage.getItem("minesweeper_token")?r.a.createElement(t,e):r.a.createElement(H.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},W=function(){var e=Object(p.b)(),t=v((function(e){return e.user.registerError})),n=Object(a.useState)(""),o=Object(i.a)(n,2),c=o[0],l=o[1],u=Object(a.useState)(""),s=Object(i.a)(u,2),m=s[0],f=s[1],d=Object(a.useState)(""),E=Object(i.a)(d,2),b=E[0],O=E[1];return r.a.createElement("div",{className:"container-full-screen dark-bg flex-center pd-10"},r.a.createElement("form",{className:"form pd-10",onSubmit:function(t){t.preventDefault(),e(function(e,t,n){return function(a){a({type:"SET_REGISTER_START"}),fetch("/user/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t,passwordConfirmation:n})}).then((function(e){return e.json()})).then((function(e){if(e.error)return console.log("ERROR: ",e.error),void a(L(e.error));console.log("REGISTER DATA: ",e),a({type:"SET_REGISTER_SUCCESS"}),A.push("/")})).catch((function(e){console.log("ERROR: ",e),a(L(e))}))}}(c,m,b))}},r.a.createElement("fieldset",null,r.a.createElement("legend",null," Minesweeper"),r.a.createElement("label",null,"Email",r.a.createElement("input",{value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement("label",null,"Password",r.a.createElement("input",{value:m,onChange:function(e){return f(e.target.value)},type:"password"})),r.a.createElement("label",null,"Confirm password",r.a.createElement("input",{value:b,onChange:function(e){return O(e.target.value)},type:"password"})),t&&r.a.createElement("span",{className:"form-error"},t),r.a.createElement("button",{className:"size-auto flex-center"},"Register")),r.a.createElement(D.a,{to:"/",className:"form-link"},"Login here")))},z=n(0);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:R},r.a.createElement(z.b.Provider,{value:{color:"blue",className:"global-class-name",size:"2em"}},r.a.createElement(H.c,{history:A},r.a.createElement(H.d,null,r.a.createElement(H.b,{path:"/",exact:!0},r.a.createElement(U,null)),r.a.createElement(H.b,{path:"/register",exact:!0},r.a.createElement(W,null)),r.a.createElement(J,{path:"/game",exact:!0},r.a.createElement(F,null))))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.10b7d7d4.chunk.js.map