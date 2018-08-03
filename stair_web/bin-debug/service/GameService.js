var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameService = (function () {
    function GameService() {
        var protocol = document.location.protocol === 'https:' ? 'https' : 'http';
    }
    GameService.getGameService = function () {
        if (!GameService.instance) {
            GameService.instance = new GameService();
        }
        return GameService.instance;
    };
    GameService.initUrl = "game/BaccaratInfo";
    GameService.betUrl = "game/BaccaratBet";
    return GameService;
}());
__reflect(GameService.prototype, "GameService");
//# sourceMappingURL=GameService.js.map