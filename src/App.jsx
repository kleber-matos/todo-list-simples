import React, { useState } from "react";
import styled from "styled-components";
import * as S from "./styles/styles";
import { FaRegTrashAlt } from "react-icons/fa";

export default function App() {
  const [captura, setCaptura] = useState("");
  const [array, setArray] = useState([
    {
      task: "exemplo",
      id: 1,
    },
  ]);

  // Add task
  const addTask = () => {
    const newTask = {
      task: captura,
      id: Math.random(),
    };

    if (captura == "") {
      alert("Adcione uma tarefa");
    } else {
      setArray(array.concat(newTask));
      setCaptura("");
    }
  };

  // KeyDown
  const keyAddTask = () => {
    if (event.key == "Enter") {
      addTask();
    }
  };

  // Remove
  const remove = (id) => {
    const filtrado = array.filter((task) => task.id != id);
    setArray(filtrado);
  };

  return (
    <S.Container>
      <div>
        <h1>TODO LIST</h1>

        <S.Task>
          <input
            placeholder="add task..."
            onChange={(ev) => setCaptura(ev.target.value)}
            onKeyDown={keyAddTask}
            type="text"
            maxLength={15}
            value={captura}
          />
          <button onClick={() => addTask()}>+</button>
        </S.Task>

        <S.List>
          {array.map((item) => (
            <li>
              <p>{item.task}</p>
              <button onClick={() => remove(item.id)}>
                <FaRegTrashAlt />
              </button>
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  );
}
