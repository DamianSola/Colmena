

const Contact = () => {
    return(
        <form className="flex-col mx-8 md:m-8 p-4 bg-transparent rounded md:w-max md:mx-20">
            <label className="text-2xl md:text-lg font-meduim ">Nombre</label>
            <input className="w-full my-3 md:my-1 bg-green border-2 border-black" type="text" name="name"/><br/>  
            <label className="text-2xl md:text-lg font-medium">Apellido</label>
            <input className="w-full my-3 md:my-1 bg-green border-2 border-black" type="text" name="name"/><br/>
            <label className="text-2xl md:text-lg font-medium">Empresa</label>
            <input className="w-full my-3 md:my-1 bg-green border-2 border-black" type="text" name="name"/><br/>
            <label className="text-2xl md:text-lg font-medium">Correo</label>
            <input className="w-full my-3 md:my-1 bg-green border-2 border-black" type="email" name="mail"/><br/>
            <label className="text-2xl md:text-lg font-medium">Mensaje</label><br/>
            <textarea className="w-full my-3 md:my-1 bg-green border-2 border-black" name="message" rows="4"></textarea><br/>
            <span className="aling-right">
            <button type="submit" className="text-lg px-5 bg-black text-white hover:text-black hover:bg-green border-2 border-black relative" >Enviar</button>
            </span>
        </form>
    )
}

export default Contact;
