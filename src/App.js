function App() {
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
      >
        <label htmlFor="name">Name</label>
        <input id="name" type="text"></input>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email"></input>
        <label htmlFor="password">Password</label>
        <input id="password" type="password"></input>

        <label htmlFor="gender">Gender</label>
        <select id="gender">
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
          <option>Unicorn</option>
        </select>

        <label htmlFor="mailboxYes">
          Receive offers
          <input id="mailbox" type="checkbox" />
        </label>

        <button type="submit"> Sign up!</button>
      </form>
    </div>
  );
}

export default App;
