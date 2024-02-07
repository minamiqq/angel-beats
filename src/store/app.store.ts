

class TelegramService {
    private tg

    constructor() {
        this.tg = window.Telegram.WebApp
    }

    get buttonColor() {
        return this.tg.themeParams.button_color
    }

    get tgInfo() {
        console.log(window.Telegram.WebApp);
        
        return ""
        
    }

    get bgColor() {
        return this.tg.backgroundColor
    }

    // get send() {
    //     this.tg.sendData("Hello from button")
    // }
}

export default new TelegramService()