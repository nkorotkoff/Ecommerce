import Corzina from "../components/Corzina";
import {findItemIndexById} from "./ArrayUttils";

export type CartState = {
    id:string;
    name:string;
    price:number;
    src:string;
    quantity:number;
}

export type CorzinaState = {
    id:string;
    name:string;
    price:number;
    src:string
    quantity:number;
}

 export type CartArray = {
    Carts:CartState[],
     Corzina:CorzinaState[]
}


const initialState:CartArray = {
        Carts:[{
            id:'0',
            name:'Крем для тела Japanies Camelia',
            price : 500,
            src:"https://www.thebodyshop.ru/media/catalog/product/cache/1/small_image/240x240/9df78eab33525d08d6e5fb8d27136e95/4/1/41334_01.jpg",
            quantity:1
        },
            {
                id:'1',
                name:'Защитный крем для рук \"Конопляное масло \"',
                price : 2500,
                src:"https://www.thebodyshop.ru/media/catalog/product/cache/1/small_image/240x240/9df78eab33525d08d6e5fb8d27136e95/8/9/89356.jpg",
                quantity:1
            },
            {
                id:'2',
                name:'Массажер-роллер для лица Oils of Life™ ',
                price : 5000,
                src:"https://www.thebodyshop.ru/media/catalog/product/cache/1/small_image/240x240/9df78eab33525d08d6e5fb8d27136e95/b/a/back1.d-31627.jpg",
                quantity:1
            }
        ],
    Corzina:[]
}

const reducer = (state:CartArray = initialState ,action:any):CartArray =>{
    switch (action.type){
        case "DELETE_ITEM":{
            const ArrayWithoutItem = state.Corzina.filter(item=>item.id!==action.payload)
            return{
                ...state,Corzina:ArrayWithoutItem
            }
        }
        case "Quntity_Plus":{
            let CorzineItems:any  = []
               for(let item of state.Corzina){
                    if(item.id===action.payload){
                        item.quantity+=1
                    }
                    CorzineItems.push(item)
                }
            return {...state,Corzina:CorzineItems}
        }
        case "Quntity_Minus":{
            let CorzineItems:any  = []
            for(let item of state.Corzina){
                if(item.id===action.payload && item.quantity>1){
                    item.quantity-=1
                }
                CorzineItems.push(item)
            }
            return {...state,Corzina:CorzineItems}
        }

        case "ADD_ITEM":
            const containsId = state.Corzina?.some(item => item.id === action.payload)
            const FindedItem = state.Carts.find(item => item.id === action.payload)

            if (!containsId && FindedItem) {
                return {
                    ...state, Corzina: [...state.Corzina, FindedItem]
                }
            }

            return {
                ...state
            }


        default:
            return state
    }
}

export default reducer;