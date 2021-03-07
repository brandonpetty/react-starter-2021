import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { PageProps } from "gatsby";
import styled from "styled-components";

type UserListProps = {
  props: any;
  title: string;
};

type User = {
  firstName: string;
  lastName: string;
};

const Styles = styled.div`
  display: flex;
`;

const Index: FC<UserListProps> = ({ title, props: PageProps }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  const toggleVisibility = useCallback(() => setIsVisible(!isVisible), [setIsVisible, isVisible]);

  const onKeyDown = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === "t") {
        toggleVisibility();
      }
    },
    [toggleVisibility]
  );

  const newUsers = useMemo(
    () => [
      {
        firstName: "Bruce",
        lastName: "Banner",
      },
      {
        firstName: "Peter",
        lastName: "Parker",
      },
      {
        firstName: "Stephen",
        lastName: "Strange",
      },
    ] as User[],
    []
  );

  useEffect(() => {
    setUsers(newUsers);
  }, [setUsers, newUsers]);
  
  useEffect(() => {
    document.body.addEventListener("keydown", onKeyDown, false);
    return () => document.body.removeEventListener("keydown", onKeyDown, false);
  }, [onKeyDown]);

  return (
    <Styles>
      <h3>{title}</h3>
      <button onClick={toggleVisibility}>Toggle visibility</button>
      {isVisible && (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{`${user.firstName} ${user.lastName}`}</li>
          ))}
        </ul>
      )}
    </Styles>
  );
};

export default Index;