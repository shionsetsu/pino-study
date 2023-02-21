function test(num,text){
    console.log(num,text);
}

test(50,'test');

function test2(num=50){
    // num=50 は初期値で50を付与している
    console.log(num);
}
test2(200);

const total =1000;
function testTax(num){
    // if(数字じゃないものが入ったら){
    //     return false;
    // }
    // else{
    //     const result = num*0.1;
    //     return result; 
    // }
    const result = num*0.1;
    return result;
    // return num*0.1;
}
const tax = testTax(total);
console.log(total+'の税金は'+tax);
