class IncrementerBtn {
    /**
     * @returns {*}
     */
    static getMinusBtn(){
        return this.createBtn("-", this.minusIncrement);
    }

    /**
     *
     */
    static minusIncrement(){
        IncrementerBtn.getNodeWithValue(this, 'minus');
    }

    /**
     * @returns {*}
     */
    static getPlusBtn(){
        return this.createBtn("+", this.plusIncrement);
    }

    /**
     *
     */
    static plusIncrement(){
        IncrementerBtn.getNodeWithValue(this, 'plus');
    }

    /**
     * @param btn
     * @param operation
     */
    static getNodeWithValue(btn, operation){
        let row = btn.parentNode;
        let rowLabel = row.dataset.label;
        let col = row.parentNode;
        let colLabel = col.dataset.label;
        let valueNode = row.childNodes[2];

        let val = (operation == 'minus')
            ? --valueNode.innerHTML
            : ++valueNode.innerHTML;

        LocalStorageManager.setData(colLabel, rowLabel, val);
    }

    /**
     * @param label
     * @param func
     * @returns {Element}
     */
    static createBtn(label, func){
        let btn = document.createElement("button");
        btn.appendChild(document.createTextNode(label));
        btn.addEventListener('click', func);

        return btn;
    }
}