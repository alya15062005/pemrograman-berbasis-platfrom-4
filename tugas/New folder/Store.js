const products = [
    {id:1,nama:"products 1",harga:10000},
    {id:2,nama:"products 2",harga:20000},
    {id:3,nama:"products 3",harga:30000},
];
let cart = [];

function displayproduct(){
    const productlist =
document.getElementById("product.list");
    products.forEach((product) => {
        const productCard =
document.createElement("div");
        productCard.classList.add("card");
        productCard.innerHTML = '<h3>${product.name}</h3>'
        '<p>harga;RP.$ {product.harga}</p>'
       '<button onclick = "add to cart(${product.id})">add to cart</button>';
       productlist.appendChild(productCard);});
    }

function addTocart(productID){
    const product = products.find((p) => p.id == productID);
cart.push(product);
displaycart();
}

function displaycart(){ const cartlist = document.getElementById("cart-list");
    cartlist.innerHTML = "";
    cart.forEach ((item) => {
        const cartitem = document.createElement("li");
        cartitem.textContent = $ (item.harga);
        cartlist.appendChild(cartitem); });
}

displayproduct();