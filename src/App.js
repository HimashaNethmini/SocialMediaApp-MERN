import "./App.css"
function App() {
  return (
    <div className="App">
      {/* design the blue filter  */}
        <div className="blur" styles={{top: '--18%',right: '0'}}></div>
        <div className="blur" styles={{top: '36%',right: '--8rem'}}></div>
    </div>
  );
}

export default App;
