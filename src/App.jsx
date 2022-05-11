import { Route, Routes, useSearchParams } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer';

import Questions from './pages/Questions.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import Register from './pages/Register.jsx';
import AddQuestion from './pages/AddQuestion.jsx';
import { decodeQueryParams } from './services/helpers.js';

function App() {
  const [searchParams] = useSearchParams();
  const decodedQueryParams = decodeQueryParams(searchParams);
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/add-question" element={<AddQuestion />} />
          <Route path="/" element={<Questions key={JSON.stringify(decodedQueryParams)} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
