import React, {Component} from 'react';
import {ValidationErrors} from "./ValidationError";
import {GetMessages} from "./ValidationMessages";

export class ValidatedForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            ValidationErrors: {}
        }
        this.formElements = {};
    }

    handleSubmit = () =>{
        this.setState(state => {
            const newState = {...state, ValidationErrors:{}}
            Object.values(this.formElements).forEach(elm => {
                if(!elm.checkValidity())
                {
                    newState = ValidationErrors[elm.name] = GetMessages(elm);
                }
            })
            return newState;

        }, () => {
                if (Object.keys(this.state.ValidationErrors).length === 0)
                {
                    const data =  Object.assign(...Object.entries(this.formElements).map(e => ({[e[0]]: e[1].value})) )
                    this.props.submitCallback(data);
                }
            });
    }

    registerRef = (element) => {
            if (element !== null)
            {
                this.formElements[element.name] = element;
            }
    }

    renderElement = (modelItem) => {
        const name = modelItem.name || modelItem.label.toLowerCase();
        return <div className="form-group" key={ modelItem.label }>
            <label>{ modelItem.label }</label>
            <ValidationErrors errors={ this.state.ValidationErrors[name] } />
            <input className="form-control" name={ name } ref={ this.registerRef }
            { ...this.props.defaultAttrs } { ...modelItem.attrs } />
        </div>
    }
    render() {
        return <React.Fragment>
        { this.props.formModel.map(m => this.renderElement(m))}
        <div className="text-center">
            <button className="btn btn-secondary m-1" onClick={ this.props.cancelCallback }>
                { this.props.cancelText || "Cancel" }
            </button>
            <button className="btn btn-primary m-1" onClick={ this.handleSubmit }>
               { this.props.submitText || "Submit"}
            </button>            </div>        </React.Fragment>    }
}