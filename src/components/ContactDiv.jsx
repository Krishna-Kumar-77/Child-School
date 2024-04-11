import styled from 'styled-components';
import { Ul } from '../ui/Ul';
import { Li } from '../ui/Li';
import { NavLinks } from '../ui/NavLinks';
import { Button } from '../ui/Button';
import CallIcon from '../images/call-icon.png';
import MailIcon from '../images/mail-icon.png';

const Contacts = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: var(--color-dark);
padding: 0rem 8rem;
`; 
const EmailSubscribe= styled.div`
width: 50%;
display: flex;
align-items: stretch;
position: relative;
margin: 3rem 0;
`
const StyledInput = styled.input`
  width: 100%;
  height: 6rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 3rem;
  box-sizing: border-box;
  outline:none;
  font-size: 1.8rem;
`;
const SubscribeButton = styled(Button)`
  position: absolute;
  top: calc(50% - 2rem);
  right: 1rem;
  height: 4rem;
  border-radius: 2rem;
`

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
