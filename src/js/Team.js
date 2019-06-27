import React, { Component } from 'react';
import Members from './Members';
import Robo from './../img/jogadores/Robo.png'

export default class Team extends Component {
  render() {
    return (
      <div className="container-fluid px-lg-5">
        <Members
          alt="Robo"
          player={Robo}
          firstName="LEONARDO"
          secondName="SOUZA"
          nickPlayers="ROBO"
          position="TOPO"
          city="São Paulo - SP" />
      </div>
    );
  }
}
