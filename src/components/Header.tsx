import React from 'react';
import styled from "styled-components";
import Cart from "./Cart";
import card from "../iconfinder_Cart_605508.png";
import {BrowserRouter, Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import {RootState} from "../Redux/CombineReducers";

const HeaderStyle = styled.div`
      display: flex;
      justify-content: center;
      margin-top: 15px;
      align-items: center;
      
    `

const Img = styled.img`
      
      max-width: 300px;
      max-height: 28.45px;
    `
const CartImg = styled.div`
  position: relative;             
  left: 38%;
  &:after{
    display: block;
    width: 10px;
    height: 10px;
    border: 1px solid black;
    border-radius: 50%;
    background: black;
  }
`
const Kruglyashok = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  border: 1px solid black;
  border-radius: 50%;
  background: black;
  opacity: 40%;
  left: 26px;
  top: 24px;
  font-size:14px;
  color:white;
  cursor: pointer;
`

const Header = () => {
    const List = useSelector((state:RootState)=>state)

    return (
        <HeaderStyle>
            <Link to={'/'}>
            <Img src={"https://www.thebodyshop.ru/skin/frontend/tbs-russia-boost/default/images/logo_TBS.png"}
            ></Img></Link>
            <Link to={'/corzina'}>
            <CartImg>
                <img src={card}/>
                <Kruglyashok>{List.CartReducer.Corzina.length}</Kruglyashok>
            </CartImg>
            </Link>
        </HeaderStyle>
    );
};

export default Header;