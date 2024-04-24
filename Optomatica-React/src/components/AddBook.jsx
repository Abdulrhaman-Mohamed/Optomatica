import React from "react";

import { useForm } from "react-hook-form";
import { addBook } from "../api/Books";
import { useNavigate } from "react-router-dom";

/**
 * 
 * @description AddBook component to add new book to the database
 */
export default function AddBook() {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await addBook(data);
    if (res) {
        console.log(res);
        navigate(0);
    }
  }
  return (
    <>
      <button
        className=" btn btn-circle btn-primary  rounded-full absolute bottom-0 right-0 mb-4 mr-4  "
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        +
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg">Book Form</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Title <span className=" text-red-500">*</span>{" "}
                </span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered focus:border-white"
                {...register("title", {
                  required: true,
                })}
              />
              {errors.title && <span className=" text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Author <span className=" text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Author"
                className="input input-bordered focus:border-white"
                {...register("author", {
                  required: true,
                })}
              />
              {errors.author && <span className=" text-red-500">This field is required</span>}
            </div>
            <div>
              <label className="label">
                <span className="label-text">
                  Publish date <span className=" text-red-500">*</span>
                </span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full focus:border-white   "
                {...register("publishedDate", {
                  required: true,
                })}
              />
              {errors.publishedDate && <span className=" text-red-500">This field is required</span>}
            </div>
            <div>
              <label className="label">
                <span className="label-text">Publish date</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full focus:border-white"
                placeholder="description..."
                {...register("description")}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary  mt-2 w-full" >
              Submit Book
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
