class TemplateCreator {
    static createCol(name, rows, rowSum) {
        let section = document.createElement("section");
        let h2 = document.createElement('h2');
        let h2Text = document.createTextNode(name);
        let rowsSumDiv = document.createElement('div');
        let rowsSumDivText = document.createTextNode(rowSum);

        section.setAttribute("data-label", name);
        section.setAttribute("class", "game-result-col");

        h2.appendChild(h2Text);
        section.appendChild(h2);
        for (let row of rows) {
            section.appendChild(row);
        }

        rowsSumDiv.appendChild(rowsSumDivText);
        rowsSumDiv.setAttribute("class", "game-result-sum-value");
        section.appendChild(rowsSumDiv);

        return section;
    }

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

    static createRowLabel(name) {
        let text = document.createTextNode(name);
        let node = document.createElement("span");
        node.appendChild(text);
        node.setAttribute("class", "game-result-label");

        return node;
    }
}