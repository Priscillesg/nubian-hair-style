import React from 'react';
import SubNavItem from './SubNavItem/SubNavItem';
import styles from './SubNav.css';

const SubNav = () => {
    return (
        <div className='container'>
            <div className='container-subnavitem'>
                <SubNavItem label='Braids'/>
                <SubNavItem label='Wigs'/>
                <SubNavItem label='Natural Hair'/>
                <SubNavItem label='Hair cuts'/>
            </div>
            <div>
                <button><span>Write A Review</span></button>
                <button><span>Business</span></button>
            </div>
        </div>
        
    );
}

export default SubNav;