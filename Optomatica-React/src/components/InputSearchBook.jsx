import React from "react";

import { useForm } from "react-hook-form"
import { queryBooks } from "../api/Books";

/**
 * 
 * @param {SetState} param0 
 * @description search book by title and year it take set from parent component which render news books in screen and fetching the query books from backend 
 * @returns 
 */
export default function InputSearchBook({ setBooks}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    if (data.title || data.year) {
      const res = await queryBooks(data)
      if (res) {
        setBooks(res)
      }
    }
  }


  return (
    <form className="h-1/3 flex flex-col items-center justify-center " onSubmit={handleSubmit(onSubmit)}>
      <div className=" w-4/5">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search by Title" {...register("title")} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div className=" w-4/5 flex justify-between items-end ">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-black font-bold">Filter by year</span>
          </div>
          <select className="select select-bordered" defaultValue={""} {...register("year")}>
            <option disabled value={""} className="hidden" >
              Pick one
            </option>
            <option  value={""} >
              None
            </option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>

          </select>
        </label>
        <button className="btn btn-active">Search</button>
      </div>
    </form>
  );
}
