import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const TaskListItem = ({ id, description, amount, createdAt, deadline }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title show-for-desktop">{description}</h3>
            <h2 className="list-item__title show-for-mobile">{description}</h2>
            <span className="list-item__subtitle">Date Created: {moment(createdAt).format("MMMM Do, YYYY")}</span>
        </div>
        {deadline != null && <h2 className="list-item__deadline show-for-desktop">{moment(deadline).format("MMMM Do, YYYY")}</h2>}
        {deadline != null && <h3 className="list-item__deadline show-for-mobile">Deadline: {moment(deadline).format("MMMM Do, YYYY")}</h3>}
        
        <h3 className="list-item__data show-for-desktop">
            {amount === 0 ? 'N/A' : amount} 
        </h3>
        <h3 className="list-item__data show-for-mobile">
            Hours: {amount === 0 ? 'N/A' : amount} 
        </h3>
    </Link>
)

export default TaskListItem
