import './App.css';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
      <StarRating style={{backgroundColor: "lightBlue" }} onDoubleClick={e => alert("clicked")}/>
    </div>
  );
}

export default App;
