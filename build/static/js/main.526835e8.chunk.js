(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){e.exports={listDayOfExercises:"ListDayOfExercises_listDayOfExercises__1zx8n"}},104:function(e,t,a){e.exports={block:"indexBlockTraining_block__2z8WM styles_background_color-most_dark__1V44P"}},105:function(e,t,a){e.exports={homePage:"HomePage_homePage__16_66 styles_background_color-most_dark__1V44P"}},106:function(e,t,a){},107:function(e,t,a){e.exports={app:"indexApp_app__9WRdZ",ripple:"indexApp_ripple__1-B_e"}},108:function(e,t,a){e.exports=a(217)},18:function(e,t,a){e.exports={signUp:"indexSignUpPage_signUp__3Bq0d",form:"indexSignUpPage_form__3eSAq styles_background_color-general_color__a_6XG",wrapperText:"indexSignUpPage_wrapperText__29kTU styles_color-not_active_text__3irQd",wrapperButtons:"indexSignUpPage_wrapperButtons__1soyq",wrapperInputs:"indexSignUpPage_wrapperInputs__yh6bd",textInput:"indexSignUpPage_textInput__1dtL1 styles_color-active_text__3YiO7",underEdit:"indexSignUpPage_underEdit__1nYmK styles_background_color-active_text__17zIn",buttonCheck:"indexSignUpPage_buttonCheck__3kMz9 styles_background-image_button_check__1DxHK",buttonCheckActive:"indexSignUpPage_buttonCheckActive__1ShxT styles_background-image_button_check__1DxHK",wrapperButtonDown:"indexSignUpPage_wrapperButtonDown__1peZB styles_background_color-general_color__a_6XG styles_color-not_active_text__3irQd"}},20:function(e,t,a){e.exports={signIn:"indexSignInPage_signIn__1wy13",form:"indexSignInPage_form__1BEr8 styles_background_color-general_color__a_6XG",wrapperText:"indexSignInPage_wrapperText__288zl styles_color-not_active_text__3irQd",wrapperButtons:"indexSignInPage_wrapperButtons__25H7O",wrapperInputs:"indexSignInPage_wrapperInputs__3yuDL",textInput:"indexSignInPage_textInput__p-CbJ styles_color-active_text__3YiO7",underEdit:"indexSignInPage_underEdit__36vEY styles_background_color-active_text__17zIn",buttonCheck:"indexSignInPage_buttonCheck__3E0Iz styles_background-image_button_check__1DxHK",buttonCheckActive:"indexSignInPage_buttonCheckActive__1v_If styles_background-image_button_check__1DxHK",wrapperButtonDown:"indexSignInPage_wrapperButtonDown__30kwE styles_background_color-general_color__a_6XG styles_color-not_active_text__3irQd",buttonOut:"indexSignInPage_buttonOut__1yB4_ styles_background-image_button_out__az3tj"}},217:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(98),c=a.n(s),o=a(220),i=a(218),u=a(13),l=a(5),p=a(4),d=a(6),_=a(8),m=a(7),b=a(9),h=a(3),f=a.n(h),g=a(12),x=a(62),E=a.n(x),v=(a(187),a(189),{apiKey:"AIzaSyC_TKnHnhqqnelADY4l-yyMEip4emEKbpg",authDomain:"app-training-diary.firebaseapp.com",databaseURL:"https://app-training-diary.firebaseio.com",projectId:"app-training-diary",storageBucket:"app-training-diary.appspot.com",messagingSenderId:"937716177950"}),O=function e(){var t=this;Object(p.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.user=function(e){return t.db.ref("user/".concat(e))},this.getWholeUser=Object(g.a)(f.a.mark(function e(){var a,n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.db.ref("user/".concat(t.auth.currentUser.uid)),e.next=3,a.once("value");case 3:return n=e.sent,r=n.val(),e.abrupt("return",r);case 6:case"end":return e.stop()}},e,this)})),this.updateDataToBase=function(e,a){t.db.ref("user/".concat(t.auth.currentUser.uid,"/").concat(e)).update(a)},this.setDataToBase=function(e,a){t.db.ref("user/".concat(t.auth.currentUser.uid,"/").concat(e)).set(a)},this.getDataFromBase=function(){var e=Object(g.a)(f.a.mark(function e(a){var n,r,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.db.ref("user/".concat(t.auth.currentUser.uid,"/").concat(a)),e.next=3,n.once("value");case 3:return r=e.sent,s=r.val(),e.abrupt("return",s);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllExercisesToStore=Object(g.a)(f.a.mark(function e(){var a,n,r,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.db.ref("user/".concat(t.auth.currentUser.uid,"/exercises")),e.next=3,a.once("value");case 3:return n=e.sent,r=n.val(),s={exercises:r},e.abrupt("return",s);case 7:case"end":return e.stop()}},e,this)})),this.getTrainingExerciseToStore=function(){var e=Object(g.a)(f.a.mark(function e(a,n){var r,s,c,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.db.ref("user/".concat(t.auth.currentUser.uid,"/schedule/").concat(n,"/").concat(a)),e.next=3,r.once("value");case 3:return s=e.sent,c=s.val(),o=Object(u.a)({},a,c),e.abrupt("return",o);case 7:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),this.getArrayEditFromBase=function(){var e=Object(g.a)(f.a.mark(function e(a,n){var r,s,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.db.ref("user/".concat(t.auth.currentUser.uid,"/schedule/").concat(n,"/").concat(a)),e.next=3,r.once("value");case 3:return s=e.sent,c=s.val(),e.abrupt("return",c);case 6:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),this.deleteExerciseFromBase=function(e){t.db.ref("user/".concat(t.auth.currentUser.uid,"/exercises/").concat(e)).remove()},this.findAndReplace=function(){var e=Object(g.a)(f.a.mark(function e(a,n){var r,s,c,o,i,l,p;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.db.ref("user/".concat(t.auth.currentUser.uid,"/schedule/")),e.next=3,r.once("value");case 3:return s=e.sent,c=t.db.ref("user/".concat(t.auth.currentUser.uid,"/exercises/")),e.next=7,c.once("value");case 7:return o=e.sent,i=o.val()[a],e.next=11,o.ref.update(Object(u.a)({},n,i));case 11:return l=o.child("".concat(a)),e.next=14,l.ref.remove();case 14:return p=[],s.forEach(function(e){function t(){return(t=Object(g.a)(f.a.mark(function t(){var r,s;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.val()[a]){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.ref.update(Object(u.a)({},n,r));case 5:return s=e.child("".concat(a)),t.next=8,s.ref.remove();case 8:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}p.push(function(){return t.apply(this,arguments)}())}),e.next=18,Promise.all(p);case 18:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),E.a.initializeApp(v),this.auth=E.a.auth(),this.db=E.a.database()},y=r.a.createContext(null),w=function(e){return function(t){return r.a.createElement(y.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},S=y,j=O,k=a(221),N=a(11),D="add_auth_user_data",C="user_out",A="add_all_exercises_to_store",U="add_search_label",B="add_to_schedule_exercise",I="add_array_edits",T="add_numbers_to_store",M="change_auth_status",P="change_show_status_modal",L="add_modal_info_data",W="add_modal_exercise_name";function F(e){return{type:D,currentUser:e}}function G(){return{type:C,currentUser:{}}}function X(e){return{type:A,exercises:e}}function H(e){return{type:U,label:e}}function Q(e,t){return{type:B,exercise:e,today:t}}function Y(e,t,a){return{type:I,dateOfDay:e,exercise:t,array:a}}function R(e,t,a,n,r){return{type:T,value:e,dateOfDay:t,exercise:a,name:n,count:r}}function z(e){return{type:M,status:e}}function V(e,t,a){return{type:P,status:e,exerciseName:t,infoData:a}}function J(e){return{type:L,infoData:e}}function Z(e){return{type:W,newExerciseName:e}}var K=a(10),q=a(18),$=a.n(q),ee={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},te=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(_.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=Object(l.a)({},ee),a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.email,s=t.passwordOne;a.props.firebase.doCreateUserWithEmailAndPassword(r,s).then(function(e){a.props.firebase.user(e.user.uid).set({username:n,email:r,schedule:""})}).then(function(){a.props.firebase.getWholeUser().then(function(e){return a.props.addAuthUserData(e)}),a.setState(Object(l.a)({},ee)),a.props.firebase.auth.onAuthStateChanged(function(e){return e?a.props.changeAuthStatus(!0):a.props.changeAuthStatus(!1)}),a.props.history.push("/home")}).catch(function(e){a.setState({error:e})})},a.onChange=function(e){a.setState(Object(u.a)({},e.target.name,e.target.value))},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,s=e.passwordTwo,c=e.error,o=n!==s||""===n||""===a||""===t;return r.a.createElement("div",{className:$.a.signUp},r.a.createElement("form",{className:$.a.form,onSubmit:this.onSubmit},r.a.createElement("div",{className:$.a.wrapperText},r.a.createElement("p",null,"Sign up")),r.a.createElement("div",{className:$.a.wrapperButtons},r.a.createElement("button",{className:o?$.a.buttonCheck:$.a.buttonCheckActive,disabled:o,type:"submit"})),r.a.createElement("div",{className:$.a.wrapperInputs},r.a.createElement("input",{className:$.a.textInput,name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name",autoComplete:"off"}),r.a.createElement("span",{className:$.a.underEdit}),r.a.createElement("input",{className:$.a.textInput,name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address",autoComplete:"off"}),r.a.createElement("span",{className:$.a.underEdit}),r.a.createElement("input",{className:$.a.textInput,name:"passwordOne",value:n,onChange:this.onChange,type:"password",placeholder:"Password",autoComplete:"off"}),r.a.createElement("span",{className:$.a.underEdit}),r.a.createElement("input",{className:$.a.textInput,name:"passwordTwo",value:s,onChange:this.onChange,type:"password",placeholder:"Confirm Password",autoComplete:"off"}),r.a.createElement("span",{className:$.a.underEdit})),c&&r.a.createElement("p",null,c.message)))}}]),t}(n.Component),ae=Object(k.a)(w(Object(K.b)(null,function(e){return Object(N.a)({addAuthUserData:F,changeAuthStatus:z},e)})(te))),ne=function(){return r.a.createElement("div",null,r.a.createElement(ae,null))},re=a(20),se=a.n(re),ce={email:"",password:"",error:null},oe=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(_.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=Object(l.a)({},ce),a.onRedirect=function(){a.props.history.push("/signup")},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password;a.props.firebase.doSignInWithEmailAndPassword(n,r).then(function(){a.props.firebase.getWholeUser().then(function(e){return a.props.addAuthUserData(e)}),a.setState(Object(l.a)({},ce)),a.props.firebase.auth.onAuthStateChanged(function(e){return e?a.props.changeAuthStatus(!0):a.props.changeAuthStatus(!1)}),a.props.history.push("/home")}).catch(function(e){a.setState({error:e})})},a.onChange=function(e){a.setState(Object(u.a)({},e.target.name,e.target.value))},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,s=""===a||""===t;return r.a.createElement("div",{className:se.a.signIn},r.a.createElement("form",{className:se.a.form,onSubmit:this.onSubmit},r.a.createElement("div",{className:se.a.wrapperText},r.a.createElement("p",null,"Sign in")),r.a.createElement("div",{className:se.a.wrapperButtons},r.a.createElement("button",{className:s?se.a.buttonCheck:se.a.buttonCheckActive,disabled:s,type:"submit"})),r.a.createElement("div",{className:se.a.wrapperInputs},r.a.createElement("input",{className:se.a.textInput,name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address",autoComplete:"off"}),r.a.createElement("span",{className:se.a.underEdit}),r.a.createElement("input",{className:se.a.textInput,name:"password",value:a,onChange:this.onChange,type:"password",placeholder:"Password",autoComplete:"off"}),r.a.createElement("span",{className:se.a.underEdit})),n&&r.a.createElement("p",null,n.message)),r.a.createElement("div",{className:se.a.wrapperButtonDown},r.a.createElement("div",null,r.a.createElement("p",null,"SignUp")),r.a.createElement("button",{className:se.a.buttonOut,onClick:this.onRedirect})))}}]),t}(n.Component),ie=Object(k.a)(w(Object(K.b)(null,function(e){return Object(N.a)({addAuthUserData:F,changeAuthStatus:z},e)})(oe))),ue=function(){return r.a.createElement("div",null,r.a.createElement(ie,null))},le=a(80),pe=a.n(le),de=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(_.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onOut=function(){a.props.history.push("/signin")},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:pe.a.signOut},r.a.createElement("div",null,r.a.createElement("p",null,"SignOut")),r.a.createElement("button",{className:pe.a.buttonOut,type:"button",onClick:function(){e.props.userOut(),e.props.firebase.doSignOut(),e.onOut()}}))}}]),t}(n.Component),_e=Object(k.a)(w(Object(K.b)(null,function(e){return Object(N.a)({userOut:G},e)})(de))),me=a(37),be=a.n(me),he=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(_.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={error:null},a.onDelete=function(){var e=Object(g.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,a.props.firebase.deleteExerciseFromBase(a.props.label);case 4:return e.next=6,a.props.firebase.getAllExercisesToStore();case 6:n=e.sent,a.props.addAllExercisesToStore(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a.setState({error:e.t0});case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),a.onShowModal=Object(g.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.firebase.getDataFromBase("exercises/".concat(a.props.label,"/data"));case 2:t=e.sent,a.props.changeShowStatusModal(!0,a.props.label,t);case 4:case"end":return e.stop()}},e,this)})),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.label,a=this.state.error;return r.a.createElement("div",{className:be.a.exercise},r.a.createElement("div",{className:be.a.wrappingButtons},r.a.createElement("button",{className:be.a.buttonInfo,onClick:this.onShowModal}),r.a.createElement("button",{className:be.a.buttonDel,onClick:this.onDelete}),r.a.createElement("button",{className:be.a.buttonAdd,onClick:function(){return e.props.onSentExercise(t)}})),r.a.createElement("div",{className:be.a.wrappingExerciseName},t),a&&r.a.createElement("p",null,a.message))}}]),t}(n.Component),fe=w(Object(K.b)(null,function(e){return Object(N.a)({addAllExercisesToStore:X,changeShowStatusModal:V},e)})(he)),ge=a(102),xe=a.n(ge),Ee=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(_.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={error:null},a.onSearch=function(e){return 0===a.props.searchLabel.length?e:e.filter(function(e){return e.toLowerCase().indexOf(a.props.searchLabel.toLowerCase())>-1})},a.onSentExercise=function(){var e=Object(g.a)(f.a.mark(function e(t){var n,r,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new Date).toISOString().split("T")[0],r=Object(u.a)({},t,[{wight:"0",count:"0",id:0}]),e.prev=2,e.next=5,a.props.firebase.updateDataToBase("schedule/".concat(n,"/"),r);case 5:return e.next=7,a.props.firebase.getTrainingExerciseToStore(t,n);case 7:s=e.sent,a.props.addToScheduleExercise(s,n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),a.setState({error:e.t0});case 14:case"end":return e.stop()}},e,this,[[2,11]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.currentListExercises?this.props.currentListExercises:{},a=Object.keys(t),n=this.onSearch(a).map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(fe,{label:t,onSentExercise:e.onSentExercise}))});return r.a.createElement("div",{className:xe.a.fieldListExercises},n)}}]),t}(n.Component),ve=w(Object(K.b)(function(e){return{currentListExercises:e.main.currentUser.exercises,currentUser:e.main.currentUser,searchLabel:e.search.searchLabel}},function(e){return Object(N.a)({addToScheduleExercise:Q},e)})(Ee)),Oe=a(33),ye=a.n(Oe),we=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(_.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={error:null},a.onChange=function(e){a.props.addSearchLabel(e.target.value)},a.onCancel=function(){a.props.addSearchLabel("")},a.onSubmit=function(){var e=Object(g.a)(f.a.mark(function e(t){var n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(u.a)({},a.props.searchLabel,{date:(new Date).toString(),data:""}),e.prev=1,t.preventDefault(),e.next=5,a.props.firebase.updateDataToBase("exercises",n);case 5:return e.next=7,a.props.firebase.getAllExercisesToStore();case 7:r=e.sent,a.props.addAllExercisesToStore(r),a.props.changeShowStatusModal(!1,a.props.searchLabel,""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),a.setState({error:e.t0});case 15:case"end":return e.stop()}},e,this,[[1,12]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.error,t=!this.props.searchLabel;return r.a.createElement("div",{className:ye.a.fieldAddExercise},r.a.createElement("form",{className:ye.a.wrapperForm,onSubmit:this.onSubmit},r.a.createElement("button",{className:t?ye.a.buttonOnFormDisabled:ye.a.buttonOnForm,disabled:t,title:"Add new exercise to list"}),r.a.createElement("input",{className:ye.a.textInput,type:"text",onChange:this.onChange,value:this.props.searchLabel}),r.a.createElement("span",{className:ye.a.underEdit}),e&&r.a.createElement("p",null,e.message)),r.a.createElement("button",{className:ye.a.buttonCansel,onClick:this.onCancel,title:"Clear filter"}))}}]),t}(n.Component),Se=w(Object(K.b)(function(e){return{searchLabel:e.search.searchLabel}},function(e){return Object(N.a)({addAuthUserData:F,addAllExercisesToStore:X,addSearchLabel:H,changeShowStatusModal:V},e)})(we)),je=a(30),ke=a.n(je),Ne=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(_.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!0},a.onToggleVisible=function(){a.setState(Object(l.a)({},a.state,{visible:!a.state.visible}))},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:ke.a.block},r.a.createElement("div",{className:this.state.visible?ke.a.wrapperExercise:ke.a.wrapperExercise_hidden},r.a.createElement("div",{className:ke.a.up},r.a.createElement("p",null,"Search / Add exercise")),r.a.createElement(Se,null),r.a.createElement("div",{className:ke.a.down},r.a.createElement("p",null,"List of exercises")),r.a.createElement(ve,null)),r.a.createElement("div",{className:ke.a.wrapperButton},r.a.createElement("button",{className:this.state.visible?ke.a.buttonToggle:ke.a.buttonToggle_hidden,onClick:this.onToggleVisible})))}}]),t}(n.Component),De=a(31),Ce=a.n(De),Ae=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(_.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onDeleteEdit=function(){var e=Object(g.a)(f.a.mark(function e(t,n,r){var s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.firebase.getArrayEditFromBase(n,t);case 2:return(s=e.sent).splice(r,1),a.props.firebase.setDataToBase("schedule/".concat(t,"/").concat(n),s),e.next=7,a.props.firebase.getArrayEditFromBase(n,t);case 7:s=e.sent,a.props.addArrayEdits(t,n,s);case 9:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.onChange=function(e,t,n,r){a.props.onSetStatusButtonSave("ready"),a.props.addNumbersToStore(e.target.value,t,n,e.target.name,r)},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.labelCount,n=t.labelWight,s=t.count,c=t.dateOfDay,o=t.exercise;return r.a.createElement("div",{className:Ce.a.edit},r.a.createElement("div",{className:Ce.a.wrapperButton},r.a.createElement("button",{className:Ce.a.buttonDel,onClick:function(){return e.onDeleteEdit(c,o,s)}})),r.a.createElement("div",{className:Ce.a.wrapperCount},r.a.createElement("p",null,"set ",s+1)),r.a.createElement("div",{className:Ce.a.wrapperText},r.a.createElement("p",null,"weight"),r.a.createElement("p",null,"repeat")),r.a.createElement("div",{className:Ce.a.wrapperEdits},r.a.createElement("input",{className:Ce.a.textInput,type:"text",maxLength:"3",defaultValue:a,name:"count",onChange:function(t){return e.onChange(t,c,o,s)}}),r.a.createElement("input",{className:Ce.a.textInput,type:"text",maxLength:"3",defaultValue:n,name:"wight",onChange:function(t){return e.onChange(t,c,o,s)}})))}}]),t}(n.Component),Ue=w(Object(K.b)(null,function(e){return Object(N.a)({addArrayEdits:Y,addNumbersToStore:R},e)})(Ae)),Be=a(81),Ie=a.n(Be),Te=function(e){function t(){return Object(p.a)(this,t),Object(_.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.dateOfDay,n=t.exercise,s=this.props.currentListEdit[a][n].map(function(t,s){return r.a.createElement("div",{className:Ie.a.wrapper,key:t.id},r.a.createElement(Ue,{labelCount:t.count,labelWight:t.wight,count:s,dateOfDay:a,exercise:n,onSetStatusButtonSave:e.props.onSetStatusButtonSave}))});return r.a.createElement("div",{className:Ie.a.listEdit},s)}}]),t}(n.Component),Me=Object(K.b)(function(e){return{currentListEdit:e.main.currentUser.schedule}})(Te),Pe=a(24),Le=a.n(Pe),We=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(_.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={status:"saved"},a.onSetStatusButtonSave=function(e){a.setState(Object(l.a)({},a.state,{status:e}))},a.onShowModal=Object(g.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.firebase.getDataFromBase("exercises/".concat(a.props.exercise,"/data"));case 2:t=e.sent,a.props.changeShowStatusModal(!0,a.props.exercise,t);case 4:case"end":return e.stop()}},e,this)})),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.exercise,n=t.dateOfDay;return r.a.createElement("div",{className:Le.a.trainingExercise},r.a.createElement("div",{className:Le.a.wrappingExercise},r.a.createElement("div",{className:Le.a.wrappingButtons},r.a.createElement("button",{className:Le.a.buttonInfo,onClick:this.onShowModal}),r.a.createElement("button",{className:Le.a.buttonAdd,onClick:function(){e.props.onAddEdit(a,n,e.props.arrayEdits),e.onSetStatusButtonSave("saved")}}),r.a.createElement("button",{className:"saved"===this.state.status?Le.a.buttonSaved:Le.a.buttonReady,onClick:function(){e.props.onSaveAllEditsToBase(a,n,e.props.arrayEdits),e.onSetStatusButtonSave("saved")}}),r.a.createElement("button",{className:Le.a.buttonDel})),r.a.createElement("div",{className:Le.a.wrappingExerciseName},a)),r.a.createElement("div",{className:Le.a.wrappingSets},r.a.createElement(Me,{dateOfDay:n,exercise:a,onSetStatusButtonSave:this.onSetStatusButtonSave})))}}]),t}(n.Component),Fe=w(Object(K.b)(function(e,t){var a=t.exercise,n=t.dateOfDay;return{arrayEdits:e.main.currentUser.schedule[n][a]}},function(e){return Object(N.a)({changeShowStatusModal:V},e)})(We)),Ge=a(63),Xe=a.n(Ge),He=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(_.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onAddEdit=function(){var e=Object(g.a)(f.a.mark(function e(t,n,r){var s,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.onSaveAllEditsToBase(t,n,r),e.next=3,a.props.firebase.getArrayEditFromBase(t,n);case 3:return s=e.sent,c=s[s.length-1].id,s.push({wight:"0",count:"0",id:c+1}),a.props.firebase.setDataToBase("schedule/".concat(n,"/").concat(t),s),e.next=9,a.props.firebase.getArrayEditFromBase(t,n);case 9:s=e.sent,a.props.addArrayEdits(n,t,s);case 11:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.onSaveAllEditsToBase=function(e,t,n){return a.props.firebase.updateDataToBase("schedule/".concat(t,"/").concat(e),n)},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.dateOfDay,a=Object.keys(this.props.todayExercises[t]).map(function(a,n){return r.a.createElement("div",{key:n},r.a.createElement(Fe,{exercise:a,onAddEdit:e.onAddEdit,onSaveAllEditsToBase:e.onSaveAllEditsToBase,dateOfDay:t}))});return r.a.createElement("div",{className:Xe.a.dayOfExercises},r.a.createElement("div",{className:Xe.a.wrappingDate},t,r.a.createElement("button",{className:Xe.a.buttonDel})),a)}}]),t}(n.Component),Qe=w(Object(K.b)(function(e){return{todayExercises:e.main.currentUser.schedule}},function(e){return Object(N.a)({addArrayEdits:Y},e)})(He)),Ye=a(103),Re=a.n(Ye),ze=function(e){function t(){return Object(p.a)(this,t),Object(_.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.dayExercises?this.props.dayExercises:{},t=Object.keys(e).map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(Qe,{dateOfDay:e}))});return r.a.createElement("div",{className:Re.a.listDayOfExercises},t)}}]),t}(n.Component),Ve=Object(K.b)(function(e){return{dayExercises:e.main.currentUser.schedule}})(ze),Je=a(104),Ze=a.n(Je),Ke=function(e){function t(){return Object(p.a)(this,t),Object(_.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:Ze.a.block},r.a.createElement(Ve,null))}}]),t}(n.Component),qe=a(105),$e=a.n(qe),et=function(e){var t=function(t){function a(){return Object(p.a)(this,a),Object(_.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(b.a)(a,t),Object(d.a)(a,[{key:"render",value:function(){return this.props.authStatus?r.a.createElement(e,this.props):r.a.createElement("h1",null,"Unauthorized")}}]),a}(r.a.Component);return Object(K.b)(function(e){return{authStatus:e.authStatus.authStatus}})(t)}(w(function(e){function t(){return Object(p.a)(this,t),Object(_.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:$e.a.homePage},r.a.createElement(Ne,null),r.a.createElement(Ke,null))}}]),t}(n.Component))),tt=a(106),at=a.n(tt),nt=function(){return r.a.createElement("main",{className:at.a.router},r.a.createElement("div",null,r.a.createElement(i.a,{exact:!0,path:"/",component:ue}),r.a.createElement(i.a,{path:"/signup",component:ne}),r.a.createElement(i.a,{path:"/signin",component:ue}),r.a.createElement(i.a,{path:"/signout",component:_e}),r.a.createElement(i.a,{path:"/home",component:et})))},rt=a(219),st=a(38),ct=a.n(st),ot=Object(K.b)(function(e){return{currentUserName:e.main.currentUser.username,authStatus:e.authStatus.authStatus}})(function(e){return r.a.createElement("header",{className:ct.a.header},r.a.createElement("h1",null,"training diary"),r.a.createElement("nav",{className:ct.a.nav},e.authStatus?null:r.a.createElement(rt.a,{className:ct.a.link,to:"/signup"},"Sign Up"),e.authStatus?null:r.a.createElement(rt.a,{className:ct.a.link,to:"/signin"},"Sign In"),e.authStatus?r.a.createElement(rt.a,{className:ct.a.link,to:"/home"},"Home"):null),r.a.createElement("div",null,r.a.createElement("p",null,"Application under construction...")),r.a.createElement("div",null,e.authStatus?r.a.createElement("p",null,e.currentUserName?e.currentUserName:"...Username..."):null,e.authStatus?r.a.createElement(rt.a,{className:ct.a.link,to:"/signout"},"Sign Out"):null))}),it=a(107),ut=a.n(it),lt=a(22),pt=a.n(lt),dt=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(_.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onChangeData=function(e){a.props.addModalInfoData(e.target.value)},a.onChangeExerciseName=function(e){a.props.addModalExerciseName(e.target.value)},a.onCloseModal=Object(g.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.props.firebase.updateDataToBase("exercises/".concat(a.props.exerciseNameModal),{data:a.props.infoDataModal}),a.props.exerciseNameModal===a.props.exerciseNewNameModal){e.next=4;break}return e.next=4,a.props.firebase.findAndReplace(a.props.exerciseNameModal,a.props.exerciseNewNameModal);case 4:a.props.firebase.getWholeUser().then(function(e){return a.props.addAuthUserData(e)}),a.props.changeShowStatusModal(!1);case 6:case"end":return e.stop()}},e,this)})),a.onExitModal=function(){a.props.changeShowStatusModal(!1)},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.statusShowModal?pt.a.infoWindowTrue:pt.a.infoWindowFalse},r.a.createElement("div",{className:pt.a.window},r.a.createElement("div",{className:pt.a.up},r.a.createElement("p",null,"Additional information to the exercise")),r.a.createElement("div",{className:pt.a.middle},r.a.createElement("div",{className:pt.a.wrappingButtons},r.a.createElement("button",{className:pt.a.buttonSave,onClick:this.onCloseModal}),r.a.createElement("button",{className:pt.a.buttonDel,onClick:this.onExitModal})),r.a.createElement("div",{className:pt.a.wrappingExerciseName},r.a.createElement("textarea",{className:pt.a.textarea,onChange:this.onChangeExerciseName,value:this.props.exerciseNewNameModal}))),r.a.createElement("textarea",{className:pt.a.textarea,onChange:this.onChangeData,value:this.props.infoDataModal?this.props.infoDataModal:void 0})))}}]),t}(n.Component),_t=w(Object(K.b)(function(e){return{statusShowModal:e.showModal.showModal,exerciseNameModal:e.showModal.exerciseName,exerciseNewNameModal:e.showModal.exerciseNewName,infoDataModal:e.showModal.infoData}},function(e){return Object(N.a)({changeShowStatusModal:V,addModalInfoData:J,addAllExercisesToStore:X,addModalExerciseName:Z,addAuthUserData:F},e)})(dt)),mt=function(){return r.a.createElement("div",{className:ut.a.app},r.a.createElement(ot,null),r.a.createElement(_t,null),r.a.createElement(nt,null))},bt={currentUser:{email:"",username:""}};var ht=[(window.__REDUX_DEVTOOLS_EXTENSION__||function(){return function(e){return e}})()],ft=Object(N.b)({main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:case C:return Object(l.a)({},e,{currentUser:t.currentUser});case A:return Object(l.a)({},e,{currentUser:Object(l.a)({},e.currentUser,t.exercises)});case B:return Object(l.a)({},e,{currentUser:Object(l.a)({},e.currentUser,{schedule:Object(l.a)({},e.currentUser.schedule,Object(u.a)({},t.today,Object(l.a)({},e.currentUser.schedule[t.today],t.exercise)))})});case I:return Object(l.a)({},e,{currentUser:Object(l.a)({},e.currentUser,{schedule:Object(l.a)({},e.currentUser.schedule,Object(u.a)({},t.dateOfDay,Object(l.a)({},e.currentUser.schedule[t.dateOfDay],Object(u.a)({},t.exercise,t.array))))})});case T:var a=Object(l.a)({},e.currentUser.schedule[t.dateOfDay][t.exercise][t.count]),n=Object(l.a)({},a,Object(u.a)({},t.name,t.value)),r=e.currentUser.schedule[t.dateOfDay][t.exercise].slice(0,t.count).concat(n,e.currentUser.schedule[t.dateOfDay][t.exercise].slice(t.count+1));return Object(l.a)({},e,{currentUser:Object(l.a)({},e.currentUser,{schedule:Object(l.a)({},e.currentUser.schedule,Object(u.a)({},t.dateOfDay,Object(l.a)({},e.currentUser.schedule[t.dateOfDay],Object(u.a)({},t.exercise,r))))})});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{searchLabel:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(l.a)({},e,{searchLabel:t.label});default:return e}},authStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authStatus:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(l.a)({},e,{authStatus:t.status});default:return e}},showModal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{showModal:!1,infoData:"",exerciseName:"",exerciseNewName:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(l.a)({},e,{showModal:t.status,exerciseName:t.exerciseName,exerciseNewName:t.exerciseName,infoData:t.infoData});case L:return Object(l.a)({},e,{infoData:t.infoData});case W:return Object(l.a)({},e,{exerciseNewName:t.newExerciseName});default:return e}}}),gt=Object(N.d)(ft,{},N.c.apply(void 0,ht));c.a.render(r.a.createElement(K.a,{store:gt},r.a.createElement(S.Provider,{value:new j},r.a.createElement(o.a,null,r.a.createElement(mt,null)))),document.getElementById("root"))},22:function(e,t,a){e.exports={infoWindowFalse:"indexInfoWindow_infoWindowFalse__3EBUB",infoWindowTrue:"indexInfoWindow_infoWindowTrue__3k62v",window:"indexInfoWindow_window__EZuc1 styles_background_color-most_dark__1V44P",textarea:"indexInfoWindow_textarea__2D_rX styles_background_color-general_color__a_6XG styles_color-active_text__3YiO7",up:"indexInfoWindow_up__2XBTl styles_background_color-most_light__mvZSp styles_color-not_active_text__3irQd",middle:"indexInfoWindow_middle__IGGoF styles_background_color-general_color__a_6XG",wrappingButtons:"indexInfoWindow_wrappingButtons__2bx-D",buttonSave:"indexInfoWindow_buttonSave__35fte styles_background-image_button_save__WlcG2",buttonDel:"indexInfoWindow_buttonDel__1OMNJ styles_background-image_button_minus__1pY5s",wrappingExerciseName:"indexInfoWindow_wrappingExerciseName__390ey styles_color-active_text__3YiO7"}},24:function(e,t,a){e.exports={trainingExercise:"TrainingExercise_trainingExercise__1m35A styles_background_color-most_dark__1V44P",wrappingExercise:"TrainingExercise_wrappingExercise__2TB_7 styles_background_color-general_color__a_6XG",wrappingButtons:"TrainingExercise_wrappingButtons__1DXOw",wrappingSets:"TrainingExercise_wrappingSets__2S59Q",wrappingExerciseName:"TrainingExercise_wrappingExerciseName__33HMJ styles_color-active_text__3YiO7",buttonInfo:"TrainingExercise_buttonInfo__25DNw styles_background-image_button_info__2i0o3",buttonDel:"TrainingExercise_buttonDel__3_G6I styles_background-image_button_minus__1pY5s",buttonAdd:"TrainingExercise_buttonAdd__3iGlH styles_background-image_button_add__1tgYg",buttonSaved:"TrainingExercise_buttonSaved__8EmsI styles_background-image_button_save__WlcG2",buttonReady:"TrainingExercise_buttonReady__2D43o styles_background-image_button_save__WlcG2"}},30:function(e,t,a){e.exports={block:"indexBlockListExercises_block__3R9pm",buttonToggle:"indexBlockListExercises_buttonToggle__2JauL styles_background-image_button_toggle_previous__6vrap",buttonToggle_hidden:"indexBlockListExercises_buttonToggle_hidden__2-dFG styles_background-image_button_toggle_next__3FRoR",wrapperButton:"indexBlockListExercises_wrapperButton__1BdUf styles_background_color-most_light__mvZSp",wrapperExercise_hidden:"indexBlockListExercises_wrapperExercise_hidden__pvN2m",up:"indexBlockListExercises_up__3epEd styles_background_color-most_light__mvZSp styles_color-not_active_text__3irQd",down:"indexBlockListExercises_down__3DGmk styles_background_color-most_light__mvZSp styles_color-not_active_text__3irQd"}},31:function(e,t,a){e.exports={edit:"Edit_edit__1AHF- styles_background_color-most_dark__1V44P",textInput:"Edit_textInput__2yUX_ styles_color-active_text__3YiO7",buttonDel:"Edit_buttonDel__3Wp7c styles_background-image_button_del__y--SC",textCount:"Edit_textCount__xRCAP",wrapperButton:"Edit_wrapperButton__3QwFY styles_background_color-general_color__a_6XG",wrapperCount:"Edit_wrapperCount__18pgf styles_background_color-general_color__a_6XG styles_color-not_active_text__3irQd",wrapperText:"Edit_wrapperText__2psXN styles_background_color-general_color__a_6XG styles_color-not_active_text__3irQd",wrapperEdits:"Edit_wrapperEdits__2VzKq styles_background_color-general_color__a_6XG"}},33:function(e,t,a){e.exports={fieldAddExercise:"AddExercise_fieldAddExercise__3yJsC styles_background_color-general_color__a_6XG",textInput:"AddExercise_textInput__1iL_u styles_color-active_text__3YiO7",wrapperForm:"AddExercise_wrapperForm__2Usm6",underEdit:"AddExercise_underEdit__2AcpJ styles_background_color-active_text__17zIn",buttonOnFormDisabled:"AddExercise_buttonOnFormDisabled__3-efg styles_background-image_button_arrow_down__31uaH",buttonOnForm:"AddExercise_buttonOnForm__26ffk styles_background-image_button_arrow_down__31uaH",buttonCansel:"AddExercise_buttonCansel__1QvbF styles_background-image_button_clear__1Lj8-"}},37:function(e,t,a){e.exports={exercise:"Exercise_exercise__3ahH2 styles_background_color-general_color__a_6XG",wrappingButtons:"Exercise_wrappingButtons__ywTHC",buttonAdd:"Exercise_buttonAdd__7PJn6 styles_background-image_button_arrow_forward__1nvZC",buttonDel:"Exercise_buttonDel__3b9dl styles_background-image_button_del__y--SC",buttonInfo:"Exercise_buttonInfo__1i_FD styles_background-image_button_info__2i0o3",wrappingExerciseName:"Exercise_wrappingExerciseName__1QoCw styles_color-active_text__3YiO7"}},38:function(e,t,a){e.exports={header:"Header_header__34CcJ styles_background_color-general_color__a_6XG",nav:"Header_nav__1_yZ7",link:"Header_link__JRIpa styles_color-not_active_text__3irQd"}},63:function(e,t,a){e.exports={dayOfExercises:"DayOfExercises_dayOfExercises__2BDTj styles_background_color-most_dark__1V44P",wrappingDate:"DayOfExercises_wrappingDate__3aeg0 styles_background_color-most_light__mvZSp styles_color-not_active_text__3irQd",buttonDel:"DayOfExercises_buttonDel__27f5i styles_background-image_button_minus__1pY5s"}},80:function(e,t,a){e.exports={signOut:"indexSignOutPage_signOut__21Our styles_background_color-general_color__a_6XG styles_color-not_active_text__3irQd",buttonOut:"indexSignOutPage_buttonOut__3VEEv styles_background-image_button_out__az3tj"}},81:function(e,t,a){e.exports={listEdit:"ListEdit_listEdit__3xtDm"}}},[[108,2,1]]]);
//# sourceMappingURL=main.526835e8.chunk.js.map