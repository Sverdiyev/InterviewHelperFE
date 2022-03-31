import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import About from './pages/About.jsx';
import Main from './pages/Main.jsx';
import NotFound from './pages/NotFound.jsx';
import Questions from './pages/Questions.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Main />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
