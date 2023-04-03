import React from "react";
import '../styles/contact.css'

const Contact = () => {
    return(
        <div className="main__contact">
             <h1>Connect with us!</h1>
            <div className="contact__form">
          
           <form>
<label for="Firstname">First Name</label>
<input type="text" name="Firstname"                    id="Firstname" placeholder="Jorge"/>
{/* value="Jorge"  */}

<label for="Lastname">Last Name </label>
<input type="text" name="Lastname"                     id="Lastname" placeholder="Medina"/>
{/* value="Medina" */}

<label for="email">Email address</label>
<input type="text" name="email"           id="email" placeholder="JorgeMedina@xyz.net"/>
{/* value="JorgeMedina@xyz.net"  */}

<label for="Comments">Comments </label>

<textarea id="Comments" name="extra" rows="3" cols="40" placeholder="Enter Your Comments here!">
{/* value="Write your comment here!" */}
</textarea>

<input type="submit" value="submit" id="Submit"/>

</form>
       </div>
        </div>
    )
}

export default Contact;