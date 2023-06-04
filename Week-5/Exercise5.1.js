// Exercise5.1:
// Using Async/Await and Generators, create separate functions and achieve the samefunctionality.(3hours)
// Execute 3 callback functions asynchronously, for example doTask1(), doTask2() and doTask3().
function doTask1(a){
    return new Promise((resolve,reject)=>{
     if(a==1){
        setTimeout(()=>{
            resolve({data:true})
        },10000)
    }else{
         setTimeout(()=>{
             reject({data:false})
         },10000)
     }
    }) 
}
async function doTask2(data){
 try {
    let result=await doTask1(data);
    return result
 }catch (error) {
    return error
 }
}  
function* doTask3(a){
   yield a+1;
   yield a+2;
   return;
}
let gen=doTask3(3);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(doTask2(2));