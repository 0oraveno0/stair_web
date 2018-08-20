var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(r,a){function s(t){try{_(n.next(t))}catch(e){a(e)}}function o(t){try{_(n["throw"](t))}catch(e){a(e)}}function _(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(s,o)}_((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return n([t,e])}}function n(i){if(r)throw new TypeError("Generator is already executing.");for(;_;)try{if(r=1,a&&(s=a[2&i[0]?"return":i[0]?"throw":"next"])&&!(s=s.call(a,i[1])).done)return s;switch(a=0,s&&(i=[0,s.value]),i[0]){case 0:case 1:s=i;break;case 4:return _.label++,{value:i[1],done:!1};case 5:_.label++,a=i[1],i=[0];continue;case 7:i=_.ops.pop(),_.trys.pop();continue;default:if(s=_.trys,!(s=s.length>0&&s[s.length-1])&&(6===i[0]||2===i[0])){_=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){_.label=i[1];break}if(6===i[0]&&_.label<s[1]){_.label=s[1],s=i;break}if(s&&_.label<s[2]){_.label=s[2],_.ops.push(i);break}s[2]&&_.ops.pop(),_.trys.pop();continue}i=e.call(t,_)}catch(n){i=[6,n],a=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var r,a,s,o,_={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function n(n){e.call(i,n,t)}if(RES.hasRes(t)){var r=RES.getRes(t);r?n(r):RES.getResAsync(t,n,this)}else RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var audio_manager=function(){function t(){}return t.getAudioManager=function(){return t.instance||(t.instance=new t),t.instance},t.prototype.play_sound=function(t){if("true"!=egret.localStorage.getItem("mute_toggle")){var e=RES.getRes(t);e.play(0,1)}},t}();__reflect(audio_manager.prototype,"audio_manager");var Main=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isThemeLoadEnd=!1,e.isResourceLoadEnd=!1,e}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this);var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this),RES.loadConfig("resource/default.res.json?v="+Math.random(),"resource/")},e.prototype.onConfigComplete=function(t){RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);var e=new eui.Theme("resource/default.thm.json",this.stage);e.addEventListener(eui.UIEvent.COMPLETE,this.onThemeLoadComplete,this),RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this),RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this),RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this),RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,this.onItemLoadError,this),RES.loadGroup("preload"),this.gameService=GameService.getGameService(),this.AudioManager=audio_manager.getAudioManager()},e.prototype.onThemeLoadComplete=function(){this.isThemeLoadEnd=!0,this.createScene()},e.prototype.onResourceLoadComplete=function(t){"preload"==t.groupName?(this.loadingView=new LoadingUI,this.stage.addChild(this.loadingView),RES.loadGroup("resource")):"resource"==t.groupName&&(this.stage.removeChild(this.loadingView),RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this),RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this),RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this),RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,this.onItemLoadError,this),this.isResourceLoadEnd=!0,this.createScene())},e.prototype.createScene=function(){this.isThemeLoadEnd&&this.isResourceLoadEnd&&this.startCreateScene()},e.prototype.onItemLoadError=function(t){console.warn("Url:"+t.resItem.url+" has failed to load")},e.prototype.onResourceLoadError=function(t){console.warn("Group:"+t.groupName+" has failed to load"),this.onResourceLoadComplete(t)},e.prototype.onResourceProgress=function(t){"resource"==t.groupName&&this.loadingView.setProgress(t.itemsLoaded,t.itemsTotal)},e.prototype.startCreateScene=function(){this.gameUI=new GameUI(this.gameService,this.AudioManager),this.addChild(this.gameUI)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var recordGo=function(t){function e(){var e=t.call(this)||this;return e.record_data={0:"",1:"",2:"",3:"",4:!0},e.addEventListener(eui.UIEvent.COMPLETE,e.uiCompHandler,e),e.skinName="resource/custom_skin/recordGoSkin_v0.exml",e}return __extends(e,t),e.prototype.uiCompHandler=function(){},e}(eui.Component);__reflect(recordGo.prototype,"recordGo");var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,n){function r(t){e.call(n,t)}function a(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),i.call(n))}var s=this;"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(n,generateEUI)},this):"undefined"!=typeof generateEUI2?RES.getResByUrl("resource/gameEui.json",function(t,i){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(n,generateEUI2)},s)},this,RES.ResourceItem.TYPE_JSON):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_TEXT))},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.loadingBG=new egret.Bitmap,this.loadingBG.texture=RES.getRes("bg_loading_page"),this.loadingBG.width=720,this.loadingBG.height=1280,this.addChild(this.loadingBG),this.loadingIcon=new egret.Bitmap,this.loadingIcon.texture=RES.getRes("loading_bar_zero"),this.loadingIcon.width=450,this.loadingIcon.y=1065,this.loadingIcon.x=110,this.addChild(this.loadingIcon),this.loadingBar=new egret.Bitmap,this.loadingBar.texture=RES.getRes("loading_bar_100"),this.loadingBar.y=1065,this.loadingBar.x=110,this.loadingBar.width=450,this.addChild(this.loadingBar),this.textField=new egret.TextField,this.textField.width=450,this.textField.y=1075,this.textField.x=270,this.textField.size=30,this.textField.textAlign="center",this.addChild(this.textField)},e.prototype.setProgress=function(t,e){this.loadingBar.width=t/e*450,this.textField.text=(t/e*100).toFixed(1)+"%"},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI");var GameUI=function(t){function e(e,i){var n=t.call(this)||this;return n.service=e,n.audio=i,n.pay_table_page_image_array=["pay_table_page1","pay_table_page2","pay_table_page3","pay_table_page42"],n.pay_table_page_image="pay_table_page1",n.record_img=["record_box 1","record_box 2_png"],n.pay_table_next_btn_enable=!0,n.pay_table_back_btn_enable=!1,n.record_bg_img_sprite=n.record_img[0],n.record_bg_img_bool=!0,n.mask_manager={},n.notice={visible:!1,text:"正在准备中"},n.gamecode="Stair",n.bet_type={0:{n:0,w:!1},1:{n:0,w:!1},2:{n:0,w:!1},3:{n:0,w:!1},4:{n:0,w:!1},5:{n:0,w:!1},6:{n:0,w:!1},7:{n:0,w:!1},8:{n:0,w:!1},9:{n:0,w:!1}},n.balance=0,n.balance_text="",n.winMoney=0,n.winMoney_text="",n.finalScore=0,n.finalScore_text="",n.single_bet_array=[1,2,4,5,10,20,50],n.single_bet=1,n.total_bet=0,n.is_playing=!1,n.auto_playing=!1,n.loading=!1,n.line_4=!0,n.line={0:{s:0,v:!1,l:70},1:{s:0,v:!1,l:70},2:{s:0,v:!1,l:285},3:{s:0,v:!1,l:285},4:{s:0,v:!1,l:30},5:{s:0,v:!1,l:30},6:{s:0,v:!1,l:285},7:{s:0,v:!1,l:285},8:{s:0,v:!1,l:30},9:{s:0,v:!1,l:30},10:{s:0,v:!1,l:285},11:{s:0,v:!1,l:285},12:{s:0,v:!1,l:30},13:{s:0,v:!1,l:30},14:{s:0,v:!1,l:285},15:{s:0,v:!1,l:285},16:{s:0,v:!1,l:80},17:{s:0,v:!1,l:80}},n.circle={tl:"ig_x_gray_icon",tr:"ig_x_gray_icon",dl:"ig_single_gray_icon",dr:"ig_dub_gray_icon"},n.circle_sprite={tw:"ig_x_gray_icon",tb:"ig_x_gray_icon",dlw:"ig_single_gray_icon",drw:"ig_dub_gray_icon",dlb:"ig_single_black_icon",drb:"ig_dub_black_icon",s:"sb_single_icon",m:"sb_dub_icon",l:"sb_left_icon",r:"sb_right_icon",3:"sb_3_icon",4:"sb_4_icon",s3:"sb_single_icon_3",s4:"sb_single_icon_4",m3:"sb_bud_icon_3",m4:"sb_bud_icon_4"},n.result_panel={v:{gp:!1,0:!1,1:!1,2:!1,3:!1,4:!1},img:{lr:"",34:"",sm:""}},n.disableLine=[[1,2,3,5,6,8,11,13,14,16],[0,2,3,4,7,9,10,12,15,17],[0,3,5,6,8,11,13,14,16],[1,2,4,7,9,10,12,15,17]],n.betNumberArray=[1,2,4,5,10,20,50],n.up_btn_bool=!0,n.recordString="",n.addEventListener(eui.UIEvent.COMPLETE,n.uiCompHandler,n),n.skinName="resource/custom_skin/gameUISkin_v0.exml",n.load_data(),n}return __extends(e,t),e.prototype.load_data=function(){this.balance_text=String(this.balance)+"元",null!=egret.localStorage.getItem("winMoney")&&(this.winMoney=Number(egret.localStorage.getItem("winMoney"))),this.winMoney_text="赢得金钱"+this.winMoney.toFixed(2)+"元","true"==egret.localStorage.getItem("mute_toggle")?this.mute_toggle.selected=!0:this.mute_toggle.selected=!1,this.setRecord(egret.localStorage.getItem("record"))},e.prototype.uiCompHandler=function(){this.username=egret.getOption("username")?egret.getOption("username"):"fish001",this.balance=Number(egret.getOption("balance")?egret.getOption("balance"):"999"),this.token=egret.getOption("token")?egret.getOption("token"):"AAD4MFJYD40M9BI012MVX5O8RHK6V5",this.draw_mask(this.record_content,"record"),this.play_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.playBtnHandler,this),this.reset_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.resetBtnHandler,this),this.auto_toggle.addEventListener(egret.TouchEvent.TOUCH_TAP,this.autoBtnHandler,this),this.add_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.addBtnHandler,this),this.sub_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.subBtnHandler,this),this.up_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.upBtnHandler,this),this.clear_record_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clear_recordBtnHandler,this),this.pay_table_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.pay_tableBtnHandler,this),this.mute_toggle.addEventListener(egret.TouchEvent.TOUCH_TAP,this.mute_TgeHandler,this),this.exit_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.exit_BtnHandler,this),this.pay_table_next_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.pay_table_nextBtnHandler,this),this.pay_table_back_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.pay_table_backBtnHandler,this),this.pay_table_close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.pay_tableBtnHandler,this),this.result_panel_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.result_panel_closeBtnHandler,this),this.bet_btn_addEventListener()},e.prototype.draw_mask=function(t,e){t.contains(this.mask_manager[e])&&t.removeChild(this.mask_manager[e]),this.mask_manager[e]=new egret.Shape,this.mask_manager[e].graphics.beginFill(255),this.mask_manager[e].graphics.drawRoundRect(0,0,t.width,t.height,25),this.mask_manager[e].graphics.endFill(),this.record_content.addChild(this.mask_manager[e]),t.mask=this.mask_manager[e]},e.prototype.playBtnHandler=function(){this.is_playing||(this.audio.play_sound("beepfruit_wav"),this.play())},e.prototype.play=function(){var t=this;if(console.log("play"),!this.is_playing){if(this.is_playing=!0,this.total_bet<=0)return this.show_notice("请投注",function(){t.notice.visible=!1}),this.auto_playing=!1,this.auto_toggle.selected=!1,void(this.is_playing=!1);if(this.balance<this.total_bet)return this.show_notice("余额不足",function(){t.notice.visible=!1}),this.auto_playing=!1,this.auto_toggle.selected=!1,void(this.is_playing=!1);this.play_btn.touchEnabled=!1,this.loading=!0,this.balance-=this.total_bet,this.balance_text=String(this.balance)+"元";for(var e="",i=0;9>i;i++)e+=this.bet_type[String(i)].n+",";e+=this.bet_type[String(9)].n,this.service.bet(this.username,e,String(this.single_bet),String(this.total_bet),this.gamecode,this.token,function(t){return function(e){return t.betCompleteHandler.bind(t)(e)}}(this),function(e){t.show_notice(String(e),function(){t.notice.visible=!1}),t.balance+=t.total_bet,t.balance_text=String(t.balance)+"元",t.loading=!1,t.auto_playing=!1,t.auto_toggle.selected=!1,t.is_playing=!1,t.play_btn.touchEnabled=!0},function(){})}},e.prototype.resetBtnHandler=function(){if(!this.is_playing){this.audio.play_sound("beepfruit_wav");for(var t=0;10>t;t++)this.bet_type[String(t)].n=0;this.single_bet=this.single_bet_array[0],this.total_bet=0}},e.prototype.bet_btnHandler=function(t){var e=this;if(!this.is_playing&&(this.audio.play_sound("beepfruit_wav"),this.bet_type[t.target.name].n+=1,this.update_total_bet(),this.auto_playing&&this.auto_playing)){var i=new egret.Timer(360,1);i.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){i.stop(),e.play()},i.start())}},e.prototype.addBtnHandler=function(){if(!(this.is_playing||this.single_bet>=50)){this.result_panel.v.gp=!1,this.audio.play_sound("beepfruit_wav");for(var t=0;t<this.single_bet_array.length-1;t++)if(this.single_bet==this.single_bet_array[t]){this.single_bet=this.single_bet_array[t+1],this.update_total_bet();break}}},e.prototype.subBtnHandler=function(){if(!(this.is_playing||this.single_bet<=1)){this.result_panel.v.gp=!1,this.audio.play_sound("beepfruit_wav");for(var t=0;t<this.single_bet_array.length;t++)if(this.single_bet==this.single_bet_array[t]){this.single_bet=this.single_bet_array[t-1],this.update_total_bet();break}}},e.prototype.update_total_bet=function(){for(var t=0,e=0;10>e;e++)t+=this.single_bet*this.bet_type[String(e)].n;this.total_bet=t},e.prototype.autoBtnHandler=function(){this.auto_playing=this.auto_toggle.selected,this.auto_playing&&this.play()},e.prototype.upBtnHandler=function(){1==this.up_btn_bool?(this.up_btn_bool=!1,this.record_gp.height=880,this.record_gp.anchorOffsetY=880,this.record_bg_img_sprite=this.record_img[1],this.record_bg_img.height=872,this.record_content.height=750,this.up_btn.rotation=180,this.draw_mask(this.record_content,"record")):(this.up_btn_bool=!0,this.record_gp.height=182,this.record_gp.anchorOffsetY=182,this.record_bg_img_sprite=this.record_img[0],this.record_bg_img.height=175,this.record_content.height=55,this.up_btn.rotation=0,this.draw_mask(this.record_content,"record"))},e.prototype.clear_recordBtnHandler=function(){egret.localStorage.setItem("record",""),this.record_content.removeChildren(),this.record_content.addChild(this.mask_manager.record)},e.prototype.pay_tableBtnHandler=function(t){"true"==String(t.target.name)?this.pay_table_gp=!0:"false"==String(t.target.name)&&(this.pay_table_gp=!1)},e.prototype.mute_TgeHandler=function(){this.mute_toggle.selected?egret.localStorage.setItem("mute_toggle","true"):egret.localStorage.setItem("mute_toggle","false")},e.prototype.exit_BtnHandler=function(){console.log("exit_BtnHandler")},e.prototype.pay_table_nextBtnHandler=function(){this.pay_table_page_image==this.pay_table_page_image_array[2]?this.pay_table_next_btn_enable=!1:this.pay_table_page_image==this.pay_table_page_image_array[0]&&(this.pay_table_back_btn_enable=!0);for(var t=0;t<this.pay_table_page_image_array.length-1;t++)if(this.pay_table_page_image==this.pay_table_page_image_array[t]){this.pay_table_page_image=this.pay_table_page_image_array[t+1];break}},e.prototype.pay_table_backBtnHandler=function(){this.pay_table_page_image==this.pay_table_page_image_array[1]?this.pay_table_back_btn_enable=!1:this.pay_table_page_image==this.pay_table_page_image_array[3]&&(this.pay_table_next_btn_enable=!0);for(var t=0;t<this.pay_table_page_image_array.length;t++)if(this.pay_table_page_image==this.pay_table_page_image_array[t]){this.pay_table_page_image=this.pay_table_page_image_array[t-1];break}},e.prototype.result_panel_closeBtnHandler=function(){this.result_panel.v.gp=!1},e.prototype.bet_btn_addEventListener=function(){this.bet_btn_0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_8.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_9.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_10.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_11.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_12.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_13.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_14.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_15.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_16.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_17.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_18.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_19.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_20.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_21.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_22.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_23.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_24.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_25.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_26.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_27.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_28.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this),this.bet_btn_29.addEventListener(egret.TouchEvent.TOUCH_TAP,this.bet_btnHandler,this)},e.prototype.betCompleteHandler=function(t){var e=this,i=t.currentTarget;this.gameTotalData=JSON.parse(i.response),console.log(this.gameTotalData.data),null==this.gameTotalData.data?(this.show_notice("网络错误",function(){e.notice.visible=!1}),this.balance+=this.total_bet,this.balance_text=String(this.balance)+"元",this.loading=!1,this.auto_playing=!1,this.auto_toggle.selected=!1,this.is_playing=!1,this.play_btn.touchEnabled=!0):this.result()},e.prototype.result=function(){this.loading=!1,this.result_panel.v.gp=!1,this.line_animation(Number(this.gameTotalData.data.results))},e.prototype.line_animation=function(t){for(var e=0;18>e;e++)this.line[String(e)].v=!0,this.line[String(e)].s=0;for(var e=0;e<this.disableLine[t].length;e++)this.line[String(this.disableLine[t][e])].v=!1;for(var e=0;10>e;e++)this.bet_type[String(e)].w=!1;this.circle.dl=this.circle_sprite.dlw,this.circle.dr=this.circle_sprite.drw,2==t||3==t?(this.bet_type[String(3)].w=!0,this.line_4=!0):(this.bet_type[String(2)].w=!0,this.line_4=!1),0==t||3==t?(this.bet_type[String(5)].w=!0,this.circle.tl=this.circle_sprite.tb,this.circle.tr=this.circle_sprite.tw):(this.bet_type[String(4)].w=!0,this.circle.tl=this.circle_sprite.tw,this.circle.tr=this.circle_sprite.tb);for(var e=0;18>e;e++)if(this.line[String(e)].v)return void this.line_move(String(e))},e.prototype._line_animation=function(t){0==t||2==t?(this.bet_type[String(0)].w=!0,this.circle.dl=this.circle_sprite.dlb):(this.bet_type[String(1)].w=!0,this.circle.dr=this.circle_sprite.drb),this.bet_type[String(t+6)].w=!0,this.result_animation(Number(this.gameTotalData.data.results),Number(this.gameTotalData.data.finalScore))},e.prototype.result_animation=function(t,e){var i=this;if(e>0){for(var n=0;5>n;n++)this.result_panel.v[String(n)]=!1;0==t?(this.result_panel.img.lr=this.circle_sprite.r,this.result_panel.img[String(34)]=this.circle_sprite[String(3)],this.result_panel.img.sm=this.circle_sprite.s):1==t?(this.result_panel.img.lr=this.circle_sprite.l,this.result_panel.img[String(34)]=this.circle_sprite[String(3)],this.result_panel.img.sm=this.circle_sprite.m):2==t?(this.result_panel.img.lr=this.circle_sprite.l,this.result_panel.img[String(34)]=this.circle_sprite[String(4)],this.result_panel.img.sm=this.circle_sprite.s):3==t&&(this.result_panel.img.lr=this.circle_sprite.r,this.result_panel.img[String(34)]=this.circle_sprite[String(4)],this.result_panel.img.sm=this.circle_sprite.m),this.result_panel.v.gp=!0;for(var r=300,a=function(t){if(s.skip_btn.selected)s.result_panel.v[String(t)]=!0,4==t&&s.end_turn();else{var e=new egret.Timer(t*r,1);e.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){i.result_panel.v[String(t)]=!0,4==t&&i.end_turn()},e.start())}},s=this,n=0;5>n;n++)a(n);this.winMoney+=e,this.winMoney_text="赢得金钱"+this.winMoney.toFixed(2)+"元",this.balance=Number(this.gameTotalData.data.balance.toFixed(2)),this.balance_text=String(this.balance)+"元",this.finalScore=Number(e.toFixed(2)),this.finalScore_text=e.toFixed(2)+"元",egret.localStorage.setItem("winMoney",String(this.winMoney.toFixed(2)))}else this.balance=Number(this.gameTotalData.data.balance.toFixed(2)),this.balance_text=String(this.balance)+"元",this.end_turn();var o=String(t)+","+this.formatDate()+";";this.setRecord(o)},e.prototype.formatDate=function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,n=t.getDate()<10?"0"+t.getDate():t.getDate(),r=t.getHours()<10?"0"+t.getHours():t.getHours(),a=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),s=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return e+"-"+i+"-"+n+"-"+r+":"+a+":"+s},e.prototype.end_turn=function(){var t=this;if(this.is_playing=!1,this.skip_btn.selected=!1,this.auto_playing){var e=new egret.Timer(1,1);e.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){e.stop(),t.play()},e.start())}else this.play_btn.touchEnabled=!0},e.prototype.line_move=function(t){var e=this;this.line[String(t)].s=0;var i;i=this.skip_btn.selected?30:10;var n=new egret.Timer(i/this.line[String(t)].l,this.line[String(t)].l/i);n.addEventListener(egret.TimerEvent.TIMER,function(){e.line[String(t)].s+=i/e.line[String(t)].l},n.start()),n.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){n.stop(),e.line[String(t)].s=1;for(var i=Number(t)+1;18>i;i++)if(e.line[String(i)].v)return void e.line_move(String(i));e._line_animation(Number(e.gameTotalData.data.results))},n.start())},e.prototype.setRecord=function(t){if(""!=t&&null!=t){for(var e=t.split(";"),i=[],n=0;n<e.length-1;n++)i[n]=e[n].split(",");for(var n=0;n<i.length;n++){var r=new recordGo;switch(i[n][0]){case"0":r.record_data[String(0)]=this.circle_sprite.s,r.record_data[String(1)]=this.circle_sprite[String(3)],r.record_data[String(2)]=this.circle_sprite.r;break;case"1":r.record_data[String(0)]=this.circle_sprite.m,r.record_data[String(1)]=this.circle_sprite[String(3)],r.record_data[String(2)]=this.circle_sprite.l;break;case"2":r.record_data[String(0)]=this.circle_sprite.s,r.record_data[String(1)]=this.circle_sprite[String(4)],r.record_data[String(2)]=this.circle_sprite.l;break;case"3":r.record_data[String(0)]=this.circle_sprite.m,r.record_data[String(1)]=this.circle_sprite[String(4)],r.record_data[String(2)]=this.circle_sprite.r}r.record_data[String(3)]=i[n][1],r.record_data[String(4)]=this.record_bg_img_bool,this.record_bg_img_bool=!this.record_bg_img_bool,this.record_content.addChildAt(r,0)}this.recordString+=t;var a=this.recordString.split(";"),s=20;if(a.length>s){for(var o=this.record_content.numChildren-s,n=0;o>n;n++)this.record_content.removeChildAt(this.record_content.numChildren-1);this.recordString="";for(var n=o;n<a.length-1;n++)this.recordString+=a[n]+";"}egret.localStorage.setItem("record",this.recordString)}},e.prototype.show_notice=function(t,e){this.notice.visible=!0,this.notice.text=t,this.notice_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,e,this)},e}(eui.Component);__reflect(GameUI.prototype,"GameUI");var GameService=function(){function t(){"https:"===document.location.protocol?"https":"http"}return t.prototype.getBalance=function(e,i,n,r,a){var s={param:t.stringToHex(t.des("garEcr8s","loginname="+e,!0,1,"garEcr8s",1))};this.httpReq(t.AASlotUrl+"hecslot/getbalance/",JSON.stringify(s),i,n,r,a,"application/json")},t.prototype.bet=function(e,i,n,r,a,s,o,_,h){console.log("loginname="+e+"&singlebet="+n+"&lane="+i+"&totalmoney="+r+"&gamecode="+a);var l={param:t.stringToHex(t.des("garEcr8s","loginname="+e+"&singlebet="+n+"&lane="+i+"&totalmoney="+r+"&gamecode="+a,!0,1,"garEcr8s",1))};this.httpReq(t.AASlotUrl,JSON.stringify(l),s,o,_,h,"application/json")},t.prototype.httpReq=function(e,i,n,r,a,s,o){var _=new egret.HttpRequest;_.responseType=egret.HttpResponseType.TEXT,_.setRequestHeader("token",n),_.setRequestHeader("content-Type",o),_.addEventListener(egret.Event.COMPLETE,r,this),_.addEventListener(egret.IOErrorEvent.IO_ERROR,a,this),_.addEventListener(egret.ProgressEvent.PROGRESS,s,this),_.open(t.host+e,egret.HttpMethod.POST),_.send(i)},t.getGameService=function(){return t.instance||(t.instance=new t),t.instance},t.stringToHex=function(t){for(var e="",i=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],n=0;n<t.length;n++)e+=i[t.charCodeAt(n)>>4]+i[15&t.charCodeAt(n)];return e},t.des=function(e,i,n,r,a,s){var o,_,h,l,c,d,g,p,u,b,v,m,E,y,f=[16843776,0,65536,16843780,16842756,66564,4,65536,1024,16843776,16843780,1024,16778244,16842756,16777216,4,1028,16778240,16778240,66560,66560,16842752,16842752,16778244,65540,16777220,16777220,65540,0,1028,66564,16777216,65536,16843780,4,16842752,16843776,16777216,16777216,1024,16842756,65536,66560,16777220,1024,4,16778244,66564,16843780,65540,16842752,16778244,16777220,1028,66564,16843776,1028,16778240,16778240,0,65540,66560,0,16842756],T=[-2146402272,-2147450880,32768,1081376,1048576,32,-2146435040,-2147450848,-2147483616,-2146402272,-2146402304,-2147483648,-2147450880,1048576,32,-2146435040,1081344,1048608,-2147450848,0,-2147483648,32768,1081376,-2146435072,1048608,-2147483616,0,1081344,32800,-2146402304,-2146435072,32800,0,1081376,-2146435040,1048576,-2147450848,-2146435072,-2146402304,32768,-2146435072,-2147450880,32,-2146402272,1081376,32,32768,-2147483648,32800,-2146402304,1048576,-2147483616,1048608,-2147450848,-2147483616,1048608,1081344,0,-2147450880,32800,-2147483648,-2146435040,-2146402272,1081344],S=[520,134349312,0,134348808,134218240,0,131592,134218240,131080,134217736,134217736,131072,134349320,131080,134348800,520,134217728,8,134349312,512,131584,134348800,134348808,131592,134218248,131584,131072,134218248,8,134349320,512,134217728,134349312,134217728,131080,520,131072,134349312,134218240,0,512,131080,134349320,134218240,134217736,512,0,134348808,134218248,131072,134217728,134349320,8,131592,131584,134217736,134348800,134218248,520,134348800,131592,8,134348808,131584],R=[8396801,8321,8321,128,8396928,8388737,8388609,8193,0,8396800,8396800,8396929,129,0,8388736,8388609,1,8192,8388608,8396801,128,8388608,8193,8320,8388737,1,8320,8388736,8192,8396928,8396929,129,8388736,8388609,8396800,8396929,129,0,0,8396800,8320,8388736,8388737,1,8396801,8321,8321,128,8396929,129,1,8192,8388609,8193,8396928,8388737,8193,8320,8388608,8396801,128,8388608,8192,8396928],C=[256,34078976,34078720,1107296512,524288,256,1073741824,34078720,1074266368,524288,33554688,1074266368,1107296512,1107820544,524544,1073741824,33554432,1074266112,1074266112,0,1073742080,1107820800,1107820800,33554688,1107820544,1073742080,0,1107296256,34078976,33554432,1107296256,524544,524288,1107296512,256,33554432,1073741824,34078720,1107296512,1074266368,33554688,1073741824,1107820544,34078976,1074266368,256,33554432,1107820544,1107820800,524544,1107296256,1107820800,34078720,0,1074266112,1107296256,524544,33554688,1073742080,524288,0,1074266112,34078976,1073742080],H=[536870928,541065216,16384,541081616,541065216,16,541081616,4194304,536887296,4210704,4194304,536870928,4194320,536887296,536870912,16400,0,4194320,536887312,16384,4210688,536887312,16,541065232,541065232,0,4210704,541081600,16400,4210688,541081600,536870912,536887296,16,541065232,4210688,541081616,4194304,16400,536870928,4194304,536887296,536870912,16400,536870928,541081616,4210688,541065216,4210704,541081600,0,541065232,16,16384,541065216,4210704,16384,4194320,536887312,0,541081600,536870912,4194320,536887312],L=[2097152,69206018,67110914,0,2048,67110914,2099202,69208064,69208066,2097152,0,67108866,2,67108864,69206018,2050,67110912,2099202,2097154,67110912,67108866,69206016,69208064,2097154,69206016,2048,2050,69208066,2099200,2,67108864,2099200,67108864,2099200,2097152,67110914,67110914,69206018,69206018,2,2097154,67108864,67110912,2097152,69208064,2050,2099202,69208064,2050,67108866,69208066,69206016,2099200,0,2,69208066,0,2099202,69206016,2048,67108866,67110912,2048,2097154],A=[268439616,4096,262144,268701760,268435456,268439616,64,268435456,262208,268697600,268701760,266240,268701696,266304,4096,64,268697600,268435520,268439552,4160,266240,262208,268697664,268701696,4160,0,0,268697664,268435520,268439552,266304,262144,266304,262144,268701696,4096,64,268697664,4096,266304,268439552,64,268435520,268697600,268697664,268435456,262144,268439616,0,268701760,262208,268435520,268697600,268439552,268439616,0,268701760,266240,266240,4160,4160,262208,268435456,268701696],w=t.des_createKeys(e),O=0,P=i.length,x=0,U=32==w.length?3:9;p=3==U?n?[0,32,2]:[30,-2,-2]:n?[0,32,2,62,30,-2,64,96,2]:[94,62,-2,32,64,2,30,-2,-2],2==s?i+="        ":1==s?(h=8-P%8,i+=String.fromCharCode(h,h,h,h,h,h,h,h),8==h&&(P+=8)):s||(i+="\x00\x00\x00\x00\x00\x00\x00\x00");var I="",M="";for(1==r&&(u=a.charCodeAt(O++)<<24|a.charCodeAt(O++)<<16|a.charCodeAt(O++)<<8|a.charCodeAt(O++),v=a.charCodeAt(O++)<<24|a.charCodeAt(O++)<<16|a.charCodeAt(O++)<<8|a.charCodeAt(O++),O=0);P>O;){for(d=i.charCodeAt(O++)<<24|i.charCodeAt(O++)<<16|i.charCodeAt(O++)<<8|i.charCodeAt(O++),g=i.charCodeAt(O++)<<24|i.charCodeAt(O++)<<16|i.charCodeAt(O++)<<8|i.charCodeAt(O++),1==r&&(n?void 0!=u&&void 0!=v&&(d^=u,g^=v):(b=u,m=v,u=d,v=g)),h=252645135&(d>>>4^g),g^=h,d^=h<<4,h=65535&(d>>>16^g),g^=h,d^=h<<16,h=858993459&(g>>>2^d),d^=h,g^=h<<2,h=16711935&(g>>>8^d),d^=h,g^=h<<8,h=1431655765&(d>>>1^g),g^=h,d^=h<<1,d=d<<1|d>>>31,g=g<<1|g>>>31,_=0;U>_;_+=3){for(E=p[_+1],y=p[_+2],o=p[_];o!=E;o+=y)l=g^w[o],c=(g>>>4|g<<28)^w[o+1],h=d,d=g,g=h^(T[l>>>24&63]|R[l>>>16&63]|H[l>>>8&63]|A[63&l]|f[c>>>24&63]|S[c>>>16&63]|C[c>>>8&63]|L[63&c]);h=d,d=g,g=h}d=d>>>1|d<<31,g=g>>>1|g<<31,h=1431655765&(d>>>1^g),g^=h,d^=h<<1,h=16711935&(g>>>8^d),d^=h,g^=h<<8,h=858993459&(g>>>2^d),d^=h,g^=h<<2,h=65535&(d>>>16^g),g^=h,d^=h<<16,h=252645135&(d>>>4^g),g^=h,d^=h<<4,1==r&&(n?(u=d,v=g):void 0!=b&&void 0!=m&&(d^=b,g^=m)),M+=String.fromCharCode(d>>>24,d>>>16&255,d>>>8&255,255&d,g>>>24,g>>>16&255,g>>>8&255,255&g),x+=8,512==x&&(I+=M,M="",x=0)
}return I+M},t.des_createKeys=function(t){for(var e,i,n,r=[0,4,536870912,536870916,65536,65540,536936448,536936452,512,516,536871424,536871428,66048,66052,536936960,536936964],a=[0,1,1048576,1048577,67108864,67108865,68157440,68157441,256,257,1048832,1048833,67109120,67109121,68157696,68157697],s=[0,8,2048,2056,16777216,16777224,16779264,16779272,0,8,2048,2056,16777216,16777224,16779264,16779272],o=[0,2097152,134217728,136314880,8192,2105344,134225920,136323072,131072,2228224,134348800,136445952,139264,2236416,134356992,136454144],_=[0,262144,16,262160,0,262144,16,262160,4096,266240,4112,266256,4096,266240,4112,266256],h=[0,1024,32,1056,0,1024,32,1056,33554432,33555456,33554464,33555488,33554432,33555456,33554464,33555488],l=[0,268435456,524288,268959744,2,268435458,524290,268959746,0,268435456,524288,268959744,2,268435458,524290,268959746],c=[0,65536,2048,67584,536870912,536936448,536872960,536938496,131072,196608,133120,198656,537001984,537067520,537004032,537069568],d=[0,262144,0,262144,2,262146,2,262146,33554432,33816576,33554432,33816576,33554434,33816578,33554434,33816578],g=[0,268435456,8,268435464,0,268435456,8,268435464,1024,268436480,1032,268436488,1024,268436480,1032,268436488],p=[0,32,0,32,1048576,1048608,1048576,1048608,8192,8224,8192,8224,1056768,1056800,1056768,1056800],u=[0,16777216,512,16777728,2097152,18874368,2097664,18874880,67108864,83886080,67109376,83886592,69206016,85983232,69206528,85983744],b=[0,4096,134217728,134221824,524288,528384,134742016,134746112,16,4112,134217744,134221840,524304,528400,134742032,134746128],v=[0,4,256,260,0,4,256,260,1,5,257,261,1,5,257,261],m=t.length>8?3:1,E=new Array(32*m),y=[0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0],f=0,T=0,S=0;m>S;S++){var R=t.charCodeAt(f++)<<24|t.charCodeAt(f++)<<16|t.charCodeAt(f++)<<8|t.charCodeAt(f++),C=t.charCodeAt(f++)<<24|t.charCodeAt(f++)<<16|t.charCodeAt(f++)<<8|t.charCodeAt(f++);n=252645135&(R>>>4^C),C^=n,R^=n<<4,n=65535&(C>>>-16^R),R^=n,C^=n<<-16,n=858993459&(R>>>2^C),C^=n,R^=n<<2,n=65535&(C>>>-16^R),R^=n,C^=n<<-16,n=1431655765&(R>>>1^C),C^=n,R^=n<<1,n=16711935&(C>>>8^R),R^=n,C^=n<<8,n=1431655765&(R>>>1^C),C^=n,R^=n<<1,n=R<<8|C>>>20&240,R=C<<24|C<<8&16711680|C>>>8&65280|C>>>24&240,C=n;for(var H=0;H<y.length;H++)y[H]?(R=R<<2|R>>>26,C=C<<2|C>>>26):(R=R<<1|R>>>27,C=C<<1|C>>>27),R&=-15,C&=-15,e=r[R>>>28]|a[R>>>24&15]|s[R>>>20&15]|o[R>>>16&15]|_[R>>>12&15]|h[R>>>8&15]|l[R>>>4&15],i=c[C>>>28]|d[C>>>24&15]|g[C>>>20&15]|p[C>>>16&15]|u[C>>>12&15]|b[C>>>8&15]|v[C>>>4&15],n=65535&(i>>>16^e),E[T++]=e^n,E[T++]=i^n<<16}return E},t.host="http://192.168.0.101/",t.AASlotUrl="hecslot/newsubmitbet",t.gamecode="Stair",t.loginname="fish001",t}();__reflect(GameService.prototype,"GameService");