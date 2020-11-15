const url = require("url")

const myUrl = new URL('http://mywebsite.com/hello.html?id=100/status=active');

// Serialized URL
console.log(myUrl.href)

// HOST (root domain)
console.log(myUrl.host)

// HostName
console.log(myUrl.hostname)

// PathName
console.log(myUrl.pathname)

// Serialized query
console.log(myUrl.search)

// add params
myUrl.searchParams.append('abc', 123)

// params object
console.log(myUrl.searchParams)

// Loop through params
myUrl.searchParams.forEach((val, name) => console.log(`${name} __ ${val}`))
