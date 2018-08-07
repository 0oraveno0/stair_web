var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameService = (function () {
    function GameService() {
        var protocol = document.location.protocol === 'https:' ? 'https' : 'http';
    }
    GameService.prototype._bet = function (onComplete, onIOError) {
        this.bet("0,0,0,0,0,1,0,2,0,0", "4", "12", GameService.gamecode, GameService.token, onComplete, onIOError, function () { });
    };
    GameService.prototype.encryptByDES = function (message, key) {
        window.encryptByDES(message, key);
    };
    GameService.prototype.bet = function (betType, singlebet, totalbet, gamecode, token, onComplete, onIOError, onProgress) {
        var paramJson = {
            param: "4F26AC6E34E76D45CE8487243285F9DD92C2B92A68C02C0ED15A2B3A61201984622B015256E30BDB729207E3FD7C23D99203B7BB6F574F42885E875E39380BAB4C577301F9038BC7CE354B6EC5CFACA43EE391210BEDE874"
        };
        console.log(JSON.stringify(this.encryptByDES("loginname=fish010&singlebet=" + singlebet + "&lane=" + betType + "&totalmoney=" + totalbet + "&gamecode=" + gamecode, "garEcr8s")));
        this.httpReq(GameService.AASlotUrl, JSON.stringify(paramJson), token, onComplete, onIOError, onProgress, "application/json");
    };
    GameService.prototype.httpReq = function (url, data, token, onComplete, onIOError, onProgress, type) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.setRequestHeader("token", token);
        request.setRequestHeader("content-Type", type);
        request.addEventListener(egret.Event.COMPLETE, onComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, onIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, onProgress, this);
        request.open(GameService.host + url, egret.HttpMethod.POST);
        request.send(data);
    };
    GameService.getGameService = function () {
        if (!GameService.instance) {
            GameService.instance = new GameService();
        }
        return GameService.instance;
    };
    // private  host = 'http://192.168.0.120:8000/';
    // private  host = 'http://192.168.0.101/';
    GameService.host = "http://192.168.0.101/";
    GameService.AASlotUrl = "hecslot/newsubmitbet";
    GameService.token = "AAD4MFJYD40M9BI012MVX5O8RHK6V5";
    GameService.gamecode = "Stair";
    return GameService;
}());
__reflect(GameService.prototype, "GameService");
//# sourceMappingURL=GameService.js.map