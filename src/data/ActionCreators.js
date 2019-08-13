import { ActionTypes, DataTypes} from "./Types"; 
//import { data as phData} from "./DataPlaceholder";
import {RestDataSource} from './RestDataStore';
const dataSource = new RestDataSource();
export const loadData = (dataType, params) => (
        {    
            type: ActionTypes.DATA_LOAD,    
            payload:dataSource.GetData(dataType, params).then(response =>({
                    dataType, 
                    data:response.data,
                    total:Number(response.headers["x-total-count"]),
                    params
            }
        ))
    }
);



export const setPageSize = (newSize) => {

    return ({ type: ActionTypes.DATA_SET_PAGESIZE, payload: newSize});

}



export const setSortProperty = (newProp) => 

    ({ type: ActionTypes.DATA_SET_SORT_PROPERTY, payload: newProp});

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

