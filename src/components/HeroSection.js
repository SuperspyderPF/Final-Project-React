import React, { useState, useEffect, useCallback } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const Parse = require('parse/node');


function HeroSection() {
    const [loggedIn, setloggedIn] = useState(false);

    const loginStatus = useCallback(async () => {
        const currentUser = await Parse.User.current();

        if (currentUser !== null) {
            setloggedIn(true);
        }
        else {
            setloggedIn(false);
        }
    },[])

    useEffect(() => {
        loginStatus();
    }, [loginStatus]);


    function notLoggedin(){
        return (<Button link='/login' className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
        GET STARTED <i class="fas fa-angle-double-right"></i>
    </Button>)
    }

    function Loggedin(){
        return (<Button link='/profile' className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
        Profile <i class="far fa-address-card"></i>
    </Button>)
    }

    function loginDisplay(loggedIn) {
        if (!loggedIn) {
            return notLoggedin();
        } else {
            return Loggedin();
        }
    }

    return (
        <div className='hero-container'>
            <img src="https://www.lifeonthebuyside.com/wp-content/uploads/2011/07/Stock-screen-analysis.jpg" width="2500" 
     height="500"/>
            <h1>Sign In To Paper Trade</h1>
            
            <div className="hero-btns">
                <Button link='/market' className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Our Watchlist <i class="fas fa-info-circle"></i>
                </Button>
                {loginDisplay(loggedIn)}
            </div>
            <p id="arrow"><i class="fas fa-angle-double-down"></i></p>
        </div>
    )
}

export default HeroSection