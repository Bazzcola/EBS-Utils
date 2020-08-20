"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
module.exports = {
    concat: function (arr1, arr2) {
        return __spreadArrays(arr1, arr2);
    },
    map: function (arr, callback) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr[i] = callback(arr[i], i);
        }
        return newArr;
    },
    filter: function (arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            var newArr = [];
            if (callback(arr[i])) {
                newArr.push(arr[i]);
            }
            return newArr;
        }
    },
    find: function (arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                return arr[i];
            }
        }
    },
    pipe: function (arr, callbacks) {
        var newArr = arr;
        for (var i = 0; i < callbacks.length; i++) {
            newArr = callbacks[i].execute(newArr);
        }
        return newArr;
    },
};
//# sourceMappingURL=index.js.map