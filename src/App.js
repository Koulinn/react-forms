import { useState } from "react";

function App() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    mailbox: false,
  });

  const { name, email, password, gender, mailbox } = formValues;

  const handleFormValues = (value, formProperty) => {
    setFormValues({ ...formValues, [formProperty]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inside handle submit");
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <h2>React forms!</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "2rem",
          maxWidth: "328px",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => handleFormValues(e.target.value, "name")}
        ></input>

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => handleFormValues(e.target.value, "email")}
        ></input>

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => handleFormValues(e.target.value, "password")}
        ></input>

        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => handleFormValues(e.target.value, "gender")}
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
          <option>Unicorn</option>
        </select>

        <label htmlFor="mailboxYes">
          Receive offers
          <input
            id="mailbox"
            type="checkbox"
            value={mailbox}
            onChange={(e) => {
              console.log(e);
              handleFormValues(e.target.checked, "mailbox");
            }}
          />
        </label>

        <button type="submit"> Sign up!</button>
      </form>
    </div>
  );
}

export default App;
