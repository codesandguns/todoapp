import React from 'react'
function Todo(props) {

    const NewTodo = props.todo
    // const Mytodo = NewTodo.map((item, index) => {
    // console.log(item.isFinished)
    //     if (!item.isFinished) {
    //         return (
    // <div key={index}>
    //     <h3>{item.todo}</h3>
    //     <button type="submit" onClick={() => props.deleteToDo(item.id)} >Delete</button>
    //     <button type="submit" onClick={() => props.done(item.id)} >Mark as Done</button>
    // </div>
    //         )
    //     } else {
    //         return (
    //             <div key={index}>
    //                 <h3><strike>{item.todo}</strike></h3>
    //                 <button type="submit" onClick={() => props.deleteToDo(item.id)} >Delete</button>
    //                 <button type="submit" onClick={() => props.done(item.id)} >Mark as Done</button>
    //             </div>
    //         )
    //     }
    // })
    // unfinished and completed
    // finished and completed
    // yet to complete

    const Mytodo = NewTodo.map((item, index) => {
        let shouldShow = false
        if (item.isFinished && props.filter === "Completed") {
            shouldShow = true
        }
        else if (!item.isFinished && props.filter === "yetToComplete") {
            shouldShow = true
        }
        else {
            shouldShow = true
        }

        if (shouldShow) {
            return <div key={index}>
                    {item.isFinished ? <h3><strike>{item.todo}</strike></h3> : <h3>{item.todo}</h3>}
                    <button type="submit" onClick={() => props.deleteToDo(item.id)} >Delete</button>
                    <button type="submit" onClick={() => props.done(item.id)} >Mark as Done</button>
                </div>
        }

        return shouldShow
    })

    return (
        <div>
            <h3>{Mytodo}</h3>
        </div>
    )
}
export default Todo