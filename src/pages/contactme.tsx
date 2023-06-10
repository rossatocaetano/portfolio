import React from 'react';
import ContactMe from '../Components/ContactMe';
import { Title } from '../styles/sharedstyles';

const ContactMePage = () => {
  const linkedin = '/images/contactme/linkedin.svg';
  const github = '/images/contactme/github.svg';
  const mail = '/images/contactme/mail.svg';

  const icons = [github, mail, linkedin];
  const alts = ['Github', 'E-mail', 'Linkedin'];
  const contactMeTitle = 'Contact Me';
  const linkIcons: string[] = ['https://github.com/rossatocaetano', 'mailto:rossato.caetano@gmail.com', 'https://www.linkedin.com/in/rossato-caetano/']

  return (
  <footer id='contact_me'>
    <Title id = "contact_me">CONTACT ME</Title>
    <ContactMe icons={icons} alts={alts} title={contactMeTitle} links={linkIcons}></ContactMe>
  </footer>
  )
}

export default ContactMePage;