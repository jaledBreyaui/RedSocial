import{a as we,b as _e}from"./chunk-TQEI2NSM.js";import{a as xe,b as Ce}from"./chunk-I7SUX3G4.js";import{A as Z,I as be,J as ve,c as ae,d as u,f as le,g as pe,i as de,j as se,k as ue,l as me,m as ce,n as ge,p as fe,r as he,s as q,t as $,z as b}from"./chunk-XFWUHJVS.js";import{B as c,C as x,Dc as L,Fa as X,Ga as h,Ha as ee,Hc as re,Ia as H,Ja as o,Ka as te,L as w,La as ne,Q as d,Qa as M,S as P,U as _,V as G,Y as z,Z as j,a as K,b as Q,c as W,da as g,ea as f,ha as J,ia as i,ja as n,ka as l,nc as U,rc as y,t as F,ta as Y,u as A,v as D,va as V,wa as B,wb as ie,x as m,xb as oe}from"./chunk-5JAVDVUH.js";var Me=`
    .p-inputgroup,
    .p-inputgroup .p-iconfield,
    .p-inputgroup .p-floatlabel,
    .p-inputgroup .p-iftalabel {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-floatlabel .p-inputwrapper,
    .p-inputgroup .p-iftalabel .p-inputwrapper {
        display: inline-flex;
    }

    .p-inputgroup .p-inputtext,
    .p-inputgroup .p-inputwrapper {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-inputgroupaddon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('inputgroup.addon.padding');
        background: dt('inputgroup.addon.background');
        color: dt('inputgroup.addon.color');
        border-block-start: 1px solid dt('inputgroup.addon.border.color');
        border-block-end: 1px solid dt('inputgroup.addon.border.color');
        min-width: dt('inputgroup.addon.min.width');
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
        border-inline-start: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:last-child {
        border-inline-end: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:has(.p-button) {
        padding: 0;
        overflow: hidden;
    }

    .p-inputgroupaddon .p-button {
        border-radius: 0;
    }

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iconfield > .p-component,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroup > .p-component:first-child,
    .p-inputgroup > .p-inputwrapper:first-child > .p-component,
    .p-inputgroup > .p-iconfield:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroupaddon:last-child,
    .p-inputgroup > .p-component:last-child,
    .p-inputgroup > .p-inputwrapper:last-child > .p-component,
    .p-inputgroup > .p-iconfield:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup .p-component:focus,
    .p-inputgroup .p-component.p-focus,
    .p-inputgroup .p-inputwrapper-focus,
    .p-inputgroup .p-component:focus ~ label,
    .p-inputgroup .p-component.p-focus ~ label,
    .p-inputgroup .p-inputwrapper-focus ~ label,
    .p-inputgroup .p-floatlabel .p-inputwrapper ~ label,
    .p-inputgroup .p-iftalabel .p-inputwrapper ~ label {
        z-index: 1;
    }

    .p-inputgroup > .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
        border-inline-start: 0;
    }
`;var Fe=["*"],Ae=`
    ${Me}

    /*For PrimeNG*/

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup:first-child > p-button > .p-button,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroup p-button:first-child,
    .p-inputgroup p-button:last-child {
        display: inline-flex;
    }

    .p-inputgroup:has(> p-button:first-child) .p-button {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup:has(> p-button:last-child) .p-button {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup > p-inputmask > .p-inputtext {
        width: 100%;
    }
`,De={root:({instance:e})=>["p-inputgroup",{"p-inputgroup-fluid":e.fluid}]},ye=(()=>{class e extends L{name="inputgroup";style=Ae;classes=De;static \u0275fac=(()=>{let r;return function(a){return(r||(r=w(e)))(a||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var Pe=new D("INPUTGROUP_INSTANCE"),Ge=(()=>{class e extends ${componentName="InputGroup";_componentStyle=m(ye);$pcInputGroup=m(Pe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(b,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;static \u0275fac=(()=>{let r;return function(a){return(r||(r=w(e)))(a||e)}})();static \u0275cmp=_({type:e,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostVars:2,hostBindings:function(t,a){t&2&&H(a.cn(a.cx("root"),a.styleClass))},inputs:{styleClass:"styleClass"},features:[M([ye,{provide:Pe,useExisting:e},{provide:q,useExisting:e}]),z([b]),j],ngContentSelectors:Fe,decls:1,vars:0,template:function(t,a){t&1&&(V(),B(0))},dependencies:[Z],encapsulation:2})}return e})(),Ee=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=G({type:e});static \u0275inj=A({imports:[Ge,y,y]})}return e})();var ze=["*"],je={root:"p-inputgroupaddon"},Se=(()=>{class e extends L{name="inputgroupaddon";classes=je;static \u0275fac=(()=>{let r;return function(a){return(r||(r=w(e)))(a||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})(),ke=new D("INPUTGROUPADDON_INSTANCE"),Ve=(()=>{class e extends ${componentName="InputGroupAddon";_componentStyle=m(Se);$pcInputGroupAddon=m(ke,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(b,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}style;styleClass;get hostStyle(){return this.style}static \u0275fac=(()=>{let r;return function(a){return(r||(r=w(e)))(a||e)}})();static \u0275cmp=_({type:e,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:4,hostBindings:function(t,a){t&2&&(ee(a.hostStyle),H(a.cn(a.cx("root"),a.styleClass)))},inputs:{style:"style",styleClass:"styleClass"},features:[M([Se,{provide:ke,useExisting:e},{provide:q,useExisting:e}]),z([b]),j],ngContentSelectors:ze,decls:1,vars:0,template:function(t,a){t&1&&(V(),B(0))},dependencies:[Z],encapsulation:2})}return e})(),Ie=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=G({type:e});static \u0275inj=A({imports:[Ve,y,y]})}return e})();function Re(){return e=>{let p=e.get("password"),r=e.get("repitePassword");if(!p||!r)return null;if(p.value!==r.value)return r.setErrors(Q(K({},r.errors??{}),{noCoincide:"La clave no coincide"})),{noCoincide:!0};if(r.hasError("noCoincide")){let t=r.errors??{},{noCoincide:a}=t,s=W(t,["noCoincide"]);r.setErrors(Object.keys(s).length?s:null)}return null}}function Be(e,p){e&1&&(i(0,"small",34),o(1,"Ingres\xE1 un correo v\xE1lido."),n())}function He(e,p){e&1&&(i(0,"small",34),o(1,"Us\xE1 solo letras."),n())}function Ue(e,p){e&1&&(i(0,"small",34),o(1,"Us\xE1 solo letras."),n())}function Le(e,p){e&1&&(i(0,"small",34),o(1,"Ingres\xE1 una edad entre 18 y 99 a\xF1os."),n())}function qe(e,p){e&1&&(i(0,"small",34),o(1," Inclu\xED una may\xFAscula y un n\xFAmero. "),n())}function $e(e,p){e&1&&(i(0,"small",34),o(1,"Las contrase\xF1as no coinciden."),n())}function Ze(e,p){e&1&&(c(),i(0,"svg",30),l(1,"circle",37)(2,"path",38),n())}var Te=class e{constructor(p,r,t,a){this.fb=p;this.router=r;this.messageService=t;this.authService=a}fb;router;messageService;authService;formularioRegistro;avatar;avatarPreview;enviando=!1;ngOnInit(){this.formularioRegistro=this.fb.group({correo:["",[u.required,u.email]],nombre:["",[u.required,u.pattern("^[a-zA-Z]+$")]],apellido:["",[u.required,u.pattern("^[a-zA-Z]+$")]],edad:["",[u.required,u.min(18),u.max(99)]],password:["",[u.required,u.minLength(8),u.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/)]],repitePassword:["",u.required]},{validators:Re()})}seleccionarAvatar(p){let r=p.target;if(this.avatar=r.files?.[0],!this.avatar){this.avatarPreview=void 0;return}let t=new FileReader;t.onload=()=>{this.avatarPreview=t.result},t.readAsDataURL(this.avatar)}registrarUsuario(){if(!this.validarFormulario())return;let{correo:p,password:r,nombre:t,apellido:a}=this.formularioRegistro.getRawValue(),s=new FormData;s.append("email",p),s.append("password",r),s.append("name",t),s.append("lastName",a),this.avatar&&s.append("avatar",this.avatar),this.enviando=!0,this.authService.register(s).subscribe({next:()=>{this.enviando=!1,this.messageService.add({severity:"success",summary:"Registro exitoso",detail:"Tu cuenta fue creada"}),setTimeout(()=>{this.router.navigate(["/inicio"])},1e3)},error:v=>{this.enviando=!1;let C=typeof v.error?.message=="string"?v.error.message:"No se pudo crear la cuenta";this.messageService.add({severity:"error",summary:"Error al registrar",detail:C})}})}validarFormulario(){let p=!0;return this.formularioRegistro.invalid&&(this.formularioRegistro.markAllAsTouched(),p=!1),p}static \u0275fac=function(r){return new(r||e)(P(fe),P(ie),P(U),P(re))};static \u0275cmp=_({type:e,selectors:[["app-register"]],features:[M([U])],decls:129,vars:27,consts:[[1,"register-page"],["position","top-right"],["aria-labelledby","register-title",1,"register-shell"],["aria-hidden","true",1,"welcome-panel"],["routerLink","/inicio","tabindex","-1",1,"brand"],[1,"brand-mark"],[1,"welcome-copy"],[1,"eyebrow"],[1,"social-scene"],[1,"orbit","orbit-one"],[1,"orbit","orbit-two"],[1,"avatar","avatar-luna"],[1,"avatar","avatar-nico"],[1,"avatar","avatar-vale"],[1,"message-card","message-one"],[1,"message-icon"],[1,"message-card","message-two"],[1,"online-dot"],[1,"community-note"],[1,"community-faces"],[1,"form-panel"],[1,"mobile-brand"],[1,"form-heading"],[1,"step-label"],["id","register-title"],["novalidate","",3,"ngSubmit","formGroup"],[1,"form-grid"],[1,"field-group","field-wide"],["for","correo"],[1,"input-wrap"],["viewBox","0 0 24 24","aria-hidden","true"],["d","M4 6h16v12H4z"],["d","m4 7 8 6 8-6"],["id","correo","pInputText","","type","email","formControlName","correo","placeholder","vos@ejemplo.com","autocomplete","email"],[1,"field-error"],[1,"field-group"],["for","nombre"],["cx","12","cy","8","r","4"],["d","M4.5 20c.8-4 3.3-6 7.5-6s6.7 2 7.5 6"],["id","nombre","pInputText","","formControlName","nombre","placeholder","Tu nombre","autocomplete","given-name"],["for","apellido"],["id","apellido","pInputText","","formControlName","apellido","placeholder","Tu apellido","autocomplete","family-name"],["for","edad"],["d","M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z"],["id","edad","pInputText","","type","number","formControlName","edad","placeholder","Deb\xE9s ser mayor de 18","min","18","max","99"],["for","password"],["x","5","y","10","width","14","height","10","rx","2"],["d","M8 10V7a4 4 0 0 1 8 0v3"],["id","password","pInputText","","type","password","formControlName","password","placeholder","M\xEDnimo 8 caracteres","autocomplete","new-password"],["for","repitePassword"],["id","repitePassword","pInputText","","type","password","formControlName","repitePassword","placeholder","Repet\xED tu contrase\xF1a","autocomplete","new-password"],[1,"avatar-field"],[1,"avatar-preview"],[1,"avatar-copy"],["for","avatar",1,"file-button"],["id","avatar","type","file","accept","image/png,image/jpeg,image/webp",1,"visually-hidden",3,"change"],["type","submit","label","Crear mi cuenta","styleClass","register-submit",3,"loading"],[1,"login-link"],["routerLink","/inicio"]],template:function(r,t){if(r&1&&(i(0,"main",0),l(1,"p-toast",1),i(2,"section",2)(3,"aside",3)(4,"a",4)(5,"span",5),l(6,"span")(7,"span"),n(),i(8,"span"),o(9,"NetSocial"),n()(),i(10,"div",6)(11,"p",7),o(12,"Tu lugar tambi\xE9n est\xE1 ac\xE1"),n(),i(13,"h1"),o(14,"Conect\xE1 con lo que te mueve."),n(),i(15,"p"),o(16,"Compart\xED momentos, encontr\xE1 nuevas voces y arm\xE1 una comunidad a tu manera."),n()(),i(17,"div",8),l(18,"div",9)(19,"div",10),i(20,"div",11),o(21,"LU"),n(),i(22,"div",12),o(23,"NI"),n(),i(24,"div",13),o(25,"VA"),n(),i(26,"div",14)(27,"span",15),o(28,"\u2665"),n(),i(29,"span"),o(30,"Tu gente te espera"),n()(),i(31,"div",16),l(32,"span",17),i(33,"span"),o(34,"Una nueva historia empieza"),n()()(),i(35,"p",18)(36,"span",19)(37,"span"),o(38,"AM"),n(),i(39,"span"),o(40,"SO"),n(),i(41,"span"),o(42,"JO"),n()(),o(43," Personas reales, historias reales. "),n()(),i(44,"div",20)(45,"div",21)(46,"span",5),l(47,"span")(48,"span"),n(),i(49,"span"),o(50,"NetSocial"),n()(),i(51,"header",22)(52,"p",23),o(53,"Crear cuenta"),n(),i(54,"h2",24),o(55,"Empecemos por vos"),n(),i(56,"p"),o(57,"Complet\xE1 tus datos para sumarte a la conversaci\xF3n."),n()(),i(58,"form",25),Y("ngSubmit",function(){return t.registrarUsuario()}),i(59,"div",26)(60,"div",27)(61,"label",28),o(62,"Correo electr\xF3nico"),n(),i(63,"div",29),c(),i(64,"svg",30),l(65,"path",31)(66,"path",32),n(),x(),l(67,"input",33),n(),g(68,Be,2,0,"small",34),n(),i(69,"div",35)(70,"label",36),o(71,"Nombre"),n(),i(72,"div",29),c(),i(73,"svg",30),l(74,"circle",37)(75,"path",38),n(),x(),l(76,"input",39),n(),g(77,He,2,0,"small",34),n(),i(78,"div",35)(79,"label",40),o(80,"Apellido"),n(),i(81,"div",29),c(),i(82,"svg",30),l(83,"circle",37)(84,"path",38),n(),x(),l(85,"input",41),n(),g(86,Ue,2,0,"small",34),n(),i(87,"div",27)(88,"label",42),o(89,"Edad"),n(),i(90,"div",29),c(),i(91,"svg",30),l(92,"path",43),n(),x(),l(93,"input",44),n(),g(94,Le,2,0,"small",34),n(),i(95,"div",35)(96,"label",45),o(97,"Contrase\xF1a"),n(),i(98,"div",29),c(),i(99,"svg",30),l(100,"rect",46)(101,"path",47),n(),x(),l(102,"input",48),n(),g(103,qe,2,0,"small",34),n(),i(104,"div",35)(105,"label",49),o(106,"Confirmar contrase\xF1a"),n(),i(107,"div",29),c(),i(108,"svg",30),l(109,"rect",46)(110,"path",47),n(),x(),l(111,"input",50),n(),g(112,$e,2,0,"small",34),n()(),i(113,"div",51)(114,"div",52),g(115,Ze,3,0,":svg:svg",30),n(),i(116,"div",53)(117,"strong"),o(118,"Foto de perfil"),n(),i(119,"span"),o(120),n()(),i(121,"label",54),o(122),n(),i(123,"input",55),Y("change",function(s){return t.seleccionarAvatar(s)}),n()(),l(124,"p-button",56),i(125,"p",57),o(126," \xBFYa ten\xE9s una cuenta? "),i(127,"a",58),o(128,"Inici\xE1 sesi\xF3n"),n()()()()()()),r&2){let a,s,v,C,O,E,S,k,I,R,T,N;d(58),J("formGroup",t.formularioRegistro),d(5),h("input-invalid",((a=t.formularioRegistro.get("correo"))==null?null:a.invalid)&&((a=t.formularioRegistro.get("correo"))==null?null:a.touched)),d(5),f((s=t.formularioRegistro.get("correo"))!=null&&s.invalid&&((s=t.formularioRegistro.get("correo"))!=null&&s.touched)?68:-1),d(4),h("input-invalid",((v=t.formularioRegistro.get("nombre"))==null?null:v.invalid)&&((v=t.formularioRegistro.get("nombre"))==null?null:v.touched)),d(5),f((C=t.formularioRegistro.get("nombre"))!=null&&C.invalid&&((C=t.formularioRegistro.get("nombre"))!=null&&C.touched)?77:-1),d(4),h("input-invalid",((O=t.formularioRegistro.get("apellido"))==null?null:O.invalid)&&((O=t.formularioRegistro.get("apellido"))==null?null:O.touched)),d(5),f((E=t.formularioRegistro.get("apellido"))!=null&&E.invalid&&((E=t.formularioRegistro.get("apellido"))!=null&&E.touched)?86:-1),d(4),h("input-invalid",((S=t.formularioRegistro.get("edad"))==null?null:S.invalid)&&((S=t.formularioRegistro.get("edad"))==null?null:S.touched)),d(4),f((k=t.formularioRegistro.get("edad"))!=null&&k.invalid&&((k=t.formularioRegistro.get("edad"))!=null&&k.touched)?94:-1),d(4),h("input-invalid",((I=t.formularioRegistro.get("password"))==null?null:I.invalid)&&((I=t.formularioRegistro.get("password"))==null?null:I.touched)),d(5),f((R=t.formularioRegistro.get("password"))!=null&&R.invalid&&((R=t.formularioRegistro.get("password"))!=null&&R.touched)?103:-1),d(4),h("input-invalid",((T=t.formularioRegistro.get("repitePassword"))==null?null:T.invalid)&&((T=t.formularioRegistro.get("repitePassword"))==null?null:T.touched)),d(5),f((N=t.formularioRegistro.get("repitePassword"))!=null&&N.hasError("noCoincide")&&((N=t.formularioRegistro.get("repitePassword"))!=null&&N.touched)?112:-1),d(2),X("background-image",t.avatarPreview?"url("+t.avatarPreview+")":null),h("has-image",t.avatarPreview),d(),f(t.avatarPreview?-1:115),d(5),te((t.avatar==null?null:t.avatar.name)||"JPG o PNG \xB7 Opcional"),d(2),ne(" ",t.avatar?"Cambiar":"Elegir foto"," "),d(2),J("loading",t.enviando)}},dependencies:[he,de,ae,se,le,pe,ge,ce,me,ue,oe,Ee,Ie,Ce,xe,ve,be,_e,we],styles:['[_nghost-%COMP%]{display:block;min-height:100vh;color:#f5f3ff;font-family:Inter,Aptos,Segoe UI,sans-serif}*[_ngcontent-%COMP%]{box-sizing:border-box}.register-page[_ngcontent-%COMP%]{--ink: #f5f3ff;--muted: #aaa8b8;--indigo: #8b7cf6;--indigo-dark: #a398ff;--lavender: #292440;--coral: #ff7c6d;--paper: #11131d;min-height:100vh;display:grid;place-items:center;padding:2rem;background:radial-gradient(circle at 8% 10%,rgba(139,124,246,.16),transparent 24rem),radial-gradient(circle at 92% 90%,rgba(255,124,109,.09),transparent 23rem),#080912}.register-shell[_ngcontent-%COMP%]{width:min(1180px,100%);min-height:min(790px,calc(100vh - 4rem));display:grid;grid-template-columns:.85fr 1.15fr;overflow:hidden;border:1px solid #2b2d3d;border-radius:30px;background:#11131d;box-shadow:0 28px 80px #0000006b}.welcome-panel[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;overflow:hidden;padding:2.75rem;color:#fff;background:linear-gradient(145deg,rgba(255,255,255,.06),transparent 42%),linear-gradient(160deg,#4d438f,#342d69 52%,#211d48)}.welcome-panel[_ngcontent-%COMP%]:before, .welcome-panel[_ngcontent-%COMP%]:after{position:absolute;content:"";border-radius:50%;background:#ffffff12}.welcome-panel[_ngcontent-%COMP%]:before{width:280px;height:280px;top:-120px;right:-110px}.welcome-panel[_ngcontent-%COMP%]:after{width:190px;height:190px;bottom:-95px;left:-65px}.brand[_ngcontent-%COMP%], .mobile-brand[_ngcontent-%COMP%]{position:relative;z-index:2;display:inline-flex;align-items:center;gap:.7rem;width:fit-content;color:inherit;font-family:Georgia,Times New Roman,serif;font-size:1.55rem;font-weight:700;text-decoration:none;letter-spacing:-.04em}.brand-mark[_ngcontent-%COMP%]{position:relative;width:34px;height:28px;display:inline-block}.brand-mark[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;width:21px;height:21px;border:2px solid currentColor;border-radius:50%}.brand-mark[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{top:0;left:0}.brand-mark[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{right:0;bottom:0}.welcome-copy[_ngcontent-%COMP%]{position:relative;z-index:2;margin-top:5.2rem}.eyebrow[_ngcontent-%COMP%], .step-label[_ngcontent-%COMP%]{margin:0 0 .8rem;font-size:.76rem;font-weight:800;text-transform:uppercase;letter-spacing:.16em}.eyebrow[_ngcontent-%COMP%]{color:#c9c2ff}.welcome-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{max-width:390px;margin:0;font-family:Georgia,Times New Roman,serif;font-size:clamp(2.7rem,5vw,4.4rem);line-height:.98;letter-spacing:-.055em}.welcome-copy[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:last-child{max-width:390px;margin:1.5rem 0 0;color:#d3cff0;font-size:1rem;line-height:1.7}.social-scene[_ngcontent-%COMP%]{position:relative;flex:1;min-height:285px;margin-top:1rem}.orbit[_ngcontent-%COMP%]{position:absolute;border:1px solid rgba(255,255,255,.18);border-radius:50%}.orbit-one[_ngcontent-%COMP%]{width:250px;height:250px;right:1rem;bottom:0}.orbit-two[_ngcontent-%COMP%]{width:165px;height:165px;right:3.7rem;bottom:2.7rem}.avatar[_ngcontent-%COMP%]{position:absolute;z-index:2;display:grid;place-items:center;border:4px solid rgba(255,255,255,.88);border-radius:50%;color:#fff;font-size:.72rem;font-weight:800;box-shadow:0 14px 30px #231b6947}.avatar-luna[_ngcontent-%COMP%]{width:70px;height:70px;right:3.2rem;bottom:5.5rem;background:#f19a67}.avatar-nico[_ngcontent-%COMP%]{width:52px;height:52px;right:13.5rem;bottom:3rem;background:#31a8a0}.avatar-vale[_ngcontent-%COMP%]{width:44px;height:44px;right:1.1rem;bottom:14rem;background:#e7618c}.message-card[_ngcontent-%COMP%]{position:absolute;z-index:3;display:flex;align-items:center;gap:.55rem;padding:.7rem .85rem;border:1px solid rgba(255,255,255,.55);border-radius:14px;color:var(--ink);background:#151723f5;box-shadow:0 12px 26px #0000005c;font-size:.76rem;font-weight:700}.message-one[_ngcontent-%COMP%]{right:8.5rem;bottom:10.8rem;transform:rotate(-4deg)}.message-two[_ngcontent-%COMP%]{right:-.5rem;bottom:1.7rem;transform:rotate(3deg)}.message-icon[_ngcontent-%COMP%]{display:grid;place-items:center;width:23px;height:23px;border-radius:8px;color:#fff;background:var(--coral)}.online-dot[_ngcontent-%COMP%]{width:9px;height:9px;border-radius:50%;background:#37b985;box-shadow:0 0 0 4px #37b98526}.community-note[_ngcontent-%COMP%]{position:relative;z-index:2;display:flex;align-items:center;gap:.8rem;margin:auto 0 0;color:#d3cff0;font-size:.76rem}.community-faces[_ngcontent-%COMP%]{display:flex}.community-faces[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:grid;place-items:center;width:29px;height:29px;margin-left:-7px;border:2px solid #5b4ed8;border-radius:50%;color:#fff;background:#ff8c7f;font-size:.52rem;font-weight:800}.form-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:clamp(2.5rem,5vw,5rem);background:var(--paper)}.mobile-brand[_ngcontent-%COMP%]{display:none;margin-bottom:2rem;color:var(--indigo)}.form-heading[_ngcontent-%COMP%]{margin-bottom:2rem}.step-label[_ngcontent-%COMP%]{color:var(--indigo)}.form-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:var(--ink);font-family:Georgia,Times New Roman,serif;font-size:clamp(2.25rem,4vw,3.25rem);line-height:1.05;letter-spacing:-.045em}.form-heading[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:last-child{margin:.75rem 0 0;color:var(--muted);line-height:1.5}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.05rem 1.25rem}.field-wide[_ngcontent-%COMP%]{grid-column:1 / -1}.field-group[_ngcontent-%COMP%]{display:flex;min-width:0;flex-direction:column;gap:.45rem}.field-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#d8d5e5;font-size:.78rem;font-weight:750}.input-wrap[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center}.input-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:absolute;z-index:2;left:1rem;width:18px;height:18px;fill:none;stroke:#858399;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.7;pointer-events:none}.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:48px;padding:0 1rem 0 2.85rem;border:1px solid #343647;border-radius:12px;color:var(--ink);background:#181a26;font-family:inherit;font-size:.9rem;box-shadow:0 3px 10px #0000001f;transition:border-color .16s ease,box-shadow .16s ease,transform .16s ease}.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#777589}.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:var(--indigo);outline:none;box-shadow:0 0 0 4px #8b7cf629}.input-wrap[_ngcontent-%COMP%]:focus-within   svg[_ngcontent-%COMP%]{stroke:var(--indigo)}.input-wrap.input-invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-color:#ff837a}.field-error[_ngcontent-%COMP%]{color:#ff938b;font-size:.71rem;line-height:1.3}.avatar-field[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.85rem;margin:1.4rem 0;padding:.85rem;border:1px dashed #494461;border-radius:14px;background:#171824}.avatar-preview[_ngcontent-%COMP%]{display:grid;flex:0 0 44px;width:44px;height:44px;place-items:center;overflow:hidden;border-radius:50%;color:var(--indigo);background:var(--lavender);background-position:center;background-size:cover}.avatar-preview[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:22px;fill:none;stroke:currentColor;stroke-linecap:round;stroke-width:1.7}.avatar-copy[_ngcontent-%COMP%]{display:flex;min-width:0;flex:1;flex-direction:column;gap:.18rem}.avatar-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#e5e2ef;font-size:.78rem}.avatar-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{overflow:hidden;color:var(--muted);font-size:.7rem;text-overflow:ellipsis;white-space:nowrap}.file-button[_ngcontent-%COMP%]{flex:0 0 auto;padding:.58rem .8rem;border:1px solid #4d4868;border-radius:9px;color:var(--indigo-dark);background:#1b1c29;font-size:.72rem;font-weight:800;cursor:pointer;transition:border-color .16s ease,background .16s ease}.file-button[_ngcontent-%COMP%]:hover{border-color:var(--indigo);background:#292440}.visually-hidden[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}[_nghost-%COMP%]     .register-submit{width:100%;height:50px;justify-content:center;border:0;border-radius:12px;color:#fff;background:#6558e8;font-family:inherit;font-size:.92rem;font-weight:800;box-shadow:0 10px 24px #5145cf3d;transition:background .16s ease,box-shadow .16s ease,transform .16s ease}[_nghost-%COMP%]     .register-submit:not(:disabled):hover{background:#5548d0;box-shadow:0 13px 28px #5145cf4d;transform:translateY(-1px)}[_nghost-%COMP%]     .register-submit:focus-visible{outline:3px solid rgba(101,88,232,.24);outline-offset:3px}.login-link[_ngcontent-%COMP%]{margin:1.25rem 0 0;color:var(--muted);font-size:.8rem;text-align:center}.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--indigo-dark);font-weight:800;text-underline-offset:3px}@media(max-width:900px){.register-page[_ngcontent-%COMP%]{padding:1.25rem}.register-shell[_ngcontent-%COMP%]{grid-template-columns:1fr;min-height:auto}.welcome-panel[_ngcontent-%COMP%]{display:none}.mobile-brand[_ngcontent-%COMP%]{display:inline-flex}}@media(max-width:560px){.register-page[_ngcontent-%COMP%]{display:block;padding:0;background:var(--paper)}.register-shell[_ngcontent-%COMP%]{min-height:100vh;border:0;border-radius:0;box-shadow:none}.form-panel[_ngcontent-%COMP%]{justify-content:flex-start;padding:2rem 1.25rem}.form-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.field-wide[_ngcontent-%COMP%]{grid-column:auto}.form-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.2rem}}@media(prefers-reduced-motion:reduce){*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}']})};export{Te as Register};
