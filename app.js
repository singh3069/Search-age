let submitButton = document.getElementById('search-btn');
console.log(submitButton);
submitButton.addEventListener('click', show);
var searchInpt = document.getElementById('search-inpt');

function show(){

    fetch("https://api.agify.io/?name=" + searchInpt.value )

    // .then(function (res){
    //     res.json()
    //     })
    .then(res => res.json())

        // .then(function(data){
        //     // let {name , age} = data;
        // document.getElementById('name').textContent = data.name;
        // document.getElementById('age').textContent = data.age;
        // console.log(data);


        // })

    .then(data => {
        let {name , age} = data;
        document.getElementById('name').textContent = name;
        document.getElementById('age').textContent = age;


        // console.log(data.name);
        // console.log(data);
        // console.log(data.age);
    })
}
























// function makeSearch(){
//     let inputBox = searchInpt.value
    // url = "https://api.agify.io/?name=michael&country_id=US";
//     console.log("country_id");
//     fetch(url).then(show)
// }

// function show(){
//     res.json().then(function(data)){
//         data.map
//     }
// }