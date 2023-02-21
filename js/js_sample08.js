const box = document.getElementById("wrap");
fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
.then(response => response.json())
.then(json => {
    console.log(json);
    json.forEach(e =>{
        let profile=`
        <ul>
            <li>${e.title}
                <img src="${e.thumbnailUrl}">
            </li>
        </ul>`
        console.log(profile);
        box.innerHTML += profile;
    })
});