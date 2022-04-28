import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { add_todo, delete_todo,remove_todo } from "../actions/index";
import "./todo.css";

const Todo = () => {


    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>Add your list here 😍 </figcaption>
                    </figure>


                    <div className="addItems">
                        <input type="text" placeholder="Add your item..."
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                        <i className="fa fa-plus add-btn" onClick={() => dispatch(add_todo(inputData), setInputData(''))}></i>
                    </div>


                    <div className="showItems">

                        {
                            list.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.data}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(delete_todo(elem.id))}></i>
                                        </div>
                                    </div>
                                )

                            })
                        }

                    </div>

                    <div className="showItems">
                        <button className="btn effect04" 
                        onClick={()=>dispatch(remove_todo())}
                        >Remove All</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;