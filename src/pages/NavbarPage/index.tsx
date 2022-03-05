import React from 'react';
import Navbar from '../../Components/Navbar';
import style from './NavbarPage.module.scss';

const NavbarPage = () => {
    const navBarTitles: string[] = ['Business Card', 'Projects', 'Public Policy Manager', 'Contact Me'];
    const navBarLink: string[] = ['#top', '#projects', '#public_policy_manager', '#contact_me']
    
    return (
        <header className={style.nav}>
            <Navbar titles={navBarTitles} links={navBarLink}></Navbar>
        </header>
        
    )
}

export default NavbarPage;