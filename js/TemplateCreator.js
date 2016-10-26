class TemplateCreator {
    /**
     * @param name
     * @param rows
     * @returns {Element}
     */
    static createCol(name, rows) {
        let section = document.createElement("section");
        let h2 = document.createElement('h2');
        let h2Text = document.createTextNode(name);

        section.setAttribute("data-label", name);
        section.setAttribute("class", "game-result-col");

        h2.appendChild(h2Text);
        section.appendChild(h2);
        for (let row of rows) {
            section.appendChild(row);
        }

        return section;
    }

    /**
     * @param name
     * @param val
     * @returns {Element}
     */
    static createRow(name, val) {
        let row = document.createElement("div");
        row.setAttribute("data-label", name);

        row.appendChild(this.createRowLabel(name));

        row.appendChild(IncrementerBtn.getMinusBtn());

        let value = document.createElement("span");
        value.setAttribute("class", "game-result-value");
        value.appendChild(document.createTextNode(val));
        row.appendChild(value);

        row.appendChild(IncrementerBtn.getPlusBtn());

        return row;
    }

    /**
     * @param name
     * @returns {Element}
     */
    static createRowLabel(name) {
        let text = document.createTextNode(name);
        let node = document.createElement("span");
        node.appendChild(text);
        node.setAttribute("class", "game-result-label");

        return node;
    }
}