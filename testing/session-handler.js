
var SessionKasittelija = {
    SessionStorageSet: function (key, value) {
        if (window.sessionStorage) {
            sessionStorage.setItem(key, value);
        }
    },
    SessionStorageGet: function (key) {
        var storageValue = null;
    
        if (window.sessionStorage)
            storageValue = sessionStorage.getItem(key);
    
        return storageValue;
    },
    SessionStorageGetAndRemove: function (key) {
        var storageValue = null;
    
        if (window.sessionStorage) {
            storageValue = this.SessionStorageGet(key);
            if (storageValue != null) {
                this.SessionStorageRemove(key);
            }
        }
    
        return storageValue;
    },
    SessionStorageRemove: function (key) {
        if (window.sessionStorage) {
            sessionStorage.removeItem(key);
        }
    }
}