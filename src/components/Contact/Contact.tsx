import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Contact me now to hire.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:jvgdernamjil.ny@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:jvgdernamjil.ny@gmail.com">jvgdernamjil.ny@gmail.com</a>
        </div>
        <div>
        <a href="tel:+976885888984"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+976885888984">(+976) 88588984</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}