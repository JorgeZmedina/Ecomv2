// import React from "react";
// import '../styles/contact.css'

// const Contact = () => {
//     function thankyou () {
//         alert("Thank you for your feedback :)")
//     }
//     function validateForm() {
//         const email = document.getElementById("email").value;
//         const emailRegex = /\S+@\S+\.\S+/;
//         if (!emailRegex.test(email)) {
//           alert("Please enter a valid email address.");
//           return false;
//         }
//         return true;
//       }
//     return(
//     <div className="main__contact">
//         <h1>Connect with us!</h1>
//         <div className="contact__form">
          
//         <form id="myForm" onsubmit="return validateForm()">
// <label for="Firstname">First Name</label>
// <input type="text" name="Firstname"                    id="Firstname" placeholder="Jorge"/>
// {/* value="Jorge"  */}

// <label for="Lastname">Last Name </label>
// <input type="text" name="Lastname"                     id="Lastname" placeholder="Medina"/>
// {/* value="Medina" */}

// <label for="email">Email address</label>
// <input type="text" name="email"           id="email" placeholder="JorgeMedina@xyz.net"/>
// {/* value="JorgeMedina@xyz.net"  */}

// <label for="Comments">Comments </label>

// <textarea id="Comments" name="extra" rows="3" cols="40" placeholder="Enter Your Comments here!">
// {/* value="Write your comment here!" */}
// </textarea>

// <button className="buttonC" onClick={thankyou} type="submit" value="submit" id="Submit">Submit</button>


// </form>
//        </div>
//         </div>
//     )
// }

// export default Contact;


import React from "react";
import '../styles/contact.css'

const Contact = () => {
    function thankyou () {
        alert("Thank you for your feedback :)")
    }

    function validateForm(event) {
        event.preventDefault(); // prevent the form from submitting

        const email = document.getElementById("email").value;
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        thankyou(); // call the thankyou function after validation
        return true;
    }

    return(
        <div className="main__contact">
            <h1>Connect with us!</h1>
            <div className="contact__form">
                <form id="myForm" onSubmit={validateForm}>
                    <label htmlFor="Firstname">First Name</label>
                    <input type="text" name="Firstname" id="Firstname" placeholder="Jorge"/>

                    <label htmlFor="Lastname">Last Name </label>
                    <input type="text" name="Lastname" id="Lastname" placeholder="Medina"/>

                    <label htmlFor="email">Email address</label>
                    <input type="text" name="email" id="email" placeholder="JorgeMedina@xyz.net"/>

                    <label htmlFor="Comments">Comments </label>
                    <textarea id="Comments" name="extra" rows="3" cols="40" placeholder="Enter Your Comments here!"></textarea>

                    <button className="buttonC" type="submit" value="submit" id="Submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
