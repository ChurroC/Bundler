//https://dev.to/akshay9677/writing-your-own-module-bundler-125b
const { parse } = require('@babel/parser')
const traverse = require('@babel/traverse').default
const fs = require('fs')

const fileName = './test2.js'
const file = fs.readFileSync(fileName).toString()
const ast = parse(file, { ecmaVersion: 2020, sourceType: 'module' })

// Or could do ast.program.body
traverse(ast, {
    VariableDeclaration: path => {
        if (path.node.declarations[0].init.callee?.name === 'require') {
            //console.log(path.node)
        }
    },
    ImportDeclaration: path => {
        //console.log(path.node)
        const relativePath = path.node.source.value
        console.log(fs.readFileSync(relativePath).toString())
    },
})
