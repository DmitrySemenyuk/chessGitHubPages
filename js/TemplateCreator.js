class TemplateCreator {
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

        section.appendChild(this._createPieChartContainer(name));

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

    static _createPieChartContainer(name) {
        let pieChartDiv = document.createElement('div');
        pieChartDiv.id = 'pieChart' + name;
        pieChartDiv.style.width = '100%';
        pieChartDiv.style.height = '250px';

        return pieChartDiv;
    }
}