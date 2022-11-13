let country=document.getElementById("countryName");
let names=document.getElementById("names");
let textdata=document.getElementById("text");
country.addEventListener("click",()=>{
    names.classList.toggle("hide");
});
function myfun(countryname){
    textdata.innerHTML=countryname;
}

let english = document.getElementById('english');
let hindi = document.querySelector('.hindi');
let language = document.querySelector('.language');

language.addEventListener("click",()=>{
    hindi.classList.toggle("displayLanguage");
});

function languageolx(lan){
    english.innerHTML=lan;
}

let bag=[];
//let url="https://fakestoreapi.com/products";
let url="https://636e199d182793016f3688ec.mockapi.io/items";
fetch(url).then((resolve)=>resolve.json()).then((data)=>{
    (bag=data);
    console.log(data);
    display(data);
});

function display(data){
    document.querySelector("#parent").innerHTML="";
    data.forEach(function(elem){
        let div=document.createElement("div");
        
        let image=document.createElement("img");
        image.setAttribute("src",elem.image)


        let title=document.createElement("h2");
        title.innerText=elem.name;


        let description=document.createElement("p");
        description.innerText=elem.description;


        let price=document.createElement("h1");
        price.innerText="₹ "+elem.price;

        let location=document.createElement("p");
        location.innerText=elem.location;

        // let rating=document.createElement("p"); 
        // rating.innerText=elem.rating.rate;

          // 7. to add "add to cart " fucntionality 

        let button=document.createElement("button");
          button.innerText="add to cart";
          button.addEventListener("click",function(){
              cartItems.push(elem);
              localStorage.setItem("cartProducts",JSON.stringify(cartItems))
          })
          
        div.append(image,title,description,price,location,button);
        document.querySelector("#parent").append(div);

      })
  }