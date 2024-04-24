import React from "react";
import { formatTime } from "../utils/formatTime";
import { deleteBook } from "../api/Books";
import { useNavigate } from "react-router-dom";

/**
 * 
 * @param {Book} param0 
 * @description (note) sorry about modal in deleting element 
 * @returns card body for details of card
 */
export default function BookCard({book}) {
  const navigate = useNavigate();


    const {title, author, publishedDate , description , _id} = book

    const deleteBookCard = async (id) => {
      if(id){
        const res = await deleteBook(id);
        if(res) navigate(0);
      }
    }
  return (
    <div className="card w-[250px] bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        {
            description && <p>{description}</p>
        }
        
        <div className="flex justify-between">
            <span className=" text-gray-500 text-sm">{author}</span>
            <span className=" text-gray-500 text-sm">{ formatTime(publishedDate)}</span>
        </div>
        <div className=" card-actions flex justify-end">
          <button className="btn btn-error btn-outline" onClick={()=> deleteBookCard(_id)} >🗑</button>
        </div>
      </div>
    </div>
  );
}
