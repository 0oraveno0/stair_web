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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.loadingBG = new egret.Bitmap();
        this.loadingBG.texture = RES.getRes('bg_loading_page');
        this.loadingBG.width = 720;
        this.loadingBG.height = 1280;
        this.addChild(this.loadingBG);
        this.loadingIcon = new egret.Bitmap();
        this.loadingIcon.texture = RES.getRes('loading_bar_zero');
        this.loadingIcon.width = 450;
        this.loadingIcon.y = 1065;
        this.loadingIcon.x = 110;
        this.addChild(this.loadingIcon);
        this.loadingBar = new egret.Bitmap();
        this.loadingBar.texture = RES.getRes('loading_bar_100');
        this.loadingBar.y = 1065;
        this.loadingBar.x = 110;
        this.loadingBar.width = 450;
        this.addChild(this.loadingBar);
        this.textField = new egret.TextField();
        this.textField.width = 450;
        this.textField.y = 1075;
        this.textField.x = 270;
        this.textField.size = 30;
        this.textField.textAlign = "center";
        this.addChild(this.textField);
    };
    LoadingUI.prototype.setProgress = function (current, total) {
        this.loadingBar.width = current / total * 450;
        this.textField.text = (current / total * 100).toFixed(1) + "%";
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI");
//# sourceMappingURL=LoadingUI.js.map