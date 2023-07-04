import { useState } from "react";
import Logo from "../../assets/Logo mobile.png"
import './style.scss';

export function MenuMobile() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
        <div className="logo-menu">
            <a href="/"><img src={Logo} alt="Imagem Logo"></img></a>
            <div className={`hamburguer-menu ${isOpen ? 'open' : ''}`}>
                    {!isOpen && (
                    <div className="hamburguer-icon" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>)}
                
                    <div className="menu-items">
                        <div className="close-icon" onClick={toggleMenu}>
                            X
                        </div>
                        <a href="/">Home</a>
                        <a href="/lojas">Nossas lojas</a>
                        <a href="/novidades">Novidades</a>
                        <a href="/promocoes">Promoções</a>
                    </div>
                
            </div>
        </div>
        
        
    )
}