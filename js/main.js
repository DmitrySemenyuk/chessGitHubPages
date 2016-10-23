/**
 * Create and add nodes
 */
let winData = LocalStorageManager.getWinData();

let winRows = [];
for (let [label, val] of winData) {
    winRows.push(
        TemplateCreator.createRow(label, val)
    );
}

$section = TemplateCreator.createCol('Win', winRows);

HtmlManager.addToBody($section);