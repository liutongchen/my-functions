
const memoize = f => (() => {
    const cache = new Map();
    return x => {
        if (cache.get(x) == null) {
	    cache.set(x, f(x));
        }
        return cache.get(x);
    }
})();
