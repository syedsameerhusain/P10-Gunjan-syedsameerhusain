const getNumber =()=>{
    return Math.random().toFixed(0);
}
const test = new Promise((resolve,reject)=>{
    let number=getNumber();
    console.log(number);
    if(number%5!=0){
       resolve()
    }else{
        reject()
    }
})