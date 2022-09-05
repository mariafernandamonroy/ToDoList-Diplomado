import { Taks } from "./components/Taks";
import { useForm } from "react-hook-form";
import { useEffect, useId, useState } from "react";

export const App = () => {
  const id = useId();
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState("");
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

  const onSubmit = (data) => {
    setFormData(data);
    addTask(data);
  };

  const addTask = (task) => {
    setDataBase([...dataBase, task]);
  };

  return (
    <div className="flex justify-center">
      <div className="w-9/12">
        <h1 className="tracking-wide my-6 font-bold text-5xl flex justify-center">
          ToDo<span className="text-cyan-400">List</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className="text-4xl tracking-wide font-bold">Añadir Tarea</h1>
            <div className="border-2 slate-50 rounded-xl p-5">
              <div className="flex flex-col">
                <label className="font-semibold">Titulo: </label>
                <input
                  className="my-1 h-8 bg-slate-50 border-collapse rounded-md"
                  type="text"
                  required
                  {...register("Titulo")}
                />
                <label className="font-semibold">Descripción: </label>
                <input
                  className="my-1 h-8 bg-slate-50 border-collapse rounded-md"
                  type="text"
                  required
                  {...register("Descripcion")}
                />
              </div>
              <div className=" my-2 flex justify-between">
                <div>
                  <label className="font-semibold">Fecha: </label>
                  <input
                    className="p-2 h-10 border border-slate-100 rounded-md text-slate-300"
                    type="date"
                    required
                    {...register("Fecha")}
                  />
                </div>
                <div>
                  <button
                    className="bg-cyan-400 rounded-md mx-1 font-semibold tracking-wide w-20 p-2"
                    type="submit"
                  >
                    Crear
                  </button>
                  <button
                    className="bg-rose-400 rounded-md mx-1 font-semibold tracking-wide w-20 p-2"
                    type="reset"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h1 className="text-4xl tracking-wide font-bold">
              Lista de tareas
            </h1>
            <div className="border-2 slate-50 rounded-xl p-5">
              {dataBase.map((task, index) => {
                return (
                  <Taks
                    key={index}
                    Fecha={task.Fecha}
                    Titulo={task.Titulo}
                    Descripcion={task.Descripcion}
                  />
                );
              })}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
