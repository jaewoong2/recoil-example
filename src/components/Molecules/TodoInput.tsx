import React, { FormEvent, useCallback } from "react";
import { useInput } from "../../hooks/useInput";
import { useRecoilHooks } from "../../hooks/useRecoilSet";
import * as Atom from "../Atoms";

interface TodoInputProps {
  onSubmit: (e: React.FormEvent) => void;
  onChangeTodo: (todo: string) => void;
  todo: string;
}

const TodoInput: React.FC<TodoInputProps> = ({
  onSubmit,
  onChangeTodo,
  todo,
  children,
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Atom.Input
          value={todo}
          onChange={(e) => onChangeTodo(e.target.value)}
        />
        {children}
      </form>
    </div>
  );
};

export default TodoInput;
