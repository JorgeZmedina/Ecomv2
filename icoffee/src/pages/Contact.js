import React from "react";
import '../styles/contact.css'

const Contact = () => {
    return(
        <div className="main__contact">
             <h1>Connect with us!</h1>
            <div className="contact__form">
          
           <form>
<label for="Firstname">First Name</label>
<input type="text" name="Firstname" value="Jorge"                     id="Firstname"/>

<label for="Lastname">Last Name </label>
<input type="text" name="Lastname" value="Medina"                     id="Lastname"/>

<label for="email">Email address</label>
<input type="text" name="email" value="JorgeMedina@xyz.net"           id="email"/>

<label for="Comments">Comments </label>

<textarea id="Comments" name="extra" rows="3" cols="40" value="Comments">
</textarea>

<input type="submit" value="submit" id="Submit"/>

</form>
       </div>
        </div>
    )
}

export default Contact;