//id 
var categoryContainer = document.getElementById("categoryContainer");
var cardsContainer = document.getElementById("cardsContainer");
var pricelist = document.getElementById("pricelist");
var totalprice = document.getElementById("totalprice");

// button click even run
//price section start=============

var prices = [];
cardsContainer.addEventListener("click", (e) => {
    // console.log(e.target.parentNode.parentNode.childNodes[1]);
    console.log(e.target);
    if (e.target.innerText === 'Add to Cart button') {
        handleprices(e)
    }
})

var handleprices = (e) => {
    var id = e.target.parentNode.parentNode.childNodes[1].id
    var title = e.target.parentNode.parentNode.childNodes[1].childNodes[1].innerText
    var price = e.target.parentNode.parentNode.childNodes[3].childNodes[3].innerText
    console.log(typeof (price));
    prices.push({
        title: title,
        price: price,
        id: id,
    })
    showprice(prices);
}

var showprice = (prices) => {
    pricelist.innerHTML = "";
    totalprice.innerHTML = '';
    let total = 0;
    prices.forEach(price => {
        pricelist.innerHTML += `<li class="bg-white p-2 m-1 rounded-sm ">
            <p class="text-lg font-semibold ">${price.title}</p>
            <p class="flex justify-between">
              <span class="font-light text-sm ">${price.price}</span>
              <button onclick="handledeletePrices
              ('${price.id}')" class=' btn btn-xm' >
              <i class="fa fa-trash" aria-hidden="true"></i>

              </button>
            </p>
          </li>  
            `
        total += parseInt(price.price)

    


    })
    totalprice.innerHTML += `<span class="font-light text-sm ">${total}</span>`


    // prices.forEach(price => {
    //     // totalprice += price.price;
    // totalprice.innerHTML += `<span class="font-light text-sm ">${price.price}</span>
    //         `  })


    // totalprice.innerHTML += price

}

var handledeletePrices = (pi) => {
    console.log(pi);
    var filteredPrices = prices.filter(price => price.id !== pi);
    prices = filteredPrices;

    console.log(filteredPrices);
    showprice(prices);
}


//price section end=============

//fetch data - catagories list
var loadCategory = () => {
    // showloading(true);
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(data => {
            // console.log(data.categories);
            var categories = data.categories;
            showCategory(categories)
            // showloading(true);
        })
        .catch((err) => {
            console.log(err);
        })
}

// Select the button element
const allButton = document.getElementById('allCategories');
//fetch data - all plants
var loadallCategory = () => {
    showloading(true);
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => {
            // console.log(data.plants);
            var plants = data.plants;
            showallCategory(plants);
            showloading(false);
        })
        .catch((err) => {
            console.log(err);
        })
}
// var CardDesing = (plants) => {
//     cardsContainer.innerHTML = "";
//     cardsContainer.innerHTML +=
//         `<div id='cardparent' class="cc ">
//     <div class=' bg-white shadow-2xl overflow-hidden |  flex flex-col gap-0 justify-between border border-gray-200 rounded-lg p-2 m-0  '>
//       <div class='w-full h-[40%]'>
//         <img class=" w-full h-50 | outline outline-transparent rounded-md
// " src="${plant.image}" alt="">
//       </div>

//       <div class='card-text |  w-full p-2 | flex flex-col justify-end  gap-2 '>
// <div id="${plant.id}" class='heading | h-fit'>

//         <button onclick="showModal(${plant.id})" class=" text-1xl font-semibold mb-1 ">${plant.name}</button>
//         <p class=" text-sm font-light ">${plant.description}</p>
//                 </div>

//         <div class='flex flex-row justify-between'>
//           <span class="text-sm font-light | outline rounded-lg bg-green-200 outline-transparent w-fit text-center px-3 py-2 " >${plant.category}</span>

//           <span>${plant.price}</span>
//         </div>

// <div class=''>
//  <button class="outline rounded-lg bg-green-500 outline-transparent w-full text-center  m-auto" type="button">Add to Cart button</button>   
//         </div>
//   </div>
//     </div>
//   </div>
//           `

// }


