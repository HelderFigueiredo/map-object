
/**
 * @param  [object] constructor Constructor function
 * @return [object]             Prototype functions
 */
module.exports = (constructor) => {
        
    let p = {
        
        /**
         * reference: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
         * @param  [function] fn
         * @return [object]
         */
        map(fn) {
            
            if (typeof fn !== 'function') {
                throw new TypeError(fn + ' is not a function');
            }

            let newObject = Object(constructor),
                copy = Object(this);
            
            for (let k in copy) {
                if (this.hasOwnProperty(k)) {
                 
                    if (typeof copy[k] === 'function') {
                        newObject[k] = copy[k];
                    } else {
                        Object.defineProperty(newObject, k, {
                            value: fn.call(newObject, copy[k]),
                            writable: true,
                            enumerable: true,
                            configurable: true
                        });
                    }
                }
            }

            return newObject;
        }
    };

    return p;
};
