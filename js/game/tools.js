define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLocalNumber = exports.getRandomInt = void 0;
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    exports.getRandomInt = getRandomInt;
    function getLocalNumber(num) {
        if (num < 10000)
            return num.toLocaleString();
        else if (num < 10000000)
            return Math.floor(num / 1000).toLocaleString() + "T";
        else if (num < 10000000000)
            return Math.floor(num / 1000000).toLocaleString() + "M";
        else if (num < 10000000000000)
            return Math.floor(num / 1000000000).toLocaleString() + "Mrd";
        else
            return Math.floor(num / 1000000000000).toLocaleString() + "Bil";
    }
    exports.getLocalNumber = getLocalNumber;
});
//# sourceMappingURL=tools.js.map