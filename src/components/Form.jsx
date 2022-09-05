import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useId, useState } from "react";
import nextId from "react-id-generator";

export const Form = ({ addTask, editData, editTask }) => {
  const { register, setValue, handleSubmit, reset } = useForm();
  const id = nextId();

  useEffect(() => {
    if (editData !== null) {
      setValue("yourDetails", {
        Id: editData.yourDetails.Id,
        Fecha: editData.yourDetails.Fecha,
        Titulo: editData.yourDetails.Titulo,
        Descripcion: editData.yourDetails.Descripcion,
      });
    }
  }, [editData]);

  const onSubmit = (data) => {
    if (editData !== null) {
      editTask(data);
      reset();
    } else {
      data.yourDetails.Id = id;
      addTask(data);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label className="font-semibold">Titulo: </label>
        <input
          className="my-1 h-8 bg-slate-50 border-collapse rounded-md"
          type="text"
          required
          {...register("yourDetails.Titulo")}
        />
        <label className="font-semibold">Descripción: </label>
        <input
          className="my-1 h-8 bg-slate-50 border-collapse rounded-md"
          type="text"
          required
          {...register("yourDetails.Descripcion")}
        />
      </div>
      <div className=" my-2 flex justify-between">
        <div>
          <label className="font-semibold">Fecha: </label>
          <input
            className="p-2 h-10 border border-slate-100 rounded-md text-slate-300"
            type="date"
            required
            {...register("yourDetails.Fecha")}
          />
        </div>
        <div>
          <button
            className="bg-cyan-400 rounded-md mx-1 font-semibold tracking-wide w-20 p-2"
            type="submit"
          >
            Enviar
          </button>
          <button
            className="bg-rose-400 rounded-md mx-1 font-semibold tracking-wide w-20 p-2"
            type="reset"
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
};
