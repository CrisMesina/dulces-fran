export const Hero = () =>{
    return(
        <>
            <div className="flex w-full">
                <div className="absolute w-full -z-10 brightness-50">
                    <img src="/bg1.jpg" className="static  h-screen w-screen -z-10" alt="" />
                </div>
                {/* Contenedor sobre la imagen de fondo */}
                <div className="relative w-[750px] h-screen bg-pink-400 overflow-hidden">
                    <div className="w-full z-10 text-center">
                        <div className="mx-auto my-20">
                            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                                <span className="block xl:inline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">Dulces deliciosos para</span>{' '}
                                <span className="block text-pink-600 xl:inline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">momentos dulces</span>
                            </h1>
                            <p className="mx-auto text-white text-xl font-bold my-12">
                                Descubre nuestra increible seleccion de dulces artesanales
                            </p>
                            <div className="w-96 text-white mx-auto my-auto">
                                <div className="flex">
                                    <a href="" className="mx-auto">
                                        <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                            Comprar
                                        </button>
                                    </a>
                                    <a href="" className="mx-auto">
                                        <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                            Ver Catalogo
                                        </button>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}