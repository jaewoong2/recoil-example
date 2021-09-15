import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { useRecoilHooks } from "../../hooks/useRecoilSet";
import { listsState } from "../../recoil";
import { Button } from "../Atoms";
import List from "../Atoms/List";

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
  const lists = useRecoilValue(listsState);
  const { updateLists, removeLists } = useRecoilHooks();
  return (
    <Ul>
      {lists.map(({ todo, isCompleted }, index) => (
        <List className={isCompleted ? "completed" : "not-completed"}>
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
      ))}
    </Ul>
  );
};

export default Lists;
