
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { ChevronIcon } from '../components/icons/Chevron';
import { MoreVertIcon } from '../components/icons/MoreVert';
import { PlayIcon } from '../components/icons/Play';

const Background = ({children}) => {
    return (
        <LinearGradient
            colors={['#464769', '#1B1A1F']}
            style={{
                flex: 1,
            }}
        >
        {children}
        </LinearGradient>
    );
}

const TopBar = styled.View`
    padding-top: 40px;
    flex-direction: row;
`;

TopBar.Left = styled.View`
    flex: 1;
    padding-left: 16px;
    /* background-color: red; */
`;
TopBar.Middle = styled.View`
    flex: 2;
    align-items: center;
    /* background-color: green; */
`;
TopBar.Right = styled.View`
    flex: 1;
    padding-right: 16px;
    align-items: flex-end;
    /* background-color: blue; */
`;

TopBar.Title = styled.Text`
    color: white;
    text-transform: uppercase;
`;

TopBar.SubTitle = styled.Text`
    color: white;
    font-weight: bold;
`;

export default function PlayerScreen() {
  return (
    <Background>
        <TopBar>
            <TopBar.Left>
                <ChevronIcon />
            </TopBar.Left>

            <TopBar.Middle>
                <TopBar.Title>
                    Tocando Podcast
                </TopBar.Title>
                <TopBar.SubTitle>
                    Hipster Ponto Tech
                </TopBar.SubTitle>
            </TopBar.Middle>

            <TopBar.Right>
                <MoreVertIcon />
            </TopBar.Right>
        </TopBar>
    </Background>
  );
}
