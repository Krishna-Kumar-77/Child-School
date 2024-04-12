import styled from 'styled-components';
import { Ul } from '../ui/Ul';
import { Li } from '../ui/Li';
import { NavLinks } from '../ui/NavLinks';
import CallIcon from '../images/call-icon.png';
import MailIcon from '../images/mail-icon.png';
import { EmailSubscribe } from '../ui/EmailSubscribe';
import { StyledInput } from '../ui/StyledInput';
import { SubscribeButton } from '../ui/SubscribeButton';

const Contacts = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: var(--color-dark);
padding: 0rem 8rem;

@media (max-width: 1080px){
  padding: 0rem 5rem;
}
@media (max-width: 970px){
  padding: 0rem 3rem;
}
`; 
function ContactDiv() {
  return (
    <Contacts>
        <Ul>
        <Li>
          <NavLinks $display='flex'  to='tel:+01 1234567890'>
            <img src={CallIcon} alt="Call-Icon" />
            <span>
            Call: +01 1234567890
            </span>
            </NavLinks>
        </Li>
        <Li>
          <NavLinks $display='flex' to='mailto: demo@gmail.com'>
            <img src={MailIcon} alt="Mail-Icon" />
            <span>
            demo@gmail.com
            </span>
            </NavLinks>
        </Li>
      </Ul>
      <EmailSubscribe>
        <StyledInput type="email" name='email' id='eamil' placeholder='Enter Your Email' />
        <SubscribeButton >Subscribe Now</SubscribeButton>
      </EmailSubscribe>
    </Contacts>
  )
}

export default ContactDiv
