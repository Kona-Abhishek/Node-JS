const {readFileSync,writeFileSync}=require('fs')

console.log('start')

const first=readFileSync('./content/first.txt','utf-8');
console.log('Done with the first text')
const second=readFileSync('./content/second.txt','utf-8');
console.log('Done with the second text')

writeFileSync('./content/resultsync.txt',`Here is the result: ${first} ${second}`,{flag:'a'})
console.log(first,second);
console.log('Done with the task')