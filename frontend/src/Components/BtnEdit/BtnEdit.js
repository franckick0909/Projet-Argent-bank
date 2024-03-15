import "./BtnEdit.scss";
import React, { useEffect } from "react";
import { useState } from "react";
import EditUser from "../EditUser/EditUser";
import Welcome from "../Welcome/Welcome";


const BtnEdit = () => {

    const [edit, setEdit] = useState(true);

    const handleEdit = () => {
        setEdit(!edit);

        if (edit) {
            document.querySelector(".edit-button").style = { display: "block" };
        } else {
            document.querySelector(".edit-button").style = { display: "none" };
        }
    };

    useEffect(() => {
        if (edit) {
            <EditUser />
            console.log(edit);
        } else {
            <Welcome />
            console.log(edit);
        }
    }, [edit]);


    return (
      <>
        <button className="edit-button" onClick={handleEdit}>
          {edit ? "Edit Name" : "Back"}
          Edit Name
        </button>
      </>
    );
};

export default BtnEdit;


// Edit Name