var types = ( function() {
    var isArray = function(someArray){
        if((typeof someArray == "object") && (someArray instanceof Array)){
        return true;
        }
        else {
            return false;
        }
    }
    var isLogical = function(someLog){
        return someLog instanceof Boolean;

    }
    var isData = function (someData) {
        return someData instanceof Data;

    }
    var isNumber = function (someNumber) {
        return someNumber instanceof Number;

    }
    var isString = function (someString) {
        return someString instanceof String;

    }
    var isFunction = function (someFunction) {
        if (typeof someFunction == "function") {
            return true;
        }
        else {
            return false;
        }
    }
    var isUnderfined = function (someUnderfined) {
        if (typeof someUnderfined == "underfined") {
            return true;
        }
        else {
            return false;
        }
    }
    var isNull = function (someNull) {
        if (typeof someNull == "object") {
            return true;
        }
        else {
            return false;
        }
    }

    return{
        isArray:isArray,
        isLogical:isLogical,
        isData:isData,
        isNumber:isNumber,
        isString:isString,
        isFunction:isFunction,
        isUnderfined:isUnderfined,
        isNull:isNull


    };
})();
var a = null;
types.isNull(a);

