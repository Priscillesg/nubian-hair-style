import React from 'react';
import './SubNavItem.css'

const SubNavItem = (props) => {
    return (
        
        <div className='sub-navItem'>
        <select name="sub-navItem" id="sub-navItem">
            <option value="">{props.label}</option>
            <option value='{props.label}'>{props.label}</option>
        </select>
        </div>
    )
     

}

export default SubNavItem