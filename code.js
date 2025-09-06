//all plants 
// fetch("https://openapi.programming-hero.com/api/plants")

//all catagories
// fetch("https://openapi.programming-hero.com/api/categories")

//plants by categories
// fetch("https://openapi.programming-hero.com/api/category/${id}")
// fetch("https://openapi.programming-hero.com/api/category/1")

//Plants Detail
// fetch("https://openapi.programming-hero.com/api/plant/${id}")
// fetch("https://openapi.programming-hero.com/api/plant/1")

//id 
var categoryContainer = document.getElementById("categoryContainer");
var loadCategory = ()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(data => {
            console.log(data.categories);
            var categories = data.categories;
            showCategory(categories)
        })
        .catch((err) => { 
            console.log(err); 
        })
}
showCategory = (categories) => {
    categories.forEach(cat => {
        console.log(cat.category_name);
        categoryContainer.innerHTML += `<li id="${cat.id}" class=" hover:bg-green-200 cursor-pointer ">${cat.category_name}</li>`
    });


    categoryContainer.addEventListener("click" , (e)=>{
        
        const all_li = document.querySelectorAll('li');
        all_li.forEach( li =>{
            li.classList.remove('bg-green-200');
        })
        console.log(e);
        // console.log('ekaf');
        if (e.target.localName === "li") {
            // console.log(e.target);
            console.log(e.target.id);
            e.target.classList.add("bg-green-200")
        }
    })

}

const plantsByCategories = () => {
    fetch("https://openapi.programming-hero.com/api/category/${id}")
        .then(res => res.json())
        .then(data => {
            console.log(data.categories);
            // var categories = data.categories;
            // showCategory(categories)
        })
        .catch((err) => {
            console.log(err);
        })
}
loadCategory();
