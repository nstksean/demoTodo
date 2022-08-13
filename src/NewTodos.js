
function NewTodos({ todo }) {

    return (
        <div className="taskItem">
            <div className="newTaskItemList">
                <label className="todoContent">
                    <h2>{todo.content}</h2>
                </label>
            </div>
        </div>
    )

}
export default NewTodos;