import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import  {CartArray,CartState} from "../Redux/CartReducer";
import {RootState} from "../Redux/CombineReducers";
import styled from "styled-components";

const StyleList = styled('div')`
  margin-top:100px;
  display: flex;
  height: 200px;
  justify-content: center;
`

const StyleItem = styled(`div`)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin:50px;
  
`
const PriceStyle = styled('span') `
    font-weight: 1000;
  margin:30px 0;
`

const Korzina = styled(`button`)`
  
  display: block;
  margin: 24px auto 5px;
  max-width: 207px;
  width: 95%;
  font-family: open sans condensed,sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #000;
  padding: 16px 29px;
  border: 2px solid #000;
  text-transform: uppercase;
  cursor: pointer;
  &:hover{
    transition: all .2s ease-in-out;
    background: black;
    color:white;
  }
`




const ListOfItems = () => {
    const dispatch = useDispatch();
    const List = useSelector((state:RootState)=>state)
    // console.log(List)
    return (
        <StyleList>
            {List.CartReducer.Carts.map((item)=>(
                <StyleItem>
                    <img src={item.src}/>
                    <p style={{fontSize:16,fontWeight:400}}>{item.name}</p>
                    <PriceStyle >{item.price} Руб</PriceStyle>
                    <Korzina onClick={()=>{dispatch({type:"ADD_ITEM",payload:item.id})}}>В корзину</Korzina>
                </StyleItem>
            ) )}
        </StyleList>
    );
};
export default ListOfItems;