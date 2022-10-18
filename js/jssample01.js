//コメント
console.log("hello");
console.log(10);

//データが変わる 変わる 数値 -> 変数
//変数 let 変数名
//定数 const 変数名
// x = 1;
let name = "薛";
name = "Shion"
console.log(name);
// console.log("こんにちは" + name + "さん");
console.log(`こんにちは${name}さん`);

console.log(document.getElementById("btn"));

const output = document.getElementById("output");
const text = document.getElementById("text");

document.getElementById("btn").onclick = () => {

    var nowTime =new Date().getHours();

    if(11 <= nowTime && nowTime <= 16){
        console.log("こんにちは");
        var greet = "こんにちは"
    }

    else if(17 <= nowTime || nowTime <=3){
        console.log("こんばんは");
        var greet = "こんばんは"
    }

    else if(4 <= nowTime || nowTime <= 10){
        console.log("おはようございます");
        var greet = "おはようございます"
    }

    console.log("clickした");
    console.log(document.getElementById("text").value);
    output.innerHTML = text.value;
    output.innerHTML = (greet + output.innerHTML + "さん");
    
};















// new Date()
// const date = new Date();
// const day = date.getDate();
// getHours()
// getMiniutes()
// getSeconds()
// getMilliseconds()








// var now = new Date();

// function LoadProc() {
//     var target = document.getElementById("DateTimeDisp");
//     var Year = now.getFullYear();
//     var Month = now.getMonth()+1;
//     var Date = now.getDate();
//     var Hour = now.getHours();
//     var Min = now.getMinutes();
//     var Sec = now.getSeconds();
//     target.innerHTML = Year + "年" + Month + "月" + Date + "日" + Hour + ":" + Min + ":" + Sec;
// }