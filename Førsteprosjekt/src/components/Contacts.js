import React, { Component } from 'react';
import Contact from './Contact.js';
import uuid from 'uuid';
import AddContact from './addContact.js';

export default class Contacts extends Component {
    state = {
            matrise: [
                {
                   id: uuid.v4(),
                   navn: 'John Doe',
                   epost: 'jDoe@gmail.com',
                   telefon: '22334455' 
                }, 
                {
                    id: uuid.v4(),
                    navn: 'Ole Nordmann',
                    epost: 'OleN@gmail.com',
                    telefon: '21314151' 
                 },
                 {
                    id: uuid.v4(),
                    navn: 'Tony Backer',
                    epost: 'TBacker@gmail.com',
                    telefon: '22141467' 
                 }
            ]
        }
    
    deleteContent = (id) =>{
        const { matrise } = this.state;
        const nymatrise = matrise.filter(verdi =>
            verdi.id !== id);
         this.setState({
             matrise: nymatrise
         });
    } 

    handleSubmit = (parameter) => {  
        this.setState({ matrise: [...this.state.matrise, parameter] })
      }

    render() {

       const { matrise } = this.state;    

        return (
        <div>
            <AddContact handleSubmit={this.handleSubmit}
            />
            {matrise.map(parameter => (
               <Contact 
               key={parameter.id}
               parameter={parameter} 
               deleteClickHandler={this.deleteContent.bind(this, parameter.id)}       
                />
               ))}
        </div>
        );
    }
}

 