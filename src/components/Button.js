import styled from "styled-components";

export const ButtonContainer = styled.button`
color:var(--mainWhite);
text-transform:capitalize;
font-size: 1.4rem;
background-color: var(--mainBlack);
border-radius: 0.2rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition:all 0.5 ease-in-out;
&:hover{
background:var(--mainRed);
color:var(--mainWhite);
}
&:focus{
    outline: none;
}
`