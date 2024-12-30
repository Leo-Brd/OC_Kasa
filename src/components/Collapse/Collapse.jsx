import './Collapse.scss';
import { useState } from 'react';
import chevron_down from '../../assets/images/chevron_down.svg';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={`collapse ${isOpen ? 'open' : ''}`}>
            <div className="collapse__header" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <img
                    src={chevron_down}
                    alt="Chevron"
                    className="chevron"
                />
            </div>
            <div className="collapse__content">
                {children}
            </div>
        </div>
    );
}

export default Collapse;
