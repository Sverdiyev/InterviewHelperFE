import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar, Footer } from './components';
import About from './pages/About.jsx';
import Main from './pages/Main.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          {/* Not sure if we will use different landing page & main page. 
          If it will be the same page, linking in NAV component for 
          "Interview Help" text should be changed/removed*/}
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
