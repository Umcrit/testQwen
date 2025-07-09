class LoaderScene extends Scene {
    constructor(controller, assets = null) {
        super(controller)
        this.assets = assets
        this.percent = 0;
        this.textLoad()
    }
    textLoad() {
        this.T_progressLoad = new PIXI.Text('Загрузка...', {
            fill: 'red',
            fontFamily: 'Arial',
            fontSize: 38
        });
        this.T_progressLoad.x = this.controller.getPixiApp().stage.width / 2
        this.T_progressLoad.y = this.controller.getPixiApp().stage.height / 2
        this.addChild(this.T_progressLoad);
        this.loadAssets()
    }
    async loadAssets() {
        PIXI.Assets.addBundle('main', assetsBundle);
        assets = await PIXI.Assets.loadBundle('main', (loader) => {
            this.percent = Math.round(loader * 100)
            this.T_progressLoad.text = `Загрузка...${this.percent}%`
            if (this.percent == 100) {
                this.controller.sm.switchScene('EmployeesScene')
            }
        });
    }
}
