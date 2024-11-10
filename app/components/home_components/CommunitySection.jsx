
const CommunitySection = () => {
    return (
        <div className="mt-24 mb-6">
            <div className="mb-14 flex items-center justify-center">
                <hr className=" border-4 border-black w-1/3 h-full" />
                <h3 className="text-3xl md:text-4xl mx-6 text-center uppercase">In the Community</h3>
                <hr className=" border-4 border-black w-1/3 h-full" />
            </div>
            <div className="md:flex justify-center items-center">
                <div className="md:w-1/2 p-8">
                    <h3 className="text-5xl text-center md:text-5xl md:text-left mb-8 md:mb-4">Community Calendar</h3>
                    <p className="text-center md:text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Laudantium consequatur obcaecati dicta labore recusandae ipsam,
                         expedita vero tempora accusamus assumenda, 
                        laboriosam error saepe! Explicabo illum, 
                        repellendus quo ipsa culpa placeat!</p>
                </div>
                <div className="md:w-1/2">
                    <img src='placeholder.png'/>
                </div>
            </div>

        </div>
    )
}

export default CommunitySection