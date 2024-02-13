import './App.css';

function App() {
  return (
    <>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            title="Test"
          />
        ))}
      {!!0 && <div>Test</div>}
    </>
  );
}

export default App;
