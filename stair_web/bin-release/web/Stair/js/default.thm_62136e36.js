window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/custom_skin/gameUISkin_v0.exml'] = window.gameUISkin_v0 = (function (_super) {
	__extends(gameUISkin_v0, _super);
	var gameUISkin_v0$Skin1 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin1, _super);
		function gameUISkin_v0$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "back_button";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin1;
	})(eui.Skin);

	var gameUISkin_v0$Skin2 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin2, _super);
		function gameUISkin_v0$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "paytable_button";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin2;
	})(eui.Skin);

	var gameUISkin_v0$Skin3 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin3, _super);
		function gameUISkin_v0$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mute_button_disable_type8_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "mute_button_enable_type8_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin3;
	})(eui.Skin);

	var gameUISkin_v0$Skin4 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin4, _super);
		function gameUISkin_v0$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "play_button_idle ";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin4;
	})(eui.Skin);

	var gameUISkin_v0$Skin5 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin5, _super);
		function gameUISkin_v0$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","auto_button_activate")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "auto_button_disable";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin5;
	})(eui.Skin);

	var gameUISkin_v0$Skin6 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin6, _super);
		function gameUISkin_v0$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","+_button_pressed")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "+_button_idle";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin6;
	})(eui.Skin);

	var gameUISkin_v0$Skin7 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin7, _super);
		function gameUISkin_v0$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","-_button_pressed")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "-_button_idle";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin7;
	})(eui.Skin);

	var gameUISkin_v0$Skin8 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin8, _super);
		function gameUISkin_v0$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","speed_up_button_able_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "speed_up_button_disable";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin8;
	})(eui.Skin);

	var gameUISkin_v0$Skin9 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin9, _super);
		function gameUISkin_v0$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bet_button";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin9;
	})(eui.Skin);

	var gameUISkin_v0$Skin10 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin10, _super);
		function gameUISkin_v0$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bet_button";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin10;
	})(eui.Skin);

	var gameUISkin_v0$Skin11 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin11, _super);
		function gameUISkin_v0$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bet_button";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin11;
	})(eui.Skin);

	var gameUISkin_v0$Skin12 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin12, _super);
		function gameUISkin_v0$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bet_button";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin12;
	})(eui.Skin);

	var gameUISkin_v0$Skin13 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin13, _super);
		function gameUISkin_v0$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bet_button";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin13;
	})(eui.Skin);

	var gameUISkin_v0$Skin14 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin14, _super);
		function gameUISkin_v0$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bet_button";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin14;
	})(eui.Skin);

	var gameUISkin_v0$Skin15 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin15, _super);
		function gameUISkin_v0$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bet_button";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin15;
	})(eui.Skin);

	var gameUISkin_v0$Skin16 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin16, _super);
		function gameUISkin_v0$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bet_button";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin16;
	})(eui.Skin);

	var gameUISkin_v0$Skin17 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin17, _super);
		function gameUISkin_v0$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bet_button";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin17;
	})(eui.Skin);

	var gameUISkin_v0$Skin18 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin18, _super);
		function gameUISkin_v0$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bet_button";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin18;
	})(eui.Skin);

	var gameUISkin_v0$Skin19 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin19, _super);
		function gameUISkin_v0$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sb_single_icon";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin19;
	})(eui.Skin);

	var gameUISkin_v0$Skin20 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin20, _super);
		function gameUISkin_v0$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sb_dub_icon";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin20;
	})(eui.Skin);

	var gameUISkin_v0$Skin21 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin21, _super);
		function gameUISkin_v0$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sb_3_icon";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin21;
	})(eui.Skin);

	var gameUISkin_v0$Skin22 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin22, _super);
		function gameUISkin_v0$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sb_4_icon";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin22;
	})(eui.Skin);

	var gameUISkin_v0$Skin23 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin23, _super);
		function gameUISkin_v0$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sb_left_icon";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin23;
	})(eui.Skin);

	var gameUISkin_v0$Skin24 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin24, _super);
		function gameUISkin_v0$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sb_right_icon";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin24;
	})(eui.Skin);

	var gameUISkin_v0$Skin25 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin25, _super);
		function gameUISkin_v0$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sb_single_icon_3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin25;
	})(eui.Skin);

	var gameUISkin_v0$Skin26 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin26, _super);
		function gameUISkin_v0$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sb_dub_icon_3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin26;
	})(eui.Skin);

	var gameUISkin_v0$Skin27 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin27, _super);
		function gameUISkin_v0$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sb_single_icon_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin27;
	})(eui.Skin);

	var gameUISkin_v0$Skin28 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin28, _super);
		function gameUISkin_v0$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sb_bud_icon_4";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin28;
	})(eui.Skin);

	var gameUISkin_v0$Skin29 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin29, _super);
		function gameUISkin_v0$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","cancel_button_pressed")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cancel_button_idle";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin29;
	})(eui.Skin);

	var gameUISkin_v0$Skin30 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin30, _super);
		function gameUISkin_v0$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","enlarge_record_button_pressed")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "enlarge_record_button_idle";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin30;
	})(eui.Skin);

	var gameUISkin_v0$Skin31 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin31, _super);
		function gameUISkin_v0$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","delet record_pressed")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "delet record_idle";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin31;
	})(eui.Skin);

	var gameUISkin_v0$Skin32 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin32, _super);
		function gameUISkin_v0$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","close_result_button_pressed")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "close_result_button_idle";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin32;
	})(eui.Skin);

	var gameUISkin_v0$Skin33 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin33, _super);
		function gameUISkin_v0$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","next_page-button_pressed")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "next_page-button_idle";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin33;
	})(eui.Skin);

	var gameUISkin_v0$Skin34 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin34, _super);
		function gameUISkin_v0$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_page-button_pressed copy")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_page_button_idle";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin34;
	})(eui.Skin);

	var gameUISkin_v0$Skin35 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin35, _super);
		function gameUISkin_v0$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","close_button_pressed")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "close_button_idle";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin35;
	})(eui.Skin);

	var gameUISkin_v0$Skin36 = 	(function (_super) {
		__extends(gameUISkin_v0$Skin36, _super);
		function gameUISkin_v0$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","confirm_button_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameUISkin_v0$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "confirm_button_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gameUISkin_v0$Skin36;
	})(eui.Skin);

	function gameUISkin_v0() {
		_super.call(this);
		this.skinParts = ["exit_btn","pay_table_btn","mute_toggle","play_btn","auto_toggle","add_btn","sub_btn","skip_btn","bet_btn_10","bet_btn_11","bet_btn_12","bet_btn_13","bet_btn_14","bet_btn_15","bet_btn_16","bet_btn_17","bet_btn_18","bet_btn_19","bet_btn_20","bet_btn_21","bet_btn_22","bet_btn_23","bet_btn_24","bet_btn_25","bet_btn_26","bet_btn_27","bet_btn_28","bet_btn_29","bet_btn_0","bet_btn_1","bet_btn_2","bet_btn_3","bet_btn_4","bet_btn_5","bet_btn_6","bet_btn_7","bet_btn_8","bet_btn_9","reset_btn","record_bg_img","up_btn","clear_record_btn","record_content","record_scroller","record_gp","result_panel_close","pay_table_next_btn","pay_table_back_btn","pay_table_close_btn","notice_btn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group21_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.balance_text"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.winMoney_text"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.line_4"],[0],this._Image4,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.0.l"],[0],this._Image8,"height");
		eui.Binding.$bindProperties(this, ["hostComponent.line.0.s"],[0],this._Image8,"scaleY");
		eui.Binding.$bindProperties(this, ["hostComponent.line.0.v"],[0],this._Image8,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.1.l"],[0],this._Image9,"height");
		eui.Binding.$bindProperties(this, ["hostComponent.line.1.s"],[0],this._Image9,"scaleY");
		eui.Binding.$bindProperties(this, ["hostComponent.line.1.v"],[0],this._Image9,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.2.s"],[0],this._Image10,"scaleX");
		eui.Binding.$bindProperties(this, ["hostComponent.line.2.v"],[0],this._Image10,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.2.l"],[0],this._Image10,"width");
		eui.Binding.$bindProperties(this, ["hostComponent.line.3.s"],[0],this._Image11,"scaleX");
		eui.Binding.$bindProperties(this, ["hostComponent.line.3.v"],[0],this._Image11,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.3.l"],[0],this._Image11,"width");
		eui.Binding.$bindProperties(this, ["hostComponent.line.4.l"],[0],this._Image12,"height");
		eui.Binding.$bindProperties(this, ["hostComponent.line.4.s"],[0],this._Image12,"scaleY");
		eui.Binding.$bindProperties(this, ["hostComponent.line.4.v"],[0],this._Image12,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.5.l"],[0],this._Image13,"height");
		eui.Binding.$bindProperties(this, ["hostComponent.line.5.s"],[0],this._Image13,"scaleY");
		eui.Binding.$bindProperties(this, ["hostComponent.line.5.v"],[0],this._Image13,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.6.s"],[0],this._Image14,"scaleX");
		eui.Binding.$bindProperties(this, ["hostComponent.line.6.v"],[0],this._Image14,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.6.l"],[0],this._Image14,"width");
		eui.Binding.$bindProperties(this, ["hostComponent.line.7.s"],[0],this._Image15,"scaleX");
		eui.Binding.$bindProperties(this, ["hostComponent.line.7.v"],[0],this._Image15,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.7.l"],[0],this._Image15,"width");
		eui.Binding.$bindProperties(this, ["hostComponent.line.8.l"],[0],this._Image16,"height");
		eui.Binding.$bindProperties(this, ["hostComponent.line.8.s"],[0],this._Image16,"scaleY");
		eui.Binding.$bindProperties(this, ["hostComponent.line.8.v"],[0],this._Image16,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.9.l"],[0],this._Image17,"height");
		eui.Binding.$bindProperties(this, ["hostComponent.line.9.s"],[0],this._Image17,"scaleY");
		eui.Binding.$bindProperties(this, ["hostComponent.line.9.v"],[0],this._Image17,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.10.s"],[0],this._Image18,"scaleX");
		eui.Binding.$bindProperties(this, ["hostComponent.line.10.v"],[0],this._Image18,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.10.l"],[0],this._Image18,"width");
		eui.Binding.$bindProperties(this, ["hostComponent.line.11.s"],[0],this._Image19,"scaleX");
		eui.Binding.$bindProperties(this, ["hostComponent.line.11.v"],[0],this._Image19,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.11.l"],[0],this._Image19,"width");
		eui.Binding.$bindProperties(this, ["hostComponent.line.12.l"],[0],this._Image20,"height");
		eui.Binding.$bindProperties(this, ["hostComponent.line.12.s"],[0],this._Image20,"scaleY");
		eui.Binding.$bindProperties(this, ["hostComponent.line.12.v"],[0],this._Image20,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.13.l"],[0],this._Image21,"height");
		eui.Binding.$bindProperties(this, ["hostComponent.line.13.s"],[0],this._Image21,"scaleY");
		eui.Binding.$bindProperties(this, ["hostComponent.line.13.v"],[0],this._Image21,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.14.s"],[0],this._Image22,"scaleX");
		eui.Binding.$bindProperties(this, ["hostComponent.line.14.v"],[0],this._Image22,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.14.l"],[0],this._Image22,"width");
		eui.Binding.$bindProperties(this, ["hostComponent.line.15.s"],[0],this._Image23,"scaleX");
		eui.Binding.$bindProperties(this, ["hostComponent.line.15.v"],[0],this._Image23,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.15.l"],[0],this._Image23,"width");
		eui.Binding.$bindProperties(this, ["hostComponent.line.16.l"],[0],this._Image24,"height");
		eui.Binding.$bindProperties(this, ["hostComponent.line.16.s"],[0],this._Image24,"scaleY");
		eui.Binding.$bindProperties(this, ["hostComponent.line.16.v"],[0],this._Image24,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.line.17.l"],[0],this._Image25,"height");
		eui.Binding.$bindProperties(this, ["hostComponent.line.17.s"],[0],this._Image25,"scaleY");
		eui.Binding.$bindProperties(this, ["hostComponent.line.17.v"],[0],this._Image25,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.circle.tl"],[0],this._Image26,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.circle.tr"],[0],this._Image27,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.circle.dl"],[0],this._Image28,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.circle.dr"],[0],this._Image29,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.loading"],[0],this._Group4,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.total_bet"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.single_bet"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.0.n"],[0],this.bet_btn_20,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.1.n"],[0],this.bet_btn_21,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.2.n"],[0],this.bet_btn_22,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.3.n"],[0],this.bet_btn_23,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.4.n"],[0],this.bet_btn_24,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.5.n"],[0],this.bet_btn_25,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.6.n"],[0],this.bet_btn_26,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.7.n"],[0],this.bet_btn_27,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.8.n"],[0],this.bet_btn_28,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.9.n"],[0],this.bet_btn_29,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.0.w"],[0],this._Image32,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.1.w"],[0],this._Image33,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.2.w"],[0],this._Image34,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.3.w"],[0],this._Image35,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.4.w"],[0],this._Image36,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.5.w"],[0],this._Image37,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.6.w"],[0],this._Image38,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.7.w"],[0],this._Image39,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.8.w"],[0],this._Image40,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.bet_type.9.w"],[0],this._Image41,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.record_bg_img_sprite"],[0],this.record_bg_img,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.result_panel.v.gp"],[0],this._Group18,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.result_panel.img.lr"],[0],this._Image45,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.result_panel.v.0"],[0],this._Image45,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.result_panel.v.1"],[0],this._Image46,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.result_panel.img.34"],[0],this._Image47,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.result_panel.v.2"],[0],this._Image47,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.result_panel.v.3"],[0],this._Image48,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.result_panel.img.sm"],[0],this._Image49,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.result_panel.v.4"],[0],this._Image49,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.finalScore_text"],[0],this._Label5,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.pay_table_gp"],[0],this._Group19,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.pay_table_page_image"],[0],this._Image51,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.pay_table_next_btn_enable"],[0],this.pay_table_next_btn,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.pay_table_back_btn_enable"],[0],this.pay_table_back_btn,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.notice.visible"],[0],this._Group20,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.notice.text"],[0],this._Label6,"text");
	}
	var _proto = gameUISkin_v0.prototype;

	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1280;
		t.scaleX = 0.89;
		t.scaleY = 0.89;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.exit_btn_i(),this.pay_table_btn_i(),this._Label1_i(),this._Label2_i(),this.mute_toggle_i(),this._Group5_i(),this._Group6_i(),this._Group14_i(),this.record_gp_i(),this._Group18_i(),this._Group19_i(),this._Group20_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 1280;
		t.source = "bg";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.exit_btn_i = function () {
		var t = new eui.Button();
		this.exit_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.label = "";
		t.visible = false;
		t.width = 110;
		t.x = 0;
		t.y = 0;
		t.skinName = gameUISkin_v0$Skin1;
		return t;
	};
	_proto.pay_table_btn_i = function () {
		var t = new eui.Button();
		this.pay_table_btn = t;
		t.anchorOffsetX = 110;
		t.anchorOffsetY = 0;
		t.height = 87;
		t.label = "";
		t.name = "true";
		t.width = 110;
		t.x = 497.67;
		t.y = 0;
		t.skinName = gameUISkin_v0$Skin2;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.size = 40;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 248.71;
		t.x = 156.33;
		t.y = 92.33;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52.67;
		t.size = 30;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 335;
		t.x = 79;
		t.y = 188;
		return t;
	};
	_proto.mute_toggle_i = function () {
		var t = new eui.ToggleButton();
		this.mute_toggle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 81;
		t.x = 412.00000000000006;
		t.y = 88.00000000000001;
		t.skinName = gameUISkin_v0$Skin3;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = -182;
		t.anchorOffsetY = -160;
		t.height = 540;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 364;
		t.x = -110;
		t.y = 110;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 540;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 364;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 290;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_png";
		t.width = 20;
		t.x = 305;
		t.y = 90;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 290;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_png";
		t.width = 20;
		t.x = 40;
		t.y = 90;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_png";
		t.width = 280;
		t.x = 42;
		t.y = 140;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_png";
		t.width = 280;
		t.x = 42;
		t.y = 190;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_png";
		t.width = 280;
		t.x = 42;
		t.y = 240;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_png";
		t.width = 280;
		t.x = 42;
		t.y = 290;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 540;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 364;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		this._Image8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.source = "line_b_png";
		t.width = 20;
		t.x = 305;
		t.y = 90;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		this._Image9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.source = "line_b_png";
		t.width = 20;
		t.x = 40;
		t.y = 90;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		this._Image10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.scaleY = 1;
		t.source = "line_b_png";
		t.x = 40;
		t.y = 140;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		this._Image11 = t;
		t.anchorOffsetX = 285;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.scaleY = 1;
		t.source = "line_b_png";
		t.x = 325;
		t.y = 140;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		this._Image12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.source = "line_b_png";
		t.width = 20;
		t.x = 305;
		t.y = 160;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		this._Image13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.source = "line_b_png";
		t.width = 20;
		t.x = 40;
		t.y = 160;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		this._Image14 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.scaleY = 1;
		t.source = "line_b_png";
		t.x = 40;
		t.y = 190;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		this._Image15 = t;
		t.anchorOffsetX = 285;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.scaleY = 1;
		t.source = "line_b_png";
		t.x = 325;
		t.y = 190;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		this._Image16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.source = "line_b_png";
		t.width = 20;
		t.x = 305;
		t.y = 210;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		this._Image17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.source = "line_b_png";
		t.width = 20;
		t.x = 40;
		t.y = 210;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		this._Image18 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.scaleY = 1;
		t.source = "line_b_png";
		t.x = 40;
		t.y = 240;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		this._Image19 = t;
		t.anchorOffsetX = 285;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.scaleY = 1;
		t.source = "line_b_png";
		t.x = 325;
		t.y = 240;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		this._Image20 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.source = "line_b_png";
		t.width = 20;
		t.x = 305;
		t.y = 260;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		this._Image21 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.source = "line_b_png";
		t.width = 20;
		t.x = 40;
		t.y = 260;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		this._Image22 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.scaleY = 1;
		t.source = "line_b_png";
		t.x = 40;
		t.y = 290;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		this._Image23 = t;
		t.anchorOffsetX = 285;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.scaleY = 1;
		t.source = "line_b_png";
		t.x = 325;
		t.y = 290;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		this._Image24 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.source = "line_b_png";
		t.width = 20;
		t.x = 305;
		t.y = 310;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		this._Image25 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.source = "line_b_png";
		t.width = 20;
		t.x = 40;
		t.y = 310;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 540;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 364;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		this._Image26 = t;
		t.height = 100;
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		this._Image27 = t;
		t.anchorOffsetX = 100;
		t.height = 100;
		t.width = 100;
		t.x = 364;
		t.y = 0;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		this._Image28 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 100;
		t.height = 100;
		t.width = 100;
		t.x = 0;
		t.y = 474;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		this._Image29 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 100;
		t.height = 100;
		t.width = 100;
		t.x = 364;
		t.y = 474;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		this._Group4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 350;
		t.x = 8;
		t.y = 185;
		t.elementsContent = [this._Image30_i(),this._Image31_i()];
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_txt_bowbg";
		t.width = 350;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading...";
		t.width = 286;
		t.x = 32;
		t.y = 40;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.bottom = 192;
		t.height = 290;
		t.width = 485;
		t.x = 10;
		t.elementsContent = [this._Label3_i(),this.play_btn_i(),this.auto_toggle_i(),this.add_btn_i(),this.sub_btn_i(),this._Label4_i(),this.skip_btn_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48.66;
		t.size = 40;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 272.67;
		t.x = 156.16;
		t.y = 96.34;
		return t;
	};
	_proto.play_btn_i = function () {
		var t = new eui.Button();
		this.play_btn = t;
		t.height = 80;
		t.label = "";
		t.width = 225;
		t.x = 250;
		t.y = 213;
		t.skinName = gameUISkin_v0$Skin4;
		return t;
	};
	_proto.auto_toggle_i = function () {
		var t = new eui.ToggleButton();
		this.auto_toggle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.width = 120;
		t.x = 125;
		t.y = 213;
		t.skinName = gameUISkin_v0$Skin5;
		return t;
	};
	_proto.add_btn_i = function () {
		var t = new eui.Button();
		this.add_btn = t;
		t.height = 80;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 370;
		t.y = 7;
		t.skinName = gameUISkin_v0$Skin6;
		return t;
	};
	_proto.sub_btn_i = function () {
		var t = new eui.Button();
		this.sub_btn = t;
		t.height = 80;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 27;
		t.y = 7;
		t.skinName = gameUISkin_v0$Skin7;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 227.33;
		t.x = 122.67;
		t.y = 23;
		return t;
	};
	_proto.skip_btn_i = function () {
		var t = new eui.ToggleButton();
		this.skip_btn = t;
		t.height = 80;
		t.label = "";
		t.width = 120;
		t.x = 0;
		t.y = 213;
		t.skinName = gameUISkin_v0$Skin8;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1206;
		t.touchThrough = true;
		t.width = 188;
		t.x = 516;
		t.y = 63;
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.width = 185;
		t.x = 2.5;
		t.y = 0;
		t.elementsContent = [this.bet_btn_10_i(),this.bet_btn_11_i()];
		return t;
	};
	_proto.bet_btn_10_i = function () {
		var t = new eui.Button();
		this.bet_btn_10 = t;
		t.height = 90;
		t.name = "0";
		t.width = 185;
		t.x = 0;
		t.y = 0;
		t.skinName = gameUISkin_v0$Skin9;
		return t;
	};
	_proto.bet_btn_11_i = function () {
		var t = new eui.Button();
		this.bet_btn_11 = t;
		t.height = 90;
		t.label = "";
		t.name = "1";
		t.width = 185;
		t.x = 0;
		t.y = 90;
		t.skinName = gameUISkin_v0$Skin10;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.width = 185;
		t.x = 2.5;
		t.y = 250;
		t.elementsContent = [this.bet_btn_12_i(),this.bet_btn_13_i()];
		return t;
	};
	_proto.bet_btn_12_i = function () {
		var t = new eui.Button();
		this.bet_btn_12 = t;
		t.height = 90;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 185;
		t.x = 0;
		t.y = 0;
		t.skinName = gameUISkin_v0$Skin11;
		return t;
	};
	_proto.bet_btn_13_i = function () {
		var t = new eui.Button();
		this.bet_btn_13 = t;
		t.height = 90;
		t.label = "";
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 185;
		t.x = 0;
		t.y = 90;
		t.skinName = gameUISkin_v0$Skin12;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.width = 185;
		t.x = 2.5;
		t.y = 500;
		t.elementsContent = [this.bet_btn_14_i(),this.bet_btn_15_i()];
		return t;
	};
	_proto.bet_btn_14_i = function () {
		var t = new eui.Button();
		this.bet_btn_14 = t;
		t.height = 90;
		t.name = "4";
		t.width = 185;
		t.x = 0;
		t.y = 0;
		t.skinName = gameUISkin_v0$Skin13;
		return t;
	};
	_proto.bet_btn_15_i = function () {
		var t = new eui.Button();
		this.bet_btn_15 = t;
		t.height = 90;
		t.label = "";
		t.name = "5";
		t.width = 185;
		t.x = 0;
		t.y = 90;
		t.skinName = gameUISkin_v0$Skin14;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 360;
		t.width = 185;
		t.x = 2.5;
		t.y = 750;
		t.elementsContent = [this.bet_btn_16_i(),this.bet_btn_17_i(),this.bet_btn_18_i(),this.bet_btn_19_i()];
		return t;
	};
	_proto.bet_btn_16_i = function () {
		var t = new eui.Button();
		this.bet_btn_16 = t;
		t.height = 90;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 185;
		t.x = 0;
		t.y = 4;
		t.skinName = gameUISkin_v0$Skin15;
		return t;
	};
	_proto.bet_btn_17_i = function () {
		var t = new eui.Button();
		this.bet_btn_17 = t;
		t.height = 90;
		t.label = "";
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 185;
		t.x = 0;
		t.y = 94;
		t.skinName = gameUISkin_v0$Skin16;
		return t;
	};
	_proto.bet_btn_18_i = function () {
		var t = new eui.Button();
		this.bet_btn_18 = t;
		t.height = 90;
		t.label = "";
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 185;
		t.x = 0;
		t.y = 184;
		t.skinName = gameUISkin_v0$Skin17;
		return t;
	};
	_proto.bet_btn_19_i = function () {
		var t = new eui.Button();
		this.bet_btn_19 = t;
		t.height = 90;
		t.label = "";
		t.name = "9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 185;
		t.x = 0;
		t.y = 274;
		t.skinName = gameUISkin_v0$Skin18;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1206;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchThrough = true;
		t.width = 188;
		t.x = 2.5;
		t.y = 0;
		t.elementsContent = [this.bet_btn_20_i(),this.bet_btn_21_i(),this.bet_btn_22_i(),this.bet_btn_23_i(),this.bet_btn_24_i(),this.bet_btn_25_i(),this.bet_btn_26_i(),this.bet_btn_27_i(),this.bet_btn_28_i(),this.bet_btn_29_i()];
		return t;
	};
	_proto.bet_btn_20_i = function () {
		var t = new eui.Label();
		this.bet_btn_20 = t;
		t.height = 65;
		t.name = "0";
		t.size = 40;
		t.textAlign = "center";
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 75;
		t.x = 95;
		t.y = 15;
		return t;
	};
	_proto.bet_btn_21_i = function () {
		var t = new eui.Label();
		this.bet_btn_21 = t;
		t.height = 65;
		t.name = "1";
		t.size = 40;
		t.textAlign = "center";
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 75;
		t.x = 95;
		t.y = 105;
		return t;
	};
	_proto.bet_btn_22_i = function () {
		var t = new eui.Label();
		this.bet_btn_22 = t;
		t.height = 65;
		t.name = "2";
		t.size = 40;
		t.textAlign = "center";
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 75;
		t.x = 95;
		t.y = 265;
		return t;
	};
	_proto.bet_btn_23_i = function () {
		var t = new eui.Label();
		this.bet_btn_23 = t;
		t.height = 65;
		t.name = "3";
		t.size = 40;
		t.textAlign = "center";
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 75;
		t.x = 95;
		t.y = 355;
		return t;
	};
	_proto.bet_btn_24_i = function () {
		var t = new eui.Label();
		this.bet_btn_24 = t;
		t.height = 65;
		t.name = "4";
		t.size = 40;
		t.textAlign = "center";
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 75;
		t.x = 95;
		t.y = 510;
		return t;
	};
	_proto.bet_btn_25_i = function () {
		var t = new eui.Label();
		this.bet_btn_25 = t;
		t.height = 65;
		t.name = "5";
		t.size = 40;
		t.textAlign = "center";
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 75;
		t.x = 95;
		t.y = 600;
		return t;
	};
	_proto.bet_btn_26_i = function () {
		var t = new eui.Label();
		this.bet_btn_26 = t;
		t.height = 65;
		t.name = "6";
		t.size = 40;
		t.textAlign = "center";
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 75;
		t.x = 95;
		t.y = 765;
		return t;
	};
	_proto.bet_btn_27_i = function () {
		var t = new eui.Label();
		this.bet_btn_27 = t;
		t.height = 65;
		t.name = "7";
		t.size = 40;
		t.textAlign = "center";
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 75;
		t.x = 95;
		t.y = 855;
		return t;
	};
	_proto.bet_btn_28_i = function () {
		var t = new eui.Label();
		this.bet_btn_28 = t;
		t.height = 65;
		t.name = "8";
		t.size = 40;
		t.textAlign = "center";
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 75;
		t.x = 95;
		t.y = 945;
		return t;
	};
	_proto.bet_btn_29_i = function () {
		var t = new eui.Label();
		this.bet_btn_29 = t;
		t.height = 65;
		t.name = "9";
		t.size = 40;
		t.textAlign = "center";
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 75;
		t.x = 95;
		t.y = 1035;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1206;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchThrough = true;
		t.width = 188;
		t.x = 2.5;
		t.y = 0;
		t.elementsContent = [this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i(),this._Image41_i()];
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		this._Image32 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_effect";
		t.width = 105;
		t.x = -6;
		t.y = -8;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		this._Image33 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_effect";
		t.width = 105;
		t.x = -7;
		t.y = 83;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		this._Image34 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_effect";
		t.width = 105;
		t.x = -7;
		t.y = 242;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		this._Image35 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_effect";
		t.width = 105;
		t.x = -7;
		t.y = 333;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		this._Image36 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_effect";
		t.width = 105;
		t.x = -7;
		t.y = 493;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		this._Image37 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_effect";
		t.width = 105;
		t.x = -7;
		t.y = 583;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		this._Image38 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_effect2";
		t.width = 105;
		t.x = -7;
		t.y = 761;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		this._Image39 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_effect2";
		t.width = 105;
		t.x = -7;
		t.y = 845;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		this._Image40 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_effect2";
		t.width = 105;
		t.x = -7;
		t.y = 940;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		this._Image41 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_effect2";
		t.width = 105;
		t.x = -7;
		t.y = 1030;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1206;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchThrough = true;
		t.width = 188;
		t.x = 2.5;
		t.y = 0;
		t.elementsContent = [this.bet_btn_0_i(),this.bet_btn_1_i(),this.bet_btn_2_i(),this.bet_btn_3_i(),this.bet_btn_4_i(),this.bet_btn_5_i(),this.bet_btn_6_i(),this.bet_btn_7_i(),this.bet_btn_8_i(),this.bet_btn_9_i(),this.reset_btn_i()];
		return t;
	};
	_proto.bet_btn_0_i = function () {
		var t = new eui.Button();
		this.bet_btn_0 = t;
		t.height = 90;
		t.label = "";
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 90;
		t.x = 0;
		t.y = 0;
		t.skinName = gameUISkin_v0$Skin19;
		return t;
	};
	_proto.bet_btn_1_i = function () {
		var t = new eui.Button();
		this.bet_btn_1 = t;
		t.height = 90;
		t.label = "";
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 90;
		t.x = 0;
		t.y = 90;
		t.skinName = gameUISkin_v0$Skin20;
		return t;
	};
	_proto.bet_btn_2_i = function () {
		var t = new eui.Button();
		this.bet_btn_2 = t;
		t.height = 90;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 90;
		t.x = 0;
		t.y = 250;
		t.skinName = gameUISkin_v0$Skin21;
		return t;
	};
	_proto.bet_btn_3_i = function () {
		var t = new eui.Button();
		this.bet_btn_3 = t;
		t.height = 90;
		t.label = "";
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 90;
		t.x = 0;
		t.y = 340;
		t.skinName = gameUISkin_v0$Skin22;
		return t;
	};
	_proto.bet_btn_4_i = function () {
		var t = new eui.Button();
		this.bet_btn_4 = t;
		t.height = 90;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 90;
		t.x = 0;
		t.y = 500;
		t.skinName = gameUISkin_v0$Skin23;
		return t;
	};
	_proto.bet_btn_5_i = function () {
		var t = new eui.Button();
		this.bet_btn_5 = t;
		t.height = 90;
		t.label = "";
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 90;
		t.x = 0;
		t.y = 590;
		t.skinName = gameUISkin_v0$Skin24;
		return t;
	};
	_proto.bet_btn_6_i = function () {
		var t = new eui.Button();
		this.bet_btn_6 = t;
		t.height = 76;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 90;
		t.x = 0;
		t.y = 765;
		t.skinName = gameUISkin_v0$Skin25;
		return t;
	};
	_proto.bet_btn_7_i = function () {
		var t = new eui.Button();
		this.bet_btn_7 = t;
		t.height = 76;
		t.label = "";
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 90;
		t.x = 0;
		t.y = 850;
		t.skinName = gameUISkin_v0$Skin26;
		return t;
	};
	_proto.bet_btn_8_i = function () {
		var t = new eui.Button();
		this.bet_btn_8 = t;
		t.height = 76;
		t.label = "";
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 90;
		t.x = 0;
		t.y = 945;
		t.skinName = gameUISkin_v0$Skin27;
		return t;
	};
	_proto.bet_btn_9_i = function () {
		var t = new eui.Button();
		this.bet_btn_9 = t;
		t.height = 76;
		t.label = "";
		t.name = "9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 90;
		t.x = 0;
		t.y = 1035;
		t.skinName = gameUISkin_v0$Skin28;
		return t;
	};
	_proto.reset_btn_i = function () {
		var t = new eui.Button();
		this.reset_btn = t;
		t.anchorOffsetX = 0;
		t.height = 100;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 212;
		t.x = -16.14;
		t.y = 1115.3;
		t.skinName = gameUISkin_v0$Skin29;
		return t;
	};
	_proto.record_gp_i = function () {
		var t = new eui.Group();
		this.record_gp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 182;
		t.height = 182;
		t.scaleY = 1;
		t.width = 500;
		t.x = 0;
		t.y = 1280;
		t.elementsContent = [this._Group15_i()];
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 182;
		t.height = 182;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 500;
		t.x = 0;
		t.y = 182;
		t.elementsContent = [this.record_bg_img_i(),this.up_btn_i(),this.clear_record_btn_i(),this.record_scroller_i()];
		return t;
	};
	_proto.record_bg_img_i = function () {
		var t = new eui.Image();
		this.record_bg_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.blendMode = "normal";
		t.fillMode = "scale";
		t.height = 175;
		t.width = 470;
		t.x = 12;
		t.y = 0;
		return t;
	};
	_proto.up_btn_i = function () {
		var t = new eui.Button();
		this.up_btn = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 44;
		t.height = 88;
		t.label = "";
		t.width = 120;
		t.x = 415;
		t.y = 55;
		t.skinName = gameUISkin_v0$Skin30;
		return t;
	};
	_proto.clear_record_btn_i = function () {
		var t = new eui.Button();
		this.clear_record_btn = t;
		t.height = 87;
		t.label = "";
		t.width = 180;
		t.x = 170;
		t.y = 10;
		t.skinName = gameUISkin_v0$Skin31;
		return t;
	};
	_proto.record_scroller_i = function () {
		var t = new eui.Scroller();
		this.record_scroller = t;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 456;
		t.x = 18.5;
		t.y = 110;
		t.viewport = this.record_content_i();
		return t;
	};
	_proto.record_content_i = function () {
		var t = new eui.Group();
		this.record_content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.width = 456;
		t.y = 2.57;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		this._Group18 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 514;
		t.width = 437;
		t.x = 30;
		t.y = 247;
		t.elementsContent = [this._Group16_i(),this._Group17_i(),this._Label5_i(),this.result_panel_close_i()];
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.height = 514;
		t.width = 437;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image42_i(),this._Image43_i(),this._Image44_i()];
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.height = 514;
		t.source = "win_txt_bowbg";
		t.width = 437;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 67;
		t.source = "result_as";
		t.width = 190;
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.height = 105;
		t.source = "win_amount";
		t.width = 300;
		t.x = 65;
		t.y = 215;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 122;
		t.width = 416;
		t.x = 11;
		t.y = 85;
		t.elementsContent = [this._Image45_i(),this._Image46_i(),this._Image47_i(),this._Image48_i(),this._Image49_i()];
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		this._Image45 = t;
		t.height = 100;
		t.width = 100;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		this._Image46 = t;
		t.height = 50;
		t.source = "toright_arrow";
		t.width = 50;
		t.x = 113;
		t.y = 35;
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		this._Image47 = t;
		t.height = 100;
		t.width = 100;
		t.x = 160;
		t.y = 10;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		this._Image48 = t;
		t.height = 50;
		t.source = "toright_arrow";
		t.width = 50;
		t.x = 263;
		t.y = 35;
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		this._Image49 = t;
		t.height = 100;
		t.width = 100;
		t.x = 310;
		t.y = 10;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		this._Label5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.size = 60;
		t.textAlign = "center";
		t.textColor = 0xffc800;
		t.verticalAlign = "middle";
		t.width = 365;
		t.x = 35;
		t.y = 350;
		return t;
	};
	_proto.result_panel_close_i = function () {
		var t = new eui.Button();
		this.result_panel_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.label = "";
		t.width = 200;
		t.x = 125;
		t.y = 440;
		t.skinName = gameUISkin_v0$Skin32;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		this._Group19 = t;
		t.anchorOffsetX = 0;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image50_i(),this._Image51_i(),this.pay_table_next_btn_i(),this.pay_table_back_btn_i(),this.pay_table_close_btn_i()];
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.height = 1280;
		t.source = "grey_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		this._Image51 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1280;
		t.width = 495;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pay_table_next_btn_i = function () {
		var t = new eui.Button();
		this.pay_table_next_btn = t;
		t.height = 100;
		t.label = "";
		t.width = 170;
		t.x = 320;
		t.y = 1180;
		t.skinName = gameUISkin_v0$Skin33;
		return t;
	};
	_proto.pay_table_back_btn_i = function () {
		var t = new eui.Button();
		this.pay_table_back_btn = t;
		t.height = 100;
		t.label = "";
		t.width = 170;
		t.x = 140;
		t.y = 1180;
		t.skinName = gameUISkin_v0$Skin34;
		return t;
	};
	_proto.pay_table_close_btn_i = function () {
		var t = new eui.Button();
		this.pay_table_close_btn = t;
		t.height = 100;
		t.label = "";
		t.name = "false";
		t.width = 100;
		t.x = 0;
		t.y = 1180;
		t.skinName = gameUISkin_v0$Skin35;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		this._Group20 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image52_i(),this._Image53_i(),this._Label6_i(),this.notice_btn_i()];
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1280;
		t.source = "grey_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 425;
		t.source = "notice_bg_png";
		t.width = 720;
		t.x = 0;
		t.y = 370;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 220;
		t.size = 50;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 675;
		t.x = 20;
		t.y = 460;
		return t;
	};
	_proto.notice_btn_i = function () {
		var t = new eui.Button();
		this.notice_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80.46;
		t.label = "";
		t.width = 255.44;
		t.x = 243.55;
		t.y = 696.1;
		t.skinName = gameUISkin_v0$Skin36;
		return t;
	};
	return gameUISkin_v0;
})(eui.Skin);generateEUI.paths['resource/custom_skin/LoadingUISkin_v0.exml'] = window.LoadingUISkin_v0 = (function (_super) {
	__extends(LoadingUISkin_v0, _super);
	function LoadingUISkin_v0() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Main1_i()];
	}
	var _proto = LoadingUISkin_v0.prototype;

	_proto._Main1_i = function () {
		var t = new Main();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1280;
		t.width = 720;
		t.x = 1;
		t.y = 1;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1280;
		t.source = "bg_loading_page";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.source = "loading_bar_zero";
		t.width = 560;
		t.x = 75;
		t.y = 1150;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading_bar_100";
		t.width = 560;
		t.x = 75;
		t.y = 1150;
		return t;
	};
	return LoadingUISkin_v0;
})(eui.Skin);generateEUI.paths['resource/custom_skin/recordGoSkin_v0.exml'] = window.recordGoSkin_v0 = (function (_super) {
	__extends(recordGoSkin_v0, _super);
	function recordGoSkin_v0() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 55;
		this.width = 465;
		this.elementsContent = [this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.record_data.4"],[0],this._Image1,"visible");
		eui.Binding.$bindProperties(this, ["hostComponent.record_data.0"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.record_data.1"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.record_data.2"],[0],this._Image4,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.record_data.3"],[0],this._Label1,"text");
	}
	var _proto = recordGoSkin_v0.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 55;
		t.width = 465;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 55;
		t.source = "grey_png";
		t.width = 465;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.width = 180;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 55;
		t.width = 55;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.height = 55;
		t.width = 55;
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.height = 55;
		t.width = 55;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.size = 19;
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 268;
		t.x = 185;
		t.y = 0;
		return t;
	};
	return recordGoSkin_v0;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);