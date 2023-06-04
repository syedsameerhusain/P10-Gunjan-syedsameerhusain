const Memoize=(taskPerformer)=>{
 let memo={};
 return function(...args){
     console.log(memo);
    if(args.join(',') in memo) return memo[args.join(',')]
    let result =taskPerformer(...args);
    memo[args.join(',')]=result;
    return result
}
}
const Calculator=(firstInput,SecondInput,Operation)=>{
    switch(Operation){
        case '+':
         return firstInput+SecondInput;
        case '-':
         return firstInput-SecondInput;
        case '*':
         return firstInput*SecondInput;
        case '/':
         return firstInput/SecondInput;
        default:
         return 0;
    }
}
var MemoizeCal=Memoize(Calculator);
console.time();
var result=MemoizeCal(3,5,'+');
console.timeEnd();
console.log('result.......',result);
console.time();
var result=MemoizeCal(3,5,'+');
console.timeEnd();
console.log('result.......',result);