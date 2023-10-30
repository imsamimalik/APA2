import { RiMenu2Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
	return (
		<header className="border-gray-500/50 flex items-center justify-between px-10 py-5 border-t border-b">
			<RiMenu2Fill size={30} />
			<h1 className="text-4xl tracking-[30px] uppercase">
				LOGO
			</h1>

			<div className="flex items-center space-x-5">
				<FiSearch size={30} />
				<GoPerson size={30} />
				<div className="relative">
					<AiOutlineShoppingCart size={30} />
					<span className="-top-2 -right-2 absolute w-5 h-5 p-[2px] text-xs text-center text-white bg-black rounded-full">
						0
					</span>
				</div>
			</div>
		</header>
	);
};
export default Header;

