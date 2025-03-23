import './FriendListItem.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className="list-task-2">
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
            <p>{isOnline}</p>
        </div>
    )
    
}

export default FriendListItem;