import React, { useState } from "react";
import MainLogo from "../000-img/000-FV-logotipo-wide.svg"
import './Header.css'


export const Menu = ({paths, title}) => {
    return <>
        {title && <div>{title}</div>}
            <ul>
            {paths.map((path, index) => (<li key={path.path} id={`menu-el-${index}`}><a href={path.path}>{path.title}</a></li> ))}                    
        </ul></>
}


const Header = () => {
    const [title, setTitle] = useState()
    const [active, setActive] = useState()


    console.log('val', title)

    const routes = [
        {
            path: 'chi-siamo',
            title: 'Chi siamo'
        },
        {
            path: 'casa-famiglia',
            title: 'La casa famiglia'
        },
        {
            path: 'progetti',
            title: 'Progetti'
        },
        {
            path: 'contatti',
            title: 'Contatti'
        },
    ]


    const handleTitle = () => {
        if(title === 'title') {
            setTitle('pluto') 
        } else {
            setTitle('title')
        }

    }

    return  (
        <header className="Header">            
            <img src={MainLogo} alt="Main Logo" />
            <button onClick={handleTitle}>cambia</button>
            <Menu 
                paths={routes}      
                title={title}           
            />
        </header>
    )
}

export default Header