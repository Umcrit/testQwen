// ========================
// 🎮 Менеджер сцен (SceneManager.js)
// ========================

class SceneManager {
    constructor(app) {
        this.app = app;
        this.scenes = {};
        this.currentScene = null;
    }

    addScene(name, sceneInstance) {
        this.scenes[name] = sceneInstance;
        if (!this.currentScene) {
            this.switchScene(name);
        }
    }

    switchScene(name) {
        if (!this.scenes[name]) {
            console.error(`Сцена "${name}" не найдена`);
            return;
        }


        if (this.currentScene && this.scenes[this.currentScene].onExit) {
            this.scenes[this.currentScene].onExit();
        }

        this.currentScene = name;

        if (this.scenes[this.currentScene].onEnter) {
            this.scenes[this.currentScene].onEnter();
        }
    }

    getCurrentScene() {
        return this.scenes[this.currentScene];
    }
}

