/**
 * Async functions can await a promise
 *
 * This file must be transpiled, as async/await is an ES7 proposal:
 * ./node_modules/.bin/babel --presets es2015,stage-3 --plugins transform-runtime async_await.babel.js --out-file async_await.js
 */
function get (url) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve('data from ' + url), Math.random() * 10 + 20)
	})
}

// we can use await inside async functions
async function doStuff () {
	let res = await get('http://google.com')
	// next line is not called before get's promise is resolved
	console.log('got ' + res)
}

doStuff()
