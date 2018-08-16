class audio_manager{
	public static instance?: audio_manager;

	public static getAudioManager() {
        if (!audio_manager.instance) {
            audio_manager.instance = new audio_manager();
        }
        return audio_manager.instance;
    }

	constructor() {
		
    }
	
	public play_sound(sound_name:string){

		if(egret.localStorage.getItem("mute_toggle") == "true"){
			return;
		}

		var sound:egret.Sound = RES.getRes(sound_name);
		sound.play(0,1);
	}
}

 