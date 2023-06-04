function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
    let message=`Count is ${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];
}
const [increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?
//Count is 0 will be logged, because value of count initialy is saved in the String of let value. 
