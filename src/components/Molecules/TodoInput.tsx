import React, { FormEvent, useCallback } from "react";
import { useInput } from "../../hooks/useInput";
import { useRecoilHooks } from "../../hooks/useRecoilSet";
import * as Atom from "../Atoms";

const TodoInput: React.FC = () => {
  const [todo, setTodo, onChangeTodo] = useInput("");
  const { addLists } = useRecoilHooks();

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      addLists({ todo, isCompleted: false });
      setTodo("");
    },
    [addLists, todo, setTodo]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Atom.Input
          value={todo}
          onChange={(e) => onChangeTodo(e.target.value)}
        />
        <Atom.Button>+</Atom.Button>
      </form>
    </div>
  );
};

export default TodoInput;
