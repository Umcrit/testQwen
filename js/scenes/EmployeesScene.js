// ========================
// 🎮 Сцена меню (mainScene.js)
// ========================
class EmployeesScene extends Scene {
    constructor(controller) {
        super(controller)
        this.name = 'EmployeesScene'

        this.C_leftMenu = new U_Container().name('C_leftMenu').pos(10, 10).to(this.C_Content)
        this.leftMenu()
        this.leftMenu_items()
    }
    leftMenu() {
        this.G_bg = new U_Graph().name('G_backogrund')
            .fill(0xedeaea, 1)
            .drRoundedRect(10, 10, 220, this.controller.HEIGHT_SCENE - 20, 10)
            .to(this.C_leftMenu)
    }
    leftMenu_items() {
        const items = [
            {
                name: 'Приём'
            },

        ]
        // for (let i = 0; i < player.tabs.length; i++) {
        //     this.C_button = new U_Container().to(this)
        //     this.C_button.li = i
        //     this.C_button.name = player.tabs[i].name
        //     // Спрайт подложки для кнопки
        //     this.S_buttons = new U_Sprite(assets[player.tabs[i].img]).to(this.C_button)
        //     // Текстура для кнопки
        //     this.S_insideTexture = player.tabs[i].unlock ? assets[player.tabs[i].inside]
        //         : assets.button_bottom_lock;
        //     // Спрайт на основе текстуры
        //     this.S_inside = new U_Sprite(this.S_insideTexture).anchor(0.5)
        //         .pos(this.S_buttons.width / 2, this.S_buttons.height / 2).to(this.C_button)
        //     // Позиционируем все кнопки
        //     this.C_button.x = 40 + (i % player.tabs.length) * 260, 45
        //     this.C_button.y = 1600 + Math.floor(i / player.tabs.length) * 90

        //     this.C_button.cursor = 'pointer'
        //     this.C_button.interactive = true;
        //     this.C_button.buttonMode = true;
        //     this.C_button.on('pointerover', this.onButtonOver)
        //     this.C_button.on('pointerout', this.onButtonOut)
        //     if (player.tabs[i].unlock) {
        //         this.C_button.on('pointertap', () => {
        //             console.log('Переход в другую сцену');
        //             app.sceneManager.drawScene(app.sceneManager.scenes[player.tabs[i].name])
        //         });
        //     } else {
        //         this.C_button.on('pointertap', () => {
        //             showNotification(player.tabs[i].needToUnlock);
        //         });
        //     }
        // }
    }
}