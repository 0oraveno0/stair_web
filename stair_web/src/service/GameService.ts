 class GameService {
	// private  host = 'http://192.168.0.120:8000/';
    // private  host = 'http://192.168.0.101/';
    private host;

    private static initUrl = `game/BaccaratInfo`;
    private static betUrl = `game/BaccaratBet`;

    private static instance?: GameService;

    constructor() {
        const protocol = document.location.protocol === 'https:' ? 'https' : 'http';

    }

	public static getGameService() {
        if (!GameService.instance) {
            GameService.instance = new GameService();
        }
        return GameService.instance;
    }
}