import deleteIcon from "./assets/delete.png";
import editIcon from "./assets/edit.png";

export const App = () => {
  return (
    <div className="flex justify-center">
      <div className="w-9/12">
        <h1 className="tracking-wide my-6 font-bold text-5xl flex justify-center">
          ToDo<span className="text-cyan-400">List</span>
        </h1>
        <div>
          <h1 className="text-2xl tracking-wide font-semibold">Añadir Tarea</h1>
          <div className="border-2 slate-50 rounded-xl p-5">
            <div className="flex flex-col">
              <label>Titulo: </label>
              <input
                className="my-1 bg-slate-50 border-collapse rounded-md"
                type="text"
              />
              <label>Descripción: </label>
              <input
                className="my-1 bg-slate-50 border-collapse rounded-md"
                type="text"
              />
            </div>
            <div className=" my-2 flex justify-between">
              <div>
                <label>Fecha: </label>
                <input type="date" />
              </div>
              <div>
                <button className="bg-cyan-400 rounded-md mx-1 font-semibold tracking-wide w-20 p-2">
                  Crear
                </button>
                <button className="bg-rose-400 rounded-md mx-1 font-semibold tracking-wide w-20 p-2">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h1 className="text-2xl tracking-wide font-semibold">
            Lista de tareas
          </h1>
          <div className="border-2 slate-50 rounded-xl p-5">
            <div className="bg-slate-50 border-collapse rounded-md p-1 flex">
              <div className="w-10">
                <input type="checkbox" />
              </div>
              <p className="flex-auto w-32 ">Fecha</p>
              <p className="flex-auto w-64">Título</p>
              <p className="flex-auto w-64">Descripción</p>
              <button className="bg-cyan-400 rounded-md mx-1 p-1 w-10 flex justify-center">
                <img className="w-5" src={editIcon} alt="edit" />
              </button>
              <button className="bg-rose-400 rounded-md	mx-1 p-1 w-10 flex justify-center">
                <img className="w-5" src={deleteIcon} alt="del" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
