import React from "react";
import EditingBox from "../components/EditBox/EditingBox";
import EditButton from "../components/EditBox/EditButton";

function EditBox({
  updatingTheTextInEditbox,
  value,
  handleUpdate,
}) {
  return (
    <>
      <div className="flex flex-col mt-4 justify-center items-center">
        <div className="flex flex-row ">
         <EditingBox value={value} updatingTheTextInEditbox={updatingTheTextInEditbox}/>
          <EditButton handleUpdate={handleUpdate}/>
        </div>
      </div>
    </>
  );
}
export default EditBox;
