import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
    return <>
        <List>
            <Item><NavLink to="/" end>Home</NavLink></Item>
            <Item><NavLink to="/editores" end>Editores</NavLink></Item>
            <Item><NavLink to="/post/criar" end>Novo Post</NavLink></Item>
        </List>
    </>
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
`

const Item = styled.li`
  text-transform: lowercase;
  font-size: 18px;
  
  a {
    text-decoration: none;
    color: #274060;

    &.active {
      color: #09f;
    }
  }
  
`