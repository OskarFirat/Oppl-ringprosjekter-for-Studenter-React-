import React, { Component } from 'react';
import fire from './Fire';
import In from './In';
import firebase from 'firebase/app';
import spinner from './loading.gif';

export default class Form extends Component {
    state={
        hvisSignInn: false,
        hvisLoggInn: false,
        visForm: false,
        EmailSignUp: '',
        PasswordSignUp: '',
        EmailLoggInn: '',
        PasswordLoggInn: '',
        titleTekst: '',
        contentTekst: '',
        visData: false,
        nyBruker: false,
        hjelpeVariabel: false,
        user: {},
        tabell: []
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    LoggInn = () =>{
        this.setState({Username: this.state.EmailLoggInn});
        this.setState({Email: this.state.PasswordLoggInn});
        fire.auth().signInWithEmailAndPassword(this.state.EmailLoggInn, this.state.PasswordLoggInn).then((bruker)=>{
        }).catch((error) => {
            console.log(error);
          });
       
    }

    SignUp = () =>{
        this.setState({Username: this.state.EmailSignUp});
        this.setState({Email: this.state.PasswordSignUp});
        fire.auth().createUserWithEmailAndPassword(this.state.EmailSignUp, this.state.PasswordSignUp).then((bruker)=>{
        }).catch((error) => {
            console.log(error);
        });
        this.setState({nyBruker: true});
    }

    addInfo = () =>{
        this.setState({titleTekst: this.state.titleTekst});
        this.setState({contentTekst: this.state.contentTekst});
        const db = firebase.firestore();
        db.collection('guides').add({
            Title: this.state.titleTekst,
            Content: this.state.contentTekst
          })
    }

    componentDidMount() {
        this.authListener();
        let data = {
            title: "ForsteTitle",
            content: "ForsteContent"
        }
        
        this.setState({ tabell: data });
    
    }

    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ user });
            this.setState({ visData: true });
                if(this.state.nyBruker){
                const db = firebase.firestore();
                db.collection("guides").doc("" + this.state.user.uid + "").set({
                    title: "TestTittel",
                    content: "TestContent"
                })
                this.setState({ hjelpeVariabel: true });
                this.setState({ nyBruker: false });
                if(this.state.hjelpeVariabel){
                    const docRef = db.collection('guides').doc("" + this.state.user.uid + "");
                    docRef.onSnapshot((doc) => {
                        let nyData = doc.data();
                        this.setState({ tabell: nyData });
                    }) 
                }
            }
          } else {
            this.setState({ user: null });
            this.setState({ visData: false });
          }
        });
    }

    render() {

        const { hvisLoggInn, hvisSignInn, EmailSignUp, PasswordSignUp, EmailLoggInn, PasswordLoggInn, visData, visForm, titleTekst, contentTekst } = this.state; 
        { var idForHref = 1; }

        return (
            <div>
                <nav className="z-depth-0 grey lighten-4">
                    <div className="nav-wrapper container">
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li className="logged-in">
                                <a href="#" className="grey-text modal-trigger" data-target="modal-account">Account</a>
                            </li>
                            <li className="logged-in">
                                <a href="#" className="grey-text" id="logout">About</a> 
                            </li>
                            <li className="logged-in">
                                <a href="#" className="grey-text modal-trigger" data-target="modal-create" onClick={()=> this.setState({ visForm: !this.state.visForm })}>Create Guide</a>
                            </li>
                            <li className="logged-out">
                                <a href="#" className="grey-text modal-trigger" data-target="modal-login" onClick={()=> this.setState({ hvisLoggInn: !this.state.hvisLoggInn })}>Login</a>
                            </li>
                            <li className="logged-out">
                                <a href="#" className="grey-text modal-trigger" data-target="modal-signup" onClick={()=> this.setState({ hvisSignInn: !this.state.hvisSignInn })} >
                                Sign up</a> 
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='container' style={{marginTop:'130px'}}>
                {hvisSignInn ? (<form>
                        <label>Email: </label>
                        <input
                        type="text"
                        name="EmailSignUp"
                        value={EmailSignUp} 
                        onChange={this.handleChange} /> 
                        <label>Password: </label> 
                        <input
                        type="Password" 
                        name="PasswordSignUp"
                        value={PasswordSignUp}
                        onChange={this.handleChange} />
                        <input type="button" value="Sign Up" onClick={this.SignUp} />
                    </form> 
                     ) : null }
                </div>
                <div className='container' style={{marginTop:'130px'}}>
                {hvisLoggInn ? (<form>
                        <label>Email: </label>
                        <input
                        type="text"
                        name="EmailLoggInn"
                        value={EmailLoggInn} 
                        onChange={this.handleChange} /> 
                        <label>Password: </label> 
                        <input
                        type="password" 
                        name="PasswordLoggInn"
                        value={PasswordLoggInn}
                        onChange={this.handleChange} />
                        <input type="button" value="Log In" onClick={this.LoggInn} />
                    </form> 
                     ) : null }
                </div>
                <div className='container' style={{marginTop:'130px'}}>
                {visForm == true && visData == true ? (<form>
                        <label>Title: </label>
                        <input
                        type="text"
                        name="titleTekst"
                        value={titleTekst} 
                        onChange={this.handleChange} /> 
                        <label>Content: </label> 
                        <input
                        type="text" 
                        name="contentTekst"
                        value={contentTekst}
                        onChange={this.handleChange} />
                        <input type="button" value="Registrer i Databasen" onClick={this.addInfo} />
                    </form> 
                     ) : null }
                </div>
                <div>
                    {
                        this.state.user ? (<In />) : (null )
                    }
                </div>
                <div className='container' style={{marginTop:'130px'}}>
                {visData == true && this.state.tabell.title != undefined ? ( 
                    <div>
                        {  console.log(idForHref++)}
                        <div className="card">
                            <div className="card-header">
                                <a className="card-link" data-toggle="collapse" href={"#collapse1" + idForHref }>
                                    { 'Title: ' +  this.state.tabell.title }
                                </a>
                            </div>
                            <div id={"collapse1" + idForHref } className="collapse show">
                                <div className="card-body">
                                    { 'Innhold: ' +  this.state.tabell.content }
                                </div>
                            </div>
                        </div>
                    </div>
                    
                     ) : <img src={spinner} /> }
                </div>
            </div>
        )
    }
}


