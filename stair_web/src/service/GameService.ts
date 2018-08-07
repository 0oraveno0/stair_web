 class GameService {
	// private  host = 'http://192.168.0.120:8000/';
    // private  host = 'http://192.168.0.101/';
    private static host= "http://192.168.0.101/";
    private static AASlotUrl = "hecslot/newsubmitbet";
    private static token = "AAD4MFJYD40M9BI012MVX5O8RHK6V5";
    private static gamecode = "Stair";
    private gameUI: GameUI;

    public static instance?: GameService;

    constructor() {
        const protocol = document.location.protocol === 'https:' ? 'https' : 'http';
    }

    public _bet(onComplete, onIOError){
        this.bet("0,0,0,0,0,1,0,2,0,0","4","12",GameService.gamecode,GameService.token,onComplete, onIOError,
        () => { });
    }

     public encryptByDES(message:string, key:string) {
            (window as any).encryptByDES(message,key);
     }


    public bet(betType: string , singlebet: string , totalbet: string , gamecode: string ,token: string, onComplete, onIOError, onProgress) {
        let paramJson = {
           param : "4F26AC6E34E76D45CE8487243285F9DD92C2B92A68C02C0ED15A2B3A61201984622B015256E30BDB729207E3FD7C23D99203B7BB6F574F42885E875E39380BAB4C577301F9038BC7CE354B6EC5CFACA43EE391210BEDE874"
        };
        console.log(JSON.stringify(this.encryptByDES("loginname=fish010&singlebet=" + singlebet + "&lane=" + betType+ "&totalmoney="+ totalbet + "&gamecode=" + gamecode,"garEcr8s")));
        this.httpReq(GameService.AASlotUrl, JSON.stringify(paramJson), token, onComplete, onIOError, onProgress, "application/json");
    }

    private httpReq(url, data:string, token, onComplete, onIOError, onProgress, type) {
        let request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.setRequestHeader("token", token);
        request.setRequestHeader("content-Type", type);
        request.addEventListener(egret.Event.COMPLETE, onComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, onIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, onProgress, this);
        request.open(GameService.host + url, egret.HttpMethod.POST);
        request.send(data);
    }

	public static getGameService() {
        if (!GameService.instance) {
            GameService.instance = new GameService();
        }
        return GameService.instance;
    }
}