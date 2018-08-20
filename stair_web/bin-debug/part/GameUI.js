var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameUI = (function (_super) {
    __extends(GameUI, _super);
    function GameUI(service, audio) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.audio = audio;
        _this.pay_table_page_image_array = ["pay_table_page1", "pay_table_page2", "pay_table_page3", "pay_table_page42"];
        _this.pay_table_page_image = "pay_table_page1";
        _this.record_img = ["record_box 1", "record_box 2_png"];
        _this.pay_table_next_btn_enable = true;
        _this.pay_table_back_btn_enable = false;
        _this.record_bg_img_sprite = _this.record_img[0];
        _this.record_bg_img_bool = true;
        _this.mask_manager = {};
        _this.notice = { "visible": false, "text": "正在准备中" };
        _this.gamecode = "Stair";
        _this.bet_type = { "0": { n: 0, w: false },
            "1": { n: 0, w: false }, "2": { n: 0, w: false }, "3": { n: 0, w: false },
            "4": { n: 0, w: false }, "5": { n: 0, w: false }, "6": { n: 0, w: false },
            "7": { n: 0, w: false }, "8": { n: 0, w: false }, "9": { n: 0, w: false } };
        _this.balance = 0;
        _this.balance_text = "";
        _this.winMoney = 0;
        _this.winMoney_text = "";
        _this.finalScore = 0;
        _this.finalScore_text = "";
        _this.single_bet_array = [1, 2, 4, 5, 10, 20, 50];
        _this.single_bet = 1;
        _this.total_bet = 0;
        _this.is_playing = false;
        _this.auto_playing = false;
        _this.loading = false;
        _this.line_4 = true;
        _this.line = { "0": { s: 0, v: false, l: 70 }, "1": { s: 0, v: false, l: 70 }, "2": { s: 0, v: false, l: 285 }, "3": { s: 0, v: false, l: 285 },
            "4": { s: 0, v: false, l: 30 }, "5": { s: 0, v: false, l: 30 }, "6": { s: 0, v: false, l: 285 }, "7": { s: 0, v: false, l: 285 },
            "8": { s: 0, v: false, l: 30 }, "9": { s: 0, v: false, l: 30 }, "10": { s: 0, v: false, l: 285 }, "11": { s: 0, v: false, l: 285 },
            "12": { s: 0, v: false, l: 30 }, "13": { s: 0, v: false, l: 30 }, "14": { s: 0, v: false, l: 285 }, "15": { s: 0, v: false, l: 285 },
            "16": { s: 0, v: false, l: 80 }, "17": { s: 0, v: false, l: 80 } };
        _this.circle = { "tl": "ig_x_gray_icon", "tr": "ig_x_gray_icon",
            "dl": "ig_single_gray_icon", "dr": "ig_dub_gray_icon" };
        _this.circle_sprite = { "tw": "ig_x_gray_icon", "tb": "ig_x_gray_icon",
            "dlw": "ig_single_gray_icon", "drw": "ig_dub_gray_icon",
            "dlb": "ig_single_black_icon", "drb": "ig_dub_black_icon",
            "s": "sb_single_icon", "m": "sb_dub_icon",
            "l": "sb_left_icon", "r": "sb_right_icon",
            "3": "sb_3_icon", "4": "sb_4_icon",
            "s3": "sb_single_icon_3", "s4": "sb_single_icon_4",
            "m3": "sb_bud_icon_3", "m4": "sb_bud_icon_4" };
        _this.result_panel = { v: { "gp": false, "0": false, "1": false, "2": false, "3": false, "4": false }, "img": { "lr": "", "34": "", "sm": "" } };
        _this.disableLine = [
            [1, 2, 3, 5, 6, 8, 11, 13, 14, 16],
            [0, 2, 3, 4, 7, 9, 10, 12, 15, 17],
            [0, 3, 5, 6, 8, 11, 13, 14, 16],
            [1, 2, 4, 7, 9, 10, 12, 15, 17]
        ];
        _this.betNumberArray = [1, 2, 4, 5, 10, 20, 50];
        _this.up_btn_bool = true;
        _this.recordString = "";
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/custom_skin/gameUISkin_v0.exml";
        _this.load_data();
        return _this;
    }
    GameUI.prototype.load_data = function () {
        this.balance_text = String(this.balance) + "元";
        if (egret.localStorage.getItem("winMoney") != null) {
            this.winMoney = Number(egret.localStorage.getItem("winMoney"));
        }
        this.winMoney_text = "赢得金钱" + this.winMoney.toFixed(2) + "元";
        if (egret.localStorage.getItem("mute_toggle") == "true") {
            this.mute_toggle.selected = true;
        }
        else {
            this.mute_toggle.selected = false;
        }
        this.setRecord(egret.localStorage.getItem("record"));
    };
    GameUI.prototype.uiCompHandler = function () {
        this.username = egret.getOption('username') ? egret.getOption('username') : 'fish001';
        this.balance = Number(egret.getOption('balance') ? egret.getOption('balance') : '999');
        this.token = egret.getOption('token') ? egret.getOption('token') : 'AAD4MFJYD40M9BI012MVX5O8RHK6V5';
        //this.username = egret.getOption('username') ? egret.getOption('username') : 'zhangyanli';
        //this.token = egret.getOption('token') ? egret.getOption('token') : '624ee884f9314fd1a7438de68f08474c';
        //this.username = egret.getOption('username');
        //this.token = egret.getOption('token');
        //this.username = egret.getOption('username');
        //this.balance = Number(egret.getOption('balance'));
        //this.token = egret.getOption('token');
        this.draw_mask(this.record_content, "record");
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
    };
    GameUI.prototype.draw_mask = function (t, string) {
        if (t.contains((this.mask_manager[string]))) {
            t.removeChild(this.mask_manager[string]);
        }
        this.mask_manager[string] = new egret.Shape();
        this.mask_manager[string].graphics.beginFill(0x0000ff);
        this.mask_manager[string].graphics.drawRoundRect(0, 0, t.width, t.height, 25);
        this.mask_manager[string].graphics.endFill();
        this.record_content.addChild(this.mask_manager[string]);
        t.mask = this.mask_manager[string];
    };
    //Button
    GameUI.prototype.playBtnHandler = function () {
        if (this.is_playing) {
            return;
        }
        this.audio.play_sound("beepfruit_wav");
        this.play();
    };
    GameUI.prototype.play = function () {
        var _this = this;
        console.log("play");
        if (this.is_playing) {
            return;
        }
        this.is_playing = true;
        if (this.total_bet <= 0) {
            this.show_notice("请投注", function () { _this.notice.visible = false; });
            this.auto_playing = false;
            this.auto_toggle.selected = false;
            this.is_playing = false;
            return;
        }
        if (this.balance < this.total_bet) {
            this.show_notice("余额不足", function () { _this.notice.visible = false; });
            this.auto_playing = false;
            this.auto_toggle.selected = false;
            this.is_playing = false;
            return;
        }
        this.play_btn.touchEnabled = false;
        this.loading = true;
        this.balance -= this.total_bet;
        this.balance_text = String(this.balance) + "元";
        var _bet_type = "";
        for (var i = 0; i < 9; i++) {
            _bet_type += this.bet_type[String(i)].n + ",";
        }
        _bet_type += this.bet_type[String(9)].n;
        this.service.bet(this.username, _bet_type, String(this.single_bet), String(this.total_bet), this.gamecode, this.token, (function (that) {
            return function (event) {
                return that.betCompleteHandler.bind(that)(event);
            };
        })(this), function (error) {
            _this.show_notice(String(error), function () { _this.notice.visible = false; });
            _this.balance += _this.total_bet;
            _this.balance_text = String(_this.balance) + "元";
            _this.loading = false;
            _this.auto_playing = false;
            _this.auto_toggle.selected = false;
            _this.is_playing = false;
            _this.play_btn.touchEnabled = true;
        }, function () { });
    };
    GameUI.prototype.resetBtnHandler = function () {
        if (this.is_playing) {
            return;
        }
        this.audio.play_sound("beepfruit_wav");
        for (var i = 0; i < 10; i++) {
            this.bet_type[String(i)].n = 0;
        }
        this.single_bet = this.single_bet_array[0];
        this.total_bet = 0;
    };
    GameUI.prototype.bet_btnHandler = function (evt) {
        var _this = this;
        if (this.is_playing) {
            return;
        }
        this.audio.play_sound("beepfruit_wav");
        this.bet_type[evt.target.name].n += 1;
        this.update_total_bet();
        if (this.auto_playing) {
            if (this.auto_playing) {
                var Timer_1 = new egret.Timer(360, 1);
                Timer_1.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
                    Timer_1.stop();
                    _this.play();
                }, Timer_1.start());
            }
        }
    };
    GameUI.prototype.addBtnHandler = function () {
        if (this.is_playing || this.single_bet >= 50)
            return;
        this.result_panel.v.gp = false;
        this.audio.play_sound("beepfruit_wav");
        for (var i = 0; i < this.single_bet_array.length - 1; i++) {
            if (this.single_bet == this.single_bet_array[i]) {
                this.single_bet = this.single_bet_array[i + 1];
                this.update_total_bet();
                break;
            }
        }
    };
    GameUI.prototype.subBtnHandler = function () {
        if (this.is_playing || this.single_bet <= 1)
            return;
        this.result_panel.v.gp = false;
        this.audio.play_sound("beepfruit_wav");
        for (var i = 0; i < this.single_bet_array.length; i++)
            if (this.single_bet == this.single_bet_array[i]) {
                this.single_bet = this.single_bet_array[i - 1];
                this.update_total_bet();
                break;
            }
    };
    GameUI.prototype.update_total_bet = function () {
        var _total_bet = 0;
        for (var i = 0; i < 10; i++) {
            _total_bet += this.single_bet * this.bet_type[String(i)].n;
        }
        this.total_bet = _total_bet;
    };
    GameUI.prototype.autoBtnHandler = function () {
        this.auto_playing = this.auto_toggle.selected;
        if (this.auto_playing) {
            this.play();
        }
    };
    GameUI.prototype.upBtnHandler = function () {
        if (this.up_btn_bool == true) {
            this.up_btn_bool = false;
            this.record_gp.height = 880;
            this.record_gp.anchorOffsetY = 880;
            this.record_bg_img_sprite = this.record_img[1];
            this.record_bg_img.height = 872;
            this.record_content.height = 750;
            this.up_btn.rotation = 180;
            this.draw_mask(this.record_content, "record");
        }
        else {
            this.up_btn_bool = true;
            this.record_gp.height = 182;
            this.record_gp.anchorOffsetY = 182;
            this.record_bg_img_sprite = this.record_img[0];
            this.record_bg_img.height = 175;
            this.record_content.height = 55;
            this.up_btn.rotation = 0;
            this.draw_mask(this.record_content, "record");
        }
    };
    GameUI.prototype.clear_recordBtnHandler = function () {
        egret.localStorage.setItem("record", "");
        this.record_content.removeChildren();
        this.record_content.addChild(this.mask_manager["record"]);
    };
    GameUI.prototype.pay_tableBtnHandler = function (evt) {
        if (String(evt.target.name) == "true") {
            this.pay_table_gp = true;
        }
        else if (String(evt.target.name) == "false") {
            this.pay_table_gp = false;
        }
    };
    GameUI.prototype.mute_TgeHandler = function () {
        if (this.mute_toggle.selected) {
            egret.localStorage.setItem("mute_toggle", "true");
        }
        else {
            egret.localStorage.setItem("mute_toggle", "false");
        }
    };
    GameUI.prototype.exit_BtnHandler = function () {
        console.log("exit_BtnHandler");
    };
    GameUI.prototype.pay_table_nextBtnHandler = function () {
        if (this.pay_table_page_image == this.pay_table_page_image_array[2]) {
            this.pay_table_next_btn_enable = false;
        }
        else if (this.pay_table_page_image == this.pay_table_page_image_array[0]) {
            this.pay_table_back_btn_enable = true;
        }
        //AudioManager.instance.PlaySound("click");
        for (var i = 0; i < this.pay_table_page_image_array.length - 1; i++) {
            if (this.pay_table_page_image == this.pay_table_page_image_array[i]) {
                this.pay_table_page_image = this.pay_table_page_image_array[i + 1];
                break;
            }
        }
    };
    GameUI.prototype.pay_table_backBtnHandler = function () {
        if (this.pay_table_page_image == this.pay_table_page_image_array[1]) {
            this.pay_table_back_btn_enable = false;
        }
        else if (this.pay_table_page_image == this.pay_table_page_image_array[3]) {
            this.pay_table_next_btn_enable = true;
        }
        //AudioManager.instance.PlaySound("click");
        for (var i = 0; i < this.pay_table_page_image_array.length; i++)
            if (this.pay_table_page_image == this.pay_table_page_image_array[i]) {
                this.pay_table_page_image = this.pay_table_page_image_array[i - 1];
                break;
            }
    };
    GameUI.prototype.result_panel_closeBtnHandler = function () {
        this.result_panel.v.gp = false;
    };
    GameUI.prototype.bet_btn_addEventListener = function () {
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
    };
    //Function
    GameUI.prototype.betCompleteHandler = function (event) {
        var _this = this;
        var request = event.currentTarget;
        this.gameTotalData = JSON.parse(request.response);
        console.log(this.gameTotalData.data);
        if (this.gameTotalData.data == null) {
            this.show_notice("网络错误", function () { _this.notice.visible = false; });
            this.balance += this.total_bet;
            this.balance_text = String(this.balance) + "元";
            this.loading = false;
            this.auto_playing = false;
            this.auto_toggle.selected = false;
            this.is_playing = false;
            this.play_btn.touchEnabled = true;
        }
        else {
            this.result();
        }
    };
    GameUI.prototype.result = function () {
        this.loading = false;
        this.result_panel.v.gp = false;
        this.line_animation(Number(this.gameTotalData.data.results));
    };
    GameUI.prototype.line_animation = function (r_num) {
        for (var i = 0; i < 18; i++) {
            this.line[String(i)].v = true;
            this.line[String(i)].s = 0;
        }
        for (var i = 0; i < this.disableLine[r_num].length; i++) {
            this.line[String(this.disableLine[r_num][i])].v = false;
        }
        for (var i = 0; i < 10; i++) {
            this.bet_type[String(i)].w = false;
        }
        this.circle.dl = this.circle_sprite.dlw;
        this.circle.dr = this.circle_sprite.drw;
        if (r_num == 2 || r_num == 3) {
            this.bet_type[String(3)].w = true;
            this.line_4 = true;
        }
        else {
            this.bet_type[String(2)].w = true;
            this.line_4 = false;
        }
        if (r_num == 0 || r_num == 3) {
            this.bet_type[String(5)].w = true;
            this.circle.tl = this.circle_sprite.tb;
            this.circle.tr = this.circle_sprite.tw;
        }
        else {
            this.bet_type[String(4)].w = true;
            this.circle.tl = this.circle_sprite.tw;
            this.circle.tr = this.circle_sprite.tb;
        }
        for (var i = 0; i < 18; i++) {
            if (this.line[String(i)].v) {
                this.line_move(String(i));
                return;
            }
        }
    };
    GameUI.prototype._line_animation = function (r_num) {
        if (r_num == 0 || r_num == 2) {
            this.bet_type[String(0)].w = true;
            this.circle.dl = this.circle_sprite.dlb;
        }
        else {
            this.bet_type[String(1)].w = true;
            this.circle.dr = this.circle_sprite.drb;
        }
        this.bet_type[String(r_num + 6)].w = true;
        this.result_animation(Number(this.gameTotalData.data.results), Number(this.gameTotalData.data.finalScore));
    };
    GameUI.prototype.result_animation = function (r_num, w_num) {
        var _this = this;
        if (w_num > 0) {
            for (var i = 0; i < 5; i++) {
                this.result_panel.v[String(i)] = false;
            }
            if (r_num == 0) {
                this.result_panel.img.lr = this.circle_sprite.r;
                this.result_panel.img[String(34)] = this.circle_sprite[String(3)];
                this.result_panel.img.sm = this.circle_sprite.s;
            }
            else if (r_num == 1) {
                this.result_panel.img.lr = this.circle_sprite.l;
                this.result_panel.img[String(34)] = this.circle_sprite[String(3)];
                this.result_panel.img.sm = this.circle_sprite.m;
            }
            else if (r_num == 2) {
                this.result_panel.img.lr = this.circle_sprite.l;
                this.result_panel.img[String(34)] = this.circle_sprite[String(4)];
                this.result_panel.img.sm = this.circle_sprite.s;
            }
            else if (r_num == 3) {
                this.result_panel.img.lr = this.circle_sprite.r;
                this.result_panel.img[String(34)] = this.circle_sprite[String(4)];
                this.result_panel.img.sm = this.circle_sprite.m;
            }
            this.result_panel.v.gp = true;
            var speed = 300;
            var _loop_1 = function (i) {
                if (this_1.skip_btn.selected) {
                    this_1.result_panel.v[String(i)] = true;
                    if (i == 4) {
                        this_1.end_turn();
                    }
                }
                else {
                    var Timer = new egret.Timer(i * speed, 1);
                    Timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
                        _this.result_panel.v[String(i)] = true;
                        if (i == 4) {
                            _this.end_turn();
                        }
                    }, Timer.start());
                }
            };
            var this_1 = this;
            for (var i = 0; i < 5; i++) {
                _loop_1(i);
            }
            this.winMoney += w_num;
            this.winMoney_text = "赢得金钱" + this.winMoney.toFixed(2) + "元";
            this.balance = Number(this.gameTotalData.data.balance.toFixed(2));
            this.balance_text = String(this.balance) + "元";
            this.finalScore = Number(w_num.toFixed(2));
            this.finalScore_text = w_num.toFixed(2) + "元";
            egret.localStorage.setItem("winMoney", String(this.winMoney.toFixed(2)));
        }
        else {
            this.balance = Number(this.gameTotalData.data.balance.toFixed(2));
            this.balance_text = String(this.balance) + "元";
            this.end_turn();
        }
        var _record = (String(r_num) + "," + this.formatDate() + ";");
        this.setRecord(_record);
    };
    GameUI.prototype.formatDate = function () {
        var Dates = new Date();
        var Year = Dates.getFullYear();
        var Months = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
        var Day = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
        var Hours = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
        var Minutes = Dates.getMinutes() < 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();
        var Seconds = Dates.getSeconds() < 10 ? '0' + Dates.getSeconds() : Dates.getSeconds();
        return Year + '年' + Months + '月' + Day + '日' + Hours + '時' + Minutes + '分' + Seconds + '秒';
    };
    GameUI.prototype.end_turn = function () {
        var _this = this;
        this.is_playing = false;
        this.skip_btn.selected = false;
        if (this.auto_playing) {
            var Timer_2 = new egret.Timer(1, 1);
            Timer_2.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
                Timer_2.stop();
                _this.play();
            }, Timer_2.start());
        }
        else {
            this.play_btn.touchEnabled = true;
        }
    };
    GameUI.prototype.line_move = function (_line) {
        var _this = this;
        this.line[String(_line)].s = 0;
        var speed;
        if (this.skip_btn.selected) {
            speed = 30;
        }
        else {
            speed = 10;
        }
        var Timer = new egret.Timer(speed / this.line[String(_line)].l, this.line[String(_line)].l / speed);
        Timer.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.line[String(_line)].s += speed / _this.line[String(_line)].l;
        }, Timer.start());
        Timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
            Timer.stop();
            _this.line[String(_line)].s = 1;
            for (var i = Number(_line) + 1; i < 18; i++) {
                if (_this.line[String(i)].v) {
                    _this.line_move(String(i));
                    return;
                }
            }
            _this._line_animation(Number(_this.gameTotalData.data.results));
        }, Timer.start());
    };
    GameUI.prototype.setRecord = function (value) {
        if (value == "" || value == null) {
            return;
        }
        var recordStringArray = value.split(';');
        var StrArray = [];
        for (var i = 0; i < recordStringArray.length - 1; i++) {
            StrArray[i] = recordStringArray[i].split(',');
        }
        for (var i = 0; i < StrArray.length; i++) {
            var record = new recordGo();
            switch (StrArray[i][0]) {
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
            this.record_content.addChildAt(record, 0);
        }
        this.recordString += value;
        var tmp = this.recordString.split(';');
        var record_count = 20;
        if (tmp.length > record_count) {
            var loop = this.record_content.numChildren - record_count;
            for (var i = 0; i < loop; i++) {
                this.record_content.removeChildAt(this.record_content.numChildren - 1);
            }
            this.recordString = "";
            for (var i = loop; i < tmp.length - 1; i++) {
                this.recordString += tmp[i] + ";";
            }
        }
        egret.localStorage.setItem("record", this.recordString);
    };
    GameUI.prototype.show_notice = function (content, confirm_btn) {
        this.notice.visible = true;
        this.notice.text = content;
        this.notice_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, confirm_btn, this);
    };
    return GameUI;
}(eui.Component));
__reflect(GameUI.prototype, "GameUI");
//# sourceMappingURL=GameUI.js.map