var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var audio_manager = (function () {
    function audio_manager() {
    }
    audio_manager.getAudioManager = function () {
        if (!audio_manager.instance) {
            audio_manager.instance = new audio_manager();
        }
        return audio_manager.instance;
    };
    audio_manager.prototype.play_sound = function (sound_name) {
        if (egret.localStorage.getItem("mute_toggle") == "true") {
            return;
        }
        var sound = RES.getRes(sound_name);
        sound.play(0, 1);
    };
    return audio_manager;
}());
__reflect(audio_manager.prototype, "audio_manager");
//# sourceMappingURL=audio_manager.js.map