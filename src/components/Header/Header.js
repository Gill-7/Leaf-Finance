import React from 'react'
import { Link, Switch, Route } from "react-router-dom"
import Support from '../../Pages/Support/Support'
import Home from '../Home/Home'
import Disclosers from '../../Pages/Disclosers/Disclosers'
import './Header.css'


function Header() {
    return (
        <div>
            <div className="heading">
                <div className='container'>
                    <div className="head-left">
                        <Link to="/">
                            <i class="ri-leaf-fill"></i>
                        </Link>
                        <p className="head-name">Leaf Finance</p>
                    </div>

                    <div className="head-right">
                        <Link className="head-link" to="/support">
                            Support
                        </Link>
                        <Link className="head-link" to="/disclosers">
                            Disclosers
                        </Link>
                    </div>
                </div>
            </div>

            <Switch>
                <Route exact path='/'><Home /></Route> 
                <Route path="/support"><Support /></Route>
                <Route path="/disclosers"><Disclosers /></Route>
            </Switch>
        </div>
    )
}

export default Header