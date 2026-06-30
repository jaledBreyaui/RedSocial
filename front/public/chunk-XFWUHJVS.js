import{$ as cn,$a as d,Aa as Ve,Ac as Lt,B as pe,Ba as bn,Bb as xe,Bc as ue,Cb as wn,Cc as ye,D as Dt,Da as vn,Db as de,Dc as k,E as Ue,Eb as Sn,Ec as $n,F as Z,Fa as yn,Fb as Xe,G as un,Ga as le,Gb as Ye,Ha as _n,Hb as me,I as $,Ia as T,Ib as An,J as S,Ja as qe,Jb as In,K as re,Ka as Ze,L as m,Lb as Fe,M as X,Mb as Vn,N as ze,Nb as be,Ob as xn,Pb as Fn,Q as B,Qa as y,R as se,S as _,Ta as At,U as R,V as L,Vb as Nn,W as b,Xb as Ke,Y as z,Ya as W,Z as g,Za as I,_ as ae,_a as F,_b as ve,a as h,b as N,bb as It,bc as Nt,c as rn,ca as H,da as hn,db as Qe,dc as Pn,e as sn,ea as pn,eb as D,ec as Tn,f as an,fb as Cn,fc as Pt,gb as Vt,ha as A,hb as xt,hc as Je,i as ln,ia as Et,ic as kn,j as dn,ja as Mt,ka as Se,kb as Dn,la as wt,lb as En,ma as St,mb as Mn,na as Ae,nb as Y,oa as Ge,ob as ge,pa as We,pb as Ft,q as je,qa as fn,qc as On,rc as ee,s as Q,sa as gn,t as P,ta as fe,tc as Tt,u as O,ua as G,uc as et,v as M,va as K,vc as kt,wa as J,wc as Bn,x as p,xa as mn,xc as Ln,yc as Ot,za as Ie,zc as Bt}from"./chunk-5JAVDVUH.js";var Qn=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(_(se),_(X))};static \u0275dir=b({type:t})}return t})(),Xn=(()=>{class t extends Qn{static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275dir=b({type:t,features:[g]})}return t})(),ut=new M("");var eo={provide:ut,useExisting:Q(()=>Yn),multi:!0};function to(){let t=xt()?xt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var no=new M(""),Yn=(()=>{class t extends Qn{_compositionMode;_composing=!1;constructor(e,n,o){super(e,n),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!to())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(_(se),_(X),_(no,8))};static \u0275dir=b({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&fe("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[y([eo]),g]})}return t})();function zt(t){return t==null||Gt(t)===0}function Gt(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Ee=new M(""),Wt=new M(""),io=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Rn=class{static min(i){return Kn(i)}static max(i){return Jn(i)}static required(i){return oo(i)}static requiredTrue(i){return ro(i)}static email(i){return so(i)}static minLength(i){return ao(i)}static maxLength(i){return ei(i)}static pattern(i){return lo(i)}static nullValidator(i){return nt()}static compose(i){return si(i)}static composeAsync(i){return li(i)}};function Kn(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function Jn(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function oo(t){return zt(t.value)?{required:!0}:null}function ro(t){return t.value===!0?null:{required:!0}}function so(t){return zt(t.value)||io.test(t.value)?null:{email:!0}}function ao(t){return i=>{let e=i.value?.length??Gt(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function ei(t){return i=>{let e=i.value?.length??Gt(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function lo(t){if(!t)return nt;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(zt(n.value))return null;let o=n.value;return i.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function nt(t){return null}function ti(t){return t!=null}function ni(t){return cn(t)?an(t):t}function ii(t){let i={};return t.forEach(e=>{i=e!=null?h(h({},i),e):i}),Object.keys(i).length===0?null:i}function oi(t,i){return i.map(e=>e(t))}function uo(t){return!t.validate}function ri(t){return t.map(i=>uo(i)?i:e=>i.validate(e))}function si(t){if(!t)return null;let i=t.filter(ti);return i.length==0?null:function(e){return ii(oi(e,i))}}function ai(t){return t!=null?si(ri(t)):null}function li(t){if(!t)return null;let i=t.filter(ti);return i.length==0?null:function(e){let n=oi(e,i).map(ni);return dn(n).pipe(ln(ii))}}function di(t){return t!=null?li(ri(t)):null}function Hn(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function ui(t){return t._rawValidators}function ci(t){return t._rawAsyncValidators}function $t(t){return t?Array.isArray(t)?t:[t]:[]}function it(t,i){return Array.isArray(t)?t.includes(i):t===i}function jn(t,i){let e=$t(i);return $t(t).forEach(o=>{it(e,o)||e.push(o)}),e}function Un(t,i){return $t(i).filter(e=>!it(t,e))}var ot=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=ai(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=di(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},ce=class extends ot{name;get formDirective(){return null}get path(){return null}},he=class extends ot{_parent=null;name=null;valueAccessor=null},rt=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var os=(()=>{class t extends rt{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(_(he,2))};static \u0275dir=b({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&le("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[g]})}return t})(),rs=(()=>{class t extends rt{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(_(ce,10))};static \u0275dir=b({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,o){n&2&&le("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[g]})}return t})();var Ne="VALID",tt="INVALID",_e="PENDING",Pe="DISABLED",te=class{},st=class extends te{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Te=class extends te{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},ke=class extends te{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Ce=class extends te{status;source;constructor(i,e){super(),this.status=i,this.source=e}},Rt=class extends te{source;constructor(i){super(),this.source=i}},Be=class extends te{source;constructor(i){super(),this.source=i}};function qt(t){return(ct(t)?t.validators:t)||null}function co(t){return Array.isArray(t)?ai(t):t||null}function Zt(t,i){return(ct(i)?i.asyncValidators:t)||null}function ho(t){return Array.isArray(t)?di(t):t||null}function ct(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function hi(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new je(1e3,"");if(!n[e])throw new je(1001,"")}function pi(t,i,e){t._forEachChild((n,o)=>{if(e[o]===void 0)throw new je(-1002,"")})}var De=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return W(this.statusReactive)}set status(i){W(()=>this.statusReactive.set(i))}_status=I(()=>this.statusReactive());statusReactive=$(void 0);get valid(){return this.status===Ne}get invalid(){return this.status===tt}get pending(){return this.status===_e}get disabled(){return this.status===Pe}get enabled(){return this.status!==Pe}errors;get pristine(){return W(this.pristineReactive)}set pristine(i){W(()=>this.pristineReactive.set(i))}_pristine=I(()=>this.pristineReactive());pristineReactive=$(!0);get dirty(){return!this.pristine}get touched(){return W(this.touchedReactive)}set touched(i){W(()=>this.touchedReactive.set(i))}_touched=I(()=>this.touchedReactive());touchedReactive=$(!1);get untouched(){return!this.touched}_events=new sn;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(jn(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(jn(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(Un(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(Un(i,this._rawAsyncValidators))}hasValidator(i){return it(this._rawValidators,i)}hasAsyncValidator(i){return it(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(N(h({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new ke(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),i.onlySelf||this._parent?._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new ke(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(N(h({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Te(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new Te(!0,n))}markAsPending(i={}){this.status=_e;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ce(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(N(h({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Pe,this.errors=null,this._forEachChild(o=>{o.disable(N(h({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new st(this.value,n)),this._events.next(new Ce(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(N(h({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Ne,this._forEachChild(n=>{n.enable(N(h({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(N(h({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ne||this.status===_e)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new st(this.value,e)),this._events.next(new Ce(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(N(h({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Pe:Ne}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=_e,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=ni(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,o)=>n&&n._find(o),this)}getError(i,e){let n=e?this.get(e):this;return n?.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new Ce(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new Z,this.statusChanges=new Z}_calculateStatus(){return this._allControlsDisabled()?Pe:this.errors?tt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_e)?_e:this._anyControlsHaveStatus(tt)?tt:Ne}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,i.onlySelf||this._parent?._updatePristine(i,e),o&&this._events.next(new Te(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new ke(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){ct(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=co(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=ho(this._rawAsyncValidators)}},at=class extends De{constructor(i,e,n){super(qt(e),Zt(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){pi(this,!0,i),Object.keys(i).forEach(n=>{hi(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let o=this.controls[n];o&&o.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,o)=>{n.reset(i?i[o]:null,N(h({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Be(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,o)=>((n.enabled||this.disabled)&&(e[o]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((o,r)=>{n=e(n,o,r)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Ht=class extends at{};var ht=new M("",{factory:()=>pt}),pt="always";function fi(t,i){return[...i.path,t]}function jt(t,i,e=pt){Qt(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),fo(t,i),mo(t,i),go(t,i),po(t,i)}function zn(t,i,e=!0){let n=()=>{};i?.valueAccessor?.registerOnChange(n),i?.valueAccessor?.registerOnTouched(n),dt(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function lt(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function po(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Qt(t,i){let e=ui(t);i.validator!==null?t.setValidators(Hn(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=ci(t);i.asyncValidator!==null?t.setAsyncValidators(Hn(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let o=()=>t.updateValueAndValidity();lt(i._rawValidators,o),lt(i._rawAsyncValidators,o)}function dt(t,i){let e=!1;if(t!==null){if(i.validator!==null){let o=ui(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.validator);r.length!==o.length&&(e=!0,t.setValidators(r))}}if(i.asyncValidator!==null){let o=ci(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.asyncValidator);r.length!==o.length&&(e=!0,t.setAsyncValidators(r))}}}let n=()=>{};return lt(i._rawValidators,n),lt(i._rawAsyncValidators,n),e}function fo(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&gi(t,i)})}function go(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&gi(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function gi(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function mo(t,i){let e=(n,o)=>{i.valueAccessor.writeValue(n),o&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function bo(t,i){t==null,Qt(t,i)}function vo(t,i){return dt(t,i)}function mi(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function yo(t){return Object.getPrototypeOf(t.constructor)===Xn}function _o(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function bi(t,i){if(!i)return null;Array.isArray(i);let e,n,o;return i.forEach(r=>{r.constructor===Yn?e=r:yo(r)?n=r:o=r}),o||n||e||null}function Co(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function Gn(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function Wn(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Oe=class extends De{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(qt(e),Zt(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ct(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Wn(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Be(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Gn(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Gn(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Wn(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Do=t=>t instanceof Oe;var Eo={provide:he,useExisting:Q(()=>Mo)},qn=Promise.resolve(),Mo=(()=>{class t extends he{_changeDetectorRef;callSetDisabledState;control=new Oe;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new Z;constructor(e,n,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=bi(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),mi(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){jt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){qn.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,o=n!==0&&D(n);qn.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?fi(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(_(ce,9),_(Ee,10),_(Wt,10),_(ut,10),_(Qe,8),_(ht,8))};static \u0275dir=b({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[y([Eo]),g,re]})}return t})();var as=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=b({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),wo={provide:ut,useExisting:Q(()=>So),multi:!0},So=(()=>{class t extends Xn{writeValue(e){let n=e??"";this.setProperty("value",n)}registerOnChange(e){this.onChange=n=>{e(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275dir=b({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,o){n&1&&fe("input",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},standalone:!1,features:[y([wo]),g]})}return t})();var Ut=class extends De{constructor(i,e,n){super(qt(e),Zt(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let o=this._adjustIndex(i);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),e&&(this.controls.splice(o,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){pi(this,!1,i),i.forEach((n,o)=>{hi(this,!1,o),this.at(o).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((n,o)=>{this.at(o)&&this.at(o).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,o)=>{n.reset(i[o],N(h({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Be(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var Ao=(()=>{class t extends ce{callSetDisabledState;get submitted(){return W(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=I(()=>this._submittedReactive());_submittedReactive=$(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(dt(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return jt(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){zn(e.control||null,e,!1),Co(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,_o(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Rt(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,o=this.form.get(e.path);n!==o&&(zn(n||null,e),Do(o)&&(jt(o,e,this.callSetDisabledState),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);bo(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&vo(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Qt(this.form,this),this._oldForm&&dt(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(_(Ee,10),_(Wt,10),_(ht,8))};static \u0275dir=b({type:t,features:[g,re]})}return t})();var vi=new M("");var Io={provide:he,useExisting:Q(()=>Vo)},Vo=(()=>{class t extends he{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new Z;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,o,r,s){super(),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=bi(this,r)}ngOnChanges(e){this._added||this._setUpControl(),mi(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return fi(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(_(ce,13),_(Ee,10),_(Wt,10),_(ut,10),_(vi,8))};static \u0275dir=b({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[y([Io]),g,re]})}return t})();var xo={provide:ce,useExisting:Q(()=>Fo)},Fo=(()=>{class t extends Ao{form=null;ngSubmit=new Z;get control(){return this.form}static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275dir=b({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,o){n&1&&fe("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[y([xo]),g]})}return t})();function No(t){return typeof t=="number"?t:parseInt(t,10)}function yi(t){return typeof t=="number"?t:parseFloat(t)}var Xt=(()=>{class t{_validator=nt;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):nt,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=b({type:t,features:[re]})}return t})(),Po={provide:Ee,useExisting:Q(()=>To),multi:!0},To=(()=>{class t extends Xt{max;inputName="max";normalizeInput=e=>yi(e);createValidator=e=>Jn(e);static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275dir=b({type:t,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(n,o){n&2&&H("max",o._enabled?o.max:null)},inputs:{max:"max"},standalone:!1,features:[y([Po]),g]})}return t})(),ko={provide:Ee,useExisting:Q(()=>Oo),multi:!0},Oo=(()=>{class t extends Xt{min;inputName="min";normalizeInput=e=>yi(e);createValidator=e=>Kn(e);static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275dir=b({type:t,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(n,o){n&2&&H("min",o._enabled?o.min:null)},inputs:{min:"min"},standalone:!1,features:[y([ko]),g]})}return t})();var Bo={provide:Ee,useExisting:Q(()=>Lo),multi:!0},Lo=(()=>{class t extends Xt{maxlength;inputName="maxlength";normalizeInput=e=>No(e);createValidator=e=>ei(e);static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275dir=b({type:t,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(n,o){n&2&&H("maxlength",o._enabled?o.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[y([Bo]),g]})}return t})();var _i=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=O({})}return t})();function Zn(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var ls=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let o=this._reduceControls(e),r={};return Zn(n)?r=n:n!==null&&(r.validators=n.validator,r.asyncValidators=n.asyncValidator),new at(o,r)}record(e,n=null){let o=this._reduceControls(e);return new Ht(o,n)}control(e,n,o){let r={};return this.useNonNullable?(Zn(n)?r=n:(r.validators=n,r.asyncValidators=o),new Oe(e,N(h({},r),{nonNullable:!0}))):new Oe(e,n,o)}array(e,n,o){let r=e.map(s=>this._createControl(s));return new Ut(r,n,o)}_reduceControls(e){let n={};return Object.keys(e).forEach(o=>{n[o]=this._createControl(e[o])}),n}_createControl(e){if(e instanceof Oe)return e;if(e instanceof De)return e;if(Array.isArray(e)){let n=e[0],o=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(n,o,r)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ds=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ht,useValue:e.callSetDisabledState??pt}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=O({imports:[_i]})}return t})(),us=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:vi,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:ht,useValue:e.callSetDisabledState??pt}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=O({imports:[_i]})}return t})();function ne(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[ne(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}var $o=Object.defineProperty,Ci=Object.getOwnPropertySymbols,Ro=Object.prototype.hasOwnProperty,Ho=Object.prototype.propertyIsEnumerable,Di=(t,i,e)=>i in t?$o(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Ei=(t,i)=>{for(var e in i||(i={}))Ro.call(i,e)&&Di(t,e,i[e]);if(Ci)for(var e of Ci(i))Ho.call(i,e)&&Di(t,e,i[e]);return t};function Mi(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[Mi(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function jo(t){return typeof t=="function"&&"call"in t&&"apply"in t}function Uo({skipUndefined:t=!1},...i){return i?.reduce((e,n={})=>{for(let o in n){let r=n[o];if(!(t&&r===void 0))if(o==="style")e.style=Ei(Ei({},e.style),n.style);else if(o==="class"||o==="className")e[o]=Mi(e[o],n[o]);else if(jo(r)){let s=e[o];e[o]=s?(...a)=>{s(...a),r(...a)}:r}else e[o]=r}return e},{})}function Yt(...t){return Uo({skipUndefined:!1},...t)}var ft={};function Le(t="pui_id_"){return Object.hasOwn(ft,t)||(ft[t]=0),ft[t]++,`${t}${ft[t]}`}var wi=(()=>{class t extends k{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),j=new M("PARENT_INSTANCE"),V=(()=>{class t{document=p(Ue);platformId=p(ze);el=p(X);injector=p(Dt);cd=p(Qe);renderer=p(se);config=p($n);$parentInstance=p(j,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=p(wi);baseStyle=p(k);scopedStyleEl;parent=this.$params.parent;cn=ne;_themeScopedListener;themeChangeListenerMap=new Map;dt=d();unstyled=d();pt=d();ptOptions=d();$attrSelector=Le("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=$(void 0);directiveUnstyled=$(void 0);$unstyled=I(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=I(()=>Xe(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>Xe(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||Xe(e,this.$params))}get $style(){return h(h({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){S(e=>{this.document&&!Ft(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),S(e=>{this.document&&!Ft(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...n){return wn(e)?e(...n):Yt(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n="",o={}){return An(e,n,o)}_hook(e,...n){if(!this.$hostName){let o=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);o?.(...n),r?.(...n)}}_load(){ye.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),ye.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);de(e)&&this.baseStyle.load(e,h({name:"global"},this.$styleOptions))}_loadCoreStyles(){!ye.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),ye.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!ue.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,h({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,h({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(o?.css,h({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(h({name:"global-style"},this.$styleOptions),r),ue.setLoadedStyleName("common")}if(!ue.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,h({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(h({name:`${this.$style?.name}-style`},this.$styleOptions),n),ue.setLoadedStyleName(this.$style?.name)}if(!ue.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,h({name:"layer-order",first:!0},this.$styleOptions)),ue.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},o=this.$style?.load(n,h({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,n=()=>{}){this._offThemeChangeListener(e),ye.clearLoadedStyleNames();let o=n.bind(this);this.themeChangeListenerMap.set(e,o),Bt.on("theme:change",o)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(Bt.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},n="",o={},r=!0){let s=/./g.test(n)&&!!o[n.split(".")[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},c=r?s?this._useGlobalPT(this._getPTClassValue,n,o):this._useDefaultPT(this._getPTClassValue,n,o):void 0,u=s?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,N(h({},o),{global:c||{}})),f=this._getPTDatasets(n);return a||!a&&u?l?this._mergeProps(l,c,u,f):h(h(h({},c),u),f):h(h({},u),f)}_getPTDatasets(e=""){let n="data-pc-",o=e==="root"&&de(this.$pt()?.["data-pc-section"]);return e!=="transition"&&N(h({},e==="root"&&N(h({[`${n}name`]:me(o?this.$pt()?.["data-pc-section"]:this.$name)},o&&{[`${n}extend`]:me(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:me(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,n,o){let r=this._getOptionValue(e,n,o);return Ye(r)||In(r)?{class:r}:r}_getPT(e,n="",o){let r=(s,a=!1)=>{let l=o?o(s):s,c=me(n),u=me(this.$hostName||this.$name);return(a?c!==u?l?.[c]:void 0:l?.[c])??l};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:r(e.originalValue),value:r(e.value)}:r(e,!0)}_usePT(e,n,o,r){let s=a=>n?.call(this,a,o,r);if(e?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:l=!1}=e._usept||this.config?.ptOptions()||{},c=s(e.originalValue),u=s(e.value);return c===void 0&&u===void 0?void 0:Ye(u)?u:Ye(c)?c:a||!a&&u?l?this._mergeProps(l,c,u):h(h({},c),u):u}return s(e)}_useGlobalPT(e,n,o){return this._usePT(this.$globalPT,e,n,o)}_useDefaultPT(e,n,o){return this._usePT(this.$defaultPT,e,n,o)}ptm(e="",n={}){return this._getPTValue(this.$pt(),e,h(h({},this.$params),n))}ptms(e,n={}){return e.reduce((o,r)=>(o=Yt(o,this.ptm(r,n))||{},o),{})}ptmo(e={},n="",o={}){return this._getPTValue(e,n,h({instance:this},o),!1)}cx(e,n={}){return this.$unstyled()?void 0:ne(this._getOptionValue(this.$style.classes,e,h(h({},this.$params),n)))}sx(e="",n=!0,o={}){if(n){let r=this._getOptionValue(this.$style.inlineStyles,e,h(h({},this.$params),o)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,h(h({},this.$params),o));return h(h({},s),r)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=b({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[y([wi,k]),re]})}return t})();var Kt=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==e)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,n){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,o="self"){o!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,o="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),o==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,o=!0){let r=q=>{if(q)return getComputedStyle(q).getPropertyValue("position")==="relative"?q:r(q.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),f=this.getViewport(),v=r(e)?.getBoundingClientRect()||{top:-1*c,left:-1*u},w,x,oe="top";l.top+a+s.height>f.height?(w=l.top-v.top-s.height,oe="bottom",l.top+w<0&&(w=-1*l.top)):(w=a+l.top-v.top,oe="top");let we=l.left+s.width-f.width,He=l.left-v.left;if(s.width>f.width?x=(l.left-v.left)*-1:we>0?x=He-we:x=l.left-v.left,e.style.top=w+"px",e.style.left=x+"px",e.style.transformOrigin=oe,o){let q=Fn(/-anchor-gutter$/)?.value;e.style.marginTop=oe==="bottom"?`calc(${q??"2px"} * -1)`:q??""}}static absolutePosition(e,n,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,c=n.offsetWidth,u=n.getBoundingClientRect(),f=this.getWindowScrollTop(),C=this.getWindowScrollLeft(),v=this.getViewport(),w,x;u.top+l+s>v.height?(w=u.top+f-s,e.style.transformOrigin="bottom",w<0&&(w=f)):(w=l+u.top+f,e.style.transformOrigin="top"),u.left+a>v.width?x=Math.max(0,u.left+C+c-a):x=u.left+C,e.style.top=w+"px",e.style.left=x+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let u of c){let f=this.findSingle(a,u);f&&s(f)&&n.push(f)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,f=e.scrollTop,C=e.clientHeight,v=this.getOuterHeight(n);u<0?e.scrollTop=f+u:u+v>C&&(e.scrollTop=f+u-C+v)}static fadeIn(e,n){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let o=e.offsetWidth;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(e,n){let o=e.offsetHeight;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let e=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let o=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let o=this.findSingle(e,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,n=""){let o=this.getFocusableElements(e,n);return o.length>0?o[0]:null}static getLastFocusableElement(e,n){let o=this.getFocusableElements(e,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,n=!1){let o=t.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let o=e.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(e,n="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(n,o)}static setAttributes(e,n={}){if(this.isElement(e)){let o=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let f=Array.isArray(c)?o(r,c):Object.entries(c).map(([C,v])=>r==="style"&&(v||v===0)?`${C.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${v}`:v?C:void 0);l=f.length?l.concat(f.filter(C=>!!C)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function Vs(){Vn({variableName:Lt("scrollbar.width").name})}function xs(){xn({variableName:Lt("scrollbar.width").name})}var Si=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=Kt.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Ai=(()=>{class t extends V{autofocus=!1;focused=!1;platformId=p(ze);document=p(Ue);host=p(X);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){ge(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=Kt.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275dir=b({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[g]})}return t})();var E=(()=>{class t{el;renderer;pBind=d(void 0);_attrs=$(void 0);attrs=I(()=>this._attrs()||this.pBind());styles=I(()=>this.attrs()?.style);classes=I(()=>ne(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,S(()=>{let a=this.attrs()||{},{style:o,class:r}=a,s=rn(a,["style","class"]);for(let[l,c]of Object.entries(s))if(l.startsWith("on")&&typeof c=="function"){let u=l.slice(2).toLowerCase();if(!this.listeners.some(f=>f.eventName===u)){let f=this.renderer.listen(this.el.nativeElement,u,c);this.listeners.push({eventName:u,unlisten:f})}}else c==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,c.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=c))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){Sn(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(n){return new(n||t)(_(X),_(se))};static \u0275dir=b({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,o){n&2&&(_n(o.styles()),T(o.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),gt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=O({})}return t})();var Ii=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var zo=`
    ${Ii}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Go={root:({instance:t})=>{let i=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,o=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":de(i)&&String(i).length===1,"p-badge-dot":xe(i),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":o==="info","p-badge-success":o==="success","p-badge-warn":o==="warn","p-badge-danger":o==="danger","p-badge-secondary":o==="secondary","p-badge-contrast":o==="contrast"}]}},Vi=(()=>{class t extends k{name="badge";style=zo;classes=Go;static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var xi=new M("BADGE_INSTANCE");var Jt=(()=>{class t extends V{componentName="Badge";$pcBadge=p(xi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=d();badgeSize=d();size=d();severity=d();value=d();badgeDisabled=d(!1,{transform:D});_componentStyle=p(Vi);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275cmp=R({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,o){n&2&&(H("data-p",o.dataP),T(o.cn(o.cx("root"),o.styleClass())),yn("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[y([Vi,{provide:xi,useExisting:t},{provide:j,useExisting:t}]),z([E]),g],decls:1,vars:1,template:function(n,o){n&1&&qe(0),n&2&&Ze(o.value())},dependencies:[Y,ee,gt],encapsulation:2,changeDetection:0})}return t})(),Fi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=O({imports:[Jt,ee,ee]})}return t})();var qo=["*"],Zo={root:"p-fluid"},Ni=(()=>{class t extends k{name="fluid";classes=Zo;static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Pi=new M("FLUID_INSTANCE"),en=(()=>{class t extends V{componentName="Fluid";$pcFluid=p(Pi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=p(Ni);static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275cmp=R({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&T(o.cx("root"))},features:[y([Ni,{provide:Pi,useExisting:t},{provide:j,useExisting:t}]),z([E]),g],ngContentSelectors:qo,decls:1,vars:0,template:function(n,o){n&1&&(K(),J(0))},dependencies:[Y],encapsulation:2,changeDetection:0})}return t})();var Qo=["*"],Xo=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Ti=(()=>{class t extends k{name="baseicon";css=Xo;static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bt=(()=>{class t extends V{spin=!1;_componentStyle=p(Ti);getClassNames(){return ne("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275cmp=R({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&T(o.getClassNames())},inputs:{spin:[2,"spin","spin",D]},features:[y([Ti]),g],ngContentSelectors:Qo,decls:1,vars:0,template:function(n,o){n&1&&(K(),J(0))},encapsulation:2,changeDetection:0})}return t})();var Yo=["data-p-icon","spinner"],ki=(()=>{class t extends bt{pathId;onInit(){this.pathId="url(#"+Le()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275cmp=R({type:t,selectors:[["","data-p-icon","spinner"]],features:[g],attrs:Yo,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(pe(),wt(0,"g"),Ae(1,"path",0),St(),wt(2,"defs")(3,"clipPath",1),Ae(4,"rect",2),St()()),n&2&&(H("clip-path",o.pathId),B(3),gn("id",o.pathId))},encapsulation:2})}return t})();var Ko=["data-p-icon","times"],Ta=(()=>{class t extends bt{static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275cmp=R({type:t,selectors:[["","data-p-icon","times"]],features:[g],attrs:Ko,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,o){n&1&&(pe(),Ae(0,"path",0))},encapsulation:2})}return t})();var Oi=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Jo=`
    ${Oi}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,er={root:"p-ink"},Bi=(()=>{class t extends k{name="ripple";style=Jo;classes=er;static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Li=(()=>{class t extends V{componentName="Ripple";zone=p(un);_componentStyle=p(Bi);animationListener;mouseDownListener;timeout;constructor(){super(),S(()=>{ge(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&be(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!Nt(n)&&!Pt(n)){let a=Math.max(Nn(this.el.nativeElement),Tn(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=Pn(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-Pt(n)/2,s=e.pageY-o.top+this.document.body.scrollLeft-Nt(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),!this.$unstyled()&&Fe(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&be(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&be(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&be(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,kn(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=b({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[y([Bi]),g]})}return t})();var $i=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var tr=["content"],nr=["loadingicon"],ir=["icon"],or=["*"],Wi=(t,i)=>({class:t,pt:i});function rr(t,i){t&1&&fn(0)}function sr(t,i){if(t&1&&Se(0,"span",7),t&2){let e=G(3);T(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),A("pBind",e.ptm("loadingIcon")),H("aria-hidden",!0)}}function ar(t,i){if(t&1&&(pe(),Se(0,"svg",8)),t&2){let e=G(3);T(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),A("pBind",e.ptm("loadingIcon"))("spin",!0),H("aria-hidden",!0)}}function lr(t,i){if(t&1&&(Ge(0),ae(1,sr,1,4,"span",3)(2,ar,1,5,"svg",6),We()),t&2){let e=G(2);B(),A("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),B(),A("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function dr(t,i){}function ur(t,i){if(t&1&&ae(0,dr,0,0,"ng-template",9),t&2){let e=G(2);A("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function cr(t,i){if(t&1&&(Ge(0),ae(1,lr,3,2,"ng-container",2)(2,ur,1,1,null,5),We()),t&2){let e=G();B(),A("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),B(),A("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",At(3,Wi,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function hr(t,i){if(t&1&&Se(0,"span",7),t&2){let e=G(2);T(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),A("pBind",e.ptm("icon")),H("data-p",e.dataIconP)}}function pr(t,i){}function fr(t,i){if(t&1&&ae(0,pr,0,0,"ng-template",9),t&2){let e=G(2);A("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function gr(t,i){if(t&1&&(Ge(0),ae(1,hr,1,4,"span",3)(2,fr,1,1,null,5),We()),t&2){let e=G();B(),A("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),B(),A("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",At(3,Wi,e.cx("icon"),e.ptm("icon")))}}function mr(t,i){if(t&1&&(Et(0,"span",7),qe(1),Mt()),t&2){let e=G();T(e.cx("label")),A("pBind",e.ptm("label")),H("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),B(),Ze(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function br(t,i){if(t&1&&Se(0,"p-badge",10),t&2){let e=G();A("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var vr={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,i])=>!!i).reduce((i,[e])=>i+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Me=(()=>{class t extends k{name="button";style=$i;classes=vr;static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Ri=new M("BUTTON_INSTANCE"),Hi=new M("BUTTON_DIRECTIVE_INSTANCE"),ji=new M("BUTTON_LABEL_INSTANCE"),Ui=new M("BUTTON_ICON_INSTANCE"),ie={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},zi=(()=>{class t extends V{componentName="ButtonLabel";ptButtonLabel=d();pButtonLabelPT=d();pButtonLabelUnstyled=d();$pcButtonLabel=p(ji,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(E,{self:!0});constructor(){super(),S(()=>{let e=this.ptButtonLabel()||this.pButtonLabelPT();e&&this.directivePT.set(e)}),S(()=>{this.pButtonLabelUnstyled()&&this.directiveUnstyled.set(this.pButtonLabelUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=b({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,o){n&2&&le("p-button-label",!o.$unstyled()&&!0)},inputs:{ptButtonLabel:[1,"ptButtonLabel"],pButtonLabelPT:[1,"pButtonLabelPT"],pButtonLabelUnstyled:[1,"pButtonLabelUnstyled"]},features:[y([Me,{provide:ji,useExisting:t},{provide:j,useExisting:t}]),z([E]),g]})}return t})(),Gi=(()=>{class t extends V{componentName="ButtonIcon";ptButtonIcon=d();pButtonIconPT=d();pButtonUnstyled=d();$pcButtonIcon=p(Ui,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(E,{self:!0});constructor(){super(),S(()=>{let e=this.ptButtonIcon()||this.pButtonIconPT();e&&this.directivePT.set(e)}),S(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=b({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,o){n&2&&le("p-button-icon",!o.$unstyled()&&!0)},inputs:{ptButtonIcon:[1,"ptButtonIcon"],pButtonIconPT:[1,"pButtonIconPT"],pButtonUnstyled:[1,"pButtonUnstyled"]},features:[y([Me,{provide:Ui,useExisting:t},{provide:j,useExisting:t}]),z([E]),g]})}return t})(),vl=(()=>{class t extends V{componentName="Button";$pcButtonDirective=p(Hi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(E,{self:!0});_componentStyle=p(Me);ptButtonDirective=d();pButtonPT=d();pButtonUnstyled=d();hostName="";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}constructor(){super(),S(()=>{let e=this.ptButtonDirective()||this.pButtonPT();e&&this.directivePT.set(e)}),S(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())}),S(()=>{let e=this.$unstyled();this.initialized&&e&&this.setStyleClass()})}text=!1;plain=!1;raised=!1;size;outlined=!1;rounded=!1;iconPos="left";loadingIcon;fluid=d(void 0,{transform:D});iconSignal=It(Gi);labelSignal=It(zi);isIconOnly=I(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(ie);pcFluid=p(en,{optional:!0,host:!0,skipSelf:!0});isTextButton=I(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}get icon(){return this._icon}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;onAfterViewInit(){!this.$unstyled()&&Fe(this.htmlElement,this.getStyleClass().join(" ")),ge(this.platformId)&&(this.createIcon(),this.createLabel(),this.initialized=!0)}getStyleClass(){let e=[ie.button,ie.component];return this.icon&&!this.label&&xe(this.htmlElement.textContent)&&e.push(ie.iconOnly),this.loading&&(e.push(ie.disabled,ie.loading),!this.icon&&this.label&&e.push(ie.labelOnly),this.icon&&!this.label&&!xe(this.htmlElement.textContent)&&e.push(ie.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),this.$unstyled()?[]:e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(o=>e.some(r=>o===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!ve(this.htmlElement,'[data-pc-section="buttonlabel"]')&&this.label){let n=Ke("span",{class:this.cx("label"),"p-bind":this.ptm("buttonlabel"),"aria-hidden":this.icon&&!this.label?"true":null});n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!ve(this.htmlElement,'[data-pc-section="buttonicon"]')&&(this.icon||this.loading)){let n=this.label&&!this.$unstyled()?"p-button-icon-"+this.iconPos:null,o=!this.$unstyled()&&this.getIconClass(),r=Ke("span",{class:this.cn(this.cx("icon"),n,o),"aria-hidden":"true","p-bind":this.ptm("buttonicon")});!this.loadingIcon&&this.loading&&(r.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(r,this.htmlElement.firstChild)}}updateLabel(){let e=ve(this.htmlElement,'[data-pc-section="buttonlabel"]');if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=ve(this.htmlElement,'[data-pc-section="buttonicon"]'),n=ve(this.htmlElement,'[data-pc-section="buttonlabel"]');this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e&&!this.$unstyled()?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}onDestroy(){this.initialized=!1}static \u0275fac=function(n){return new(n||t)};static \u0275dir=b({type:t,selectors:[["","pButton",""]],contentQueries:function(n,o,r){n&1&&bn(r,o.iconSignal,Gi,5)(r,o.labelSignal,zi,5),n&2&&vn(2)},hostVars:4,hostBindings:function(n,o){n&2&&le("p-button-icon-only",!o.$unstyled()&&o.isIconOnly())("p-button-text",!o.$unstyled()&&o.isTextButton())},inputs:{ptButtonDirective:[1,"ptButtonDirective"],pButtonPT:[1,"pButtonPT"],pButtonUnstyled:[1,"pButtonUnstyled"],hostName:"hostName",text:[2,"text","text",D],plain:[2,"plain","plain",D],raised:[2,"raised","raised",D],size:"size",outlined:[2,"outlined","outlined",D],rounded:[2,"rounded","rounded",D],iconPos:"iconPos",loadingIcon:"loadingIcon",fluid:[1,"fluid"],label:"label",icon:"icon",loading:"loading",buttonProps:"buttonProps",severity:"severity"},features:[y([Me,{provide:Hi,useExisting:t},{provide:j,useExisting:t}]),z([E]),g]})}return t})(),yr=(()=>{class t extends V{componentName="Button";hostName="";$pcButton=p(Ri,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(E,{self:!0});_componentStyle=p(Me);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=d(void 0,{transform:D});onClick=new Z;onFocus=new Z;onBlur=new Z;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=p(en,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275cmp=R({type:t,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&mn(r,tr,5)(r,nr,5)(r,ir,5)(r,On,4),n&2){let s;Ie(s=Ve())&&(o.contentTemplate=s.first),Ie(s=Ve())&&(o.loadingIconTemplate=s.first),Ie(s=Ve())&&(o.iconTemplate=s.first),Ie(s=Ve())&&(o.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",D],raised:[2,"raised","raised",D],rounded:[2,"rounded","rounded",D],text:[2,"text","text",D],plain:[2,"plain","plain",D],outlined:[2,"outlined","outlined",D],link:[2,"link","link",D],tabindex:[2,"tabindex","tabindex",Cn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",D],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",D],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[y([Me,{provide:Ri,useExisting:t},{provide:j,useExisting:t}]),z([E]),g],ngContentSelectors:or,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,o){n&1&&(K(),Et(0,"button",0),fe("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),J(1),ae(2,rr,1,0,"ng-container",1)(3,cr,3,6,"ng-container",2)(4,gr,3,6,"ng-container",2)(5,mr,2,6,"span",3)(6,br,1,4,"p-badge",4),Mt()),n&2&&(T(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),A("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus))("pBind",o.ptm("root")),H("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex))("data-p",o.dataP)("data-p-disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("data-p-severity",o.severity||(o.buttonProps==null?null:o.buttonProps.severity)),B(2),A("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),B(),A("ngIf",o.loading||(o.buttonProps==null?null:o.buttonProps.loading)),B(),A("ngIf",!(o.loading||o.buttonProps!=null&&o.buttonProps.loading)),B(),A("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.label||(o.buttonProps==null?null:o.buttonProps.label))),B(),A("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.badge||(o.buttonProps==null?null:o.buttonProps.badge))))},dependencies:[Y,Dn,Mn,En,Li,Ai,ki,Fi,Jt,ee,E],encapsulation:2,changeDetection:0})}return t})(),yl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=O({imports:[Y,yr,ee,ee]})}return t})();var Sl=(()=>{class t extends V{modelValue=$(void 0);$filled=I(()=>de(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275dir=b({type:t,features:[g]})}return t})();var _r=Object.defineProperty,qi=Object.getOwnPropertySymbols,Cr=Object.prototype.hasOwnProperty,Dr=Object.prototype.propertyIsEnumerable,Zi=(t,i,e)=>i in t?_r(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Qi=(t,i)=>{for(var e in i||(i={}))Cr.call(i,e)&&Zi(t,e,i[e]);if(qi)for(var e of qi(i))Dr.call(i,e)&&Zi(t,e,i[e]);return t},Er=(t,i,e)=>new Promise((n,o)=>{var r=l=>{try{a(e.next(l))}catch(c){o(c)}},s=l=>{try{a(e.throw(l))}catch(c){o(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,s);a((e=e.apply(t,i)).next())}),vt="animation",$e="transition";function Mr(t){return t?t.disabled||!!(t.safe&&Ln()):!1}function wr(t,i){return t?Qi(Qi({},t),Object.entries(i).reduce((e,[n,o])=>{var r;return e[n]=(r=t[n])!=null?r:o,e},{})):i}function Sr(t){let{name:i,enterClass:e,leaveClass:n}=t||{};return{enter:{from:e?.from||`${i}-enter-from`,to:e?.to||`${i}-enter-to`,active:e?.active||`${i}-enter-active`},leave:{from:n?.from||`${i}-leave-from`,to:n?.to||`${i}-leave-to`,active:n?.active||`${i}-leave-active`}}}function Ar(t){return{enter:{onBefore:t?.onBeforeEnter,onStart:t?.onEnter,onAfter:t?.onAfterEnter,onCancelled:t?.onEnterCancelled},leave:{onBefore:t?.onBeforeLeave,onStart:t?.onLeave,onAfter:t?.onAfterLeave,onCancelled:t?.onLeaveCancelled}}}function Ir(t,i){let e=window.getComputedStyle(t),n=v=>{let w=e[`${v}Delay`],x=e[`${v}Duration`];return[w.split(", ").map(Tt),x.split(", ").map(Tt)]},[o,r]=n($e),[s,a]=n(vt),l=Math.max(...r.map((v,w)=>v+o[w])),c=Math.max(...a.map((v,w)=>v+s[w])),u,f=0,C=0;return i===$e?l>0&&(u=$e,f=l,C=r.length):i===vt?c>0&&(u=vt,f=c,C=a.length):(f=Math.max(l,c),u=f>0?l>c?$e:vt:void 0,C=u?u===$e?r.length:a.length:0),{type:u,timeout:f,count:C}}function yt(t,i){return typeof t=="number"?t:typeof t=="object"&&t[i]!=null?t[i]:null}function Vr(t,i=!0,e=!1){if(!i&&!e)return;let n=Bn(t);i&&Ot(t,"--pui-motion-height",n.height+"px"),e&&Ot(t,"--pui-motion-width",n.width+"px")}var xr={name:"p",safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!1};function tn(t,i){if(!t)throw new Error("Element is required.");let e={},n=!1,o={},r=null,s={},a=u=>{if(Object.assign(e,wr(u,xr)),!e.enter&&!e.leave)throw new Error("Enter or leave must be true.");s=Ar(e),n=Mr(e),o=Sr(e),r=null},l=u=>Er(null,null,function*(){r?.();let{onBefore:f,onStart:C,onAfter:v,onCancelled:w}=s[u]||{},x={element:t};if(n){f?.(x),C?.(x),v?.(x);return}let{from:oe,active:we,to:He}=o[u]||{};return Vr(t,e.autoHeight,e.autoWidth),f?.(x),et(t,oe),et(t,we),t.offsetHeight,kt(t,oe),et(t,He),C?.(x),new Promise(q=>{let Ki=yt(e.duration,u),on=()=>{kt(t,[He,we]),r=null},Ji=()=>{on(),v?.(x),q()};r=()=>{on(),w?.(x),q()},Nr(t,e.type,Ki,Ji)})});a(i);let c={enter:()=>e.enter?l("enter"):Promise.resolve(),leave:()=>e.leave?l("leave"):Promise.resolve(),cancel:()=>{r?.(),r=null},update:(u,f)=>{if(!u)throw new Error("Element is required.");t=u,c.cancel(),a(f)}};return e.appear&&c.enter(),c}var Fr=0;function Nr(t,i,e,n){let o=t._motionEndId=++Fr,r=()=>{o===t._motionEndId&&n()};if(e!=null)return setTimeout(r,e);let{type:s,timeout:a,count:l}=Ir(t,i);if(!s){n();return}let c=s+"end",u=0,f=()=>{t.removeEventListener(c,C,!0),r()},C=v=>{v.target===t&&++u>=l&&f()};t.addEventListener(c,C,{capture:!0,once:!0}),setTimeout(()=>{u<l&&f()},a+1)}var Pr=["*"];function Tr(t,i){t&1&&J(0)}var _t=new WeakMap;function Re(t,i){if(t)switch(_t.has(t)||_t.set(t,{display:t.style.display,visibility:t.style.visibility,maxHeight:t.style.maxHeight,overflow:t.style.overflow}),i){case"display":t.style.display="none";break;case"visibility":t.style.visibility="hidden",t.style.maxHeight="0",t.style.overflow="hidden";break}}function Ct(t,i){if(!t)return;let e=_t.get(t)??t.style;switch(i){case"display":t.style.display=e?.display||"";break;case"visibility":t.style.visibility=e?.visibility||"",t.style.maxHeight=e?.maxHeight||"",t.style.overflow=e?.overflow||"";break}_t.delete(t)}var kr=`
    .p-motion {
        display: block;
    }
`,Or={root:"p-motion"},nn=(()=>{class t extends k{name="motion";style=kr;classes=Or;static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Xi=new M("MOTION_INSTANCE"),Br=(()=>{class t extends V{$pcMotion=p(Xi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(E,{self:!0});onAfterViewChecked(){let n=this.options()?.root||{};this.bindDirectiveInstance.setAttrs(h(h({},this.ptms(["host","root"])),n))}_componentStyle=p(nn);visible=d(!1);mountOnEnter=d(!0);unmountOnLeave=d(!0);name=d(void 0);type=d(void 0);safe=d(void 0);disabled=d(!1);appear=d(!1);enter=d(!0);leave=d(!0);duration=d(void 0);hideStrategy=d("display");enterFromClass=d(void 0);enterToClass=d(void 0);enterActiveClass=d(void 0);leaveFromClass=d(void 0);leaveToClass=d(void 0);leaveActiveClass=d(void 0);options=d({});onBeforeEnter=F();onEnter=F();onAfterEnter=F();onEnterCancelled=F();onBeforeLeave=F();onLeave=F();onAfterLeave=F();onLeaveCancelled=F();motionOptions=I(()=>{let e=this.options();return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=$(!1);handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),S(()=>{let e=this.hideStrategy();this.isInitialMount?(Re(this.$el,e),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(Re(this.$el,e),this.rendered.set(!0))}),S(()=>{this.motion||(this.motion=tn(this.$el,this.motionOptions()))}),Vt(async()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(await Je(),Ct(this.$el,n),(e||!this.isInitialMount)&&(this.applyMotionDuration("enter"),this.motion?.enter())):this.isInitialMount||(await Je(),this.applyMotionDuration("leave"),this.motion?.leave()?.then(async()=>{this.$el&&!this.cancelled&&!this.visible()&&(Re(this.$el,n),this.unmountOnLeave()&&(await Je(),this.cancelled||this.rendered.set(!1)))})),this.isInitialMount=!1})}applyMotionDuration(e){let n=W(this.motionOptions),o=yt(n.duration,e);if(o==null||!this.$el)return;let r=this.$el,s=`${o}ms`;n.type==="transition"?r.style.transitionDuration=s:r.style.animationDuration=s}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,Ct(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=R({type:t,selectors:[["p-motion"]],hostVars:2,hostBindings:function(n,o){n&2&&T(o.cx("root"))},inputs:{visible:[1,"visible"],mountOnEnter:[1,"mountOnEnter"],unmountOnLeave:[1,"unmountOnLeave"],name:[1,"name"],type:[1,"type"],safe:[1,"safe"],disabled:[1,"disabled"],appear:[1,"appear"],enter:[1,"enter"],leave:[1,"leave"],duration:[1,"duration"],hideStrategy:[1,"hideStrategy"],enterFromClass:[1,"enterFromClass"],enterToClass:[1,"enterToClass"],enterActiveClass:[1,"enterActiveClass"],leaveFromClass:[1,"leaveFromClass"],leaveToClass:[1,"leaveToClass"],leaveActiveClass:[1,"leaveActiveClass"],options:[1,"options"]},outputs:{onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onEnterCancelled:"onEnterCancelled",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave",onLeaveCancelled:"onLeaveCancelled"},features:[y([nn,{provide:Xi,useExisting:t},{provide:j,useExisting:t}]),z([E]),g],ngContentSelectors:Pr,decls:1,vars:1,template:function(n,o){n&1&&(K(),hn(0,Tr,1,0)),n&2&&pn(o.rendered()?0:-1)},dependencies:[Y,gt],encapsulation:2})}return t})(),Yi=new M("MOTION_DIRECTIVE_INSTANCE"),jl=(()=>{class t extends V{$pcMotionDirective=p(Yi,{optional:!0,skipSelf:!0})??void 0;visible=d(!1,{alias:"pMotion"});name=d(void 0,{alias:"pMotionName"});type=d(void 0,{alias:"pMotionType"});safe=d(void 0,{alias:"pMotionSafe"});disabled=d(!1,{alias:"pMotionDisabled"});appear=d(!1,{alias:"pMotionAppear"});enter=d(!0,{alias:"pMotionEnter"});leave=d(!0,{alias:"pMotionLeave"});duration=d(void 0,{alias:"pMotionDuration"});hideStrategy=d("display",{alias:"pMotionHideStrategy"});enterFromClass=d(void 0,{alias:"pMotionEnterFromClass"});enterToClass=d(void 0,{alias:"pMotionEnterToClass"});enterActiveClass=d(void 0,{alias:"pMotionEnterActiveClass"});leaveFromClass=d(void 0,{alias:"pMotionLeaveFromClass"});leaveToClass=d(void 0,{alias:"pMotionLeaveToClass"});leaveActiveClass=d(void 0,{alias:"pMotionLeaveActiveClass"});options=d({},{alias:"pMotionOptions"});onBeforeEnter=F({alias:"pMotionOnBeforeEnter"});onEnter=F({alias:"pMotionOnEnter"});onAfterEnter=F({alias:"pMotionOnAfterEnter"});onEnterCancelled=F({alias:"pMotionOnEnterCancelled"});onBeforeLeave=F({alias:"pMotionOnBeforeLeave"});onLeave=F({alias:"pMotionOnLeave"});onAfterLeave=F({alias:"pMotionOnAfterLeave"});onLeaveCancelled=F({alias:"pMotionOnLeaveCancelled"});motionOptions=I(()=>{let e=this.options()??{};return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),S(()=>{this.motion||(this.motion=tn(this.$el,this.motionOptions()))}),Vt(()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(Ct(this.$el,n),(e||!this.isInitialMount)&&(this.applyMotionDuration("enter"),this.motion?.enter())):this.isInitialMount?Re(this.$el,n):(this.applyMotionDuration("leave"),this.motion?.leave()?.then(()=>{this.$el&&!this.cancelled&&!this.visible()&&Re(this.$el,n)})),this.isInitialMount=!1})}applyMotionDuration(e){let n=W(this.motionOptions),o=yt(n.duration,e);if(o==null||!this.$el)return;let r=this.$el,s=`${o}ms`;n.type==="transition"?r.style.transitionDuration=s:r.style.animationDuration=s}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,Ct(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||t)};static \u0275dir=b({type:t,selectors:[["","pMotion",""]],inputs:{visible:[1,"pMotion","visible"],name:[1,"pMotionName","name"],type:[1,"pMotionType","type"],safe:[1,"pMotionSafe","safe"],disabled:[1,"pMotionDisabled","disabled"],appear:[1,"pMotionAppear","appear"],enter:[1,"pMotionEnter","enter"],leave:[1,"pMotionLeave","leave"],duration:[1,"pMotionDuration","duration"],hideStrategy:[1,"pMotionHideStrategy","hideStrategy"],enterFromClass:[1,"pMotionEnterFromClass","enterFromClass"],enterToClass:[1,"pMotionEnterToClass","enterToClass"],enterActiveClass:[1,"pMotionEnterActiveClass","enterActiveClass"],leaveFromClass:[1,"pMotionLeaveFromClass","leaveFromClass"],leaveToClass:[1,"pMotionLeaveToClass","leaveToClass"],leaveActiveClass:[1,"pMotionLeaveActiveClass","leaveActiveClass"],options:[1,"pMotionOptions","options"]},outputs:{onBeforeEnter:"pMotionOnBeforeEnter",onEnter:"pMotionOnEnter",onAfterEnter:"pMotionOnAfterEnter",onEnterCancelled:"pMotionOnEnterCancelled",onBeforeLeave:"pMotionOnBeforeLeave",onLeave:"pMotionOnLeave",onAfterLeave:"pMotionOnAfterLeave",onLeaveCancelled:"pMotionOnLeaveCancelled"},features:[y([nn,{provide:Yi,useExisting:t},{provide:j,useExisting:t}]),g]})}return t})(),Ul=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=O({imports:[Br]})}return t})();function Lr(){let t=[],i=(r,s)=>{let a=t.length>0?t[t.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return t.push({key:r,value:l}),l},e=r=>{t=t.filter(s=>s.value!==r)},n=()=>t.length>0?t[t.length-1].value:0,o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,a)=>{s&&(s.style.zIndex=String(i(r,a)))},clear:r=>{r&&(e(o(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:i,revertZIndex:e}}var Wl=Lr();export{Le as a,ut as b,Yn as c,Rn as d,he as e,os as f,rs as g,Mo as h,as as i,So as j,Vo as k,Fo as l,To as m,Oo as n,Lo as o,ls as p,ds as q,us as r,j as s,V as t,Kt as u,Vs as v,xs as w,Si as x,Ai as y,E as z,gt as A,Jt as B,Fi as C,en as D,bt as E,Ta as F,Li as G,vl as H,yr as I,yl as J,Sl as K,jl as L,Ul as M,Wl as N};
