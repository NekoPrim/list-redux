import React, { useRef } from "react";
import { addPerson } from "./store/features/personSlice";
import { useAppDispatch } from "./store/store";


const Add = () => {
    const name = useRef<string>("");
    const dispatch = useAppDispatch();
    return (
        <form className="personForm">
            <label htmlFor="">Person Name:</label>
            <input
                className="personInput"
                onChange={(e) => name.current = e.target.value}
            />
            <button
                className="personButton"
                onClick={() => dispatch(addPerson({name: name.current}))}
            >
                Add
            </button>
        </form>
    )
}

export default Add;