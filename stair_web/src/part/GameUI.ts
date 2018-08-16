
 class GameUI extends eui.Component {

	private play_btn: eui.Button;
	private reset_btn: eui.Button;
	private auto_toggle: eui.ToggleButton;
	private add_btn: eui.Button;
	private sub_btn: eui.Button;
	private pay_table_btn: eui.Button;
	private exit_btn: eui.Button;
	private mute_toggle: eui.ToggleButton;

	private pay_table_gp: boolean;
	private pay_table_back_btn: eui.Button;
	private pay_table_next_btn: eui.Button;
	private pay_table_close_btn: eui.Button;
	private pay_table_page_image_array = ["pay_table_page1","pay_table_page2","pay_table_page3","pay_table_page42"]
	private pay_table_page_image:string = "pay_table_page1";
	private record_img = ["record_box 1","record_box 2_png"];
	private pay_table_next_btn_enable:boolean = true;
	private pay_table_back_btn_enable:boolean = false;

	private result_panel_close: eui.Button;

	private bet_btn_0: eui.Button;private bet_btn_1: eui.Button;private bet_btn_2: eui.Button;
	private bet_btn_3: eui.Button;private bet_btn_4: eui.Button;private bet_btn_5: eui.Button;
	private bet_btn_6: eui.Button;private bet_btn_7: eui.Button;private bet_btn_8: eui.Button;
	private bet_btn_9: eui.Button;

	private bet_btn_10: eui.Button;private bet_btn_11: eui.Button;private bet_btn_12: eui.Button;
	private bet_btn_13: eui.Button;private bet_btn_14: eui.Button;private bet_btn_15: eui.Button;
	private bet_btn_16: eui.Button;private bet_btn_17: eui.Button;private bet_btn_18: eui.Button;
	private bet_btn_19: eui.Button;

	private bet_btn_20: eui.Label;private bet_btn_21: eui.Label;private bet_btn_22: eui.Label;
	private bet_btn_23: eui.Label;private bet_btn_24: eui.Label;private bet_btn_25: eui.Label;
	private bet_btn_26: eui.Label;private bet_btn_27: eui.Label;private bet_btn_28: eui.Label;
	private bet_btn_29: eui.Label;
	
	private record_bg_img:eui.Image;
	private record_bg_img_sprite = this.record_img[0];
	private	record_gp:eui.Group;
	private	record_content:eui.Group;
	private up_btn: eui.Button;
	private clear_record_btn: eui.Button;
	private record_bg_img_bool = true;
	private mask_manager = {};
	private notice = {"visible":false,"text":"正在准备中"};
	private notice_btn: eui.Label;
	constructor(private service: GameService, private audio:audio_manager) {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
        this.skinName = "resource/custom_skin/gameUISkin_v0.exml";
		this.load_data();
	}

	public load_data(){
		this.balance = 1000;
		this.balance_text = String(this.balance) + "元";
		
		if(egret.localStorage.getItem("winMoney") != null){
			this.winMoney = Number(egret.localStorage.getItem("winMoney"));
		}
		this.winMoney_text = this.winMoney.toFixed(2) + "元";

		if (egret.localStorage.getItem("mute_toggle") == "true"){
			this.mute_toggle.selected = true;
		}else{
			this.mute_toggle.selected = false;
		}

		
		this.setRecord(egret.localStorage.getItem("record"));
	}

	public uiCompHandler(){
		
		this.draw_mask(this.record_content,"record")

		this.play_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playBtnHandler, this);
		this.reset_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resetBtnHandler, this);
		this.auto_toggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.autoBtnHandler, this);
		this.add_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addBtnHandler, this);
		this.sub_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.subBtnHandler, this);
		this.up_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.upBtnHandler, this);
		this.clear_record_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clear_recordBtnHandler, this);
		this.pay_table_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pay_tableBtnHandler, this);
		this.mute_toggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mute_TgeHandler, this);
		this.exit_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.exit_BtnHandler, this);
		this.pay_table_next_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pay_table_nextBtnHandler, this);
		this.pay_table_back_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pay_table_backBtnHandler, this);
		this.pay_table_close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pay_tableBtnHandler, this);
		this.result_panel_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.result_panel_closeBtnHandler, this);
		
		this.bet_btn_addEventListener();
	}

	public draw_mask(t,string){
		if(this.mask_manager[string] != null){
			t.removeChild(this.mask_manager[string]);
		}
		this.mask_manager[string] = new egret.Shape();
		this.mask_manager[string].graphics.beginFill(0x0000ff);
		this.mask_manager[string].graphics.drawRoundRect(0,0,t.width,t.height,25);
		this.mask_manager[string].graphics.endFill();
		this.record_content.addChild(this.mask_manager[string]);
		t.mask = this.mask_manager[string];
	}

	private gamecode = "Stair";
    public gameTotalData;

	private bet_type = {"0":{n:0,w:false},
						"1":{n:0,w:false},"2":{n:0,w:false},"3":{n:0,w:false},
						"4":{n:0,w:false},"5":{n:0,w:false},"6":{n:0,w:false},
						"7":{n:0,w:false},"8":{n:0,w:false},"9":{n:0,w:false}};

	private balance:number = 0; private balance_text = "";
	private winMoney:number = 0; private winMoney_text = "";
	private finalScore:number = 0; private finalScore_text = "";

	private single_bet_array = [1,2,4,5,10,20,50];
	public single_bet = 1;
	public total_bet = 0;
	public is_playing = false;
	public auto_playing = false;
	private loading = false;
	private line_4 = true;
	private line = {"0":{s:0,v:false,l:70},"1":{s:0,v:false,l:70},"2":{s:0,v:false,l:285},"3":{s:0,v:false,l:285},
					"4":{s:0,v:false,l:30},"5":{s:0,v:false,l:30},"6":{s:0,v:false,l:285},"7":{s:0,v:false,l:285},
					"8":{s:0,v:false,l:30},"9":{s:0,v:false,l:30},"10":{s:0,v:false,l:285},"11":{s:0,v:false,l:285},
					"12":{s:0,v:false,l:30},"13":{s:0,v:false,l:30},"14":{s:0,v:false,l:285},"15":{s:0,v:false,l:285},
					"16":{s:0,v:false,l:80},"17":{s:0,v:false,l:80}};
	private circle = {"tl":"ig_x_gray_icon","tr":"ig_x_gray_icon",
					"dl":"ig_single_gray_icon","dr":"ig_dub_gray_icon"};
	private circle_sprite = {"tw":"ig_x_gray_icon","tb":"ig_x_gray_icon",
							"dlw":"ig_single_gray_icon","drw":"ig_dub_gray_icon",
							"dlb":"ig_single_black_icon","drb":"ig_dub_black_icon",
							"s":"sb_single_icon","m":"sb_dub_icon",
							"l":"sb_left_icon","r":"sb_right_icon",
							"3":"sb_3_icon","4":"sb_4_icon",
							"s3":"sb_single_icon_3","s4":"sb_single_icon_4",
							"m3":"sb_bud_icon_3","m4":"sb_bud_icon_4"}
	private result_panel = {v:{"gp":false,"0":false,"1":false,"2":false,"3":false,"4":false},"img":{"lr":"","34":"","sm":""}};
	private disableLine = [
							[1, 2, 3, 5, 6, 8, 11, 13, 14, 16],
							[0, 2, 3, 4, 7, 9, 10, 12, 15, 17],
							[0, 3, 5, 6, 8, 11, 13, 14, 16],
							[1, 2, 4, 7, 9, 10, 12, 15, 17]
							];

    private betNumberArray = [ 1, 2, 4, 5, 10, 20, 50 ];
	
	//Button

	public playBtnHandler() {

		if(this.is_playing)
		{
			return;
		}

		this.audio.play_sound("beepfruit_wav");
		this.play();
	}

	public play() {
		console.log("play");
		if(this.is_playing)
		{
			return;
		}

		this.is_playing = true;
       if (this.total_bet <= 0)
        {
			this.show_notice("请投注",()=>{this.notice.visible = false});
			this.auto_playing = false;
			this.auto_toggle.selected = false;
            this.is_playing = false;
            return;
        }

		if (this.balance < this.total_bet)
        {
			this.show_notice("余额不足",()=>{this.notice.visible = false});
			this.auto_playing = false;
			this.auto_toggle.selected = false;
            this.is_playing = false;
            return;
        }

		this.play_btn.touchEnabled = false;
		this.loading = true;
		this.balance -= this.total_bet;
		this.balance_text = String(this.balance) + "元";
		let _bet_type = "";
		for(let i = 0;i<9;i++){
			_bet_type += this.bet_type[String(i)].n + ",";
		}
		_bet_type += this.bet_type[String(9)].n;
		this.service.bet(_bet_type,String(this.single_bet),String(this.total_bet),this.gamecode,
			(function (that:GameUI) {
				return function (event: egret.Event) {
					return that.betCompleteHandler.bind(that)(event);
				}
			}
		)(this),
        (error) => {
			this.show_notice(String(error),()=>{this.notice.visible = false});
			this.loading = false;
			this.auto_playing = false;
			this.auto_toggle.selected = false;
			this.is_playing = false;
			this.play_btn.touchEnabled = true;
        },() => { });
	}

	public resetBtnHandler() {
		if(this.is_playing){
			return;
		}
		this.audio.play_sound("beepfruit_wav");
		for(let i = 0; i < 10 ;i++){
			this.bet_type[String(i)].n = 0;
		}
		this.single_bet = this.single_bet_array[0];
		this.total_bet = 0;
	}

	public bet_btnHandler(evt) {
		if(this.is_playing){
			return;
		}
		this.audio.play_sound("beepfruit_wav");
		this.bet_type[evt.target.name].n += 1;
		this.update_total_bet();

		if(this.auto_playing){
			if(this.auto_playing){
				let Timer = new egret.Timer(360,1);
				Timer.addEventListener(
				egret.TimerEvent.TIMER_COMPLETE,() => {
					Timer.stop();
					this.play();
				},Timer.start())
			}
		}
	}

	public addBtnHandler(){
		 if (this.is_playing || this.single_bet >= 50)
            return;

		this.result_panel.v.gp = false;
        this.audio.play_sound("beepfruit_wav");
        for (let i = 0; i < this.single_bet_array.length - 1; i++){
            if (this.single_bet == this.single_bet_array[i])
            {
                this.single_bet = this.single_bet_array[i + 1];
				this.update_total_bet();
                break;
            }
		}
	}

	public subBtnHandler(){
       if (this.is_playing || this.single_bet <= 1)
            return;

		this.result_panel.v.gp = false;
        this.audio.play_sound("beepfruit_wav");
        for (let i = 0; i < this.single_bet_array.length; i++)
            if (this.single_bet == this.single_bet_array[i])
            {
                this.single_bet = this.single_bet_array[i - 1];
				this.update_total_bet();
                break;
            }
	}

	public update_total_bet(){
		let _total_bet = 0;
		for(let i = 0; i < 10 ;i++){
			_total_bet += this.single_bet * this.bet_type[String(i)].n;
		}
		this.total_bet = _total_bet;
	}

	public autoBtnHandler() {
		this.auto_playing = this.auto_toggle.selected;
		if(this.auto_playing){
			this.play();
		}
	}

	private up_btn_bool = true;
	public upBtnHandler() {
		if(this.up_btn_bool == true){
			this.up_btn_bool = false;
			this.record_gp.height = 880;
			this.record_gp.anchorOffsetY = 880;
			this.record_bg_img_sprite = this.record_img[1];
			this.record_bg_img.height = 872;
			this.record_content.height = 750;
			this.up_btn.rotation = 180;
			this.draw_mask(this.record_content,"record")
		}else{
			this.up_btn_bool = true;
			this.record_gp.height = 182;
			this.record_gp.anchorOffsetY = 182;
			this.record_bg_img_sprite = this.record_img[0];
			this.record_bg_img.height = 175;
			this.record_content.height = 55;
			this.up_btn.rotation = 0;
			this.draw_mask(this.record_content,"record")
		}
	}
	public clear_recordBtnHandler() {
		egret.localStorage.setItem("record","");
		this.record_content.removeChildren();
		this.record_content.addChild(this.mask_manager["record"]);
	}
	public pay_tableBtnHandler(evt) {
		if(String(evt.target.name) == "true"){
			this.pay_table_gp = true;
		}
		else if(String(evt.target.name) == "false"){
			this.pay_table_gp = false;
		}
	}

	public mute_TgeHandler() {
		if (this.mute_toggle.selected)
		{
			egret.localStorage.setItem("mute_toggle","true");
		}
		else
		{
			egret.localStorage.setItem("mute_toggle","false");
		}
	}
	public exit_BtnHandler() {
		console.log("exit_BtnHandler");
	}
	
	public pay_table_nextBtnHandler() {
		if (this.pay_table_page_image == this.pay_table_page_image_array[2]){
			this.pay_table_next_btn_enable = false;
		}
		else if(this.pay_table_page_image == this.pay_table_page_image_array[0]){
			this.pay_table_back_btn_enable = true;
		}
        //AudioManager.instance.PlaySound("click");
        for (let i = 0; i < this.pay_table_page_image_array.length - 1; i++){
            if (this.pay_table_page_image == this.pay_table_page_image_array[i])
            {
                this.pay_table_page_image = this.pay_table_page_image_array[i + 1];
                break;
            }
		}
	}

	public pay_table_backBtnHandler() {
		if (this.pay_table_page_image == this.pay_table_page_image_array[1]){
			this.pay_table_back_btn_enable = false;
		}
		else if(this.pay_table_page_image == this.pay_table_page_image_array[3]){
			this.pay_table_next_btn_enable = true;
		}
        //AudioManager.instance.PlaySound("click");
        for (let i = 0; i < this.pay_table_page_image_array.length; i++)
            if (this.pay_table_page_image == this.pay_table_page_image_array[i])
            {
                this.pay_table_page_image = this.pay_table_page_image_array[i - 1];
                break;
            }
	}
	
	public result_panel_closeBtnHandler() {
		this.result_panel.v.gp = false;
	}

	public bet_btn_addEventListener(){
	this.bet_btn_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_7.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_8.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_9.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);

		this.bet_btn_10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_11.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_12.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_13.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_14.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_15.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_16.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_17.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_18.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_19.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);

		this.bet_btn_20.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_21.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_22.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_23.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_24.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_25.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_26.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_27.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_28.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
		this.bet_btn_29.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bet_btnHandler, this);
	}

	//Function

	public betCompleteHandler(event: egret.Event){
		const request = <egret.HttpRequest>event.currentTarget;
		this.gameTotalData = JSON.parse(request.response);
		//this.result();
	}

	public result(){
		this.loading = false;
		this.result_panel.v.gp = false;
		this.line_animation(Number(this.gameTotalData.data.results));
	}

	public line_animation(r_num:number){
		for(let i = 0; i < 18;i++){
			this.line[String(i)].v = true;
			this.line[String(i)].s = 0;
		}
		for(let i = 0; i<this.disableLine[r_num].length;i++){
			this.line[String(this.disableLine[r_num][i])].v = false;
		}

		for(let i = 0;i < 10; i++){
			this.bet_type[String(i)].w = false;
		}

		this.circle.dl = this.circle_sprite.dlw;
		this.circle.dr = this.circle_sprite.drw;

        if (r_num == 2 || r_num == 3)
        {
			this.bet_type[String(3)].w = true;
            this.line_4 = true;
        }
        else
        {
            this.bet_type[String(2)].w = true;
            this.line_4 = false;
        }

        if (r_num == 0 || r_num == 3)
        {
            this.bet_type[String(5)].w = true;
            this.circle.tl = this.circle_sprite.tb;
            this.circle.tr = this.circle_sprite.tw;
        }
        else
        {
            this.bet_type[String(4)].w = true;
            this.circle.tl = this.circle_sprite.tw;
            this.circle.tr = this.circle_sprite.tb;
        }

		for(let i = 0; i< 18;i++){
			if(this.line[String(i)].v){
				this.line_move(String(i));
				return;
			}
		}

	}

	public _line_animation(r_num:number){
		if(r_num == 0 || r_num == 2)
        {
			this.bet_type[String(0)].w = true;
			this.circle.dl = this.circle_sprite.dlb;
        }else
        {			
			this.bet_type[String(1)].w = true;
			this.circle.dr = this.circle_sprite.drb;
        }

		this.bet_type[String(r_num + 6)].w = true;
		this.result_animation(Number(this.gameTotalData.data.results),Number(this.gameTotalData.data.finalScore));
	
	}

	public result_animation(r_num:number, w_num:number){
		if (w_num > 0) {
			for (let i = 0; i< 5; i++)
			{
				this.result_panel.v[String(i)] = false;
			}

			if (r_num == 0)
			{
				this.result_panel.img.lr = this.circle_sprite.r;
				this.result_panel.img[String(34)] = this.circle_sprite[String(3)];
				this.result_panel.img.sm = this.circle_sprite.s;
			}else if(r_num == 1){
				this.result_panel.img.lr = this.circle_sprite.l;
				this.result_panel.img[String(34)] = this.circle_sprite[String(3)];
				this.result_panel.img.sm = this.circle_sprite.m;
			}else if(r_num == 2){
				this.result_panel.img.lr = this.circle_sprite.l;
				this.result_panel.img[String(34)] = this.circle_sprite[String(4)];
				this.result_panel.img.sm = this.circle_sprite.s;
			}else if(r_num == 3){
				this.result_panel.img.lr = this.circle_sprite.r;
				this.result_panel.img[String(34)] = this.circle_sprite[String(4)];
				this.result_panel.img.sm = this.circle_sprite.m;
			}

			this.result_panel.v.gp = true;
			let speed = 300;
			for (let i = 0; i< 5; i++)
			{
				let Timer = new egret.Timer(i * speed,1);
				Timer.addEventListener(
				egret.TimerEvent.TIMER_COMPLETE,() => {
					this.result_panel.v[String(i)] = true;
					if(i == 4){
						this.end_turn();
					}
				},Timer.start())
			}
			this.winMoney += Number(w_num.toFixed(2));
			this.winMoney_text = w_num.toFixed(2) + "元";

			this.balance = Number(this.gameTotalData.data.balance.toFixed(2));
			this.balance_text = String(this.balance) + "元";

			this.finalScore = Number(w_num.toFixed(2));
			this.finalScore_text = w_num.toFixed(2) + "元";

			egret.localStorage.setItem("winMoney",String(this.winMoney.toFixed(2)));
		} else {
			this.end_turn();
		}

		let time = new Date;
		let _record = (String(r_num) + "," + 
						String(time.getFullYear()) + "年" +
			String(time.getMonth()) + "月" +
			String(time.getDay()) + "日" + 
			String(time.getHours()) + "时" + 
			String(time.getMinutes()) + "分" + 
			String(time.getSeconds()) + "秒;");
		this.setRecord(_record);
	}

	public end_turn(){
		this.is_playing = false;
		if (this.auto_playing) {
			let Timer = new egret.Timer(1,1);
			Timer.addEventListener(
			egret.TimerEvent.TIMER_COMPLETE,() => {
				Timer.stop();
				this.play();
			},Timer.start())
		} else {
			this.play_btn.touchEnabled = true;
		}
	}

	public line_move(_line:String){
		this.line[String(_line)].s = 0;
		let speed = 10;
		let Timer = new egret.Timer(speed/this.line[String(_line)].l,this.line[String(_line)].l/speed);
		Timer.addEventListener(
			egret.TimerEvent.TIMER,() => {
				this.line[String(_line)].s += speed/this.line[String(_line)].l;
			},Timer.start()
		)
		Timer.addEventListener(
			egret.TimerEvent.TIMER_COMPLETE,() => {
				Timer.stop();
				this.line[String(_line)].s = 1;
				for(let i = Number(_line) + 1; i< 18;i++){

					if(this.line[String(i)].v){
						this.line_move(String(i));

						return;
					}
				}
				this._line_animation(Number(this.gameTotalData.data.results));
			},
		Timer.start())
	}

	private recordString = "";
	private setRecord(value:String){
		if(value == "" || value == null)
		{
			return;
		}	
		let recordStringArray = value.split(';');
		let StrArray = [];
		for (let i = 0; i < recordStringArray.length - 1; i++)
		{
			StrArray[i] = recordStringArray[i].split(',');
		}
		for(let i = 0; i< StrArray.length; i++)
		{
			let record = new recordGo();
			switch (StrArray[i][0])
			{
				case "0":
					record.record_data[String(0)] = this.circle_sprite.s;
					record.record_data[String(1)] = this.circle_sprite[String(3)];
					record.record_data[String(2)] = this.circle_sprite.r;
					break;
				case "1":
					record.record_data[String(0)] = this.circle_sprite.m;
					record.record_data[String(1)] = this.circle_sprite[String(3)];
					record.record_data[String(2)] = this.circle_sprite.l;
					break;
				case "2":
					record.record_data[String(0)] = this.circle_sprite.s;
					record.record_data[String(1)] = this.circle_sprite[String(4)];
					record.record_data[String(2)] = this.circle_sprite.l;
					break;
				case "3":
					record.record_data[String(0)] = this.circle_sprite.m;
					record.record_data[String(1)] = this.circle_sprite[String(4)];
					record.record_data[String(2)] = this.circle_sprite.r;
					break;
		}

			record.record_data[String(3)] = StrArray[i][1];
			record.record_data[String(4)] = this.record_bg_img_bool;
			this.record_bg_img_bool = !this.record_bg_img_bool;
			this.record_content.addChildAt(record,0);
		}
		this.recordString += value;
		let tmp = this.recordString.split(';'); 
		let record_count = 20;
		if (tmp.length > record_count){
			let loop = this.record_content.numChildren - record_count;
			for (let i = 0; i < loop; i++) {
				this.record_content.removeChildAt(this.record_content.numChildren - 1);
			}
			this.recordString = "";
			for(let i = loop; i < tmp.length - 1; i++) {
				this.recordString += tmp[i] + ";";
			}
		}
		egret.localStorage.setItem("record",this.recordString);
	}

	private show_notice(content:string,confirm_btn){
		this.notice.visible = true;
		this.notice.text = content;
		this.notice_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, confirm_btn, this);
	}
}