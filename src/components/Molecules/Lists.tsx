import React, { useCallback, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { useInput } from "../../hooks/useInput";
import { useRecoilHooks } from "../../hooks/useRecoilSet";
import { listsState } from "../../recoil";
import { Button } from "../Atoms";
import List from "../Atoms/List";
import TodoInput from "./TodoInput";

const Ul = styled.ul`
  .completed {
    color: gray;
    text-decoration: line-through;
  }

  .not-completed {
    color: black;
  }
`;

interface ListsProps {
  // lists: type.lists[];
}

const Lists: React.FC<ListsProps> = () => {
  const [clickedNumber, setClickedNumber] = useState<number>();
  const [newTodo, setNewTodo, onChangeNewTodo] = useInput("");
  const { updateLists, removeLists } = useRecoilHooks();
  const lists = useRecoilValue(listsState);

  const onDubleClick = useCallback(
    (todo: string, index: number) => {
      setNewTodo(todo);
      setClickedNumber(index);
    },
    [setNewTodo]
  );

  const onSubmit = useCallback(
    (e: React.FormEvent, index: number) => {
      e.preventDefault();
      updateLists({ newTodo: { todo: newTodo, isCompleted: false }, index });
      setNewTodo("");
      setClickedNumber(-1);
    },
    [newTodo, updateLists, setNewTodo]
  );

  return (
    <Ul>
      {lists.map(({ todo, isCompleted }, index) =>
        clickedNumber !== index ? (
          <List
            onDoubleClick={() => onDubleClick(todo, index)}
            className={isCompleted ? "completed" : "not-completed"}
          >
            {todo}
            <Button onClick={() => removeLists(index)}>-</Button>
            <Button
              onClick={() =>
                updateLists({
                  newTodo: { todo, isCompleted: !isCompleted },
                  index,
                })
              }
            >
              v
            </Button>
          </List>
        ) : (
          <>
            <TodoInput
              onSubmit={(e) => {
                onSubmit(e, index);
              }}
              onChangeTodo={onChangeNewTodo}
              todo={newTodo}
            />
            <Button onClick={() => onDubleClick(todo, index)}>x</Button>
          </>
        )
      )}
    </Ul>
  );
};

export default Lists;
