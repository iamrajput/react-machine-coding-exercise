import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CurrencyConverter from './components/CurrencyConverter';
import { question } from './data/questionList';
import Question from './components/Question';
import Home from './pages/Home/index';
import CurrencyConverterProblem from './pages/CurrencyConverterProblem/index';
import QuizAppProblem from './pages/QuizAppProblem/index';


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/currency-converter' element={<CurrencyConverterProblem />} />
      <Route path='/quiz-problem' element={<QuizAppProblem />} />
    </Routes>
    </Router>
  );
  }

export default App;
