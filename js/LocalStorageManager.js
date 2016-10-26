class LocalStorageManager {
    /**
     * @param colName
     * @returns {*}
     */
    static getRowsLabels(colName){
        let data = {
            Loss: ['inattention', 'weakness', 'time', 'opponent inattention'],
            Win: ['will', 'skill', 'time', 'opponent inattention'],
            Draw: ['will', 'skill', 'time', 'opponent inattention']
        };

        return data[colName];
    }

    /**
     * @param colName
     * @returns {Map}
     */
    static getData(colName){
        let rows = this.getRowsLabels(colName);

        let localStorageData = localStorage.getItem(colName);
        localStorageData = JSON.parse(localStorageData);

        let result = new Map();
        for (let label of rows) {
            let val = localStorageData
                ? (localStorageData[label] ? localStorageData[label] : 0)
                : 0;
            result.set(label, val);
        }

        return result;
    }

    /**
     * @param colLabel
     * @param rowLabel
     * @param val
     */
    static setData(colLabel, rowLabel, val){
        let storageJSON = localStorage.getItem(colLabel);
        let record = JSON.parse(storageJSON) || {};

        record[rowLabel] = val;

        localStorage.setItem(colLabel, JSON.stringify(record));
    }
}