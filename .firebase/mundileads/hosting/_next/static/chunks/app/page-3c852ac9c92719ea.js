(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9045:function(e,t,l){Promise.resolve().then(l.bind(l,367))},367:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return p}});var a=l(7437),n=l(7179),r=l(8923),s=l.n(r),i=(e,t)=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(n.Item,{children:[(0,a.jsx)("label",{htmlFor:e.inputId,id:e.labelId,style:e.labelStyle,className:s().label,children:e.label}),(0,a.jsx)("input",{type:e.type,id:e.inputId,className:s().input,placeholder:e.placeholder,onChange:e.onChange,value:e.value,onClick:e.onClick})]})}),o=l(4454),u=l.n(o),d=l(6691),c=l.n(d),h=l(2265),m=l(6073),b=l.n(m);let _=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{id:e.style,className:b().button,onClick:e.buttonClick,style:e.buttonStyle,disabled:e.disabled,children:(0,a.jsx)("a",{href:e.href,children:e.buttonText})})});var x={src:"/_next/static/media/mundi.d6acc1a2.png",height:323,width:421,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAw0lEQVR42mMAgf///zOD6Ft3rxvffXjb++Hje8q379/iAUv++/tH6trtyy2b9q7zvffoTtDVm5f5b9273n7n0a1MsIKT5496FLVkpQCZeh++vtO4/ehmz6MX97Wv3b1qDlZw+uIJ+8aOWhsg06KyvFJl+55tSkA2q5SgjFlFdTkbw50Ht2TnL5tTNmX2xNDy5qJtQEmd1rYW+dSMFHkGEHj46IHgug1rzJesWZDWPqk5Y+K0XplJUybybti6loWBgYEBAG1IWDWbjdj7AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6};function p(){let[e,t]=(0,h.useState)(""),[l,r]=(0,h.useState)(""),[s,o]=(0,h.useState)(""),[d,m]=(0,h.useState)("");async function b(e,t,l,a){try{let n=await fetch("/api/mundi",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({leads:{name:e,userName:t,phone:l,birth:a}})});await n.json(),console.log("deu certo"),alert("Vc se cadastrou corretamente!")}catch(e){console.log("Error")}}return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.Wall,{style:u().wall,children:(0,a.jsxs)(n.Frame,{children:[(0,a.jsxs)(n.Item,{children:[(0,a.jsx)(c(),{src:x,width:280,alt:"logo mundi"}),(0,a.jsx)("h1",{children:"Cadastro Mundi"}),(0,a.jsx)("p",{children:"Explore os sabores do Mundi Caf\xe9 e seja recompensado! Preencha o nosso formul\xe1rio de registo para receber um presente exclusivo da nossa equipa."})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(n.Item,{children:[(0,a.jsx)(i,{type:"text",label:"Qual seu nome?",placeholder:"Joao",onChange:e=>t(e.target.value)}),(0,a.jsx)(i,{type:"text",label:"Qual seu apelido?",placeholder:"Moreira",onChange:e=>r(e.target.value)}),(0,a.jsx)(i,{type:"text",label:"Qual seu telemovel?",placeholder:"(+351) 0000-0000",onChange:e=>o(e.target.value)}),(0,a.jsx)(i,{type:"text",label:"Qual sua data de nascimento?",placeholder:"14/03/1996",onChange:e=>m(e.target.value)}),(0,a.jsx)(_,{buttonText:"Cadastrar",style:u().button,buttonClick:()=>{b(e,l,s,d)}})]})]})})})}},7179:function(e,t,l){"use strict";l.r(t),l.d(t,{Card:function(){return u},Frame:function(){return i},Hero:function(){return d},Item:function(){return o},Wall:function(){return s}});var a=l(7437),n=l(7446),r=l.n(n);let s=e=>{let{children:t,style:l,css:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{id:l,className:r().wall,style:n,children:t})})},i=e=>{let{children:t,style:l,css:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{id:l,className:r().frame,style:n,children:t})})},o=e=>{let{children:t,style:l,css:n,onclick:s}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{id:l,className:r().item,style:n,onClick:s,children:t})})},u=e=>{let{children:t,style:l,css:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{id:l,className:r().card,style:n,children:t})})},d=(e,t)=>{let{style:l,children:n,css:s}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{id:l,className:r().hero,style:s,children:n})})}},4454:function(e){e.exports={wall:"page_wall__937d0",button:"page_button__52WaL",table:"page_table__qtljL",collum:"page_collum__8sNaA"}},6073:function(e){e.exports={button:"Button_button__NWYU2"}},8923:function(e){e.exports={field:"Field_field__9ygi7",label:"Field_label__NsQfi",input:"Field_input__wTuVz"}},7446:function(e){e.exports={wall:"Layout_wall__QI62L",frame:"Layout_frame__uJn_f",item:"Layout_item__bHQIH",card:"Layout_card__Ji0hh",hero:"Layout_hero__oyFSA"}}},function(e){e.O(0,[986,971,938,744],function(){return e(e.s=9045)}),_N_E=e.O()}]);