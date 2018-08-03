
 class GameUI extends eui.Component {

	constructor(private service: GameService) {
		super();
			this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
        this.skinName = "resource/custom_skins/gameUISkin_v0.exml";
	}

	public uiCompHandler(){
		
	}
	

}