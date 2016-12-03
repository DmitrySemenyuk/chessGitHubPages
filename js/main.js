/**
 * Create and add nodes
 */
let colsLabel = ['Loss', 'Win', 'Draw'];

function creteCol(label) {
    let records = LocalStorageManager.getData(label);

    let rows = [];
    let rowsSum = 0;
    for (let [label, val] of records) {
        rows.push(
            TemplateCreator.createRow(label, val)
        );
        rowsSum += val;
    }

    return TemplateCreator.createCol(label, rows, rowsSum);
}

colsLabel.forEach(
    (colLabel) => HtmlManager.addToBody(creteCol(colLabel))
);
