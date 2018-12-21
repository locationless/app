(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{218:function(e,t,a){e.exports=a(359)},226:function(e,t,a){},329:function(e,t,a){},355:function(e,t,a){},359:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),i=a(25),s=a(367),o=(a(226),a(228),a(7)),u=a(111),m=a(112),d=a(134),p=a(113),f=a(137),E=a(79),h=a(368),g=a(363),v=a(370),b=a(28),k=a.n(b),O=a(12),y="FETCH_TRIPS",_="FETCH_TRIP",N="SET_TRIPS",j="CREATE_TRIP",F="UPDATE_TRIP",S="DELETE_TRIP",T="REMOVE_TRIP",w="FETCH_CITIES",D="SET_CITIES",x="FETCH_FRIENDS",C="CREATE_FRIEND_REQ",A="ACCEPT_FRIEND_REQ",R="FETCH_USER",U="SET_USERS",Y="LOGOUT",I="API",M="FETCH_EXPLORE_SUGGESTIONS",P="SET_EXPLORE_SUGGESTIONS",L=a(21),q=a.n(L),G="https://api.locationless.club";function B(e){return{type:P,payload:e}}function H(){return K({url:"".concat(G,"/u/friends/"),onSuccess:V,onFailure:function(){return console.log("Error occured loading friends")},label:x})}function W(e){return K({url:"".concat(G,"/u/").concat(e.id,"/friends/"),method:"PUT",onSuccess:function(){return V({data:Object(o.a)({},e,{is_friend:!0,is_pending_friend:!1})})},nextAction:Q,onFailure:function(){return console.log("Error occured accepting friendship request")},data:e,label:A})}function J(e){return K({url:"".concat(G,"/u/").concat(e.id,"/friends/"),method:"POST",onSuccess:function(){return V({data:Object(o.a)({},e,{have_requested_friend:!0})})},onFailure:function(){return console.log("Error occured requesting friendship")},data:e,label:C})}function V(e){return{type:U,payload:e}}function X(){return K({url:"".concat(G,"/cities/"),onSuccess:z,onFailure:function(){return console.log("Error occured loading cities")},label:w})}function z(e){return{type:D,payload:e}}function Q(e){var t=e&&e.end_date_after?"end_date_after=".concat(q()(e.end_date_after,"YYYY-MM-DD")):"";return K({url:"".concat(G,"/trips/?").concat(t),onSuccess:$,onFailure:function(){return console.log("Error occured loading trips")},label:y})}function $(e){return{type:N,payload:e}}function K(e){var t=e.url,a=void 0===t?"":t,n=e.method,r=void 0===n?"GET":n,c=e.data,l=void 0===c?null:c,i=e.accessToken,s=void 0===i?null:i,o=e.onSuccess,u=void 0===o?function(){}:o,m=e.onFailure,d=void 0===m?function(){}:m,p=e.nextAction,f=void 0===p?function(){}:p,E=e.label,h=void 0===E?"":E,g=e.headersOverride;return{type:I,payload:{url:a,method:r,data:l,accessToken:s,onSuccess:u,onFailure:d,label:h,headersOverride:void 0===g?null:g,nextAction:f}}}var Z=a(29),ee=a.n(Z),te=a(114),ae=a.n(te),ne=a(96),re=a.n(ne),ce=a(34),le=a.n(ce),ie=a(56),se=a.n(ie);function oe(e,t){var a=e.reduce(function(e,a){return ae()(le()(e,t-1),a.start_date)?e:new Date(a.end_date)},Date.now());return[a,le()(a,t)]}var ue=function(e){return ee()(e.end_date,new Date)>=0},me=function(e){return ee()(e.end_date,new Date)<0},de=a(216),pe=a(43),fe=a(136),Ee=a(69),he=a.n(Ee),ge=(a(319),function(e){var t=e.children;return r.a.createElement(de.a,{style:{width:"100%",flexGrow:!0},width:e.width,height:300,rowHeight:35,rowCount:t.length||0,rowRenderer:function(e){var a=e.key,n=e.index,c=(e.isScrolling,e.isVisible,e.style);return r.a.createElement("div",{key:a,style:c},t[n])}})}),ve=function(e){return e.map(function(e){return{label:r.a.createElement("div",null,r.a.createElement(pe.a,{code:e.country_code,svg:!0})," ",e.name),value:"".concat(e.name,":::").concat(e.id)}})};var be=function(e){var t=e.cities,a=e.trips,c=e.disabledDates,l=e.onCreateTrip,i=Object(n.useState)(oe(a,4)),s=Object(O.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(null),p=Object(O.a)(d,2),f=p[0],E=p[1];Object(n.useEffect)(function(){m(oe(a,4))},[a.map(function(e){return e.id}).join("-")]);var h=Object.keys(t.all).map(function(e){return t.all[e]});return h.sort(function(e,t){return t.population-e.population}),r.a.createElement("form",{className:"uk-tile new-trip-form uk-padding-small uk-flex uk-flex-around uk-flex-middle"},r.a.createElement("div",null,r.a.createElement(fe.a,{styles:{container:function(){return{width:250}},menu:function(e){return Object(o.a)({},e,{top:null})}},components:{MenuList:function(e){return r.a.createElement(ge,Object.assign({},e,{width:window.innerWidth}))}},placeholder:"New Trip Location",className:"country-picker",isSearchAble:!0,isLoading:t.isFetching,value:f,onChange:E,options:ve(h)})),r.a.createElement(he.a,{className:"uk-input uk-width-1-3@m",options:{mode:"range",disable:c,dateFormat:"Y-m-d"},value:u,onChange:m}),r.a.createElement("button",{className:"uk-button uk-button-secondary",onClick:function(e){e.preventDefault(),l({city:parseInt(f.value.split(":::")[1],10),start_date:q()(u[0],"YYYY-MM-DD"),end_date:q()(u[1],"YYYY-MM-DD")}),E(null)},disabled:null===f||2!==u.length},r.a.createElement("span",{className:"icono-plus"})))},ke=a(135),Oe=a(361),ye=function(e){var t=e.id,a=e.first_name,n=e.last_name,c=e.username,l=e.photo_url,i=e.photoOnly,s=l||"/blank-profile-picture.png",o=c||"".concat(a," ").concat(n);return i?r.a.createElement("div",{className:"uk-border-circle friend-chip"},r.a.createElement("img",{className:"uk-border-circle avatar-preview",alt:"avatar",src:s})):r.a.createElement(Oe.a,{className:"uk-border-circle friend-chip",to:"/users/".concat(t)},r.a.createElement("img",{className:"uk-border-circle avatar-preview",alt:"avatar",src:s}),r.a.createElement("div",{className:"uk-badge tooltip"},o))},_e=a(162),Ne=a.n(_e),je=a(163),Fe=a.n(je),Se=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],Te=function(e){var t=e.start_date,a=e.end_date,n=e.hideDaysCount,c=e.className;return r.a.createElement("div",{className:"uk-flex date-range ".concat(c||"")},r.a.createElement("div",null,r.a.createElement("b",null,Fe()(t)," ",r.a.createElement("br",null)," ",Se[Ne()(t)])),r.a.createElement("div",null,r.a.createElement("b",null,Fe()(a)," ",r.a.createElement("br",null)," ",Se[Ne()(a)])),!n&&r.a.createElement("p",{style:{width:92,height:42,fontSize:16,textAlign:"center",margin:2,marginTop:10}},ee()(a,t)," Day Trip"))};var we=function(e){var t=e.allFriends,a=e.numDisplayed;return t.length>a?r.a.createElement("div",{className:"uk-border-circle avatar-preview uk-background-muted"},r.a.createElement("p",{className:"uk-border-circle uk-dark"},"+",t.length-a)):null},De=Object(v.a)(function(e){var t=e.onUpdate,a=e.onDelete,c=e.disabledDates,l=e.viewOnly,i=Object(ke.a)(e,["onUpdate","onDelete","disabledDates","viewOnly"]),s=i.id,o=i.city,u=i.start_date,m=i.end_date,d=i.matches,p=Object(n.useState)(!1),f=Object(O.a)(p,2),E=f[0],h=f[1],g=Object(n.useState)(!1),v=Object(O.a)(g,2),b=v[0],k=v[1],y=Object(n.useState)([new Date(u),new Date(m)]),_=Object(O.a)(y,2),N=_[0],j=_[1],F=(c||[]).filter(function(e){var t=e.from,a=e.to;return!(q()(le()(u,1),"YYYY-MM-DD")===q()(t,"YYYY-MM-DD")&&q()(se()(m,1),"YYYY-MM-DD")===q()(a,"YYYY-MM-DD"))});return b?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"uk-tile uk-padding-small uk-flex uk-flex-between uk-background-muted"},r.a.createElement("div",null,r.a.createElement("h6",null,r.a.createElement(pe.a,{code:o.country_code,svg:!0})," | ",o.name)),r.a.createElement("p",null,"Confirm you would like to delete this trip"),r.a.createElement("span",{className:"uk-flex"},r.a.createElement("hr",{className:"uk-divider-vertical uk-margin-right uk-margin-left"}),r.a.createElement("span",{className:"uk-flex uk-flex-column"},r.a.createElement("span",{className:"icon-sm"},r.a.createElement("span",{className:"icono-check",onClick:function(){return a({id:s})}})),r.a.createElement("span",{className:"icon-sm"},r.a.createElement("span",{className:"icono-cross",onClick:function(e){return k(!1)}}))))),r.a.createElement("hr",null)):E?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"uk-tile uk-padding-small uk-flex uk-flex-between uk-background-muted"},r.a.createElement("div",null,r.a.createElement("h6",null,r.a.createElement(pe.a,{code:o.country_code,svg:!0})," | ",o.name)),r.a.createElement(he.a,{className:"uk-input uk-width-1-3",options:{mode:"range",disable:F},value:N,onChange:j}),r.a.createElement("span",{className:"uk-flex"},r.a.createElement("hr",{className:"uk-divider-vertical uk-margin-right uk-margin-left"}),r.a.createElement("span",{className:"uk-flex uk-flex-column"},r.a.createElement("span",{className:"icon-sm"},r.a.createElement("span",{className:"icono-check",onClick:function(){return h(!1),t({id:s,city:o.id,start_date:q()(N[0],"YYYY-MM-DD"),end_date:q()(N[1],"YYYY-MM-DD")})}})),r.a.createElement("span",{className:"icon-sm"},r.a.createElement("span",{className:"icono-cross",onClick:function(e){return h(!E)}}))))),r.a.createElement("hr",null)):(l?r.a.div:Oe.a,r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"uk-tile uk-padding-small uk-flex uk-flex-between uk-link-muted"},r.a.createElement("mainComponent",{to:"/trips/".concat(s)},r.a.createElement("h6",null,r.a.createElement(pe.a,{code:o.country_code,svg:!0})," | ",o.name),r.a.createElement(Te,{start_date:u,end_date:m})),r.a.createElement("span",{className:"uk-flex"},r.a.createElement("span",{className:"uk-flex"},d.slice(0,3).map(function(e){return r.a.createElement(ye,Object.assign({key:e.id},e))}),r.a.createElement(we,{allFriends:d,numDisplayed:3})),!l&&r.a.createElement("span",{className:"uk-flex"},r.a.createElement("hr",{className:"uk-divider-vertical uk-margin-right uk-margin-left"}),r.a.createElement("span",{className:"uk-flex uk-flex-column"},r.a.createElement("span",{className:"icon-sm"},r.a.createElement("span",{className:"icono-gear",onClick:function(e){e.preventDefault(),h(!E)}})),r.a.createElement("span",{className:"icon-sm"},r.a.createElement("span",{className:"icono-trash",onClick:function(e){e.preventDefault(),k(!0)}})))))),r.a.createElement("hr",null)))}),xe=(a(329),function(){return r.a.createElement("div",{className:"spinner-container"},r.a.createElement("div",{className:"lds-ripple"},r.a.createElement("div",null),r.a.createElement("div",null)))});function Ce(e){var t=e.isFetching,a=e.trips,c=e.disabledDates,l=e.updateTrip,i=e.deleteTrip;if(t)return r.a.createElement(xe,null);if(0===a.length)return r.a.createElement("p",null,"You have no upcoming trips. Hope you enjoy your rest.");var s=a.filter(ue),o=a.filter(me);return r.a.createElement(n.Fragment,null,o.length>0&&r.a.createElement("h4",null,"PAST TRIPS"),o.map(function(e){return r.a.createElement(De,Object.assign({key:e.id,onUpdate:l,onDelete:i,disabledDates:c},e))}),s.length>0&&r.a.createElement("h4",null,"UPCOMING TRIPS"),s.map(function(e){return r.a.createElement(De,Object.assign({key:e.id,onUpdate:l,onDelete:i,disabledDates:c},e))}))}var Ae=Object(i.b)(function(e){return{cities:e.cities,trips:e.trips,users:e.users}},{fetchTrips:Q,fetchCities:X,fetchFriends:H,createTrip:function(e){return K({url:"".concat(G,"/trips/"),method:"POST",onSuccess:$,onFailure:function(){return console.log("Error occured creating trip")},data:e,label:j})},updateTrip:function(e){return K({url:"".concat(G,"/trips/").concat(e.id),method:"PUT",onSuccess:$,onFailure:function(){return console.log("Error occured updating trip")},data:e,label:F})},deleteTrip:function(e){return K({url:"".concat(G,"/trips/").concat(e.id),method:"DELETE",onFailure:function(){return console.log("Error occured deleting trip")},onSuccess:function(){return function(e){return{type:T,payload:e}}(e)},label:S})}})(function(e){var t=e.cities,a=e.trips,c=e.users,l=Object(n.useState)(!1),i=Object(O.a)(l,2),s=i[0],u=i[1];Object(n.useEffect)(function(){t.isFetching||t.hasFetched||e.fetchCities(),a.isFetching||a.hasFetched||e.fetchTrips()},[]);var m=a.ids.map(function(e){var n=a.all[e];return Object(o.a)({},n,{city:t.all[n.city],matches:n.matches.map(function(e){var t=e.split("::"),a=Object(O.a)(t,3),n=a[0],r=a[1],l=a[2];return Object(o.a)({},c.all[n],{start_date:r,end_date:l})})})}).filter(function(e){return s||ae()(new Date,e.end_date)});m.sort(function(e,t){return ee()(e.start_date,t.start_date)});var d=function(e){return e.map(function(e){return{from:le()(e.start_date,1),to:se()(e.end_date,1)}})}(m);return r.a.createElement(n.Fragment,null,r.a.createElement("h4",null,"ADD NEW TRIP"),r.a.createElement(be,{cities:t,trips:m,isLoadingCities:t.isFetching,onCreateTrip:e.createTrip,disabledDates:d}),r.a.createElement(Ce,{isFetching:a.isFetching,trips:m,updateTrip:e.updateTrip,deleteTrip:e.deleteTrip,disabledDates:d}),r.a.createElement("button",{className:"uk-button uk-button-secondary",onClick:function(){s||e.fetchTrips({end_date_after:new Date("2018-01-01")}),u(!s)}},s?"Hide Past Trips":"Show Past Trips"))}),Re=a(210),Ue=a.n(Re),Ye=function(e){var t=e.matches,a=e.start_date,c=e.end_date;return 0===t.length?r.a.createElement("p",null,"None of your friends trips are currently overlapping with this one. Maybe you need to add some people you know to improve your chances?"):r.a.createElement(n.Fragment,null,r.a.createElement("dt",null,"Friends with overlapping dates"),r.a.createElement("dd",null,r.a.createElement("span",{className:"uk-padding"},t.map(function(e){return r.a.createElement(Ie,Object.assign({key:e.id},e,{from:a,to:c}))}))))},Ie=function(e){var t=e.id,a=e.first_name,n=e.last_name,c=e.username,l=e.photo_url,i=e.start_date,s=e.end_date,o=e.from,u=e.to;return r.a.createElement("div",{className:"overlap-graph"},r.a.createElement("div",{className:"uk-flex uk-flex-middle"},r.a.createElement(ye,{id:t,username:c,first_name:a,last_name:n,photo_url:l,photoOnly:!0}),r.a.createElement(Oe.a,{to:"/users/".concat(t),className:"chip-label uk-link-muted"},"@",c)),r.a.createElement(Me,{start_date:i,end_date:s,to:u,from:o}))},Me=function(e){e.id;var t=e.start_date,a=e.end_date,n=e.from,r=e.to,c=ee()(r,n),l=ee()(t,n),i=Ue()(n,r,t,a);"".concat(Math.floor(80*i/c),"%"),"".concat(Math.max(Math.floor(80*l/c)-5,0),"%");return null},Pe=function(e){var t=e.city,a=e.start_date,n=e.end_date,c=e.matches;e.isActive;return r.a.createElement("dl",{className:"uk-description-list"},r.a.createElement("dt",null,"Location"),r.a.createElement("dd",{className:"uk-padding-small"},r.a.createElement("span",{className:"uk-padding-small"},t.name),r.a.createElement(pe.a,{code:t.country_code,svg:!0})),r.a.createElement("dt",null,"Duration"),r.a.createElement("dd",{className:"uk-padding-small"},r.a.createElement("span",{className:"uk-padding"},"You will be in ",t.name," for ",ee()(n,a)," ","Days"),r.a.createElement(Me,{start_date:a,end_date:n,to:n,from:a})),r.a.createElement(Ye,{matches:c,start_date:a,end_date:n}))},Le=function(e){var t=e.isFetching,a=e.trip;return t||!a?r.a.createElement(xe,null):r.a.createElement(Pe,a)},qe=Object(i.b)(function(e){return{trips:e.trips,users:e.users,cities:e.cities.all}},{fetchTrip:function(e){return K({url:"".concat(G,"/trips/").concat(e),onSuccess:$,onFailure:function(){return console.log("Error occured loading trips")},label:_})}})(function(e){var t=e.match,a=e.trips,c=e.cities,l=e.users,i=e.fetchTrip,s=parseInt(t.params.id,10),u=a.all[s];return u&&(u=Object(o.a)({},u,{city:c[u.city],matches:u.matches.map(function(e){var t=e.split("::"),a=Object(O.a)(t,3),n=a[0],r=a[1],c=a[2];return Object(o.a)({},l.all[n],{start_date:r,end_date:c})})})),Object(n.useEffect)(function(){a.isFetching||u||i(s)},[]),r.a.createElement(n.Fragment,null,r.a.createElement("h4",null,"TRIP SUMMARY"),r.a.createElement(Le,{isFetching:a.isFetching,trip:u}))}),Ge=function(e){var t=e.user,a=e.onRequest,n=e.onAccept;return t&&t.is_you?r.a.createElement("button",{className:"uk-button uk-flex",disabled:!0},r.a.createElement("div",{className:"icon-sm"},r.a.createElement("span",{className:"icono-smile"})),r.a.createElement("div",null,"You")):t&&t.is_friend?r.a.createElement("button",{className:"uk-button uk-flex",disabled:!0},r.a.createElement("div",{className:"icon-sm"},r.a.createElement("span",{className:"icono-check"})),r.a.createElement("div",null,"Friends")):t&&t.is_pending_friend?r.a.createElement("button",{onClick:n,className:"uk-button uk-flex"},r.a.createElement("div",null,"Accept")):t&&t.have_requested_friend?r.a.createElement("button",{className:"uk-button uk-flex",disabled:!0},r.a.createElement("div",{className:"icon-sm"},r.a.createElement("span",{className:"icono-clock"})),r.a.createElement("div",null,"Waiting")):r.a.createElement("button",{className:"uk-button uk-flex",onClick:a},r.a.createElement("div",{className:"icon-sm"},r.a.createElement("span",{className:"icono-plus"})),r.a.createElement("div",null,"Request"))};var Be=Object(i.b)(function(e){return{users:e.users}},{})(function(e){var t=e.users,a=e.onRequestFriend,c=e.onAcceptFriend,l=(e.fetchFriends,Object(n.useState)([])),i=Object(O.a)(l,2),s=i[0],o=i[1],u=Object(n.useState)(""),m=Object(O.a)(u,2),d=m[0],p=m[1];return Object(n.useEffect)(function(){var e=k.a.CancelToken.source();return d?k.a.get("".concat(G,"/u/search/?q=").concat(d),{cancelToken:e.token,withCredentials:!0}).then(function(e){var t=e.data;return o(t.data)}).catch(function(e){e&&"unmount"===e.message||console.log(e)}):o([]),function(){return e.cancel("unmount")}},[d]),r.a.createElement("div",{className:"uk-padding-small"},r.a.createElement("input",{className:"uk-input",placeholder:"Search for Telegram Username / Full Name",value:d,onChange:function(e){return p(e.target.value)}}),r.a.createElement("hr",null),r.a.createElement("dl",{className:"uk-description-list"},s.map(function(e){var l=t.all[e.id];return l&&l.is_you?null:r.a.createElement(n.Fragment,{key:e.id},r.a.createElement("dt",null,e.username),r.a.createElement("dd",{className:"uk-padding-small uk-flex uk-flex-between"},r.a.createElement("span",{className:"uk-flex"},r.a.createElement(ye,Object.assign({},e,{photoOnly:!l||!l.is_friend})),r.a.createElement("p",null,e.first_name," ",e.last_name)),r.a.createElement("span",{className:"uk-flex"},r.a.createElement("hr",{style:{height:30},className:"uk-divider-vertical uk-margin-right uk-margin-left"}),r.a.createElement(Ge,{user:l,onAccept:function(){return c(e)},onRequest:function(){return a(e)}}))))})))}),He=function(e){var t=e.isFetching,a=e.users,c=e.activeUser,l=e.acceptFriendRequest,i=e.requestFriendship;if(t)return r.a.createElement(xe,null);var s=Object.keys(a.all).filter(function(e){return parseInt(e,10)!==c}).map(function(e){return a.all[e]}),o=s.filter(function(e){return e.is_friend}),u=o.length>0,m=s.filter(function(e){return e.is_pending_friend}),d=m.length>0;return r.a.createElement(n.Fragment,null,u&&r.a.createElement("h4",null,"FRIENDS"),o.map(function(e){return r.a.createElement(ye,Object.assign({key:e.id},e))}),d&&r.a.createElement("h4",null,"PENDING REQUESTS"),m.map(function(e){return r.a.createElement(n.Fragment,{key:e.id},r.a.createElement(ye,Object.assign({},e,{onAccept:function(){return l(e)}})),r.a.createElement(Ge,{user:e,onAccept:function(){return l(e)}}))}),r.a.createElement("h4",null,"FIND FRIENDS"),r.a.createElement(Be,{users:a,onRequestFriend:i,onAcceptFriend:l}))},We=Object(i.b)(function(e){return{users:e.users,activeUser:e.activeUser}},{fetchFriends:H,requestFriendship:J,acceptFriendRequest:W})(function(e){var t=e.users,a=e.fetchFriends,c=e.requestFriendship,l=e.acceptFriendRequest,i=e.activeUser;return Object(n.useEffect)(function(){t.isFetching||a()},[]),r.a.createElement(n.Fragment,null,r.a.createElement(He,{isFetching:t.isFetching&&0===t.ids.length,users:t,activeUser:i,acceptFriendRequest:l,requestFriendship:c}))}),Je=a(364),Ve=a(369),Xe=a(365),ze=a(362),Qe=a(371),$e=a(19),Ke=Object($e.divIcon)({html:'<span class="icono-caretDown"/>',iconSize:[25,25],iconAnchor:[17,24],popupAnchor:[-3,-26]}),Ze=function(e){return 0===e.length?0:ee()(e[e.length-1].end_date,e[0].start_date)},et=function(e,t){var a=Ze(t),n=ee()(e,t[0].start_date);return Math.round(n/a*100)},tt=function(e,t){var a=Ze(t),n=Math.round(a*(e/100));return le()(t[0].start_date,n)},at=function(e){var t=e.city;return[t.latitude,t.longitude]},nt=function(e){return[[Math.min.apply(null,e.map(function(e){return e[0]}))-2,Math.min.apply(null,e.map(function(e){return e[1]}))-2],[Math.max.apply(null,e.map(function(e){return e[0]}))+2,Math.max.apply(null,e.map(function(e){return e[1]}))+2]]},rt=function(e,t){return function(a){var n=a.start_date,r=a.end_date;return re()(n,se()(e,t),le()(e,t))||re()(r,se()(e,t),le()(e,t))}},ct=function(e){var t=e.userId,a=Object(n.useState)(null),c=Object(O.a)(a,2),l=c[0],i=c[1],s=Object(n.useState)(null),o=Object(O.a)(s,2),u=o[0],m=o[1],d=Object(n.useState)(new Date),p=Object(O.a)(d,2),f=p[0],E=p[1];if(Object(n.useEffect)(function(){var e;(e=t)&&(i(null),k()("".concat(G,"/u/").concat(e,"/locations/"),{withCredentials:!0}).then(function(e){200===e.status?(i(e.data.data),E(tt(50,e.data.data))):404===e.status&&i([])}))},[t]),null===l)return r.a.createElement(xe,null);var h=Math.floor(Ze(l)/4);l.sort(function(e,t){return ee()(e.start_date,t.start_date)});var g=l.filter(rt(f,h)),v=g.filter(ue),b=g.filter(me),y=g.length>1?g.map(at):l.map(at);return r.a.createElement(n.Fragment,null,r.a.createElement(Je.a,{bounds:nt(y),style:{height:300}},r.a.createElement(Ve.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a>'}),r.a.createElement(Xe.a,{positions:b.map(at),color:"black"}),r.a.createElement(Xe.a,{positions:v.map(at),color:"#bf4e4e"}),g.map(function(e){var t=e.id,a=e.city;return e.start_date,e.end_date,r.a.createElement(ze.a,{key:t,position:[a.latitude,a.longitude],icon:Ke},r.a.createElement(Qe.a,{onOpen:function(){return m(t)},onClose:function(){return m(null)},className:"uk-hidden"}))})),r.a.createElement("input",{className:"uk-range",type:"range",onChange:function(e){return E(tt(e.target.value,l))},value:et(f,l)}),r.a.createElement("label",{style:{margin:"auto"}},r.a.createElement(Te,{className:"uk-flex-around",hideDaysCount:!0,start_date:se()(f,h),end_date:le()(f,h)})),r.a.createElement("hr",null),!u&&r.a.createElement("p",null,"No trip selected"),u&&r.a.createElement(De,Object.assign({viewOnly:!0},l.find(function(e){return e.id===u}))))},lt=function(e){var t=e.username;return t?r.a.createElement("a",{className:"uk-button telegram-link",href:"https://t.me/".concat(t),target:"_blank",rel:"no-opener"},r.a.createElement("img",{src:"/telegram.svg",alt:"telegram-icon"}),r.a.createElement("span",null,"Send Message")):null},it=function(e){var t=e.isFetching,a=e.user,n=(e.activeUser,e.onRequest),c=e.onAccept;return t||!a?r.a.createElement(xe,null):r.a.createElement("div",{className:"centered-hero"},r.a.createElement("div",{className:"uk-flex uk-flex-left profile-details"},r.a.createElement("div",{className:"uk-flex uk-flex-left"},r.a.createElement("img",{className:"avatar-big uk-border-circle",alt:"avatar",src:a.photo_url||"/blank-profile-picture.png"}),r.a.createElement("div",{className:"uk-flex uk-flex-column uk-padding"},a.username&&r.a.createElement("h4",null,"@",a.username),r.a.createElement("span",null,a.first_name.toUpperCase()," ",a.last_name.toUpperCase()))),r.a.createElement("div",{className:"user-icons"},r.a.createElement(Ge,{user:a,onRequest:n,onAccept:c})),r.a.createElement("div",{className:"user-icons"},r.a.createElement(lt,{username:a.username}))),r.a.createElement("hr",null),r.a.createElement(ct,{userId:a.id}))},st=Object(i.b)(function(e){return{users:e.users,activeUser:e.activeUser}},{fetchUser:function(e){return K({url:"".concat(G,"/u/").concat(e,"/"),onSuccess:V,onFailure:function(){return console.log("Error occured loading user",e)},label:R})},requestFriendship:J,acceptFriendRequest:W})(function(e){var t=e.match,a=e.users,c=e.fetchUser,l=e.activeUser,i=e.requestFriendship,s=e.acceptFriendRequest,o=parseInt(t.params.id,10),u=a.all[o];return Object(n.useEffect)(function(){a.isFetching||o===l||c(o)},[o]),r.a.createElement(it,{isFetching:a.isFetching,user:u,activeUser:l,onRequest:function(){return i(u)},onAccept:function(){return s(u)}})}),ot=[{label:"Europe",value:"EU"},{label:"North America",value:"NA"},{label:"South America",value:"SA"},{label:"Africa",value:"AF"},{label:"Asia",value:"AS"},{label:"Oceania",value:"OC"}],ut=function(e){var t=e.suggestions;return 0===t.length?r.a.createElement("div",null,"No suggested trips for these filters... Try another continent or date range."):r.a.createElement("div",null,t.map(function(e){var t=e.city,a=e.users;return r.a.createElement("div",{key:t.id,className:"uk-tile uk-padding-small uk-flex uk-flex-between uk-link-muted"},r.a.createElement("h6",null,r.a.createElement(pe.a,{code:t.country_code,svg:!0})," | ",t.name),a.map(function(e){return r.a.createElement(ye,Object.assign({key:e.id},e))}))}))},mt=Object(i.b)(function(e){return{cities:e.cities,suggestions:e.suggestions,users:e.users,activeUser:e.activeUser}},{fetchCities:X,fetchExploreSuggestions:function(e){var t="?start_date=".concat(e.start_date,"&end_date=").concat(e.end_date);return K({url:"".concat(G,"/explore/").concat(e.continent,"/").concat(t),onSuccess:B,onFailure:function(){return console.log("Error occured loading explore suggestions")},label:M})}})(function(e){var t=e.cities,a=e.suggestions,c=e.users,l=e.fetchCities,i=(e.activeUser,e.fetchExploreSuggestions),s=Object(n.useState)(null),u=Object(O.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)([new Date,le()(new Date,7)]),f=Object(O.a)(p,2),E=f[0],h=f[1];if(Object(n.useEffect)(function(){t.isFetching||0!==t.ids.length||l()},[]),Object(n.useEffect)(function(){m&&E[0]&&E[1]&&i({continent:m.value,start_date:q()(E[0],"YYYY-MM-DD"),end_date:q()(E[1],"YYYY-MM-DD")})},[m,E[0],E[1]]),a.isFetching)return r.a.createElement(xe,null);var g=a.ids.map(function(e){var n=a.all[e],r=n.users.map(function(e){return c.all[e]});return{city:t.all[n.city],users:r}});return r.a.createElement(n.Fragment,null,r.a.createElement("h4",null,"FILTERS"),r.a.createElement("div",{className:"uk-flex uk-flex-around"},r.a.createElement(fe.a,{styles:{container:function(){return{width:250}},menu:function(e){return Object(o.a)({},e,{top:null})}},placeholder:"Continent",className:"contient-picker",isSearchAble:!0,isLoading:a.isFetching,value:m,onChange:d,options:ot}),r.a.createElement(he.a,{className:"uk-input uk-width-1-3@m",options:{mode:"range",dateFormat:"Y-m-d"},value:E,onChange:h})),r.a.createElement("h4",null,"SUGGESTIONS"),r.a.createElement(ut,{suggestions:g}))}),dt=a(366),pt=Object(E.a)(function(e){var t=e.component,a=Object(ke.a)(e,["component"]);return r.a.createElement(g.a,Object.assign({},a,{render:function(e){return a.cookies.get("sessionid")?r.a.createElement(t,e):r.a.createElement(dt.a,{to:{pathname:"/login"}})}}))}),ft=a(213),Et=a(214),ht=a.n(Et),gt=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={errMsg:null},a.handleResponse=function(e){return k()({url:"".concat(G,"/u/auth/?").concat(Object(ft.stringify)(e)),method:"get",withCredentials:!0}).then(function(t){a.props.onLogin(e)}).catch(function(e){if(e.response){var t=e.response.data&&e.response.data.errors&&e.response.data.errors[0]||e.response;a.setState({errMsg:t})}else a.setState({errMsg:"Unable to connect to the API"})})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"uk-flex uk-flex-center"},r.a.createElement("div",{className:"uk-panel uk-panel-box uk-text-center telegram-login-container"},r.a.createElement("img",{src:"/logo.png",alt:"logo",style:{height:55,paddingRight:15,paddingLeft:15}}),r.a.createElement("h1",null,"LOCATIONLESS"),r.a.createElement("hr",null),r.a.createElement(ht.a,{dataOnauth:this.handleResponse,botName:"LocationlessBot"}),r.a.createElement("hr",null),r.a.createElement("p",null,"You will need an account on",r.a.createElement("a",{target:"_blank",href:"https://telegram.org",rel:"no-opener"},"Telegram")," ","to get started")))}}]),t}(n.Component),vt=Object(v.a)(gt),bt=function(e){var t=e.activeUser,a=e.onLogout,c=e.history,l=Object(n.useState)(!1),i=Object(O.a)(l,2),s=i[0],o=i[1],u=function(e){o(!1),c.push(e)};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"uk-navbar-item uk-hidden@s",onClick:function(){return o(!s)}},r.a.createElement("div",{className:"icono-hamburger",onClick:function(){return o(!s)}})),s&&r.a.createElement("div",{className:"fullscreen-mobile-menu"},r.a.createElement("ul",{className:"uk-list"},r.a.createElement("li",{className:"uk-navbar-item",onClick:function(){return o(!s)}},r.a.createElement("div",{className:"icono-cross"})),r.a.createElement("li",{className:"uk-navbar-item",onClick:function(){return u("/explore")}},r.a.createElement("h4",null,"EXPLORE")),r.a.createElement("li",{className:"uk-navbar-item",onClick:function(){return u("/friends")}},r.a.createElement("h4",null,"FRIENDS")),r.a.createElement("li",{className:"uk-navbar-item",onClick:function(){return u("/users/".concat(t))}},r.a.createElement("h4",null,"PROFILE")),r.a.createElement("li",{className:"uk-navbar-item",onClick:function(){return o(!1),void a()}},r.a.createElement("h4",null,"LOGOUT")))))},kt=function(e){var t=e.activeUser,a=e.onLogout;return r.a.createElement("div",{className:"uk-navbar-right uk-visible@s"},r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",{className:"uk-navbar-item"},r.a.createElement(Oe.a,{to:"/explore"},"Explore")),r.a.createElement("li",{className:"uk-navbar-item"},r.a.createElement(Oe.a,{to:"/friends"},"Friends")),r.a.createElement("li",{className:"uk-navbar-item"},r.a.createElement(Oe.a,{to:"/users/".concat(t)},"Profile")),r.a.createElement("li",{className:"uk-navbar-item"},r.a.createElement("a",{onClick:a},"Logout"))))},Ot=Object(v.a)(Object(E.a)(function(e){var t=e.cookies,a=e.onLogout,n=e.activeUser,c=e.history;return n&&t.get("sessionid")?r.a.createElement("div",{className:"uk-navbar-container"},r.a.createElement("nav",{className:"uk-navbar uk-container"},r.a.createElement("div",{className:"uk-navbar-left"},r.a.createElement(bt,{activeUser:n,onLogout:a,history:c}),r.a.createElement(Oe.a,{className:"uk-navbar-item uk-logo",to:"/"},r.a.createElement("img",{src:"/logo.png",alt:"logo",style:{height:35,paddingRight:15,paddingLeft:15}}),"Locationless")),r.a.createElement(kt,{activeUser:n,onLogout:a}))):null})),yt="Something has gone wrong. We're going to try turning it off and on again.",_t="Nothing to see here.",Nt=(a(355),a(357),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"onLogout",value:function(){this.props.cookies.remove("sessionid"),this.props.logout(),k.a.post("".concat(G,"/u/logout/"),{withCredentials:!0}),this.props.history.push("/login")}},{key:"onLogin",value:function(e){this.props.history.push("/"),this.props.setUsers({data:Object(o.a)({},e,{is_you:!0})})}},{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.activeUser,n=t.location,r=t.history;window.gtag&&r.listen(function(e){window.gtag("set",{user:a}),window.gtag("event","page_view",{pathname:e.pathname})}),a||"/login"===n.pathname||k.a.get("".concat(G,"/u/"),{withCredentials:!0}).then(function(t){var a=t.data;return e.props.setUsers({data:a.data})}).catch(function(t){e.props.history.push("/login")})}},{key:"renderAuthorTag",value:function(){return r.a.createElement("div",{className:"author"},r.a.createElement("a",{href:"https://jtfell.github.io",target:"_blank",rel:"noopener"},"by jtfell"))}},{key:"render",value:function(){var e=this;return this.props.error.message?r.a.createElement(jt,{msg:this.props.error.message}):this.props.activeUser||"/login"===this.props.location.pathname?r.a.createElement(n.Fragment,null,r.a.createElement(Ot,{onLogout:this.onLogout.bind(this),activeUser:this.props.activeUser}),r.a.createElement("main",{className:"uk-container uk-container-small uk-container-center uk-padding"},r.a.createElement(h.a,null,r.a.createElement(g.a,{path:"/login",component:function(){return r.a.createElement(vt,{onLogin:e.onLogin.bind(e)})}}),r.a.createElement(pt,{exact:!0,path:"/",component:Ae}),r.a.createElement(pt,{path:"/trips/:id",component:qe}),r.a.createElement(pt,{exact:!0,path:"/friends",component:We}),r.a.createElement(pt,{exact:!0,path:"/explore",component:mt}),r.a.createElement(pt,{path:"/users/:id",component:st}),r.a.createElement(g.a,{component:function(){return r.a.createElement(jt,{msg:_t,hideLogo:!0})}}))),this.renderAuthorTag()):r.a.createElement(n.Fragment,null,r.a.createElement(xe,null),this.renderAuthorTag())}}]),t}(n.Component)),jt=function(e){var t=e.msg,a=e.hideLogo;return r.a.createElement("main",{className:"uk-container uk-container-small uk-container-center uk-padding"},!a&&r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"/logo.png",alt:"logo",style:{height:85,padding:15}})),r.a.createElement("hr",null),r.a.createElement("h4",null,t))},Ft=Object(v.a)(Object(E.a)(Object(i.b)(function(e){return{users:e.users,activeUser:e.activeUser,error:e.error}},{setUsers:V,logout:function(){return{type:Y}}})(Nt)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var St=a(83),Tt=a(164);var wt=a(65),Dt=new wt.b.Entity("users"),xt=new wt.b.Entity("cities"),Ct=new wt.b.Entity("matches",{user:Dt},{idAttribute:function(e){return"".concat(e.user.id,"::").concat(e.start_date,"::").concat(e.end_date)}}),At={users:Dt,cities:xt,trips:new wt.b.Entity("trips",{user:Dt,city:xt,matches:[Ct]},{processStrategy:function(e,t,a){var n=e.matches||[];return Object(o.a)({},e,{matches:n})}}),suggestions:new wt.b.Entity("suggestions",{city:xt,users:[Dt]},{idAttribute:function(e){return e.city.id}})},Rt={activeUser:null,error:{status:null,message:null},trips:{ids:[],all:{},isFetching:!1,hasFetched:!1},cities:{ids:[],all:{},isFetching:!1,hasFetched:!1},users:{ids:[],all:{},isFetching:!1,hasFetched:!1},suggestions:{ids:[],all:{},isFetching:!1,hasFetched:!1}},Ut=["trips","cities","users","suggestions"],Yt=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];Array.isArray(t)||(t=[t]);var r=Object(wt.a)(t,[At[a]]),c=Object(o.a)({},e);if(Object.keys(e).forEach(function(t){e[t]&&-1!==Ut.indexOf(t)&&(c[t]=Object(o.a)({},e[t]),Object(Tt.a)(new Set(Object.keys(e[t].all).concat(Object.keys(r.entities[t]||{})))).forEach(function(a){c[t].all[a]=Object.assign({},e[t].all[a],(r.entities[t]||{})[a])}))}),n)c[a].ids=r.result;else{var l=e[a].ids;c[a].ids=Object(Tt.a)(new Set(l.concat(r.result)))}return c},It=[y],Mt=[w],Pt=[R,x],Lt=a(215),qt=a(110),Gt=function(e){var t=e.dispatch;return function(e){return function(a){if(a&&(e(a),a.type===I)){var n=a.payload,r=n.url,c=n.method,l=n.data,i=n.accessToken,s=n.onSuccess,o=n.onFailure,u=n.label,m=n.headers,d=n.nextAction,p=["GET","DELETE"].includes(c)?"params":"data";k.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_TELEGRAM_BOT:"LocationlessBot",REACT_APP_API_URL:"https://api.locationless.club",REACT_APP_GA_ENABLED:"true"}).REACT_APP_BASE_URL||"",k.a.defaults.headers.common["Content-Type"]="application/json",k.a.defaults.headers.common.Authorization="Bearer ".concat(i),u&&t(function(e){return{type:"API_START",payload:e}}(u)),k.a.request(Object(qt.a)({url:r,method:c,headers:m,withCredentials:!0},p,l)).then(function(e){var a=e.data;t(s(a)),t(d(a))}).catch(function(e){t(function(e){return{type:"API_ERROR",error:e}}(e)),t(o(e)),e.response&&401===e.response.status&&t({type:"ACCESS_DENIED",payload:{url:window.location.pathname}})}).finally(function(){u&&t(function(e){return{type:"API_END",payload:e}}(u))})}}}},Bt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||St.c,Ht=Object(St.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Rt;case"API_ERROR":return function(e,t){var a=t.error&&t.error.response;return!a||a.status>=500||!a.status?Object(o.a)({},e,{error:{status:500,message:yt}}):404===a.status?Object(o.a)({},e,{error:{status:404,message:_t}}):Object(o.a)({},e,{error:{status:a.status,message:a.data&&a.data.error||yt}})}(e,t);case T:var a=Object.assign({},e.trips);return a.ids=a.ids.filter(function(e){return e!==t.payload.id}),delete a.all[t.payload.id],Object(o.a)({},e,{trips:a});case P:return Yt(e,t.payload.data,"suggestions",!0);case N:return Yt(e,t.payload.data,"trips");case D:return Yt(e,t.payload.data,"cities");case U:var n=Yt(e,t.payload.data,"users");return t.payload&&t.payload.data&&t.payload.data.is_you&&(n.activeUser=t.payload.data.id),n;case"API_START":return It.indexOf(t.payload)>-1?Object(o.a)({},e,{trips:Object(o.a)({},e.trips,{isFetching:!0})}):Pt.indexOf(t.payload)>-1?Object(o.a)({},e,{users:Object(o.a)({},e.users,{isFetching:!0})}):Mt.indexOf(t.payload)>-1?Object(o.a)({},e,{cities:Object(o.a)({},e.cities,{isFetching:!0})}):e;case"API_END":return It.indexOf(t.payload)>-1?Object(o.a)({},e,{trips:Object(o.a)({},e.trips,{isFetching:!1,hasFetched:!0})}):Pt.indexOf(t.payload)>-1?Object(o.a)({},e,{users:Object(o.a)({},e.users,{isFetching:!1,hasFetched:!0})}):Mt.indexOf(t.payload)>-1?Object(o.a)({},e,{cities:Object(o.a)({},e.cities,{isFetching:!1,hasFetched:!0})}):e;default:return e}},Bt(Object(St.a)(Gt,Lt.a)));window.store=Ht;var Wt=Ht;l.a.render(r.a.createElement(i.a,{store:Wt},r.a.createElement(s.a,null,r.a.createElement(Ft,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[218,2,1]]]);
//# sourceMappingURL=main.f1834e00.chunk.js.map