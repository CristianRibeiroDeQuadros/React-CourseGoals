import './BtnAddGoal.css'

const BtnAddGoal = (props) => {

    const onClickHandler = (event) => {
        event.preventDefault()
        props.throwGoal(props.goal)
    }

    return(
        <button className="BtnAddGoal" onClick={onClickHandler}>Add</button>
    )
}

export default BtnAddGoal;