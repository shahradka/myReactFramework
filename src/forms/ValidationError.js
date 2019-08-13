import React, {Component} from 'react';
export class ValidationErrors extends Component
{
    render()
    {
        if(this.props.errors)
        {
            return this.props.errors.map(err =><h6 className="text-danger" key={err}>{ err }</h6>)
        }
        return null;
    }
}