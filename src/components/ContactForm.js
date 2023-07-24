import React, {useState} from "react";
import styles from "../pages/index.module.css";



function ContactMessage({message}) {
  return (
    <div class="alert alert--primary" role="alert">
      {message}
    </div>
  );
}

export default function ContactForm({formURL, messageLabel, submitText, context = ""}) {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const onSubmit = async (e) => {
    setFeedback("Your message is being sent...one moment")
    e.preventDefault();
    await fetch(formURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        "name" : name,
        "email" : email,
        "message" : message,
        "context" : context,
      }),
    });
    setFeedback("Thanks for reaching out! We will be in touch shortly.");
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <form onSubmit={onSubmit} className={styles.verticalForm}>
      <label for="name">Your Name:</label>
      <input type="text" id="name" name="name" required="" value={name} onChange={(e) => setName(e.target.value)} />
      <label for="email">Your Email:</label>
      <input type="email" id="email" name="email" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label for="message">{messageLabel}</label>
      <textarea id="message" name="message" required="" value={message} onChange={(e) => setMessage(e.target.value)} />
      { feedback ? <ContactMessage message={feedback} /> : null }
      <button type="submit">{submitText}</button>
    </form>
  );
}

