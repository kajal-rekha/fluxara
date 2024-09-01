const Navbar = () => {
    return (
        <header className="fixed left-0 right-0 top-0 z-[100] flex h-20  items-center border-b border-gray-700 bg-[#000035]">
            <nav className="wrapper flex w-full h-full items-center justify-between gap-5">
                <div className="wrapper flex justify-between items-center">
                    <div className="text-lg font-bold">
                        <a href="/" className="text-white uppercase">
                            Fluxara
                        </a>
                    </div>
                    <ul className="flex space-x-4 text-white">
                        <li>
                            <a href="/" className="hover:text-gray-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/features" className="hover:text-gray-300">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="/pricing" className="hover:text-gray-300">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-gray-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
