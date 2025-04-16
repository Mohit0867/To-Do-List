import { FaChevronRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import "./Home.css";
const tasks = [
  {
    id: 1,
    title: "Research Content Ideas",
    description: "Some Text",
    listType: {
      color: " #ff6c6c",
      tag: "Personal",
    },
  },
  {
    id: 2,
    title: "Create A Database",
    description: "Some Text",
    listType: {
      color: " #8ccff0",
      tag: "Work",
    },
  },
  {
    id: 3,
    title: "Print Business Card",
    description: "Some Text",
    listType: {
      color: "#ff0000",
      tag: "none",
    },
  },
];
let id = tasks.length;

const Home = () => {
  const [tasksList, setTasksList] = useState(tasks);
  const [addTask, setAddTask] = useState(false);

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (_event) => {
    setTask({
      ...task,
      [_event.target.name]: _event.target.value,
    });
  };
  const handleClick = () => {
    if (task.title === "" || task.description === "") {
      alert("Enter task details");
      return;
    }

    setTasksList([
      {
        id: ++id,
        title: task.title,
        description: task.description,
        listType: { color: "#ff0000", tag: "none" },
      },
      ...tasksList,
    ]);
    setTask({ title: "", description: "" });
    setAddTask(false);
  };
  return (
    <>
      <section className="home">
        <div className="home-heading-container">
          <h1 className="home-heading">
            Today<span className="heading-counter">5</span>
          </h1>
        </div>
        <div className="tasks-container">
          <button className="addTask" onClick={() => setAddTask(!addTask)}>
            <FaPlus />
            Add New Task
          </button>
          <ul className="tasks-list">
            {tasksList.map((task) => (
              <li className="task-item" key={task.id}>
                <lable htmlFor="task" className="task">
                  <span className="task-left">
                    <input type="checkbox" name="task" id="task" />
                    {task.title}{" "}
                  </span>
                  <span className="icon-right">
                    <FaChevronRight />
                  </span>
                </lable>
                {task.listType.tag !== "none" && (
                  <div className="list-type-container">
                    <div
                      className="list-type-icon"
                      style={{ backgroundColor: task.listType.color }}
                    ></div>
                    <p className="list-type-none">{task.listType.tag}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className={`add-task-sidebar ${addTask ? "add-task-open" : ""}`}>
        <div className={`add-task-header`}>
          <h2 className="add-task-heading">Task:</h2>
          <button onClick={() => setAddTask(false)}>
            <GrClose />
          </button>
        </div>
        <input
          type="text"
          placeholder="Renew Driver's License"
          className={`add-task-input`}
          name="title"
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="description"
          id=""
          placeholder="Description"
          onChange={handleChange}
        />
        <button className="add-task-bttn" onClick={handleClick}>
          Add Task
        </button>
      </div>
    </>
  );
};
export default Home;
