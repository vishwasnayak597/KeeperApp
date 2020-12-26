import React from 'react';
import './footer.css';


const Footer=()=>
{
    const today=new Date();
    const currentYear= today.getFullYear();
    return(
        <div className="footer">
            <p>Copyright @{currentYear}</p>
        </div>
    )

}

export default Footer;