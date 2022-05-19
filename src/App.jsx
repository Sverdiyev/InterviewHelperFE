import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer';

import Questions from './pages/Questions.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import Register from './pages/Register.jsx';
import AddQuestion from './pages/AddQuestion.jsx';
import AuthorizedPage from './pages/AuthorizedPage.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/add-question"
            element={
              <AuthorizedPage>
                <AddQuestion />
              </AuthorizedPage>
            }
          />
          <Route
            path="/"
            element={
              <AuthorizedPage>
                <Questions />
              </AuthorizedPage>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
