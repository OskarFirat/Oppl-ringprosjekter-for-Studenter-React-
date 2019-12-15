import React, { Component } from 'react';
import uuid from 'uuid';
import {withRouter} from "react-router-dom";

class addContact extends Component {
    state = {
            id: uuid.v4(),
            navn: '',
            epost: '',
            telefon: '',
            erorrNavn: 'form-control form-control-lg',
            errorFeilmelding: ''
    }   
     
    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
        [name]: value,    
        })
    }

    kjappValidering = () =>{
        if(this.state.navn.length > 0){
            this.setState({erorrNavn: 'is-valid form-control form-control-lg',
            });
        } else {
            this.setState({
                erorrNavn: 'is-invalid form-control form-control-lg',
            });
        }
            if(this.state.navn.length > 0){
                this.setState({errorFeilmelding: '',
             });
        }
    }

    Validering = () =>{
        if(this.state.navn === ''){
            this.state.errorFeilmelding = 'Vennligst fyll navn!';
            this.setState({erorrNavn: 'is-invalid form-control form-control-lg'});
            return false;
        } else {
            this.setState({erorrNavn: 'is-valid form-control form-control-lg'});
            return true;
        }
    }

    onSubmit = () =>{
        this.setState(this.state);
        const ervalid = this.Validering();
        if(ervalid === true){
            this.props.handleSubmit(this.state);
            this.setState({ 
                id: uuid.v4(),
                navn: '',
                epost: '',
                telefon: '',
                erorrNavn: 'form-control form-control-lg'
            });
            this.props.history.push('/about');
        }
    }

    render() {
        const {navn, epost, telefon } = this.state;

        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                    <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                            name="navn"
                            className={
                              this.state.erorrNavn 
                            }
                            placeholder="Skriv navn..."
                            value={navn}
                            onChange={this.onChange} 
                            onBlur={this.kjappValidering} 
                            />
                            {this.state.errorFeilmelding ? ( 
                                <div style={{color:'red'}}>{this.state.errorFeilmelding}</div>
                                ) : null
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Epost</label>
                            <input type="email"
                            name="epost"
                            className="form-control form-control-lg"
                            placeholder="Skriv Epost..."
                            value={epost}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telefon</label>
                            <input type="text"
                            name="telefon"
                            className="form-control form-control-lg"
                            placeholder="Skriv Telefon..."
                            value={telefon}
                            onChange={this.onChange}
                            />
                        </div>
                        <input type="button" value="Submit" 
                        className="btn btn-success btn-block" 
                        onClick={this.onSubmit}/>
                    </form>   
                   </div>
                </div>
            </div>
        )
    }
}

export default withRouter(addContact);
 

