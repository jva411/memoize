"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function memoize() {
    var cache = new Map();
    var cachedFunction = function (fun, deps) {
        var depsString = deps.toString();
        if (cache.has(depsString)) {
            return cache.get(depsString);
        }
        var result = fun();
        cache.set(depsString, result);
        return result;
    };
    return cachedFunction;
}
function useMemoized(fun, deps) {
    var cachedFunction = (0, react_1.useMemo)(function () { return memoize(); }, []);
    return cachedFunction(fun, deps);
}
exports.default = useMemoized;
