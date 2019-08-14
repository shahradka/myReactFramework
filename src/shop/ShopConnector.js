import React, { Component } from "react"; 
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import * as ShopActions from "../data/ActionCreators";
import  * as CartActions from "../data/CartActionCreators";
import {DataTypes} from '../data/Types';
import {Shop} from "./Shop";
import {CartDetails} from './CartDetails';
import { DataGetter } from "../data/DataGetter";
import { Checkout } from "./Checkout";
import { Thanks } from "./Thanks";

//const mapDispatchToProps = {loadData,addToCart,updateCartQuantity,removeCart, clearCart, placeOrder};

const mapDispatchToProps = { ...ShopActions, ...CartActions};

// const filterProducts = (products = [], category) =>
//     (!category || category === "All")?
//         products
//         :
//         products.filter(p => p.category.toLowerCase() === category.toLowerCase())
//export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
export const ShopConnector = connect(ds => ds, mapDispatchToProps)(
    class extends Component{


        selectComponent = (routeProps) => {
            const wrap = (Component, Content) =>
                <Component { ...this.props}  { ...routeProps}>
                    { Content && wrap(Content)}
                </Component>
                switch (routeProps.match.params.section)
                    {
                        case "products":
                            return wrap(DataGetter, Shop);
                        case "cart":
                            return wrap(CartDetails);
                        case "checkout":
                            return wrap(Checkout);
                        case "thanks":
                            return wrap(Thanks);
                        default:
                            return <Redirect to="/shop/products/all/1" />
                    }
        }


        render()
        {
            return <Switch>
                        <Redirect from="/shop/products/:category" to="/shop/products/:category/1" exact={ true } />
                        <Route path={ "/shop/:section?/:category?/:page?"} render = { routeProps => this.selectComponent(routeProps) } />
                    </Switch>
            // return  (
            //     <Switch>
            //         <Redirect from="/shop/products/:category" to="/shop/products/:category/1" exact= {true}/>
            //         <Route path="/shop/products/:category/:page"
            //             render={(routeProps) =>
            //                     <DataGetter  { ...this.props } { ...routeProps }>
            //                         <Shop {...this.props} {...routeProps} />
            //                     </DataGetter>
            //             }/>
            //         <Route path="/shop/checkout" render={ routeProps => <Checkout { ...this.props } { ...routeProps } /> } />
            //         <Route path="/shop/thanks" render={ routeProps => <Thanks { ...this.props } { ...routeProps } /> } />
            //         <Route path ="/shop/cart"  render={(routeProps) =>
            //             <CartDetails { ...this.props } { ...routeProps }  />}/>
            //             <Redirect to="/shop/products/all/1" />
            //     </Switch>
            // )

        }

        componentDidMount() {
            this.props.loadData(DataTypes.CATEGORIES);
            //this.props.loadData(DataTypes.PRODUCTS);
        }

    }
)