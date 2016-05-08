/**
 * Generator functions, returns iterators
 */
function * asdf () {
	yield 1
	yield 2
	return 3
}

// loop the iterator returned from the generator function
for (let n of asdf()) {
	console.log(n)
}

// loop the iterator manually
let it = asdf()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())  // value == undefined
