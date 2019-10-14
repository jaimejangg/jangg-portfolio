import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../routes/routes';
import SideBar from './Sidebar';

function Nav() {
    return(
        <div>
            <SideBar />
            <div className='nav'>
                <Link to={ROUTES.LANDING} style={{ textDecoration: 'none', color: '#373a47' }}>
                    <h1>Jaime Jangg</h1>    
                </Link>    
            </div>
        </div>
    );
}

export default Nav;