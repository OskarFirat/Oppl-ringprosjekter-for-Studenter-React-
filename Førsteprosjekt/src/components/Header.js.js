import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
    return (
        <div>
            <nav className='navbar nav-expand-sm navbar-dark bg-danger mb-3 py-0'>            
                <div className='container'>                
                    <a href='/' className='navbar-brand'> {props.Yrke}</a>   
                    <Link to="/">
                    <div>                    
                        <ul className='navbar-nav mr-auto'>                       
                            <li className="nav-item">                           
                                <a href="/" className="nav-link">           
                                    Home                           
                                </a>                      
                            </li>                
                        </ul>         
                    </div>     
                    </Link>
                    <Link to="/Contacts">
                    <div>                    
                        <ul className='navbar-nav mr-auto'>                       
                            <li className="nav-item">                           
                                <a href="/" className="nav-link">           
                                    Contacts                           
                                </a>                      
                            </li>                
                        </ul>         
                    </div>  
                    </Link>  
                    <Link to="/about">
                    <div>                    
                        <ul className='navbar-nav mr-auto'>                       
                            <li className="nav-item">                           
                                <a href="/" className="nav-link">           
                                    About                           
                                </a>                      
                            </li>                
                        </ul>         
                    </div>  
                    </Link>      
                </div>        
            </nav>
        </div>
    );
}

Header.defaultProps = {
    Yrke: 'Udefinert Manager'
}



export default Header;


 