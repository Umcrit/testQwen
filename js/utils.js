function FIO(text) {
    return text.replace(/(.+) (.).+ (.).+/, '$1 $2. $3.')
}

function intToString(num) {
    num = num.toString().replace(/[^0-9.]/g, '');

    if (num < 1000) {
        return Math.round(num);
    }
    let si = [
        { v: 1E3, s: "K" },
        { v: 1E6, s: "M" },
        { v: 1E9, s: "B" },
        { v: 1E12, s: "T" },
        { v: 1E15, s: "P" },
        { v: 1E18, s: "E" }
    ];
    let index;
    for (index = si.length - 1; index > 0; index--) {
        if (num >= si[index].v) {
            break;
        }
    }
    return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
}
class U_Graph {
    constructor() {
        this.G = new PIXI.Graphics()
    }
    name(name) {
        this.G.name = name
        return this
    }
    ls(width, color, alpha) {
        this.G.lineStyle(width, color, alpha)
        return this
    }
    fill(fill, alpha = '1') {
        this.G.beginFill(fill, alpha);
        return this
    }
    drRect(x, y, width, height) {
        this.G.drawRect(x, y, width, height);
        return this
    }
    drRoundedRect(x, y, width, height, radius = 0) {
        this.G.drawRoundedRect(x, y, width, height, radius)
        return this
    }
    drCircle(x, y, radius) {
        this.G.drawCircle(x, y, radius);
        return this
    }
    to(stage) {
        this.G.endFill()
        stage.addChild(this.G)
        return this.G
    }

}
class U_Container {
    constructor() {
        this.C = new PIXI.Container()
    }
    name(name) {
        this.C.name = name
        return this
    }
    pos(x, y) {
        this.C.position.set(x, y)
        return this
    }
    to(stage) {
        stage.addChild(this.C)
        return this.C
    }
}
class U_Sprite {
    constructor(asset) {
        this.S = PIXI.Sprite.from(asset)
    }
    pos(x, y) {
        this.S.x = x
        this.S.y = y
        return this
    }
    scale(scl) {
        this.S.scale.set(scl)
        return this
    }
    anchor(anc) {
        this.S.anchor.set(anc)
        return this
    }
    to(stage) {
        stage.addChild(this.S)
        return this.S
    }
}
class U_Text {
    constructor(txt, obj) {
        this.T = new PIXI.Text(txt, obj);
    }
    name(name) {
        this.T.name = name
        return this
    }
    pos(x, y) {
        this.T.x = x
        this.T.y = y
        return this
    }
    anchor(anc) {
        this.T.anchor.set(anc)
        return this
    }
    to(stage) {
        stage.addChild(this.T)
        return this.T
    }
}

// let font = 'Arial'
let font = 'Tschichold'

let fonts = {
    default: {
        fontSize: 44,
        fill: 'white',
        fontFamily: font,
    }
}

