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

export class Notifier{
    constructor(component){
        this.component = component;
    }

    setMsg(msg){
        this.component.textContent = msg;
        this.component.style.display = 'block';  
    }
}