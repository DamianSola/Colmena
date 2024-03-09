
const Modal = ({description, image, open, close}) => {
    return(
            <div className={`${open? "block" : "hidden"} z-50 fixed p-4 `}>
            <button onClick={close} className="opacity-40 hover:opacity-100 text-4xl absolute right-6 top-3">x</button>
            <div className="flex bg-orange p-2 w-9/10">
            <img src={image} alt="image-profile" className="m-auto w-1/2 h-full m-4 "/>
            <p>{description}</p>
            </div>
        </div>
    )
}

export default Modal;