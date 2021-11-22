import React from "react";
import styled from "styled-components";
import { formatCurrency } from "../Functions/secondaryFunction";

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  margin-top: 30px;
  padding: 15px;
  font-size: 30px;
  color: white;
  z-index: 1;
  transition: all 0.5s;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1;
    transition: all 0.5s;
  }
  &:hover {
    transform: translate(-8px, -8px);
    cursor: pointer;
    box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, 0.5);
    &:after {
      opacity: 0;
    }
  }
`;
export const ListItem = ({ itemList, setOpenItem }) => (
  <List>
    {itemList.map((item) => (
      <Item
        key={item.id}
        img={item.img}
        onClick={() => {
          setOpenItem(item);
        }}
      >
        <p>{item.name}</p>
        <p>{formatCurrency(item.price)}</p>
      </Item>
    ))}
  </List>
);
