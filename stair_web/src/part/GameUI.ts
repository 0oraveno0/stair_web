
 class GameUI extends eui.Component {

	private play_button: eui.Button;
    public gameTotalData;

	constructor(private service: GameService) {
		super();
        this.skinName = "resource/custom_skin/gameUISkin_v0.exml";
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
	}

	private uiCompHandler(){
		this.play_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playBtnHandler, this);
		this.play_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.resetBtnHandler, this);
	}
	
	public playBtnHandler() {
		this.service._bet(
			(function (that:GameUI) {
				return function (event: egret.Event) {
					return that.betCompleteHandler.bind(that)(event);
				}
			}
		)(this),
        (error) => {
            console.log(error);
        });
	}

	public resetBtnHandler() {
		console.log("reset");
	}

	public betCompleteHandler(event: egret.Event){
		console.log(event);
		console.log(event.currentTarget);
		const request = <egret.HttpRequest>event.currentTarget;
		console.log(request.response);
		this.gameTotalData = JSON.parse(request.response);
		console.log("this.gameTotalData");
		console.log(this.gameTotalData);
	}
}