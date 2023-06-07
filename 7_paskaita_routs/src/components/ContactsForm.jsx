import { useState } from "react";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the form data in an object
    const data = {
      name: name,
      email: email,
      message: message,
    };

    // Perform any necessary form submission logic here

    // Reset form inputs
    setName("");
    setEmail("");
    setMessage("");

    // Store the submitted form data
    setFormData(data);

    // Mark the form as submitted
    setSubmitted(true);
  };
  return (
    <div>
      {submitted ? (
        <div style={{ display: "grid", justifyContent: "center" }}>
          {formData && (
            <div>
              <p>
                <strong>Thank you for your message {formData.name} !</strong>
              </p>
              <h4>Submitted Data:</h4>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Message: {formData.message}</p>
            </div>
          )}
        </div>
      ) : (
        <form
          style={{ display: "grid", justifyContent: "center" }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
};

export default ContactsForm;
