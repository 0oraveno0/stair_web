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
    function GameUI(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/custom_skin/gameUISkin_v0.exml";
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        return _this;
    }
    GameUI.prototype.uiCompHandler = function () {
        this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playBtnHandler, this);
    };
    GameUI.prototype.playBtnHandler = function () {
        this.service._bet((function (that) {
            return function (event) {
                return that.betCompleteHandler.bind(that)(event);
            };
        })(this), function (error) {
            console.log(error);
        });
    };
    GameUI.prototype.betCompleteHandler = function (event) {
        console.log(event);
        console.log(event.currentTarget);
        var request = event.currentTarget;
        console.log(request.response);
        this.gameTotalData = JSON.parse(request.response);
        console.log("this.gameTotalData");
        console.log(this.gameTotalData);
    };
    return GameUI;
}(eui.Component));
__reflect(GameUI.prototype, "GameUI");
//# sourceMappingURL=GameUI.js.map