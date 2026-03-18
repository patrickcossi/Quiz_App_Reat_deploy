// react , componentes , estaticos(css)
import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';
import Welcome from './Components/Welcome';
import Questions from './Components/Question';
import './App.css';
import GameOver from './Components/GameOver';
import PickCategory from './Components/PickCategory';


function App() {
  
   const [ quizState, dispatch] = useContext(QuizContext);


  return (
    <div className="App">
      <h1>Quiz App</h1>

      {quizState.gameStage === "Start" && <Welcome />}

      {quizState.gameStage === "Category" && < PickCategory />}

      {quizState.gameStage === "Playing" && <Questions />}

      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
