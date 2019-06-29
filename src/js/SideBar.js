import React, { Component } from 'react';
import './../css/sideBar.css';
import Logo from './Logo';
import ProgressBar from './ProgressBar';
import {
  faChartLine,
  faUsers,
  faTrophy,
  faFolder,
  faHeadset,
  faStar
} from '@fortawesome/free-solid-svg-icons'
import LinkIcon from './LinkIcon';

export default class SiderBar extends Component {
  render() {
    const {
      visible
    } = this.props;

    if (!visible) {
      return <div />
    }

    return (
      <div
        className="
          side-roxo
          col-10
          col-sm-4
          col-md-5
          col-lg-4
          col-xl-3
          text-white">
        <Logo />
        <hr />
        <ProgressBar />
        <hr />
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <LinkIcon
                title="Dashboard"
                icon={faChartLine}
                to="/usport-go/"
                size="2x" />
            </li>
            <li className="list-group-item">
              <LinkIcon
                title="Time"
                icon={faUsers}
                to="/usport-go/Team"
                size="2x" />
            </li>
            <li className="list-group-item">
              <LinkIcon
                title="Campeonato"
                icon={faTrophy}
                to="/usport-go/Championship"
                size="2x" />
            </li>
            <li className="list-group-item">
            <LinkIcon
                title="Registrar"
                icon={faFolder}
                to="/usport-go/record"
                size="2x" />
            </li>
            <li className="list-group-item">
            <LinkIcon
                title="Suporte"
                icon={faHeadset}
                to="/usport-go/support"
                size="2x" />
            </li>
            <li className="list-group-item">
              <LinkIcon
                title="Conquistas"
                icon={faStar}
                to="/usport-go/conquest"
                size="2x" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}