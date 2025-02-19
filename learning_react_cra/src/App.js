function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Suck on Deez!</h1>
      <h2>{currDate.toLocaleDateString()} and the time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;