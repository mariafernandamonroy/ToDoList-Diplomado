import { Taks } from "./components/Taks";
import { Form } from "./components/Form";
import { useEffect, useId, useState } from "react";

export const App = () => {
  const [editData, setEditData] = useState(null);
  const [dataBase, setDataBase] = useState(() => {
    const saveData = window.localStorage.getItem("taskData");
    if (saveData) {
      return JSON.parse(saveData);
    } else {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("taskData", JSON.stringify(dataBase));
  }, [dataBase]);

  const addTask = (task) => {
    setDataBase([...dataBase, task]);
  };

  const editTask = (task) => {
    const taskEdited = dataBase.map((element) =>
      element.yourDetails.Id === task.yourDetails.Id ? task : element
    );
    setDataBase(taskEdited);
    setEditData(null);
  };

  const deleteTask = (id) => {
    const isDelete = window.confirm(`¿Deseas eliminar la tarea?`);
    if(isDelete) {
      const taskDelete = dataBase.filter(element => element.yourDetails.Id !== id)
      setDataBase(taskDelete);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-9/12">
        <h1 className="tracking-wide my-6 font-bold text-5xl flex justify-center">
          ToDo<span className="text-cyan-400">List</span>
        </h1>

        <div>
          <h1 className="text-4xl tracking-wide font-bold">Añadir Tarea</h1>
          <div className="border-2 slate-50 rounded-xl p-5">
            <Form addTask={addTask} editData={editData} editTask={editTask} />
          </div>
        </div>
        <div className="mt-3">
          <h1 className="text-4xl tracking-wide font-bold">Lista de tareas</h1>
          <div className="border-2 slate-50 rounded-xl p-5">
            {dataBase.map((task, index) => {
              return (
                <Taks
                  key={index}
                  task={task}
                  setEditData={setEditData}
                  deleteTask={deleteTask}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
