// ========================
// ⚙️ Контроллер (Controller.js)
// ========================

let assetsBundle = {
    character: 'images/characters/character.png',
    enemy: 'images/enemy/enemy.png',

    background: 'images/background/MainMenu_Background.png',
    // icons
    arrow_left_dissable: 'images/icons/arrow_left_dissable.png',
    arrow_left_enable: 'images/icons/arrow_left_enable.png',
    arrow_right_dissable: 'images/icons/arrow_right_dissable.png',
    arrow_right_enable: 'images/icons/arrow_right_enable.png',
    button_bottom1: 'images/icons/button_bottom1.png',
    button_bottom1_icon: 'images/icons/button_bottom1_icon.png',
    button_bottom2: 'images/icons/button_bottom2.png',
    button_bottom2_icon: 'images/icons/button_bottom2_icon.png',
    button_bottom3: 'images/icons/button_bottom3.png',
    button_bottom3_icon: 'images/icons/button_bottom3_icon.png',
    button_bottom4: 'images/icons/button_bottom4.png',
    button_bottom4_icon: 'images/icons/button_bottom4_icon.png',
    button_bottom_lock: 'images/icons/button_bottom_lock.png',
    button_fight: 'images/icons/button_fight.png',
    energy: 'images/icons/energy.png',
    energy_cover: 'images/icons/energy_cover.png',
    energy_plus: 'images/icons/energy_plus.png',
    gold: 'images/icons/gold.png',
    gold_cover: 'images/icons/gold_cover.png',
    gold_plus: 'images/icons/gold_plus.png',
    lock: 'images/icons/lock.png',
    rubin: 'images/icons/rubin.png',
    rubin_cover: 'images/icons/rubin_cover.png',
    rubin_plus: 'images/icons/rubin_plus.png',
    stage1: 'images/icons/stage1.png',
    stage2: 'images/icons/stage2.png',
    stage3: 'images/icons/stage3.png',
    // towers
    tw1: 'images/towers/1.png',
    tw2: 'images/towers/2.png',
    tw3: 'images/towers/3.png',
    tw4: 'images/towers/4.png',
    tw5: 'images/towers/5.png',
    // fight
    cell: 'images/fight/cell.png'
}

let assets

class Controller {
    constructor() {
        this.WIDTH = 1920
        this.HEIGHT = 1080
        this.WIDTH_SCENE = 1920
        this.HEIGHT_SCENE = 1000
        this.ws()
    }
    ws() {
        this.socket = new WSConnect(this)
        this.socket.onOpen(() => {
            console.log('Connected to server!');
            this.startApp()
        });
    }
    startApp() {
        this.app = new App(this.WIDTH, this.HEIGHT)
        this.sm = new SceneManager(this.app)
        this.sm.addScene('loader', new LoaderScene(this, assetsBundle))
        this.sm.addScene('EmployeesScene', new EmployeesScene(this))
        this.sm.addScene('PlanScene', new PlanScene(this))
    }
    getPixiApp() {
        return this.app.pixiApp;
    }
    getSceneManager() {
        return this.sm;
    }
    getSceneContainer() {
        return this.app.gameContainer
    }
}

new Controller()