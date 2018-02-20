import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image,
} from 'react-vr';

const rand = (min, max) => {
  return Math.random() * (max - min) - min;
}

export default class WelcomeToVR extends React.Component {
  componentWillMount() {
    this.setState({
      step: 0,
    });
    const step = () => {
      this.setState({
        step: this.state.step + 1,
      });
      window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }

  render() {
    return (
      <View>
        <Pano source={asset('masawadahouse.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -7]}],
          }}>
          {`VR MASAWADA HOUSE`}
        </Text>
        {this.renderMasawada()}
      </View>
    );
  }

  renderMasawada() {
    const bottom = 15;
    const speedUp = 0.5;
    speed = Math.cos(this.state.step / 100);
    const result = [];
    const radius = Math.cos(this.state.step / 10) * 10;
    for (var i = 0; i < 50; i++) {
      result.push(
        <Image key={`masawada-${i}`} source={asset('masawada.png')}
          style={{
            position: 'absolute',
            width: 1,
            height: 2.2,
            layoutOrigin: [0, 0],
            transform: [
              { translate: [Math.sin(i/speed)*radius, bottom - i*speedUp, Math.cos(i/speed)*radius ]},
              { rotateX: rand(0, 360) },
              { rotateY: rand(0, 360) },
              { rotateZ: rand(0, 360) },
            ],
          }} />
      );
    }
    return result;
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
