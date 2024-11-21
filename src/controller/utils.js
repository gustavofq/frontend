export class Spinner{
    constructor(loader){
        this.loader = loader;
    }

    setVisible(isVisible=false) {
        if(isVisible){
            this.loader.style.visibility= "visible";
            return
        }
        this.loader.style.visibility= "hidden";
    }
}
