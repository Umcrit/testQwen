class WSConnect {
    constructor(controller) {
        this.controller = controller
        this.socket = null;

        this.onOpenCallback = () => {};
        this.onMessageCallback = (message) => {};
        this.onErrorCallback = (error) => {};
        this.onCloseCallback = () => {};
        this.connect()
    }
    connect() {
        this.socket = new WebSocket('ws://localhost:8090');

        this.socket.onopen = () => {
            this.onOpenCallback();
        };

        this.socket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                this.onMessageCallback(data);
            } catch (err) {
                console.error('Error parsing message:', err);
                this.onErrorCallback(err);
            }
        };

        this.socket.onclose = () => {
            console.log('WebSocket disconnected');
            this.onCloseCallback();
        };

        this.socket.onerror = (error) => {
            console.error('WebSocket error:', error);
            this.onErrorCallback(error);
        };
    }

    send(message) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(message));
        } else {
            console.warn('WebSocket not ready. Message not sent:', message);
        }
    }

    disconnect() {
        if (this.socket) {
            this.socket.close();
        }
    }

    // Установка обработчиков событий
    onOpen(callback) {
        this.onOpenCallback = callback;
    }

    onMessage(callback) {
        this.onMessageCallback = callback;
    }

    onError(callback) {
        this.onErrorCallback = callback;
    }

    onClose(callback) {
        this.onCloseCallback = callback;
    }
}