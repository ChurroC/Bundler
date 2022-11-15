const acorn = require('acorn')
const fs = require('fs')
const cool = require('./test')
console.log(cool)
console.dir(cool('div', { id: 'foo' }, cool('a', null, 'bar'), cool('b')), { depth: null })
const test = fs.readFileSync('test.js').toString()
console.log(acorn.parse(test, { ecmaVersion: 2020 }))

//https://www.one-tab.com/page/h_FA0DAhQqCMD_CbDpvWOg
