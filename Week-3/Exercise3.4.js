function createStack() {
    // Write your code here...
    let items=[];
    return {
        push:function(item){
            items.push(item)
        },
        pop:function(item){
            items.pop(item)
        }
    }
}
const stack=createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => undefined
//