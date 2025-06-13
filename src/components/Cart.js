import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";
import CartBill from "./CartBill";
import { Link } from "react-router";

const Cart = () => {
  // Reading the cart items
  const cartItems = useSelector((store) => store.cart.items);

  // Clearing the Cart
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Removing an Item
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <div className="text-center m-4 p-4 min-h-screen">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div>
          {cartItems.length === 0 ? (
            <h1>
              <p className="font-bold p-20 text-4xl text-red-500">
                Your Cart is Empty ? Order Now 😋!!
                <Link to="/">
                  <p>
                    <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-6">
                      SEE RESTAURANTS NEAR YOU
                    </button>
                  </p>
                </Link>
              </p>
            </h1>
          ) : (
            <CartBill dishes={cartItems} onRemoveItem={handleRemoveItem} />
          )}
        </div>
      </div>

      {cartItems.length > 0 && (
        <button
          className="fixed bottom-4 right-4 w-16 h-16 bg-slate-600 rounded-full text-white font-bold flex items-center justify-center shadow-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
