import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/edit.png";

export const Taks = ({ task, setEditData }) => {
  return (
    <div className="bg-slate-50 border-collapse rounded-md p-1 mb-2 flex">
      <p className="text-slate-400 flex-auto w-32 ">{task.yourDetails.Fecha}</p>
      <p className="flex-auto w-64">{task.yourDetails.Titulo}</p>
      <p className="flex-auto w-64">{task.yourDetails.Descripcion}</p>
      <button
        className="bg-cyan-400 rounded-md mx-1 p-1 w-10 flex justify-center"
        onClick={() => {
          setEditData(task);
        }}
      >
        <img className="w-5 " src={editIcon} alt="edit" />
      </button>
      <button className="bg-rose-400 rounded-md	mx-1 p-1 w-10 flex justify-center">
        <img className="w-5" src={deleteIcon} alt="del" />
      </button>
    </div>
  );
};
