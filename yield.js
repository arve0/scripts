/**
 * Generator functions, returns iterators
 */
function * asdf () {
	yield 1
	yield 2
}

// loop the iterator returned from the generator function
for (let n of asdf()) {
	console.log(n)
}

// loop the iterator manually
let it = asdf()
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)  // undefined
