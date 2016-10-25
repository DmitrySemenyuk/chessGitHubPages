class LocalStorageManager {
    static getData(fieldName){
        let winLabel = [
            'a',
            'b',
            'c'
        ];

        let localStorageData = localStorage.getItem(fieldName);
        localStorageData = JSON.parse(localStorageData);

        let result = new Map();
        for (let label of winLabel) {
            let val = localStorageData
                ? (localStorageData[label] ? localStorageData[label] : 0)
                : 0;

            result.set(label, val);
        }

        return result;
    }

    static setData(colLabel, rowLabel, val){
        let storageJSON = localStorage.getItem(colLabel);
        let record = JSON.parse(storageJSON) || {};

        record[rowLabel] = val;

        localStorage.setItem(colLabel, JSON.stringify(record));
    }
}