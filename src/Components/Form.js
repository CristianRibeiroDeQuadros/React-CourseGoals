import { useState } from 'react';
import BtnAddGoal from './BtnAddGoal';
import './Form.css'

const Form = (props) => {

    const [goal, setGoal] = useState('')

    const onChangeHandler = (event) => {
        setGoal(event.target.value)
    }

    const getGoal = (value) => {
        props.pullNewGoalFromButton(value)
        setGoal('')

    }

    return(
        <div className='formContainer'>
            <form className='form'>
                <label>Course Goal</label>
                <input type="text" placeholder="Type your goal..." value={goal} onChange={onChangeHandler}></input>
                <BtnAddGoal goal={goal} throwGoal={getGoal}></BtnAddGoal>
            </form>
            
        </div>
    )
}

export default Form;