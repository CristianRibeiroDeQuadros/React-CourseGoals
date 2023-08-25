import Form from './Components/Form'
import './App.css';
import GoalsList from './Components/GoalsList';
import { useState } from 'react';

function App() {

  const [goalFromButton, setGoalFromButton] = useState('')

  const pullNewGoalFromButtonHandler = (valor) => {
    setGoalFromButton(valor)
  }

  return (
    <div className="App">
      <Form pullNewGoalFromButton={pullNewGoalFromButtonHandler}></Form>
      <GoalsList newGoal={goalFromButton}/>
    </div>
  );

}

export default App;
