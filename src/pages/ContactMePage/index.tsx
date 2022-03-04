import React from 'react';
import style from './ContactMePage.module.scss';
import linkedin from '../../assets/images/contactme/linkedin.svg';
import github from '../../assets/images/contactme/github.svg';
import mail from '../../assets/images/contactme/mail.svg';
import ContactMe from '../../Components/ContactMe';

const ContactMePage = () => {
    const icons = [github, mail, linkedin];
    const alts = ['Github', 'E-mail', 'Linkedin'];
    const contactMeTitle = 'Contact Me';
    const linkIcons: string[] = ['https://github.com/rossatocaetano', 'mailto:rossato.caetano@gmail.com', 'https://www.linkedin.com/in/rossato-caetano/']

    return (
    <footer className={style.pageContainer}>
        <h1 id = "contact_me">CONTACT ME</h1>
        <ContactMe icons={icons} alts={alts} title={contactMeTitle} links={linkIcons}></ContactMe>
      </footer>
    )
}

export default ContactMePage;