const departaments = [
    {
        name: 'Приём',
        sotr: [
            {
                fullName: 'Умралиева Светлана Таировна',
                x: 150 + 100,
                y: 200,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Соколова Наталья Вячеславовна',
                x: 150 + 100,
                y: 400,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Ильина Эльвира Нургалиевна',
                x: 150 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '8GB DDR4',
                storage: 'SSD 555GB',
                inv: 1111111
            },
            {
                fullName: 'Ажахметова Гульсия Хаджимуратовна',
                x: 350 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Заурбекова Дарья Николаевна',
                x: 550 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Велиханова Эльза Ваджитовна',
                x: 750 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Бузик Юлия Михайловна',
                x: 950 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Вакант',
                x: 950 + 100,
                y: 400,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Вакант',
                x: 950 + 100,
                y: 200,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Суликова Таисия Николаевна',
                x: 1150 + 100,
                y: 80,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
        ]
    },
    {
        name: 'Опека',
        sotr: [
            {
                fullName: 'Семенов Игорь Олегович',
                x: 150 + 100,
                y: 200,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Соколова Наталья Вячеславовна',
                x: 150 + 100,
                y: 400,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Ильина Эльвира Нургалиевна',
                x: 150 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '8GB DDR4',
                storage: 'SSD 555GB',
                inv: 1111111
            },
            {
                fullName: 'Ажахметова Гульсия Хаджимуратовна',
                x: 350 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Заурбекова Дарья Николаевна',
                x: 550 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Велиханова Эльза Ваджитовна',
                x: 750 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Бузик Юлия Михайловна',
                x: 950 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Вакант',
                x: 950 + 100,
                y: 400,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Вакант',
                x: 950 + 100,
                y: 200,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Суликова Таисия Николаевна',
                x: 1150 + 100,
                y: 80,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
        ]
    },
    {
        name: 'Приёмная',
        sotr: [
            {
                fullName: 'Умралиева Светлана Таировна',
                x: 150 + 100,
                y: 200,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Соколова Наталья Вячеславовна',
                x: 150 + 100,
                y: 400,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Ильина Эльвира Нургалиевна',
                x: 150 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '8GB DDR4',
                storage: 'SSD 555GB',
                inv: 1111111
            },
            {
                fullName: 'Ажахметова Гульсия Хаджимуратовна',
                x: 350 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Заурбекова Дарья Николаевна',
                x: 550 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Велиханова Эльза Ваджитовна',
                x: 750 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Бузик Юлия Михайловна',
                x: 950 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Вакант',
                x: 950 + 100,
                y: 400,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Вакант',
                x: 950 + 100,
                y: 200,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Суликова Таисия Николаевна',
                x: 1150 + 100,
                y: 80,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
        ]
    },
    {
        name: 'Назначение',
        sotr: [
            {
                fullName: 'Умралиева Светлана Таировна',
                x: 150 + 100,
                y: 200,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Соколова Наталья Вячеславовна',
                x: 150 + 100,
                y: 400,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Ильина Эльвира Нургалиевна',
                x: 150 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '8GB DDR4',
                storage: 'SSD 555GB',
                inv: 1111111
            },
            {
                fullName: 'Ажахметова Гульсия Хаджимуратовна',
                x: 350 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Заурбекова Дарья Николаевна',
                x: 550 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Велиханова Эльза Ваджитовна',
                x: 750 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Бузик Юлия Михайловна',
                x: 950 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Вакант',
                x: 950 + 100,
                y: 400,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Вакант',
                x: 950 + 100,
                y: 200,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Суликова Таисия Николаевна',
                x: 1150 + 100,
                y: 80,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
        ]
    },
    {
        name: 'ОПР',
        sotr: [
            {
                fullName: 'Умралиева Светлана Таировна',
                x: 150 + 100,
                y: 200,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Соколова Наталья Вячеславовна',
                x: 150 + 100,
                y: 400,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Ильина Эльвира Нургалиевна',
                x: 150 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '8GB DDR4',
                storage: 'SSD 555GB',
                inv: 1111111
            },
            {
                fullName: 'Ажахметова Гульсия Хаджимуратовна',
                x: 350 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Заурбекова Дарья Николаевна',
                x: 550 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Велиханова Эльза Ваджитовна',
                x: 750 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Бузик Юлия Михайловна',
                x: 950 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Вакант',
                x: 950 + 100,
                y: 400,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Вакант',
                x: 950 + 100,
                y: 200,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Суликова Таисия Николаевна',
                x: 1150 + 100,
                y: 80,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
        ]
    },
    {
        name: 'Автоматизация',
        sotr: [
            {
                fullName: 'Умралиева Светлана Таировна',
                x: 150 + 100,
                y: 200,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Соколова Наталья Вячеславовна',
                x: 150 + 100,
                y: 400,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Ильина Эльвира Нургалиевна',
                x: 150 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '8GB DDR4',
                storage: 'SSD 555GB',
                inv: 1111111
            },
            {
                fullName: 'Ажахметова Гульсия Хаджимуратовна',
                x: 350 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Заурбекова Дарья Николаевна',
                x: 550 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Велиханова Эльза Ваджитовна',
                x: 750 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Бузик Юлия Михайловна',
                x: 950 + 100,
                y: 600,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Вакант',
                x: 950 + 100,
                y: 400,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Вакант',
                x: 950 + 100,
                y: 200,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
            {
                fullName: 'Суликова Таисия Николаевна',
                x: 1150 + 100,
                y: 80,
                processor: 'Intel i3-2100',
                ozu: '4GB DDR4',
                storage: 'SSD 240GB',
                inv: 123213123
            },
        ]
    },
]
