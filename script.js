const products=[
{
    id:1,
    name: "Iphone 15 pro", 
    price: 999,
    category: "phones",
    image: "https://via.placeholder.com/300x200/3b82f6/white?text=iPhone+15+pro",
    description: "The latest iPhone with amazing camera and perfomance"
},
{
    id: 2,
    name: "Macbook Air",
    price: 1199,
    category: "laptop",
    image: "https://via.placeholder.com/300x200/10b981/white?text=MacBook+Air",
    description: "Lightweight laptop perfecet work and creativity"
},
{
    id: 3,
    name: "Airpods Pro",
    price: 249,
    category: "accessories",
    image: "https://via.placeholder.com/300x200/f59e0b/white?text=AirPods+Pro",
    description: "wireless earbuds with noise cancelation"
},
{
    id:4,
    name: "Samsung Galaxy S24",
    price: 899,
    category: "phones",
    image: "https://via.placeholder.com/300x200/8b5cf6/white?text=Galaxy+24",
    description: "Android phone with incredible features"
},
{
    id: 5,
    name: "Dell Laptop",
    price: 799,
    category: "Laptop",
    image: "https://via.placeholder.com/300x200/06b6d4/white?text=Dell+Laptop",
    description: "Reliable laptop for everyday computing"
},
{
    id:6,
    name: "Wireless mouse",
    price: 49,
    category: "accessories",
    image: "https://via.placeholder.com/300x200/ec4899/white?text=Wireless+Mouse",
    description: "Ergonomic wirelss mouse for productivity"
}
];
let cart = [];

const cartCountElement =document.getElementById('cart-count');
const productsGrid = document.getElementById('products-grid');
const featuredProducts = document.getElementById('featured-products');

function formatPrice(price) {
    return 'R' + price.toFixed (2);
}

console.log('JavaScript loaded succesfully!');
console.log('We have', products.length, 'products');