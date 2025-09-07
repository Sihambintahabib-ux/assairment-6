//all plants 
// fetch("https://openapi.programming-hero.com/api/plants")

//all catagories
// fetch("https://openapi.programming-hero.com/api/categories")

//plants by categories
// fetch(`https://openapi.programming-hero.com/api/category/${id}`)
// fetch("https://openapi.programming-hero.com/api/category/1")

//Plants Detail
// fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
// fetch("https://openapi.programming-hero.com/api/plant/1")

//id 
var categoryContainer = document.getElementById("categoryContainer");
var cardsContainer = document.getElementById("cardsContainer");


//function
var loadCategory = () => {
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


    categoryContainer.addEventListener("click", (e) => {

        const all_li = document.querySelectorAll('li');
        all_li.forEach(li => {
            li.classList.remove('bg-green-200');
        })
        // console.log(e);
        // console.log('ekaf');
        if (e.target.localName === "li") {
            // console.log(e.target);
            e.target.classList.add("bg-green-200")
            plantsByCategories(e.target.id);
        }
    })

}

const plantsByCategories = (plantID) => {
    console.log(plantID);
    fetch(`https://openapi.programming-hero.com/api/category/${plantID}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.plants);
            console.log(data);

            showCardsByCategories(data.plants);
        })
        .catch((err) => {
            console.log(err);
        })
}

const showCardsByCategories = (plants) => {
    cardsContainer.innerHTML = "";

    plants.forEach(plant => {
        cardsContainer.innerHTML += `
        
        <div class='flex flex-col justify-between border bg-red-500 border-gray-200 rounded p-0 m-0  '>
        <div class ='w-full  h-[40%] overflow-hidden' >
        <img class=" w-full h-full " src="${plant.image}" alt=""></div>
                <div class ='w-full  h-5 ' >

        <h1>${plant.name}</h1>
       <p>${plant.description}</p>
     <div class ='flex flex-row justify-between ' >
      <span>${plant.category}</span>
      <span>${plant.price}</span>
     </div>
      <button type="button">Add to Cart button</button>
      </div>
        </div>  


        


        <div class="cc">
    <div class=' flex flex-col justify-between  border bg-red-500 border-gray-200 rounded p-0 m-0  '>
      <div class='w-full'>
        <img class=" w-full h-50 " src="${plant.image}" alt="">
      </div>
      <div class='w-full '>

        <h1>${plant.name}</h1>
        <p>${plant.description}</p>
        <div class='flex flex-row justify-between'>
          <span>${plant.category}</span>
          <span>${plant.price}</span>
        </div>
        <button type="button">Add to Cart button</button>
      </div>
    </div>
  </div>
          `
        console.log(plant.description);

    }
    )
    // console.log(plants);
}
loadCategory();
