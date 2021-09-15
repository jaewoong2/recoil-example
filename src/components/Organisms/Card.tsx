import React, { FormEvent, useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { useInput } from "../../hooks/useInput";
import { useRecoilHooks } from "../../hooks/useRecoilSet";
import { loadingState } from "../../recoil";
import { Button } from "../Atoms";
import Lists from "../Molecules/Lists";
import TodoInput from "../Molecules/TodoInput";

const Styled = {
  Container: styled.div`
    width: 600px;
    min-height: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid green;

    form {
      display: flex;

      input {
        border: none;
        outline: none;
        border-bottom: 1px solid black;
        cursor: pointer;
      }
    }
  `,
};

const Card: React.FC = () => {
  const isLoading = useRecoilValue(loadingState);
  const [todo, setTodo, onChangeTodo] = useInput("");
  const { init, addLists } = useRecoilHooks();

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      addLists({ todo, isCompleted: false });
      setTodo("");
    },
    [todo, addLists, setTodo]
  );

  useEffect(() => {
    init();
  }, []);

  return isLoading ? (
    <>Loading...</>
  ) : (
    <Styled.Container>
      <TodoInput todo={todo} onChangeTodo={onChangeTodo} onSubmit={onSubmit}>
        <Button color="blue">+</Button>
      </TodoInput>
      <Lists />
    </Styled.Container>
  );
};

export default Card;
