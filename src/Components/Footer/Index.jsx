import Contact from "./Contact";
import { FaFacebook, FaHeart, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return(
        <footer className="bg-green" id="contact">
            <div className="block sm:hidden">
                <h1 className="text-4xl text-semibold leading-loose mx-8 px-4 pt-4" >Contacto</h1>
                <Contact/>
                <aside className="mt-10 px-10 w-full text-center">
                    <span className="my-10">
                        <p>500 Terry Francois Street</p>
                        <p>San Francisco, CA 94158</p>
                    </span>
                    <span className="my-10">
                        <p>Tel: 123-456-7890</p>
                        <p>Fax: 123-456-7890</p>
                    </span>
                    <p className="my-10">info@colmena.com</p>
                    <aside className="flex justify-center">
                    <FaFacebook className="mr-3 text-4xl"/>
                    <FaInstagram className="mr-3 text-4xl"/>
                    <FaLinkedin className="mr-3 text-4xl"/>
                    <FaTiktok className="mr-3 text-4xl"/>
                    </aside>
                    <p className="mt-5 py-10">© 2023 by Personal Life Coach</p>
                </aside>
            </div>
            <div className="hidden sm:flex justify-around pb-8">
                <aside className="my-10 px-10 w-1/3">
                <h1 className="text-4xl text-semibold leading-loose">Contacto</h1>
                    <span className="my-10">
                        <p>500 Terry Francois Street</p>
                        <p>San Francisco, CA 94158</p>
                    </span>
                    <span className="my-10">
                        <p>Tel: 123-456-7890</p>
                        <p>Fax: 123-456-7890</p>
                    </span>
                    <p className="my-10">info@colmena.com</p>
                    <aside className="flex">
                    <FaFacebook color="#EA6510" className="mr-3 text-4xl"/>
                    <FaInstagram color="#EA6510" className="mr-3 text-4xl"/>
                    <FaLinkedin color="#EA6510" className="mr-3 text-4xl"/>
                    <FaTiktok color="#EA6510" className="mr-3 text-4xl"/>
                    </aside>
                    <p className="my-10">© 2023 by Personal Life Coach</p>
                </aside>
                <Contact/>
            </div>
        </footer>
    )

}

export default Footer;