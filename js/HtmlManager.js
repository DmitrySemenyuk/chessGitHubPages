class HtmlManager {
    static addToBody(createdNodes) {
        let notesNode = document.getElementById('notes');
        document.body.insertBefore(createdNodes, notesNode);
    }
}