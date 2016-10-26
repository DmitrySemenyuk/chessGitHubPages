/**
 * Create and add nodes
 */
let colsLabel = ['Loss', 'Win', 'Draw'];

function creteCol(label) {
    let records = LocalStorageManager.getData(label);

    let rows = [];
    for (let [label, val] of records) {
        rows.push(
            TemplateCreator.createRow(label, val)
        );
    }
    return TemplateCreator.createCol(label, rows);
}

colsLabel.forEach(
    (colLabel) => HtmlManager.addToBody(creteCol(colLabel))
);
