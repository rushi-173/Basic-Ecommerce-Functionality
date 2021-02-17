import "./styles.css";
import { useState } from "react";

const plantsData = [
  {
    id: 1,
    name: "Mango",
    price: 100,
    quantity: 5,
    img:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-mango-tree-grown-through-seeds-plant-16969021128844_600x600.jpg"
  },
  {
    id: 2,
    name: "Neem",
    price: 100,
    quantity: 5,
    img:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-neem-tree-of-uttarabhadrapada-nakshatra-pisces-or-meen-rashi-plant-16969043902604_600x600_90a4f8b9-afc8-481a-b6ce-a7f25b388196_600x600.jpg"
  },
  {
    id: 3,
    name: "Pineapple",
    price: 100,
    quantity: 5,
    img:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-pineapple-anannas-plant_600x600.jpg"
  },
  {
    id: 4,
    name: "Chickoo",
    price: 100,
    quantity: 5,
    img:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-chikoo-sapota-chiku-fruit-grafted-plant_600x600.jpg"
  }
];
export default function App() {
  const [navItem, setNavItem] = useState("store");
  const [cart, updateCart] = useState({});
  const [wishlist, updateWishlist] = useState({});
  console.log(navItem);
  function Store() {
    return (
      <div className="Store container">
        {plantsData.map((plantItem) => {
          return (
            <div className="product-card" key={plantItem.key}>
              <img src={plantItem.img} height="200px" alt={plantItem.name} />
              <div>
                <h4>{plantItem.name}</h4>
                <h4>{plantItem.price}</h4>
                <h4>{plantItem.quantity}</h4>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  function Wishlist() {
    return <div className="Wishlist container">wishlist</div>;
  }
  function Cart() {
    return <div className="Cart container">cart</div>;
  }
  function DisplayProducts() {
    if (navItem === "store") return <Store />;
    else if (navItem === "wishlist") return <Wishlist />;
    else return <Cart />;
  }

  return (
    <div className="App">
      <h1>Botanic Heaven</h1>
      <p>A step towards better tomorrow.</p>
      <div className="container menu-nav">
        <button className="button-nav" onClick={() => setNavItem("store")}>
          Store
        </button>
        <button className="button-nav" onClick={() => setNavItem("wishlist")}>
          Wishlist
        </button>
        <button className="button-nav" onClick={() => setNavItem("cart")}>
          Cart
        </button>
      </div>
      <DisplayProducts />
    </div>
  );
}
