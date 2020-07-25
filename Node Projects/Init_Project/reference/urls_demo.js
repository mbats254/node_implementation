const url = require('url');

const myUrl = new URL('http://delivaflix.com:8000/movies.php?page=2')

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
//Host (root domain)
console.log(myUrl.host);
//Hostname(does not get port)
console.log(myUrl.hostname);
// PathName
console.log(myUrl.pathname);
//Serialixed query
console.log(myUrl.search);
//params object
console.log(myUrl.searchParams);
//Add Params
myUrl.searchParams.append('abc', 123);
console.log(myUrl.searchParams);
//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));