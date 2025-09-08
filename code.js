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
var pricelist = document.getElementById("pricelist");


// showloading();

pricelist.addEventListener("click", () => {
    // console.log("price tag show");
})
// button click even run
var prices = [];
cardsContainer.addEventListener("click", (e) => {
    // console.log(e.target.parentNode.parentNode.childNodes[1]);
    console.log(e.target);

    if (e.target.innerText === 'Add to Cart button') {


        handleprices(e)


    }

})

//total show
    // var totalprice = document.getElementById("totalprice");

// var totalshow = () => {

//     console.log(prices);



    // var totalprice = document.getElementById("totalprice").innerText;
    // var priceConverted = parseInt(price)
    // var totalpriceConverted = parseInt(totalprice)
    // console.log(typeof (priceConverted), priceConverted);
    // console.log(typeof (totalpriceConverted), totalpriceConverted);

    // totalprice = totalpriceConverted + priceConverted;
    // console.log(totalprice);


// }


var handleprices = (e) => {
    var id = e.target.parentNode.parentNode.childNodes[1].id
    // console.log(id);
    // console.log(e.target.parentNode.parentNode.childNodes[1].childNodes[1].innerText);  
    var title = e.target.parentNode.parentNode.childNodes[1].childNodes[1].innerText
    var price = e.target.parentNode.parentNode.childNodes[3].childNodes[3].innerText
    console.log(typeof(price));

    //delete class add 
    // var pricedelete = e.target.parentNode.parentNode.childNodes[3].childNodes[3] ;
    // pricedelete.classList.add('delete');
    // console.log(pricedelete);


   


    prices.push({
        title: title,
        price: price,
        id: id,
    })
    // console.log(prices)
    showprice(prices);

}







var showprice = (prices) => {
    // console.log(prices)
    pricelist.innerHTML = "";
    prices.forEach(price => {
        pricelist.innerHTML += `
            <li class="bg-white p-2 m-1 rounded-sm ">
            <p class="text-lg font-semibold ">${price.title}</p>
            <p class="flex justify-between">
              <span class="font-light text-sm ">${price.price}</span>
              <button onclick="handledeletePrices
              ('${price.id}')" class=' btn btn-xm' >delete</button>
            </p>
          </li>  
            `
        

//         var a = price.price;
//         var b= Number(a);
//         a = b+b
// console.log(typeof(b));
// console.log(a);
        // totalshow();


    })

    // totalprice.innerText = prices.length
    totalprice = prices.length
    totalprice = prices.innerText + totalprice
    console.log(totalprice);



    var totalprice = document.getElementById("totalprice").innerText;
    // var priceConverted = Number(price)
    var totalpriceConverted = Number(totalprice)
    // console.log(typeof (priceConverted), priceConverted);
    console.log(typeof (totalpriceConverted), totalpriceConverted);

    totalprice = totalpriceConverted + 5;
    console.log(totalprice);












}
// var totalprice = document.getElementById("totalprice"),

// totalprice += price ;

var handledeletePrices = (pi) => {
    console.log(pi);
    var filteredPrices = prices.filter(price => price.id !== pi);
    prices = filteredPrices;

    console.log(filteredPrices);
    showprice(prices);
}



// var price = e.target.parentNode.parentNode.childNodes[3].childNodes[3].innerHTML ; 

// var deletprice = document.getElementById('deletprice')
// // price.classList.add('delete');
// console.log(price);
// deletprice.addEventListener("click" , 
//     ()=>{

//     }
// )

// var handleprices = ()=> {

// }







// card desing 

//fetch data - catagories list
var loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(data => {
            // console.log(data.categories);
            var categories = data.categories;
            showCategory(categories)
        })
        .catch((err) => {
            console.log(err);
        })
}


// //allcategories
// Select the button element
const allButton = document.getElementById('allCategories');

//fetch data - all plants
var loadallCategory = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => {
            // console.log(data.plants);
            var plants = data.plants;
            showallCategory(plants);
        })
        .catch((err) => {
            console.log(err);
        })
}




