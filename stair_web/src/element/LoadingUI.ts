 class LoadingUI extends egret.Sprite {
	private loadingBG: egret.Bitmap;
    private loadingBar: egret.Bitmap;
    private textField: egret.TextField;
    private loadingIcon: egret.Bitmap;

	public constructor() {
        super();
        this.createView();
	}

    private createView(): void {
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
    }
    
	public setProgress(current: number, total: number): void {
        console.log(current,total);
        this.loadingBar.width = current / total * 450;
        this.textField.text = `${(current / total * 100).toFixed(1)}%`;
    }
}