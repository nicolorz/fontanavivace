import React from "react";
import MainLogo from "../000-img/000-FV-logotipo-wide.svg"
import './Header.css'


export const Menu = ({paths, name, ordine, title}) => {


    return <>
            {title && <div>{title}</div>}
            <ul>
                {paths.map((path, index) => (<li key={path.path} id={`menu-el-${index}`}><a href={path.path}>{path.title}</a></li> ))}                    
            </ul>
    </>
}


const Header = () => {
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
    

    return  (
        <header className="Header">
            <img src={MainLogo} alt="Main Logo" />
            <Menu 
                paths={routes} 
                name="il mio menù" 
                ordine={1} 
                title='title'
            />
        </header>
    )
}

export default Header