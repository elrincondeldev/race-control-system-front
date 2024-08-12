import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { Navigate } from 'react-router-dom';
import { useValueStore } from './store/valueStore';
import { getTokenFromLocalStorage } from './helpers/localStorageLoginSession';
import RegisterRentParticipant from './components/Register/components/RegisterRentParticipant';

function App() {
  const { setAccessToken, accessToken } = useValueStore();

  if (accessToken === '') {
    const token = getTokenFromLocalStorage();
    setAccessToken(token);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterRentParticipant />} />
        <Route path="/:competition" element={<Home />} />
        <Route
          path="/login"
          element={accessToken ? <Navigate to={'/dashboard'} /> : <Login />}
        />
        <Route
          path="/dashboard"
          element={accessToken ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
