/**
 * Create and add nodes
 */
let winDataLabel = 'Win';
let winData = LocalStorageManager.getData(winDataLabel);

let winRows = [];
for (let [label, val] of winData) {
    winRows.push(
        TemplateCreator.createRow(label, val)
    );
}

$section = TemplateCreator.createCol(winDataLabel, winRows);

HtmlManager.addToBody($section);