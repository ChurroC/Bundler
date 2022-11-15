const { parse } = require('@babel/parser')
const traverse = require('@babel/traverse')
const fs = require('fs')

const file = fs.readFileSync('./index.js').toString()
const ast = parse(file)

traverse(ast, {
    ExpressionStatement: node => {
        console.log(node)
    }
})
