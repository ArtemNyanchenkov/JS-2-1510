import Cart from "./Cart.js";
import Catalog from "./Catalog.js";

export default () => {
	new Catalog(new Cart(), document.getElementById("featuredItems"), 4);
};
