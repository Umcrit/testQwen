// ========================
// 🎮 Родительский класс сцены (Scene.js)
// ========================


class Scene extends PIXI.Container {
    constructor(controller) {
        super()
        this.controller = controller;

        if (this.constructor.name !== 'LoaderScene') {
            this.header()
        }
        this.content()
    }
    header() {
        this.C_header = new U_Container().name('C_header').pos(0, 0).to(this)

        this.G_bg = new U_Graph().name('G_backogrund')
            .fill(0xedeaea, 1)
            .drRect(0, 0, this.controller.WIDTH, 80, 10)
            .to(this.C_header)
        // BUTTON EMPLOYEES
        this.C_buttonEmployees = new U_Container().name('C_buttonEmployees').pos(50, 10).to(this.C_header)
        this.G_buttonEmployees = new U_Graph().name('G_buttonEmployees')
            .fill('grey', 1)
            .drRoundedRect(0, 0, 260, 60, 10)
            .to(this.C_buttonEmployees)
        this.T_buttonEmployees = new U_Text('Сотрудники', fonts.default).name('T_buttonEmployees')
            .anchor(0.5)
            .pos(this.C_buttonEmployees.width / 2, this.C_buttonEmployees.height / 2)
            .to(this.C_buttonEmployees)
        this.C_buttonEmployees.interactive = true;
        this.C_buttonEmployees.buttonMode = true;
        this.C_buttonEmployees.cursor = 'pointer'
        this.C_buttonEmployees.on('pointerdown', () => {
            this.controller.getSceneManager().switchScene('EmployeesScene');
        });
        // BUTTON PLAN
        this.C_buttonPlan = new U_Container().name('C_buttonPlan').pos(this.C_buttonEmployees.x + this.C_buttonEmployees.width + 50, this.C_buttonEmployees.y).to(this.C_header)
        this.G_buttonPlan = new U_Graph().name('G_buttonPlan')
            .fill('grey', 1)
            .drRoundedRect(0, 0, 260, 60, 10)
            .to(this.C_buttonPlan)
        this.T_buttonPlan = new U_Text('План', fonts.default).name('T_buttonPlan')
            .anchor(0.5)
            .pos(this.C_buttonPlan.width / 2, this.C_buttonPlan.height / 2)
            .to(this.C_buttonPlan)
        this.C_buttonPlan.interactive = true;
        this.C_buttonPlan.buttonMode = true;
        this.C_buttonPlan.cursor = 'pointer'
        this.C_buttonPlan.on('pointerdown', () => {
            this.controller.getSceneManager().switchScene('PlanScene');
        });
    }
    content() {
        this.C_Content = new U_Container().name('C_content').pos(0, 80).to(this)
    }
    onEnter() {
        this.controller.getSceneContainer().addChild(this);
    }
    onExit() {
        this.controller.getSceneContainer().removeChild(this);
    }
}