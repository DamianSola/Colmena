

export function ReadMore({readMore, setRead}) {

    // console.log(ReadMore)

    return(
        <div className="text-center sm:text-left">
        <button 
            onClick={() => setRead()}
            className="bg-transparent justify-center border-black text-black hover:text-white hover:bg-black border-2 px-2 my-5 ">
            {readMore ? "Leer menos" : "Leer mas"} 
        </button>
        </div>
    )
}