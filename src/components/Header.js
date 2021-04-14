import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <HeaderObject>
            <HeaderLogo>
                RPS Game
            </HeaderLogo>
            <HeaderSubtitle>
                by Kresno Fatih Imani
            </HeaderSubtitle>
        </HeaderObject>
    )
}

export default Header

const HeaderObject = styled.div`
    width: 100%;
    background-color: var(--rps-dblue);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderLogo = styled.p`
    font-size: 30px;
    color: white;
    margin-left: 20px;
    `;

const HeaderSubtitle = styled.p`
    font-size: 20px;
    color: white;
    margin-right: 20px;
`;