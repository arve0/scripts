/**
 * run with ava ava_yield.js
 */

import test from 'ava'

function p () {
	return Promise.resolve(10)
}

function * generator () {
	let v = yield p()
	return v + 1
}

test('something', function * (t) {
	let val = yield generator()
	t.true(val === 11)
})
