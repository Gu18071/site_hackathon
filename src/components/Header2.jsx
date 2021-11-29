import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../assets/images/Logo-2.png'

export const Header2 = () => {

    const [categorias,getCategorias] = useState([]);

    useEffect(() => {
        axios.get('http://187.87.223.235/api/categorias/')
        .then((response) => {
            getCategorias(response.data.data);
        })
    },[])

    const headerRef = useRef(null)

     
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <>  <div className="headerr" ref={headerRef}>
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
                            
                        <div className="headerr__menu__item headerr__menu__left__item">
                            <Link to="/">Home</Link>
                        </div>
                       
                        { categorias.map((item,index) => (
                          <div className="headerr__menu__item headerr__menu__left__item"
                            key={index}
                            onClick={menuToggle}
                            >
                              <Link to={"/api/produtosCategoria/"+item.id}>{item.categoria}</Link>
                            </div>  
                        ))}
                        </div>
                        </div>
                        </div>
                        </div>
                   
            
        </>
    )
}


export default Header2;