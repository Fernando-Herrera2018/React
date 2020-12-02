import React from 'react';
import {Link} from '@reach/router'

class Navbar extends React.Component {
    render(){
        return(
            <div className="navbar navbar-expand-md navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li>
                        <Link className ="nav-link" to = "/">Home</Link>
                    </li>
                    <li>
                        <Link className ="nav-link" to = "/dashboard">Dasboard</Link>
                    </li>
                    <li>
                        <Link className ="nav-link" to = "/table">Table</Link>
                    </li>
                    <li>
                        <Link className ="nav-link" to = "/Hook">Hook</Link>
                    </li>
                </ul>

            </div>
        )
    }
}
export default Navbar