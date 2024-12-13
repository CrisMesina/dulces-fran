
export const Header = () => {

    return(
        <>
            <nav className="border-gray-200 bg-pink-500 dark:bg-pink-500 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/logo.png" className="h-12" alt="Dulces Fran Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dulces Fran</span>
                    </a>
                    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:text-fuchsia-950 dark:hover:bg-pink-400 dark:focus:ring-pink-800" aria-controls="navbar-solid-bg" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"   className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul className="flex flex-col text-center font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-pink-400 md:dark:bg-transparent dark:border-[#fc9fff]">
                            <li>
                                <a href="#" className="block my-2 py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-[#fc9fff] dark:bg-[#bf9cfc] md:dark:bg-transparent" aria-current="page">Inicio</a>
                            </li>
                            <li>
                                <a href="#" className="block my-2 py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#b8546e] dark:text-white md:dark:hover:text-[#bf9cfc] dark:hover:bg-[#fc9fff] dark:hover:text-white md:dark:hover:bg-transparent">Productos</a>
                            </li>
                            <li>
                                <a href="#" className="block my-2 py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#b8546e] dark:text-white md:dark:hover:text-[#bf9cfc] dark:hover:bg-[#fc9fff] dark:hover:text-white md:dark:hover:bg-transparent">Sobre Nosotros</a>
                            </li>
                            <li>
                                <a href="#" className="block my-2 py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#b8546e] dark:text-white md:dark:hover:text-[#bf9cfc] dark:hover:bg-[#fc9fff] dark:hover:text-white md:dark:hover:bg-transparent">Contactanos</a>
                            </li>
                            <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#b8546e] dark:text-white md:dark:hover:text-[#bf9cfc] dark:hover:bg-[#fc9fff] dark:hover:text-white md:dark:hover:bg-transparent">
                                <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                                    Iniciar Sesion
                                </button>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
