var Record={
    Name:'Syed Sameer Husain',
    Address:'H.no.112,Street 4,Navi Mumbai-100458',
    Contact:'8888054543'
}
function PrintData(age,height){
    return `Hi, My name is ${this.Name},I Live in ${this.Address},you can contact me on ${this.Contact},my age is ${age} and height is ${height}`
}
var result=PrintData.call(Record,22,5.4);
console.log('Call Result.....',result);
var result1=PrintData.apply(Record,[24,6]);
console.log('Apply Result.....',result1);
var result2=PrintData.bind(Record,19,7);
console.log('Bind Result.....Function Copy',result2);
console.log('Bind Result.....',result2());
