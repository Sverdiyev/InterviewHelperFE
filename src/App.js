import './App.css';
import Navbar from './components/generiComponents/Navbar';
import Footer from './components/generiComponents/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        Welcome to the interview cheat sheet, this is the main page.
      </header>
      <Footer />
    </div>
  );
}

export default App;
