import React, { FormEventHandler, useState } from "react";
import styles from "../../styles/Contact.module.scss";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    if (!trimmedEmail || !trimmedSubject || !trimmedMessage) {
      alert("Prosím, vyplňte všechna pole formuláře.");
      return;
    }

    const data = {
      email: trimmedEmail,
      subject: trimmedSubject,
      message: trimmedMessage,
    };

    try {
      const response = await fetch("https://raiderrock.cz/test2/index.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("E-mail byl úspěšně odeslán.");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert("Něco se pokazilo při odesílání e-mailu.");
      }
    } catch (error: any) {
      alert("Něco se pokazilo při odesílání e-mailu: " + error.message);
    }
  };

  return (
    <div>
      <div className={styles["c-contact-heading"]}>
        <h2>Kontakt</h2>
      </div>
      <form className={styles["c-contact-form"]} onSubmit={handleSubmit}>
        <div className={styles["c-contact-field"]}>
          <label htmlFor="email">Váš e-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles["c-contact-field"]}>
          <label htmlFor="subject">Předmět:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className={styles["c-contact-field"]}>
          <label htmlFor="message">Zpráva:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles["c-contact-submit-btn"]}>
          Odeslat
        </button>
      </form>
    </div>
  );
}
