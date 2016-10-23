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
        let text = document.createTextNode(name);
        row.appendChild(text);

        row.appendChild(IncrementerBtn.getMinusBtn());

        let value = document.createElement("span");
        value.appendChild(document.createTextNode(val));
        row.appendChild(value);

        row.appendChild(IncrementerBtn.getPlusBtn());

        return row;
    }
}