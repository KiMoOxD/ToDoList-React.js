
export default function Task({ name, tasks, setTasks, id}) {


    function handleDel(e) {
        console.log(tasks)
        let newarr = tasks;
        newarr[e.target.parentElement.id] = '';
        if (newarr[e.target.parentElement.id] === newarr[newarr.length - 1]) {
            newarr.length--;
        } else {
            for (let i = +e.target.parentElement.id; i < newarr.length - 1 ; i++) {
                newarr[i] = newarr[i+1]
            }
            newarr.length--;
        }
        setTasks([...newarr])
        // console.log(tasks)
        // console.log(newarr, 'new arr')
    }

    return (
        <div className="task" id={id}>
            <span className="starter">#</span>
            <span className="name">{name}</span>
            <button className="delete" onClick={handleDel}>Delete</button>
        </div>
    )
}