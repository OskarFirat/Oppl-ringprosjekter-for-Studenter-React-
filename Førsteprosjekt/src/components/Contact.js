import React, { Component } from 'react';

export default class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onDeleteClick = () => {
        this.props.deleteClickHandler();
    }


    render() {
        const { navn, epost, telefon } = this.props.parameter;
        const { showContactInfo } = this.state; 
        return (
            <div className="card card-body mb-3">
                <h4>{navn} <i onClick={()=> this.setState({ showContactInfo: !this.state.showContactInfo })} 
                className="fa fa-caret-down" style={{cursor: 'pointer'}}></i> 
                <i class="fa fa-times" 
                style={{cursor: 'pointer', float: 'right', color: 'red'}}
                onClick={this.onDeleteClick}
                ></i>
                </h4>
                {showContactInfo ? (<ul className="list-group">
                    <li className="list-group-item">Email: {epost}</li>                    
                    <li className="list-group-item">Phone: {telefon}</li>                
                </ul>) : null}
            </div>
        )
    }
}
 

