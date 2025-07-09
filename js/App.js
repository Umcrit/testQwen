// ========================
// 🔁 Приложение (App.js)
// ========================

class App {
    constructor(width,height) {
        this.width = width
        this.height = height
        // Создаем приложение
        this.pixiApp = new PIXI.Application({
            width: this.width,
            height: this.height,
            backgroundColor: 0x1099bb,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            resizeTo: window,
        });

        globalThis.__PIXI_APP__ = this.pixiApp;
        globalThis.__PIXI_STAGE__ = this.pixiApp.stage;
        globalThis.__PIXI_RENDERER__ = this.pixiApp.renderer;

        document.body.appendChild(this.pixiApp.view);

        // Фон
        this.bg = new PIXI.Graphics();
        this.bg.beginFill(0x333333);
        this.bg.drawRect(0, 0, this.width, this.height);
        this.bg.endFill();
        this.pixiApp.stage.addChild(this.bg);

        // Основной-ресайз контейнер для сцены
        this.gameContainer = new PIXI.Container();
        this.pixiApp.stage.addChild(this.gameContainer);

        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
    }

    resize() {
        const parentW = window.innerWidth;
        const parentH = window.innerHeight;

        this.scale = Math.min(parentW / this.width, parentH / this.height);
        const offsetX = (parentW - this.width * this.scale) / 2;
        const offsetY = (parentH - this.height * this.scale) / 2;

        this.gameContainer.scale.set(this.scale);
        this.gameContainer.x = offsetX;
        this.gameContainer.y = offsetY;

        this.bg.scale.set(this.scale);
        this.bg.x = offsetX;
        this.bg.y = offsetY;
    }
}