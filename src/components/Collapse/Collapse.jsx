import './Collapse.scss';
import { useState } from 'react';
import chevron_up from '../../assets/images/chevron_up.svg'
import chevron_down from '../../assets/images/chevron_down.svg'

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <img src={isOpen ? chevron_up : chevron_down} alt="Chevron" />
            </div>
            {isOpen && <div className="collapse__content">{children}</div>}
        </div>
    );
}

export default Collapse;
