import React, { useState } from 'react'
import './Header.css'
import Navigation from '../navigation/Navigation'
function Header() {

    const [menu, setMenu] = useState(false)
    const [menuBtnImg, setMenuBtnImg] = useState('./assets/shared/mobile/menu.svg')
    const [navPanel, setNavPanel] = useState()
    const [circleOpen, setCircleOpen] = useState(
        {
            position: "absolute",
            top: "-650px",
            right: "-450px",
            zIndex: 10,
            transition: "all 500ms ease"
        }
    )

    const handleClick = () => {
        setMenu(!menu)
        if(!menu) {
            setMenuBtnImg('./assets/shared/mobile/close.svg')
            setCircleOpen(
                {
                    position: "absolute",
                    top: "-500px",
                    right: "-150px",
                    zIndex: 10,
                    transition: "all 500ms ease"
                }
            )
        } else {
            setMenuBtnImg('./assets/shared/mobile/menu.svg')
            setCircleOpen(
                {
                    position: "absolute",
                    top: "-650px",
                    right: "-450px",
                    zIndex: 10
                }
            )
        }
        setNavPanel(<Navigation active={menu ? 'navigation' : 'navigation navigation-active'} />)
    }

    return (
        <div className='header'>
            <div style={circleOpen}>
                <img src="./assets/shared/desktop/bg-pattern-circle.svg" alt=""/>
            </div>
            <div className="logo">
                <img src="./assets/shared/desktop/logo.svg" alt="" />
            </div>
            <button onClick={handleClick}>
                <img src={menuBtnImg} alt="" />
            </button>

            {navPanel}
        </div>
    )
}

export default Header