showallCategory = (plants) => {
    allButton.innerHTML = "";
    allButton.innerHTML = `<li id="" class="allCategories | px-3 py-3 hover:bg-green-200 bg-green-200 cursor-pointer ">All Catagories</li> `
    plants.forEach(plant => {
        cardsContainer.innerHTML +=
            `<div id='cardparent' class="cc">
    <div class=' bg-white shadow-2xl overflow-hidden |  flex flex-col gap-0 justify-between border border-gray-200 rounded-lg p-2 m-0  '>
      <div class='w-full h-[40%]'>
        <img class=" w-full h-50 | outline outline-transparent rounded-md
" src="${plant.image}" alt="">
      </div>

      <div class='card-text |  w-full p-2 | flex flex-col justify-end  gap-2 '>
<div id="${plant.id}" class='heading | h-fit'>

        <button onclick="showModal(${plant.id})" class=" text-1xl font-semibold mb-1 ">${plant.name}</button>
        <p class=" text-sm font-light ">${plant.description}</p>
                </div>

        <div class='flex flex-row justify-between'>
          <span class="text-sm font-light | outline rounded-lg bg-green-200 outline-transparent w-fit text-center px-3 py-2 " >${plant.category}</span>

          <span>${plant.price}</span>
        </div>

<div class=''>
         
 <button class="outline rounded-lg bg-green-500 outline-transparent w-full text-center px-1 py-3 m-auto" type="button">Add to Cart button</button>   
        </div>
  </div>
    </div>
  </div>
          `
    })
        ;

    allButton.addEventListener('click', (e) => {
        cardsContainer.innerHTML = "";
        plants.forEach(plant => {
            cardsContainer.innerHTML += `
        <div id='cardparent' class="cc  ">
    <div class=' bg-white shadow-2xl overflow-hidden |  flex flex-col gap-0 justify-between border border-gray-200 rounded-lg p-2 m-0  '>
      <div class='w-full h-[40%]'>
        <img class=" w-full h-50 | outline outline-transparent rounded-md
" src="${plant.image}" alt="">
      </div>

      <div class='card-text |  w-full p-2 | flex flex-col justify-end  gap-2 '>
<div id="${plant.id}" class='heading | h-fit'>

        <button onclick="showModal(${plant.id})" class=" text-1xl font-semibold mb-1 ">${plant.name}</button>
        <p class=" text-sm font-light ">${plant.description}</p>
                </div>

        <div class='flex flex-row justify-between'>
          <span class="text-sm font-light | outline rounded-lg bg-green-200 outline-transparent w-fit text-center px-3 py-2 " >${plant.category}</span>

          <span>${plant.price}</span>
        </div>

<div class=''>
         
 <button class="outline rounded-lg bg-green-500 outline-transparent w-full text-center px-1 py-3 m-auto" type="button">Add to Cart button</button>   
        </div>
  </div>
    </div>
  </div>
          `
            console.log(plant.description);
        }
        )



    });

}
//left side-name
showCategory = (categories) => {
    categories.forEach(cat => {
        categoryContainer.innerHTML += `<li id="${cat.id}" class=" p-3 hover:bg-green-200 cursor-pointer ">${cat.category_name}</li>`
    });
    categoryContainer.addEventListener("click", (e) => {

        const all_li = document.querySelectorAll('li');
        all_li.forEach(li => {
            li.classList.remove('bg-green-200');
        })
        if (e.target.localName === "li") {

            e.target.classList.add("bg-green-200")
            //get the id of plants
            plantsByCategories(e.target.id);
            console.log(e.target.id);
        }
    })

}
//cards
const plantsByCategories = (plantID) => {
    // console.log(plantID);


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
        <div id='cardparent' class="cc  ">
    <div class=' bg-white shadow-2xl overflow-hidden |  flex flex-col gap-0 justify-between border border-gray-200 rounded-lg p-2 m-0  '>
      <div class='w-full h-[40%]'>
        <img class=" w-full h-50 | outline outline-transparent rounded-md
" src="${plant.image}" alt="">
      </div>
      <div class='card-text |  w-full p-2 | flex flex-col justify-end  gap-2 '>
<div id="${plant.id}" class='heading | h-fit'>
        <button  onclick="showModal(${plant.id})"
class=" text-1xl font-semibold mb-1 ">${plant.name}</button>
        <p class=" text-sm font-light ">${plant.description}</p>
                </div>
        <div class='flex md:flex-row flex-col-reverse   justify-between'>
          <span class="text-sm font-light | outline rounded-lg bg-green-200 outline-transparent w-fit text-center px-3 py-2 " >${plant.category}</span>
          <span>${plant.price}</span>
        </div>
<div class=''>
 <button class="outline rounded-lg bg-green-500 outline-transparent w-full text-center px-1 py-3 m-auto" type="button">Add to Cart button</button>   
        </div>
  </div>
    </div>
  </div>
          `    }
        // hidden
    )
}
//model
var showModal = (id) => {
    var url = `https://openapi.programming-hero.com/api/plant/${id}`
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => {
            displaymodelDetails(data.plants);

        })
        .catch((err) => {
            console.log(err);
        })

}
// model details
var displaymodelDetails = (data) => {
    console.log(data);
    var text = document.getElementById("text");
    //  text.innerHTML = 'helo text';
    text.innerHTML = `

     <h3 class="text-lg p-2  rounded-sm bg-green-200 font-bold">${data.name}</h3>
<img class=" w-2/4 h-50 | outline outline-transparent rounded-md
" src="${data.image}" alt="">

<p class=" text-base font-normal ">${data.description}</p>
<p class=" text-sm font-light | outline rounded-lg bg-green-200 outline-transparent w-fit text-center px-3 py-2  ">${data.category}</p>
          <span class="font-bold p-2 ">Price : $${data.price}</span>

      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>

     `;



    var box_details = document.getElementById("my_modal_5").showModal()

}

var showloading = (status) => {
    if (status === true) {
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("cardsContainer").classList.add("hidden")
    } else {

        document.getElementById("cardsContainer").classList.remove("hidden")
        document.getElementById("spinner").classList.add("hidden")
    }
}


loadallCategory();
loadCategory();
