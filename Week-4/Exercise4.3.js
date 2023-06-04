let fibonacciIterator=(n)=>{
    let index=0;
    let prev=0;
    let newval=0;
    return {
        next:()=>{
            if(index++ <= n){
                [prev,newval]=[newval,(prev+newval)||1];  
                return{
                    value:newval,
                    done:false,
                }
            }else{
              return {done : true}
            }
        }
    }
}
let fibonacciIterator1=fibonacciIterator(10);
console.log(fibonacciIterator1.next());
console.log(fibonacciIterator1.next());
console.log(fibonacciIterator1.next());
console.log(fibonacciIterator1.next());
console.log(fibonacciIterator1.next());
console.log(fibonacciIterator1.next());
console.log(fibonacciIterator1.next());