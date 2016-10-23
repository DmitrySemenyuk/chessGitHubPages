class LocalStorageManager {
    static getWinData(){
        let winLabel = [
            'a',
            'b',
            'c'
        ];

        let result = new Map();
        for (let label of winLabel) {
            result.set(
                label,
                Number(localStorage.getItem(label))
            );
        }

        return result;
    }
}