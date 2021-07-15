
const {writeFileSync, readFile, writeFile}=require('fs');
console.log('Starting the process')
readFile('./content/first.txt','utf-8',(err,response)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('Reading the first file')
    first=response;
    console.log(response)
    console.log('Completed Reading')
readFile('./content/second.txt','utf-8',(err,response1)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('Reading the second file')
    second=response1;
    console.log(response1)
    console.log('Completed Reading')
    writeFile('./content/resultasync.txt',`Here is the result:${first} ${second}`,{flag:'a'},(err)=>{
        if(err){
            console.log(err)
            return
        }
        
        console.log('Completed Writing')
    })
})

})
console.log('Done')