import {DataTypes} from './Types';
const protocol="http";
const hostName ="localhost";
const port=3500;
export const RestUrl = {
    [DataTypes.CATEGORIES]:`${protocol}://${hostName}:${port}/api/categories`,
    [DataTypes.PRODUCTS]:`${protocol}://${hostName}:${port}/api/products`,
    [DataTypes.ORDERS]: `${protocol}://${hostName}:${port}/api/orders` 
}