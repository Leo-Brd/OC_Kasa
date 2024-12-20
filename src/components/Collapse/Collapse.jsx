import './Collapse.scss'
import { useState } from 'react';

function Collapse ( {title, children} ) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='collapse'>
            <div className='collapse__header'>
                <h2>{title}</h2>
                <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
            </div>
        </div>
    )
}

export default Collapse;