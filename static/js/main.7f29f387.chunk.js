(this.webpackJsonpken42=this.webpackJsonpken42||[]).push([[0],[,function(e,t,a){e.exports={container:"style_container__d2NRz",title:"style_title__2vVwF",innerContainer:"style_innerContainer__3pKlQ",inputDiv:"style_inputDiv__1t-p4",input:"style_input__33qpF",inputDivRadio:"style_inputDivRadio__2WvCv",divButton:"style_divButton__3TBgF",button:"style_button__1H7sl"}},,,,function(e,t,a){e.exports={container:"style_container__1faCf",title:"style_title__3WnGd",innerContainer:"style_innerContainer__2JwpT",inputDiv:"style_inputDiv__vzPyP",inputDOB:"style_inputDOB__3gwqF",inputDOBtitle:"style_inputDOBtitle__2mmCF",inputRollNumber:"style_inputRollNumber__3GNQ_",inputName:"style_inputName__rc8x-",inputPhoNum:"style_inputPhoNum__2tbZk",inputIsAdmin:"style_inputIsAdmin__3Gt-7",inputDivCheckbox:"style_inputDivCheckbox__2uqUt",inputIsAdminTitle:"style_inputIsAdminTitle__20_ub",divButton:"style_divButton__2SfAL",button:"style_button__31_e5",inputOtp:"style_inputOtp__3V1cQ"}},,,function(e,t,a){e.exports={container:"style_container__345fk",title:"style_title__3sB8H",innerContainer:"style_innerContainer__i62y0",inputDiv:"style_inputDiv__267Iq",inputName:"style_inputName__Nq1KF",inputPhoNum:"style_inputPhoNum__1AF4b",inputDivRadio:"style_inputDivRadio__35uzU",divButton:"style_divButton__3LCAr",button:"style_button__FK8b5"}},,function(e,t,a){e.exports={container:"style_container__1Kcuo",title:"style_title__2AUJt",innerContainer:"style_innerContainer__2r7io",inputDiv:"style_inputDiv__397jt",inputName:"style_inputName__3WIh4",inputPhoNum:"style_inputPhoNum__Fww7Q",inputDivRadio:"style_inputDivRadio__sjMAU",divButton:"style_divButton__w64gU",button:"style_button__1D26q"}},function(e,t,a){e.exports={container:"style_container__YikeU",title:"style_title__3Oy2u",innerContainer:"style_innerContainer__3-wYC",inputDiv:"style_inputDiv__3seni",inputName:"style_inputName__2HJw2",inputPhoNum:"style_inputPhoNum__1bNRK",inputDivRadio:"style_inputDivRadio__321rb",divButton:"style_divButton__1TGAN",button:"style_button__Jjkgn"}},function(e,t,a){e.exports={container:"style_container__2-1qM",title:"style_title__1GJkY",innerContainer:"style_innerContainer__3zOu_",inputDiv:"style_inputDiv__1EEew",inputDOB:"style_inputDOB__1H2w0",inputDOBtitle:"style_inputDOBtitle__tZ6y0",inputRollNumber:"style_inputRollNumber__3BWz-",inputName:"style_inputName__kA2ya",inputPhoNum:"style_inputPhoNum__3SVnw",inputIsAdmin:"style_inputIsAdmin__2M2UI",inputDivCheckbox:"style_inputDivCheckbox__uaA2J",inputIsAdminTitle:"style_inputIsAdminTitle__2lIAX",divButton:"style_divButton__21wYR",button:"style_button__2IoUo",inputOtp:"style_inputOtp__2vHBg"}},,,,,,,,,,,function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(21),r=a.n(i),o=(a(28),a(29),a(3)),m=a(14),s=a(2),u=a(5),c=a.n(u),d=a(12),p=a.n(d),v=a(10),_=a.n(v),h=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:_.a.container},l.a.createElement("div",{className:_.a.title},"Personal Information"),l.a.createElement("div",{className:_.a.innerContainer},l.a.createElement("div",{className:_.a.inputDiv},l.a.createElement("input",{className:_.a.inputName,type:"text",name:"name",placeholder:"Name*",value:e.name,onChange:function(t){e.handleEvent(t.target.value,t.target.name)}})),l.a.createElement("div",{className:_.a.inputDiv},l.a.createElement("input",{className:_.a.inputPhoNum,type:"tel",name:"phoneNumber",placeholder:"Phone Number*",value:e.phoneNumber,onChange:function(t){e.handleEvent(t.target.value,t.target.name)}})),l.a.createElement("div",{className:_.a.inputDivRadio,value:e.gender,onChange:function(t){e.handleEvent(t.target.value,t.target.name)}},l.a.createElement("input",{type:"radio",value:"Male",name:"gender"})," Male",l.a.createElement("input",{type:"radio",value:"Female",name:"gender"})," Female",l.a.createElement("input",{type:"radio",value:"Other",name:"gender"})," Other"),l.a.createElement("div",{className:_.a.divButton},l.a.createElement("button",{className:_.a.button,onClick:function(){window.localStorage.setItem("name",e.name),window.localStorage.setItem("phoneNumber",e.phoneNumber),window.localStorage.setItem("gender",e.gender),e.nextStep()}},"Next")))))},N=a(8),E=a.n(N),g=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:E.a.container},l.a.createElement("div",{className:E.a.title},"Parent Information"),l.a.createElement("div",{className:E.a.innerContainer},l.a.createElement("div",{className:E.a.inputDiv},l.a.createElement("input",{className:E.a.inputName,type:"text",required:"true",name:"motherName",placeholder:"Mother's Name*",value:e.motherName,onChange:function(t){e.handleEvent(t.target.value,t.target.name)}})),l.a.createElement("div",{className:E.a.inputDiv},l.a.createElement("input",{className:E.a.inputPhoNum,type:"text",name:"fatherName",placeholder:"Father's Name",value:e.fatherName,onChange:function(t){e.handleEvent(t.target.value,t.target.name)}})),l.a.createElement("div",{className:E.a.inputDiv},l.a.createElement("input",{className:E.a.inputPhoNum,type:"email",required:"true",name:"email",placeholder:"Email*",value:e.email,onChange:function(t){e.handleEvent(t.target.value,t.target.name)}})),l.a.createElement("div",{className:E.a.divButton},l.a.createElement("button",{className:E.a.button,onClick:e.previousStep},"Previous"),l.a.createElement("button",{className:E.a.button,onClick:function(){window.localStorage.setItem("motherName",e.motherName),window.localStorage.setItem("fatherName",e.fatherName),window.localStorage.setItem("email",e.email),e.nextStep()}},"Next/Save")))))},b=a(11),y=a.n(b),f=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:y.a.container},l.a.createElement("div",{className:y.a.title},"Communication Information"),l.a.createElement("div",{className:y.a.innerContainer},l.a.createElement("select",{value:e.addressType,name:"addressType",onChange:function(t){return e.handleEvent(t.target.value,t.target.name)}},l.a.createElement("option",{value:"permanent address"},"Permanent Address"),l.a.createElement("option",{value:"business address"},"Business Address"),l.a.createElement("option",{value:"communication address"},"Communication Address")),l.a.createElement("div",{className:y.a.inputDiv},l.a.createElement("input",{className:y.a.inputName,type:"text",name:"addressLine1",placeholder:"Address Line 1*",value:e.addressLine1,onChange:function(t){e.handleEvent(t.target.value,t.target.name)}})),l.a.createElement("div",{className:y.a.inputDiv},l.a.createElement("input",{className:y.a.inputPhoNum,type:"text",name:"addressLine2",placeholder:"Address Line 2",value:e.addressLine2,onChange:function(t){e.handleEvent(t.target.value,t.target.name)}})),l.a.createElement("div",{className:y.a.divButton},l.a.createElement("button",{className:y.a.button,onClick:e.previousStep},"Previous"),l.a.createElement("button",{className:y.a.button,onClick:function(){window.localStorage.setItem("addressType",e.addressType),window.localStorage.setItem("addressLine1",e.addressLine1),window.localStorage.setItem("addressLine2",e.addressLine2),e.nextStep()}},"Next/Save")))))},w=a(1),O=a.n(w),S=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:O.a.container},l.a.createElement("div",{className:O.a.title},"Edit Information"),l.a.createElement("div",{className:O.a.innerContainer},l.a.createElement("div",{className:O.a.inputDiv},l.a.createElement("label",null,"Name:"),l.a.createElement("input",{className:O.a.input,type:"text",name:"name",placeholder:"Name*",value:e.name,onChange:function(t){e.handleEvent(t.target.value,t.target.name)}})),l.a.createElement("div",{className:O.a.inputDiv},l.a.createElement("label",null,"Phone Number:"),l.a.createElement("input",{className:O.a.input,type:"tel",name:"phoneNumber",placeholder:"Phone Number*",value:e.phoneNumber,onChange:function(t){e.handleEvent(t.target.value,t.target.name)}})),l.a.createElement("div",{className:O.a.inputDivRadio,value:e.gender,onChange:function(t){e.handleEvent(t.target.value,t.target.name)}},l.a.createElement("label",null,"Gender:"),l.a.createElement("input",{type:"radio",value:"Male",name:"gender"})," Male",l.a.createElement("input",{type:"radio",value:"Female",name:"gender"})," Female",l.a.createElement("input",{type:"radio",value:"Other",name:"gender"})," Other"),l.a.createElement("div",{className:O.a.inputDiv},l.a.createElement("label",null,"Mother's Name:"),l.a.createElement("input",{className:O.a.input,type:"text",required:"true",name:"motherName",placeholder:"Mother's Name*",value:e.motherName,onChange:function(t){e.handleEvent(t.target.value,t.target.name)}})),l.a.createElement("div",{className:O.a.inputDiv},l.a.createElement("label",null,"Father's Name:"),l.a.createElement("input",{className:O.a.input,type:"text",name:"fatherName",placeholder:"Father's Name",value:e.fatherName,onChange:function(t){e.handleEvent(t.target.value,t.target.name)}})),l.a.createElement("div",{className:O.a.inputDiv},l.a.createElement("label",null,"Email Id:"),l.a.createElement("input",{className:O.a.input,type:"email",required:"true",name:"email",placeholder:"Email*",value:e.email,onChange:function(t){e.handleEvent(t.target.value,t.target.name)}})),l.a.createElement("div",{className:O.a.inputDiv},l.a.createElement("label",null,"Address Type:"),l.a.createElement("select",{value:e.addressType,name:"addressType",onChange:function(t){return e.handleEvent(t.target.value,t.target.name)}},l.a.createElement("option",{value:"permanent address"},"Permanent Address"),l.a.createElement("option",{value:"business address"},"Business Address"),l.a.createElement("option",{value:"communication address"},"Communication Address"))),l.a.createElement("div",{className:O.a.inputDiv},l.a.createElement("label",null,"Address Line 1:"),l.a.createElement("input",{className:O.a.input,type:"text",name:"addressLine1",placeholder:"Address Line 1*",value:e.addressLine1,onChange:function(t){e.handleEvent(t.target.value,t.target.name)}})),l.a.createElement("div",{className:O.a.inputDiv},l.a.createElement("label",null,"Address Line 2:"),l.a.createElement("input",{className:O.a.input,type:"text",name:"addressLine2",placeholder:"Address Line 2",value:e.addressLine2,onChange:function(t){e.handleEvent(t.target.value,t.target.name)}})),l.a.createElement("div",{className:O.a.divButton},l.a.createElement("button",{className:O.a.button,onClick:function(){""===e.name?alert("The Name field can't be empty"):10!==e.phoneNumber.length?alert("Please fill a 10 digit Mobile Number"):""===e.motherName?alert("The Mother's Name field can't be empty"):e.email.includes("@")?""===!e.addressLine1?alert("The Mother's Name field can't be empty"):(window.localStorage.removeItem("name"),window.localStorage.removeItem("phoneNumber"),window.localStorage.removeItem("gender"),window.localStorage.removeItem("motherName"),window.localStorage.removeItem("fatherName"),window.localStorage.removeItem("email"),window.localStorage.removeItem("addressType"),window.localStorage.removeItem("addressLine1"),window.localStorage.removeItem("addressLine2"),e.handleSubmit()):alert("Please add a valid Email")}},"SUBMIT")))))},C=function(e){var t=Object(n.useState)(1),a=Object(o.a)(t,2),i=a[0],r=a[1],m=Object(n.useState)(e.location.state.values[0]),s=Object(o.a)(m,2),u=s[0],c=s[1],d=Object(n.useState)(e.location.state.values[1]),p=Object(o.a)(d,2),v=p[0],_=p[1],N=Object(n.useState)(""),E=Object(o.a)(N,2),b=E[0],y=E[1],w=Object(n.useState)(""),O=Object(o.a)(w,2),C=O[0],D=O[1],I=Object(n.useState)(""),B=Object(o.a)(I,2),P=B[0],j=B[1],T=Object(n.useState)(""),x=Object(o.a)(T,2),A=x[0],L=x[1],k=Object(n.useState)(""),R=Object(o.a)(k,2),M=R[0],F=R[1],q=Object(n.useState)(""),U=Object(o.a)(q,2),J=U[0],G=U[1],W=Object(n.useState)(""),z=Object(o.a)(W,2),H=z[0],K=z[1];Object(n.useEffect)((function(){v===window.localStorage.getItem("phoneNumber")&&u===window.localStorage.getItem("name")&&(y(window.localStorage.getItem("gender")),D(window.localStorage.getItem("motherName")),j(window.localStorage.getItem("fatherName")),L(window.localStorage.getItem("email")),F(window.localStorage.getItem("addressType")),G(window.localStorage.getItem("addressLine1")),K(window.localStorage.getItem("addressLine2")))}),[v,u]);var V=function(){r(i+1)},Q=function(){r(i-1)},Y=function(e,t){"name"===t?c(e):"phoneNumber"==t?_(e):"gender"==t?y(e):"motherName"==t?D(e):"fatherName"==t?j(e):"email"==t?L(e):"addressType"==t?F(e):"addressLine1"==t?G(e):"addressLine2"==t&&K(e)};switch(i){case 1:return l.a.createElement("div",null,l.a.createElement(h,{name:u,phoneNumber:v,gender:b,handleEvent:Y,nextStep:V}));case 2:return l.a.createElement("div",null,l.a.createElement(g,{motherName:C,fatherName:P,email:A,handleEvent:Y,nextStep:V,previousStep:Q}));case 3:return l.a.createElement("div",null,l.a.createElement(f,{addressType:M,addressLine1:J,addressLine2:H,handleEvent:Y,nextStep:V,previousStep:Q}));case 4:return l.a.createElement("div",null,l.a.createElement(S,{name:u,phoneNumber:v,gender:b,motherName:C,fatherName:P,email:A,addressType:M,addressLine1:J,addressLine2:H,handleEvent:Y,handleSubmit:function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:u,phoneNumber:v,gender:b,motherName:C,fatherName:P,email:A,addressType:M,addressLine1:J,addressLine2:H})};fetch("https://bibliotheque-chaise-65007.herokuapp.com/form",e).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}}))}},D=function(e){console.log(e);var t=Object(s.f)(),a=e.location.state.values[0],i=e.location.state.values[1],r=e.location.state.values[2],u=Object(n.useState)(""),c=Object(o.a)(u,2),d=c[0],v=c[1],_=Object(n.useState)(!1),h=Object(o.a)(_,2),N=h[0],E=h[1],g=[a,i];return l.a.createElement(m.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/form",exact:!0,component:C}),l.a.createElement("div",{className:p.a.container},l.a.createElement("div",{className:p.a.title},"Authentication"),l.a.createElement("div",{className:p.a.innerContainer},l.a.createElement("div",{className:p.a.inputDiv},l.a.createElement("label",null,"OTP:"),l.a.createElement("input",{className:p.a.inputName,type:"text",placeholder:"Please enter the OTP",value:d,onChange:function(e){v(e.target.value)}})),l.a.createElement("div",{className:p.a.divButton},l.a.createElement("button",{className:p.a.button,onClick:function(){r===d?(E(!0),alert("OTP VERIFIED.")):(alert("Please generate another OTP"),t.push("/"),window.location.reload())}},"Verify")),l.a.createElement("div",{className:p.a.divButton},l.a.createElement(m.b,{to:{pathname:"/form",state:{values:g}}},l.a.createElement("button",{className:p.a.button,onClick:function(){!0!==N&&(alert("Please generate another OTP"),t.push("/"),window.location.reload())}},"SUBMIT")))))))},I=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(""),u=Object(o.a)(r,2),d=u[0],p=u[1],v=Object(n.useState)(""),_=Object(o.a)(v,2),h=_[0],N=_[1],E=Object(n.useState)(""),g=Object(o.a)(E,2),b=g[0],y=g[1],f=Object(n.useState)(!1),w=Object(o.a)(f,2),O=w[0],S=w[1],C=Object(n.useState)(""),I=Object(o.a)(C,2),B=I[0],P=I[1],j=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=t.length,n=0;n<6;n++)e+=t.charAt(Math.floor(Math.random()*a));return e}();Object(n.useEffect)((function(){1==O&&(document.getElementById("divOne").style.display="none",document.getElementById("divTwo").style.display="none"),0==O&&(document.getElementById("divOne").style.display="flex",document.getElementById("divTwo").style.display="inline")}),[O]);var T=[h,b,B];return l.a.createElement(m.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/auth",exact:!0,component:D}),l.a.createElement("div",{className:c.a.container},l.a.createElement("div",{className:c.a.title},"Login"),l.a.createElement("div",{className:c.a.innerContainer},l.a.createElement("div",{id:"divOne",className:c.a.inputDiv},l.a.createElement("div",{className:c.a.inputDOBtitle},"Date of Birth *"),l.a.createElement("input",{className:c.a.inputDOB,type:"date",value:a,onChange:function(e){i(e.target.value),P(j)}})),l.a.createElement("div",{id:"divTwo",className:c.a.inputDiv},l.a.createElement("input",{className:c.a.inputRollNumber,type:"text",placeholder:"Roll Number*",value:d,onChange:function(e){p(e.target.value)}})),l.a.createElement("div",{className:c.a.inputDiv},l.a.createElement("input",{className:c.a.inputName,type:"text",placeholder:"Name*",value:h,onChange:function(e){N(e.target.value)}})),l.a.createElement("div",{className:c.a.inputDiv},l.a.createElement("input",{className:c.a.inputPhoNum,type:"tel",placeholder:"Phone Number*",value:b,onChange:function(e){y(e.target.value)}})),l.a.createElement("div",{className:c.a.inputDivCheckbox},l.a.createElement("input",{className:c.a.inputIsAdmin,type:"checkbox",placeholder:"is Admin",value:O,onClick:function(){S(!O)}}),l.a.createElement("div",{className:c.a.inputIsAdminTitle},"Is Admin")),l.a.createElement("div",{className:c.a.divButton},l.a.createElement(m.b,{to:{pathname:"/auth",state:{values:T}}},l.a.createElement("button",{className:c.a.button,onClick:function(){1==O?(""==h.length&&(alert("Please fill all the mandatory feilds."),window.location.reload()),10!=b.length&&(alert("Please provide a 10 digit mobile number."),window.location.reload())):(""!=a.length&&""!=d.length&&""!=h.length||(alert("Please fill all the mandatory feilds."),window.location.reload()),10!=b.length&&(alert("Please provide a 10 digit mobile number."),window.location.reload())),alert("Please note down the OTP for further process. The OTP is ".concat(B))}},"SUBMIT")))))))};var B=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.7f29f387.chunk.js.map