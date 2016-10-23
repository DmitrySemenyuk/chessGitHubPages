class IncrementerBtn {

    static getMinusBtn(){
        return this.createBtn("-", this.minusIncrement);
    }

    static minusIncrement(){
        console.log('-');
    }

    static getPlusBtn(){
        return this.createBtn("+", this.plusIncrement);
    }

    static plusIncrement(){
        console.log('+');
    }

    static createBtn(label, func){
        let btn = document.createElement("button");
        btn.appendChild(document.createTextNode(label));
        btn.addEventListener('click', func);

        return btn;
    }
}