import React from 'react';
import Navbar from '../../Components/Navbar';
import style from './Navbar.module.scss';

const NavbarPage = () => {
    const navBarTitles: string[] = ['Business Card', 'Projects', 'Public Policy Manager', 'Contact Me'];
    const navBarLink: string[] = ['#business_card', '#projects', '#public_policy_manager', '#contact_me']
    
    return (
        <Navbar titles={navBarTitles} links={navBarLink}></Navbar>
    )
}

export default NavbarPage;