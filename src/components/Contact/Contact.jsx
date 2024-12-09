import { useState, useRef } from "react";
import { BsMailboxFlag } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdArrowUp } from "react-icons/io";
import "./Contact.scss";

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const emailRef = useRef(null);

  const handleEmailCopy = () => {
    const email = emailRef.current.textContent;
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    emailRef.current.classList.add("copied");

    setTimeout(() => {
      setEmailCopied(false);
      emailRef.current.classList.remove("copied");
    }, 2000);
  };

  return (
    <section className="contact section-padding" id="contato">
      <div className="section-title">
        <span>CONTATO</span>
        <h2>
          Despertei seu interesse? <br />
          Entre em contato comigo!
        </h2>
      </div>
      <div className="contact__container">
        <div className="EmailIcon">
          <BsMailboxFlag />
        </div>
        <h3>Mande-me um email!</h3>
        <div className="EmailCopy" onClick={handleEmailCopy}>
          <span ref={emailRef}>gabrieltadeums11@outlook.com</span>
        </div>
        <div className="email-btn">
          <div
            className="icons
          "
          >
            {emailCopied ? (
              <FaRegCheckCircle className="check-icon" />
            ) : (
              <IoMdArrowUp className="up-icon" />
            )}
          </div>
          <button>
            {emailCopied ? "Email copiado!" : "Clique no email para copiá-lo"}
          </button>
        </div>
      </div>

      <footer>Copyright © 2024 GTechCode</footer>
    </section>
  );
};

export default Contact;
