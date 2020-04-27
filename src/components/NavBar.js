import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.png"
import styled from "styled-components";
import {ButtonContainer} from './Button';

export default class NavBar extends React.Component{
    render(){
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">   
                {/* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                    <img height= "75px" src={logo} alt="Draven" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <i className ="fas fa-cart-plus" />
                        <span> my Cart</span> 
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}


const NavWrapper = styled.nav`
background: var(--mainDark);
 .nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
    border-radius: 0.2rem;
    &:hover{
        background:var(--mainRed);
        }
    }
 
`
