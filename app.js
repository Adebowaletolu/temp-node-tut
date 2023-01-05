// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('welcome to our home page')
//     res.end()
// })

// server.listen(5000)

const _ = require('lodash');

const items = [1,[2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);