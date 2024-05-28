const TextColors = {
    BLACK: "0",
    WHITE: "1"
}

class BackgroundController {
    static DEFAULT_COLOR = "https://glacier.fly.dev/windows/wallpaper12.jpg";

    constructor(element) {
        this.element = element
        // this.makeColorInput()
        this.startListeners()
        this.displaySavedColor()
    }

    startListeners() {
        this.element.addEventListener('click', this.onClicked.bind(this))
        document.querySelector('.gay').addEventListener('click', this.onOtherClick.bind(this))
    }

    onClicked() {
        var value = prompt("Enter input image URL");
        this.setSavedColor(value);
        this.displayColor(value);
    }

    onOtherClick(){
        var black = confirm("Do you want to use black text? (OK for yes)");
        localStorage.textColor = (black ? TextColors.BLACK : TextColors.WHITE);
        this.displayColor(localStorage.savedColor);
    }

    getSavedColor() {
        return localStorage.savedColor ?? BackgroundController.DEFAULT_COLOR
    }

    setSavedColor(value) {
        localStorage.savedColor = value
    }

    hasSavedColor() {
        return Boolean(localStorage.savedColor)
    }

    displayColor(color) {
        document.body.style.backgroundImage = "url("+color+")";
        if (localStorage.textColor === TextColors.BLACK) {
            document.body.classList.add("black-text")
        } else {
            document.body.classList.remove("black-text")
        }
    }

    displaySavedColor() {
        if (this.hasSavedColor()) {
            this.displayColor(this.getSavedColor())
        }
    }

    static getTextColor() {
        // let [r, g, b] = [1, 3, 5].map(n => parseInt(color.substr(n, 2), 16));
        // let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return localStorage.textColor;
    }
}

export { BackgroundController }