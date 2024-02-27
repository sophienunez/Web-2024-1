import { useRef } from "react";
import { FaTimes, FaBars, FaShoppingCart } from "react-icons/fa";
import './Header.css'
export function Header (){
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    return(
        <header>
            <nav className="">
                <div className='header'>
                    <img className='logo' src="https://i.ibb.co/yFwkZNL/Frame-2.png" alt="" /> 
                    <div className='button-section'>
                        <button 
                        className="shop">
                        <FaShoppingCart />
                        </button>
                        <button 
                        className="nav-btn"
				        onClick={showNavbar}>
                        <FaBars />
                        </button>
                    </div>
                                   
                </div>
                
                <div className='menu' ref={navRef}>
                    <button
                    className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				    </button>
                    <ul>
                        <Link text='Gallery'/>
                        <Link text='Art and Artists'/>
                        <Link text='About'/>
                        <Link text='Store'/>
                    </ul>
                    <div className="donate">
                        <Button className="button" text='Donate'/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

function Link(prop){
    const {text} = prop
    return(
        <div>
            <li><a>{text}</a></li>
            
        </div>
    )
}

function Button(prop) {
    const {text} = prop
    return(
        <button className='main-button'>{text}</button>
    )
}