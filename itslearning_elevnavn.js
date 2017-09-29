const fs = require('fs')

let input = fs.readFileSync('elevnavn.txt', 'utf-8')

let lines = input.split('\n')
let numberOfNames = lines.length / 8

for (let i = 0; i < numberOfNames; i++) {
  let name = lines[2 + i * 8]
  let [, surname, firstname] = name.match(/(.*),(.*)/).map(n => n.trim())
  console.log (firstname, '\t', surname)
}