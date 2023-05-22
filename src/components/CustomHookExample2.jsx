import useLoaclStorage from "../hooks/useLoaclStorage";

function CustomHookExample2() {
  const [task, setTask] = useLoaclStorage("task", "");
  //ARRAY OF TASKS TO BE STORED IN LOCAL STORAGE
  const [tasks, setTasks] = useLoaclStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();
    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="w-50">
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Task
          </label>
          <input
            className="form-control"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <hr />
      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3> 
      ))};
    </>
  );
}

export default CustomHookExample2;