var CardDesing = (plants) => {
    cardsContainer.innerHTML = "";
    cardsContainer.innerHTML +=
        `<div id='cardparent' class="cc ">
    <div class=' bg-white shadow-2xl overflow-hidden |  flex flex-col gap-0 justify-between border border-gray-200 rounded-lg p-2 m-0  '>
      <div class='w-full h-[40%]'>
        <img class=" w-full h-50 | outline outline-transparent rounded-md
" src="${plant.image}" alt="">
      </div>

      <div class='card-text |  w-full p-2 | flex flex-col justify-end  gap-2 '>
<div id="${plant.id}" class='heading | h-fit'>

        <h1 class=" text-1xl font-semibold mb-1 ">${plant.name}</h1>
        <p class=" text-sm font-light ">${plant.description}</p>
                </div>

        <div class='flex flex-row justify-between'>
          <span class="text-sm font-light | outline rounded-lg bg-green-200 outline-transparent w-fit text-center px-3 py-2 " >${plant.category}</span>

          <span>${plant.price}</span>
        </div>

<div class='btn'>
         
 <button class="outline rounded-lg bg-green-500 outline-transparent w-full text-center px-1 py-3 m-auto" type="button">Add to Cart button</button>   
        </div>
  </div>
    </div>
  </div>
          `

}


// plants.forEach(plant => {
//     // console.log(plant);

//     CardDesing(plant);

// })


