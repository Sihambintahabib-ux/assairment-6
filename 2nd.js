//id list 
var categoryContainer = document.getElementById("categoryContainer")

//function
const loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then((res) => res.json())
        .then((data) => {
            const categories = data.categories;
            //   console.log(categories)
            showCategory(categories);
        })
        .catch((err) => {
            console.log(err);
        });
};



const showCategory = (categories) => {
    categories.forEach((cat) => {
        categoryContainer.innerHTML += `
            <li id="${cat.id}" class="hover:hover:bg-green-200  bg-green-200 cursor-pointer list-none mb-2 ">${cat.category_name
            }</li>
        `;
    });



    categoryContainer.addEventListener("click", (e) => {

        console.log(e.target);
        const allLi = document.querySelectorAll("li");
        allLi.forEach((li) => {
            li.classList.remove("bg-green-200");
        });

        if (e.target.localName === "li") {
            console.log(e.target.id);
            showLoading()
            e.target.classList.add("bg-green-200");
            loadNewsByCategory(e.target.id);
        }
    });

};


//page-loader


// const showLoading = () => {
//     newsContainer.innerHTML = `
//      <div class="bg-green-500 p-3 ">Loading...</div>
//     `
// }


//catagories of frute 
const loadNewsByCategory = (id) => {
    console.log(id);

    var a = fetch(`https://openapi.programming-hero.com/api/category/${id}`)

        .then((res) => res.json())
        .then((data) => {
            showNewsByCategory(data.articles);
            console.log(data.articles);

        })
        .catch((err) => {
            // showError();
        });
    console.log(a);

};
//function call
loadCategory();
loadNewsByCategory();
// loadNewsByCategory("main");
