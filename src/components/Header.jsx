import React, {useRef, useEffect} from 'react'
import { Link, useLocation} from 'react-router-dom'

import logo from '../assets/images/Logo-2.png'

const mainNav = [
    {
        display: "Home",
        path: "/"
    },
    {
        display: "Catalogo",
        path: "/catalog"
    },
    {
        display: "Acessórios",
        path: "/accessories"
    },
    {
        display: "Contato",
        path: "/contact"
    }
]

const Header = () => {

     const {pathname} = useLocation()
     const activeNav = mainNav.findIndex(e => e.path === pathname)

     const headerRef = useRef(null)

     
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
       
    }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <div className="headerr" ref={headerRef}>
            <div className="containerr">
                <div className="headerr__logo"> 
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                </div>
                <div className="headerr__menu">
                     <div className="headerr__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                      </div>
                    <div className="headerr__menu__left" ref={menuLeft}>
                    <div className="headerr__menu__left__close" onClick={menuToggle}>
                        <i className='bx bx-chevron-left'></i>

                    </div>
                    
                    {
                        mainNav.map((item, index) =>(
                            <div
                                    key={index}
                                    className={`headerr__menu__item headerr__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                               <Link to={item.path}>
                                   <span>{item.display}</span>
                               </Link>
                            </div>
                        ))
                    }

                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Header
