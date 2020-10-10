'use strict';

import React, { Component } from 'react';

import {
  ViroARScene,
  Viro3DObject,
  ViroConstants,
  ViroAmbientLight,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color="#FFFFFF" />
        <Viro3DObject source={require('./res/car/scene1.obj')}
                      resources={[
                          require('./res/car/scene1.mtl'),
                          require('./res/car/BRAKDISC.png'),
                          require('./res/car/Back.png'),
                          require('./res/car/Bottom.png'),
                          require('./res/car/BRAKELIGHT.png'),
                          require('./res/car/INTERIOR.png'),
                          require('./res/car/MIRROR.png'),
                          require('./res/car/MISC1.png'),
                          require('./res/car/DRIVER.png'),
                          require('./res/car/Front.png'),
                          require('./res/car/LICENSE.png'),
                          require('./res/car/Left.png'),
                          require('./res/car/Right.png'),
                          require('./res/car/Top.png'),
                          require('./res/car/negx.jpg'),
                          require('./res/car/negy.jpg'),
                          require('./res/car/negz.jpg'),
                          require('./res/car/posx.jpg'),
                          require('./res/car/posy.jpg'),
                          require('./res/car/posz.jpg')
                      ]}
                      position={[0.0, 0.0, 0.0]}
                      scale={[0.1, 0.1, 0.1]}
                      type="OBJ"
        />
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state === ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello World!"
      });
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

module.exports = HelloWorldSceneAR;
