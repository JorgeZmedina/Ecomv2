import React from "react";
import '../styles/footer.css'
function Footer () {

    
    return (
        <div>
         <footer className="footr">
        <p className="copy">&copy;Jorge Zeledon-Medina</p>

        <section className="footr" id="footer"><h5>l</h5>
            <a href="https://www.linkedin.com/"><img className="link"                 alt="Linkedin" src="images/in.webp"/></a>

        <a href="https://www.snapchat.com/en-US"><img className="link"   src="images/snap.webp" alt="Snap"/></a>
        <a href="https://discord.com/"><img className="link"  src="images/dis.webp" alt="Discord"/></a>

        <a href="https://www.instagram.com/"><img className="link"  src="images/instalogo.png" alt="Insta"/></a>
        </section>
    </footer>
        </div>
    )
}

export default Footer;