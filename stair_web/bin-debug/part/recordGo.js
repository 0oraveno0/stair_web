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
var recordGo = (function (_super) {
    __extends(recordGo, _super);
    function recordGo() {
        var _this = _super.call(this) || this;
        _this.record_data = { "0": "", "1": "", "2": "", "3": "", "4": true };
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resource/custom_skin/recordGoSkin_v0.exml";
        return _this;
    }
    recordGo.prototype.uiCompHandler = function () {
    };
    return recordGo;
}(eui.Component));
__reflect(recordGo.prototype, "recordGo");
//# sourceMappingURL=recordGo.js.map