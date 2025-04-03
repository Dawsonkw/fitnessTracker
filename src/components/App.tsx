import Container from "./Container";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center bg-amber-400 h-screen mx-[10%] p-8]">
      <Container />
    </div>
  );
}

export default App;

// https://recharts.org/en-US
// Use Recharts to create a chart to display fitness data
// Ideally build a platform to track the metrics that I want to track with the Whoop arm band and their API
// https://developer.whoop.com/docs/introduction
