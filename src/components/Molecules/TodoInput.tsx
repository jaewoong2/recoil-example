import React, { FormEvent, useCallback } from "react";
import { useInput } from "../../hooks/useInput";
import * as Atom from "../Atoms";

const TodoInput: React.FC = () => {
  const [todo, , onChangeTodo] = useInput("");

  const onSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
  }, []);

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
