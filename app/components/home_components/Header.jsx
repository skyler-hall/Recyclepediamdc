
const Header = () => {
    return (
        <div className="md:flex justify-between items-center mx-auto mb-24">
            <div className="text-center md:text-left md:w-3/5 md:ml-4">
                <h1 className="text-4xl mb-4 md:text-6xl xl:text-7xl">Waste Made Simple</h1>
                <h3 className="text-2xl mb-4 md:text-3xl xl:text-4xl">Empowering Miami's Youth in Climate Action</h3>
                <p className="text-l mb-8 md:text-left">Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Nemo, voluptatem iusto.
                      Recusandae eum iste sunt est in</p>
                <button className="py-2 px-12 rounded-2xl text-xl text-white bg-[#234E13]">Get Started</button>
            </div>
            <div className="md:w-2/5 p-2">
                <img src='placeholder.png' alt='placeholder'/>
            </div>
         </div>
    )
}

export default Header