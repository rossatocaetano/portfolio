import React from 'react';
import Navbar from '../Components/Navbar';

const NavbarPage = () => {
    const navBarTitles: string[] = ['Business Card', 'Projects', 'Public Policy Manager', 'Contact Me'];
    const navBarLink: string[] = ['#top', '#projects', '#public_policy_manager', '#contact_me']
    
    return (
        <header>
            <Navbar titles={navBarTitles} links={navBarLink}></Navbar>
        </header>
        
    )
}

export default NavbarPage;