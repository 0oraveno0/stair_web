class recordGo extends eui.Component {

    public record_data = {"0":"","1":"","2":"","3":"","4":true}

    public constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
        this.skinName = "resource/custom_skin/recordGoSkin_v0.exml";
    }

    private uiCompHandler(): void {
		
    }
}