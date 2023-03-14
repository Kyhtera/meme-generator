import './App.css';
import Counter from './components/Counter';
import Meme from './components/Meme';
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Signup from "./components/Signup";
import Turnery from "./components/Turnery";


function App() {
  return (
    <div className="App">

      <Navbar />
      <Meme />

      <Counter />
      <Form />
      <Signup />
      <Turnery />




    </div>
  );
}

export default App;
