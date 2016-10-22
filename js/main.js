/**
 * Create and add nodes
 */
let rows = [
    TemplateCreator.createRow('A', 0),
    TemplateCreator.createRow('A', 0),
    TemplateCreator.createRow('A', 0),
];
$section = TemplateCreator.createCol('Win', rows);

HtmlManager.addToBody($section);

