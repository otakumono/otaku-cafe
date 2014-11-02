xport = function(module, closure) {
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = closure;
	}
};

/* Export the module */
xport(module, xport);