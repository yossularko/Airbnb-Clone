import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="pl-5 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="start your search"
        />
        <SearchIcon className="hidden md:inline-flex bg-red-400 h-8 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center space-x-4 justify-end">
        <p className="hidden md:inline cursor-pointer text-gray-600">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer text-gray-600" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6 text-gray-600" />
          <UserCircleIcon className="h-6 text-gray-600 hidden md:inline-flex" />
          <UserIcon className="h-6 text-gray-600 md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
