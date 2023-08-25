import './GoalCard.css'

const GoalCard = (props) => {
    return(
        <div className="card">
            <p>{props.items}</p>
        </div>
    )
}

export default GoalCard;