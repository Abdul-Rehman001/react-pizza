import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-red-500 px-4 py-3 uppercase sm:px-6">
      <Link
        to="/react-pizza/"
        className="text-lg font-bold tracking-widest text-yellow-100"
      >
        🍕React Pizza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
