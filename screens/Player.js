import { Slider } from 'react-native';
import React, { useState } from 'react';
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
// =====================================================================
const ScreenArea = styled.View`
    flex: 1;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 16px;
`;

const CoverArea = styled.View`
    /* background: red; */
    flex: 4;
`;

CoverArea.Image = styled.Image`
    width: 100%;
    flex: 1;
`;

const PlayerArea = styled.View`
    /* background: blue; */
    flex: 2;
    justify-content: flex-end;
`;

PlayerArea.Title = styled.Text`
    color: white;
    font-size: 24px;
`;

PlayerArea.Author = styled.Text`
    color: #bbbbbb;
    font-size: 16px;
`;

const Controls = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

Controls.Play = styled.TouchableOpacity`
    height: 72px;
    width: 72px;
`;

Controls.Slider = styled.View`
    flex-basis: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

Controls.AudioSlider = styled(Slider)`
    flex-basis: 100%;
`;

Controls.Slider.CurrentTime = styled.Text`
    color: #bbbbbb;
`;

Controls.Slider.TotalTime = styled.Text`
    color: #bbbbbb;
`;

export default function PlayerScreen() {
  const [segundos, setSegundos] = useState(0);

  const initTime = (valor) => {
      let tempo = (valor.toString()).split('.').join(':');
      return tempo;
  }

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
                    Nerdcast
                </TopBar.SubTitle>
            </TopBar.Middle>

            <TopBar.Right>
                <MoreVertIcon />
            </TopBar.Right>
        </TopBar>

        <ScreenArea>
            <CoverArea>
                <CoverArea.Image 
                    resizeMode="contain"
                    source={{ uri: "https://jovemnerd.com.br/wp-content/uploads/2019/06/podcast_678_ipod-1400x1400.jpg", }}
                />
            </CoverArea>

            <PlayerArea>
                <PlayerArea.Title>
                    Os Piores Crossovers 
                </PlayerArea.Title>
                <PlayerArea.Author>
                    Nerdcast
                </PlayerArea.Author>
                <Controls>
                    <Controls.AudioSlider
                        thumbTintColor="#ffffff"
                        minimumTrackTintColor="#1dd65f"
                        maximumTrackTintColor="#777777"
                        minimumValue={0}
                        maximumValue={53}
                        value={segundos}
                        onValueChange={value => {
                            setSegundos(Math.round(value*100)/100);
                        }}
                    />

                    <Controls.Slider>
                        <Controls.Slider.CurrentTime>
                            {initTime(segundos)}
                        </Controls.Slider.CurrentTime>
                        <Controls.Slider.TotalTime>
                            53:00
                        </Controls.Slider.TotalTime>
                    </Controls.Slider>

                    <Controls.Play>
                        <PlayIcon />
                    </Controls.Play>
                </Controls>
            </PlayerArea>
        </ScreenArea>

    </Background>
  );
}
