import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
import HomePage from './components/HomePage/HomePage';
import History from './components/History/History';



function App() {
  return (
    // <div>
    //   <LoginForm />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path='/dashboard' element={<HomePage />} />
        <Route path='/history' element={<History />} />
        {/* <Route path="/main-page-1" component={MainPage1} />
        <Route path="/main-page-2" component={MainPage2} />
        <Route path="/" exact component={LoginPage} /> */}
      </Routes>
    </Router>
  );
}

export default App;
