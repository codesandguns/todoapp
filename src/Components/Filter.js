import React from 'react'

function myFilter(props) {
    
    const NewTodo = props.todo
    const Mytodo = NewTodo.map((item, index) => {
        // console.log(item.isFinished)
        if (!item.isFinished) {
            return (
                <div key={index}>
                    <h3>{item.todo}</h3>
                    <button type="submit" onClick={() => props.deleteToDo(item.id)} >Delete</button>
                    <button type="submit" onClick={() => props.done(item.id)} >Mark as Done</button>
                </div>
            )
        } else {
            return (
                <div key={index}>
                    <h3><strike>{item.todo}</strike></h3>
                    <button type="submit" onClick={() => props.deleteToDo(item.id)} >Delete</button>
                    <button type="submit" onClick={() => props.done(item.id)} >Mark as Done</button>
                </div>
            )
        }
    })

    return (
        <div>
            <h3>{Mytodo}</h3>
        </div>
    )
}
export default myFilter