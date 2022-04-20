import { useEffect, useRef } from 'react'

import '../styles/components/Submenu.css'


const Submenu = ({ show, position, link: { page, links } }) => {
    
    const submenu = useRef(null)

    useEffect(() => {
        submenu.current.style.left = position + 'px'
    }, [position])

    return (
        <ul 
            ref={ submenu }
            className={ `${show ? 'Submenu submenu--show' : 'Submenu'}` }
        >
            <h4>{ page }</h4>
            
            { links && (
                <div className='submenu__links'>
                    { links.map((link, idx) => {

                        const { label, icon, url } = link
                        return (
                            <li key={ idx }>
                                <a href={ url }>{ icon } <span>{ label }</span></a>
                            </li>
                        )
                    }) }
                </div>
            ) }
            
        </ul>
    )
}

export default Submenu