const obj = {
    id:1,
    name :"suzaki",
    class:"WD1A"
}
// console.log(obj.class);

// fetch(url)
// then.() レスポンスを返す
const file = "sample.json";
const box = document.getElementById("wrap");
fetch(file)
.then(response => response.json())
.then(json =>{
    // console.log(json);
    json.forEach(e =>{
        let profile =`
        <h2>${e.name}</h2>
        <p>${e.age}</p>
        <p>${e.email}</p>
        `
        console.log(profile);
        box.innerHTML += profile; 
    })
});

/*
<h2>なまえ</h2>
<p>年齢</p>
<p>Email</p>
*/