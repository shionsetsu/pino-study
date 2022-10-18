/*
    誰が(要素/タグ) なにを(要素の持つプロパティ)

*/ 
// console.log(document.getElementById("txt").innerText = "あとから入れた<em>文字<em>") ;

// console.dir()
//dirで要素の持つプロパティをすべて参照できる

// document.querySelector("#txt")
// document.getElementById("txt")

document.getElementById("btn").addEventListener("click",() => {
    console.log(document.getElementById("txt").value);
    document.getElementById("txt").value = null;
})


const age = document.getElementById("age");
const txt = document.getElementById("txt")
document.getElementById("btn").addEventListener("click", ()=>{
    const num =Number(age.value);
    console.log(num);
    if(num < 0 || num >=130){
        txt.innerText = "そんなんありません"
    }
    else if(num >= 100){
        /*#txtの文字を長生きですねに変更 */
        txt.innerText = "長生きですね";
    }

    else if( num >= 21 && num <=99){
        txt.innerText = "大人ですね";
    }

    else if(num == 20){
        txt.innerText = "成人ですね";
    }

    else if(num >= 0 && num <=6){
        txt.innerText = "こどもですね";
    }

    else if(num >= 7 && num <=12){
        txt.innerText = "小学生ですね";
    }

    else if(num >= 13 && num <=18){
        txt.innerText = "中高生ですね";
    }


    else{
        console.log("条件が違う")
    }
})
/*

0-6 子供ですね
7-12 小学生ですね

1.ageに年齢を入力する
2.#btnをクリック
3. [#ageのvalueを比べる]
    1.もし 0以上のとき かつ 6以下のとき
    |
    2.もし 20と同じ時
    3.もし 100以上のとき

if(条件){
    条件が真(合う場合)の場合ここが動く
}
*/ 