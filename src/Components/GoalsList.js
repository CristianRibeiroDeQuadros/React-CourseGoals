import './GoalsList.css'
import GoalCard from './GoalCard'

let goalsItems = [
    { id: 1, goal: 'Finish Course'},
    { id: 2, goal: 'Start programming'},
    { id: 3, goal: 'Get a job'},
]

const GoalsList = (props) => {

    const maxId = Math.max(...goalsItems.map(item => item.id))

    if(props.newGoal){
        goalsItems.push({id: maxId + 1, goal: props.newGoal})
    }

    return(
        <div className="GoalsList">
            {goalsItems.map(item => (
                <GoalCard 
                    items={item.goal}
                    key={item.id}>
                </GoalCard>
            ))}
        </div>
    )
}

export default GoalsList;