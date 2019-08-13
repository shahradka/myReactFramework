import { ActionTypes} from "./Types"; 
//import { data as phData} from "./DataPlaceholder";
import {RestDataSource} from './RestDataStore';
const dataSource = new RestDataSource();
export const loadData = (dataType) => (
    {    
        type: ActionTypes.DATA_LOAD,    
        payload:dataSource.GetData(dataType).then(response =>({dataType, data:response.data}))
    }
);

export const addToCart = (product,quantity) => (
    {    
        type: ActionTypes.CART_ADD,    
        payload: {        
            product,       
            quantity: quantity || 1
        } 
    }
);

export const updateCartQuantity = (product, quantity) => ({
    type: ActionTypes.CART_UPDATE,
    payload: { product, quantity }
    }
);

export const removeCart = (product) =>({
    type:ActionTypes.CART_REMOVE,
    payload:product
})

export const clearCart = () =>({
    type:ActionTypes.CART_CLEAR
})