showallCategory = (plants) => {
    // console.log(plants);
    // console.log(plants.id);
    // showloading();

    allButton.innerHTML ="";
    allButton.innerHTML = `<li id="" class="allCategories | px-5 py-3 hover:bg-green-200 bg-green-200 cursor-pointer ">all catagories</li> `

    plants.forEach(plant => {
        // console.log(plant);

        // CardDesing(plant);

        cardsContainer.innerHTML += 
            `        <div id='cardparent' class="cc  ">
    <div class=' bg-white shadow-2xl overflow-hidden |  flex flex-col gap-0 justify-between border border-gray-200 rounded-lg p-2 m-0  '>
      <div class='w-full h-[40%]'>
        <img class=" w-full h-50 | outline outline-transparent rounded-md
" src="${plant.image}" alt="">
      </div>

      <div class='card-text |  w-full p-2 | flex flex-col justify-end  gap-2 '>
<div id="${plant.id}" class='heading | h-fit'>

        <h1 class=" text-1xl font-semibold mb-1 ">${plant.name}</h1>
        <p class=" text-sm font-light ">${plant.description}</p>
                </div>

        <div class='flex flex-row justify-between'>
          <span class="text-sm font-light | outline rounded-lg bg-green-200 outline-transparent w-fit text-center px-3 py-2 " >${plant.category}</span>

          <span>${plant.price}</span>
        </div>

<div class='btn'>
         
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

        // alert('Button clicked!');
        console.log(e);
        console.log(plants);

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

        <h1 class=" text-1xl font-semibold mb-1 ">${plant.name}</h1>
        <p class=" text-sm font-light ">${plant.description}</p>
                </div>

        <div class='flex flex-row justify-between'>
          <span class="text-sm font-light | outline rounded-lg bg-green-200 outline-transparent w-fit text-center px-3 py-2 " >${plant.category}</span>

          <span>${plant.price}</span>
        </div>

<div class='btn'>
         
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

// Add a click event listener






loadallCategory();

// var ALLplantsByCategories = () => {
//     fetch("https://openapi.programming-hero.com/api/plants")
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             console.log(data.plants);
//             console.log("object");
//             var plants = data.plants;
//             showALLplantsByCategories(plants);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
// ALLplantsByCategories();
// var click = allCategories.addEventListener("click", (e) => {
//     console.log(e);
//     allCategories.innerText = `HELLO WORLD`;


// })


// var showALLplantsByCategories = (plants) => {

//     cardsContainer.innerHTML = "";

//     plants.forEach(plant => {
//         cardsContainer.innerHTML += `
//         <div class="cc bg-teal-200">
//     <div class=' h-full flex flex-col gap-5 justify-between  border border-gray-200 rounded p-2 m-0  '>
//       <div class='w-full h-[40%]'>
//         <img class=" w-full h-60 | outline outline-transparent rounded-md
// " src="${plant.image}" alt="">
//       </div>
//       <div class='w-full p-2 '>

//         <h1>${plant.name}</h1>
//         <p>${plant.description}</p>
//         <div class='flex flex-row justify-between'>
//           <span>${plant.category}</span>
//           <span>${plant.price}</span>
//         </div>
//         <button type="button">Add to Cart button</button>
//       </div>
//     </div>
//   </div>
//           `
//         console.log(plant.description);

//     }
//     )
//     // console.log(plants);
// }

// https://openapi.programming-hero.com/api/plants




//name
showCategory = (categories) => {
    // console.log(categories);
    // categoryContainer.innerHTML = `<li id="" class="allCategories | px-5 py-3 hover:bg-green-200 bg-green-200 cursor-pointer ">all catagories</li> `

    categories.forEach(cat => {
        // console.log(cat.category_name);
        categoryContainer.innerHTML += `<li id="${cat.id}" class=" p-3 hover:bg-green-200 cursor-pointer ">${cat.category_name}</li>`
    });

    //hover colour change : bg-green-200
    categoryContainer.addEventListener("click", (e) => {

        const all_li = document.querySelectorAll('li');
        all_li.forEach(li => {
            li.classList.remove('bg-green-200');
        })
        // console.log(e);
        // console.log('ekaf');
        if (e.target.localName === "li") {
            showloading();

            // console.log(e.target);
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


// <div class='flex flex-col justify-between border bg-red-500 border-gray-200 rounded p-0 m-0  '>
//     <div class='w-full  h-[40%] overflow-hidden' >
//         <img class=" w-full h-full " src="${plant.image}" alt=""></div>
//     <div class='w-full  h-5 ' >

//         <h1>${plant.name}</h1>
//         <p>${plant.description}</p>
//         <div class='flex flex-row justify-between ' >
//             <span>${plant.category}</span>
//             <span>${plant.price}</span>
//         </div>
//         <button type="button">Add to Cart button</button>
//     </div>
// </div>  

const showCardsByCategories = (plants) => {
    // console.log(plants);

    // showloading();
    cardsContainer.innerHTML = "";

    plants.forEach(plant => {
        // console.log(plant);
        cardsContainer.innerHTML += `
        <div id='cardparent' class="cc  ">
    <div class=' bg-white shadow-2xl overflow-hidden |  flex flex-col gap-0 justify-between border border-gray-200 rounded-lg p-2 m-0  '>
      <div class='w-full h-[40%]'>
        <img class=" w-full h-50 | outline outline-transparent rounded-md
" src="${plant.image}" alt="">
      </div>

      <div class='card-text |  w-full p-2 | flex flex-col justify-end  gap-2 '>
<div id="${plant.id}" class='heading | h-fit'>

        <h1 class=" text-1xl font-semibold mb-1 ">${plant.name}</h1>
        <p class=" text-sm font-light ">${plant.description}</p>
                </div>

        <div class='flex flex-row justify-between'>
          <span class="text-sm font-light | outline rounded-lg bg-green-200 outline-transparent w-fit text-center px-3 py-2 " >${plant.category}</span>

          <span>${plant.price}</span>
        </div>

<div class='btn'>
         
 <button class="outline rounded-lg bg-green-500 outline-transparent w-full text-center px-1 py-3 m-auto" type="button">Add to Cart button</button>   
        </div>
  </div>
    </div>
  </div>
          `
        // console.log(plant.description);

    }
    )

    // console.log(plants);
}


var showloading =()=>{
    cardsContainer.innerHTML=`
    <div id="spin" class=" 
      w-1    ">

        </div>
      <div id="spin" class=" border-white 
      w-full h-6 rounded bg-red-500  ">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nesciunt?
        </div>
        <div id="spin" class=" 
      w-1    ">

        </div>
    `
}
// var one = 1
loadCategory();
// plantsByCategories("1")