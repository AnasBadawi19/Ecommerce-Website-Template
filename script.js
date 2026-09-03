const shopName ="ShopName"; //variable never changes
let cartcount = 0; //will change as items are added
//Data types
const price =29.99; //nb
const productName = "T-shirt"; //string
const instock = true; //bool
const colors = ["blue","green","black"]; //array
const product = { //object(carrying multiple attributes)
name: "tshirt",
price: "29.99",
instock: true
};
//operators and conditinals
console.log(price>20);
console.log(instock === true);
if(instock){
    console.log("available now");
}
else{
    console.log("out of stock");
}
const planprice = 15;
if(planprice < 20){
    console.log("basic plan");
}
else{
    console.log("premium plan");
}
//functions
function greetshopper(name){
    cinsole.og("welcome to shopname , "+name+"!");
}
greetshopper("Anas");

//DOM = Document Object Model, JavaScript's map of 
// every element on your page. To touch an element,
//  you select it — same idea as a CSS selector, but in JS.
//to select one element(first match)
const shopBtn = document.querySelector(".shop-btn");
// to select multiple elements (multiple matches, returns a list)
const sociallinks = document.querySelectorAll(".social-icon-link");
//Once shopBtn is holding a reference to your button, you unlock all of these — none of which work without that first step:

// javascript
// const shopBtn = document.querySelector(".shop-btn");

// // change its text
// shopBtn.textContent = "Shop the Sale!";

// // change its style
// shopBtn.style.backgroundColor = "#4ECDC4";

// // add/remove a class
// shopBtn.classList.add("shop-btn-active");

// // listen for a click
// shopBtn.addEventListener("click", function () {
//   alert("Thanks for shopping!");
// });

// // hide it entirely
// shopBtn.style.display = "none";

// // check what's currently inside it
// console.log(shopBtn.textContent);
shopBtn.textContent = "Sale 30% on selected items for a limited time!";
shopBtn.style.backgroundcolor("#FF0000");
shopBtn.classList.add("shop-btn-active");//adds the class
// shopBtn.classList.remove("shop-btn-active");//removes the class
// shopBtn.classList.toggle("shop-btn-active");//toggles class on/off
shopBtn.addEventListener("click",function(event){
    event.preventDefault();
    alert("Thanks for shopping!");
});


// 9. Arrays & loops — handling lists of things

// Your <ol> "What do we offer" list currently has empty <li> tags. 
// In real apps, lists like this get built by JavaScript from an array of
//  data instead of typed by hand.

const offering = ["Fast Shipping","24/7 support","easy return policy"];
const offerList = document.querySelector("ol");
offering.forEach((item)=>{
    const li = document.createElement("li"); //create a new <li>
    li.textContent = item; //put text inside it
    li.style.color = "#DDDDDD";
    offerList.appendChild(li); //add it to the <ol>
});  
