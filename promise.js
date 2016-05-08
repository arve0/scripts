/**
 * ES2015 Promise
 */
let p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('resolved')
	}, 10)
})
p.then((d) => console.log(d))

// reject
p = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('rejected')
	}, 11)
})
p.catch((e) => console.log('*** ' + e))

// may throw inside _executor_
p = new Promise((resolve, reject) => {
	setTimeout(() => {
		// cannot throw inside async function, will not be catched
		resolve('resolved')
	}, 12)
	throw new Error('throw inside promise')
})
p.catch((e) => console.log('*** ' + e))

// if async function throws, use a try catch
p = new Promise((resolve, reject) => {
	setTimeout(() => {
		try {
			throw new Error('throw inside async')
		} catch (e) {
			reject(e)
		}
	}, 13)
})
p.catch((e) => console.log('*** ' + e))

// `.then` might throw
p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('not json')
	}, 13)
})
p.then(JSON.parse)
 .catch((e) => console.log('*** ' + e))

// implementing timeout
function timeout (ms, promise) {
	return new Promise((resolve, reject) => {
		promise.then(resolve)  // argument of timeout
		setTimeout(() => {
			reject(new Error(`Timed out after ${ms} milliseconds.`))
		}, ms)
	})
}
p = timeout(14, new Promise((res, rej) => {
	setTimeout(res, 15)
}))
p.then(() => console.log('resolved'))
 .catch((e) => console.log('*** ' + e))

// Promise.all resolves all promises in an array
function get (url) { 
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(url + ' resolved'), Math.random() * 10 + 20)
	})
}
let promisedPages = [ get('url1'), get('url2'), get('url3') ]
Promise.all(promisedPages).then((pages) => {
	console.log(pages)
})

// Promise.race resolves whoever is first
Promise.race([ get('url1'), get('url2') ]).then((first) => {
	console.log(first + ' first')
})

// Promise.race may be used to timeout another promise
let t = new Promise((resolve, reject) => {
	setTimeout(() => resolve('fetching timed out'), 16)
})
Promise.race([ get('url'), t ]).then((d) => {
	// url will never finish
	console.log(d)
})
