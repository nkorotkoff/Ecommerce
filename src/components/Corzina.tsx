import React from 'react';
import styled from "styled-components";
import iconPlus from '../free-icon-plus-symbol-button-32563.png'
import krestik from '../free-icon-forbidden-mark-70206.png'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Redux/CombineReducers";

    const MoyaCorzina =styled.div`
      text-align: left;
      margin-left: 400px;
    `

    const Tovari = styled.div`
      
      &:before{
        content:'';
        width: 66.1%;
        height: 2px;
        display: block;
        background: grey;
        position: absolute;
        left: 21%;
      }

      &:after{
        content:'';
        width: 66.1%;
        height: 2px;
        display: block;
        background: grey;
        position: absolute;
        left: 21%;
      }
      .CartItem{
        display: flex;
        align-items: center;
        justify-content: left;
        .krestik{
          width: 20px;
          height: 20px;
          cursor: pointer;
          margin-left: 325px;
        }
        .ItemImg{
          width: 116px;
          height: 116px;
          margin-left: 20px;
        }
        .nazvanie{
          width:40%;
        }
        .prices{
          width: 22%;
        }
        .Input {
          text-align: center;
          font-size: 16px;
        }
        
      }
      
    `
    const TovariHeader =styled.ul`
      display: flex;
      width: 100%;
      margin-top: 0;
      margin-bottom: 10px;
      justify-content: center;
      li{
        text-align: left;
        font-family: open sans,Verdana,Geneva,sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 34px;
        list-style-type: none;
      }
      .product{
        width: 50%;
        margin-left: 46px;
      }
      .quantity {
        width: 13%;
      }
      .price {
      }
     
    `
const InputGroup = styled.div`
  position: relative;
  .minus{
    &:before{
      content: '';
      width: 16px;
      height: 4px;
      background: black;
      display: block;
      position: absolute;
      top: 48%;
      left: -53%;
    }
  }
  input{
    width: 45px;
    height: 45px;
    display: block;
    border: 2px solid black;
    
  }
  img{
    width: 16px;
    height: 16px;
    position: absolute;
    left:112%;
    top: 35%;
    
  }
`

const Corzina = () => {
    const BasketList = useSelector((state:RootState)=>state)
    const dispatch = useDispatch();
    return (
        <div>
        <MoyaCorzina>
            <h1>Моя корзина</h1>
            <h3>Всего в коризне {BasketList.CartReducer.Corzina.length} покупки</h3>
        </MoyaCorzina>

        <TovariHeader>
            <li className={'product'}>Товары</li>
            <li className={'quantity'}>Кол-во</li>
            <li className={'price'}>Цена</li>
        </TovariHeader>
            <Tovari>
            {/*<div className={'CartItem'}>*/}
            {/*    <img src={krestik} className={'krestik'}></img>*/}
            {/*    <img className={'ItemImg'} src={'https://www.thebodyshop.ru/media/catalog/product/cache/1/small_image/240x240/9df78eab33525d08d6e5fb8d27136e95/4/1/41334_01.jpg'}/>*/}
            {/*    <span className={'nazvanie'}>Крем для тела Japanies Camelia</span>*/}
            {/*    <InputGroup>*/}
            {/*        <span className={'minus'}></span>*/}
            {/*        <input/>*/}
            {/*        <img src={iconPlus}/>*/}
            {/*    </InputGroup>*/}
            {/*    <span className={'prices'}>231</span>*/}
            {/*</div>*/}
                {
                    BasketList.CartReducer.Corzina.map((item)=>(
                        <div className={'CartItem'}>
                            <img src={krestik} onClick={()=>{dispatch({type:"DELETE_ITEM",payload:item.id})}} className={'krestik'}></img>
                            <img className={'ItemImg'} src={item.src}/>
                            <span className={'nazvanie'}>{item.name}</span>
                            <InputGroup>
                                <span className={'minus'} onClick={()=>{dispatch({type:"Quntity_Minus",payload:item.id})}}></span>
                                <input className={'Input'} value={item.quantity}/>
                                <img  src={iconPlus} onClick={()=>{dispatch({type:"Quntity_Plus",payload:item.id})}}></img>
                            </InputGroup>
                            <span className={'prices'}>{item.price * item.quantity} руб</span>
                        </div>
                    ))
                }
        </Tovari>

        </div>
    );
};

export default Corzina;