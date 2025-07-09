// ========================
// 🎮 Сцена два (TwoScene.js)
// ========================

class PlanScene extends Scene {
    constructor(controller) {
        super(controller)
        this.name = 'PlanScene'

        const text = new PIXI.Text("Игровой экран", {
            fontSize: 48,
            fill: 0xffffff
        });
        text.anchor.set(0.5);
        text.x = this.controller.WIDTH_SCENE / 2 
        text.y = this.controller.HEIGHT_SCENE / 2
        this.C_Content.addChild(text);
    }
}