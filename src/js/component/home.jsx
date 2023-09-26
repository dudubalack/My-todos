import React, { useState } from "react";


//create your first component
const Home = () => {
    
    const [inputValue, setInputValue] = useState ("");
    const [todos, setTodos] = useState ([]);

    //Add into array => concat
    //Delete fron array => filter
    //Update => map

    return (
        <div className="container">
            <h1>My todos</h1>
            <ul>
                <li>
                    <input
                        type="text"
                        onChange={(e) =>setInputValue(e.target.value)}
                        value={inputValue}
                        OnKeyPress={(e) => {
                            if (e.key === "Enter"){
                                setTodos(todos.contat([inputValue]));
                                setInputValue("");
                            }
                        }}
                        placeholder="Wath do you need to do?"></input>
                </li>
                {todos.map((item, index) => (
                    <li>
                        {item} lista de tareas <i class="fas fa-trash-alt" onClick={() => setTodos(
                            todos .filter((t, currentIndex) => index != currentIndex)
                        )}></i>
                    </li>
                ))}
            </ul> 
            <div>{todos.length} tasks </div>
        </div>
            
    );
};

export default Home;

