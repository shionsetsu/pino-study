//コメント
console.log("hello");
console.log(10);

//データが変わる 変わる 数値 -> 変数
//変数 let 変数名
//定数 const 変数名
// x = 1;
let name = "薛";
name = "福村"
console.log(name);
// console.log("こんにちは" + name + "さん");
console.log(`こんにちは${name}さん`);

console.log(document.getElementById("btn"));

const output = document.getElementById("output");
const text = document.getElementById("text");

document.getElementById("btn").onclick = () => {
    console.log("clickした");
    console.log(document.getElementById("text").value);
    output.innerHTML = text.value;
}