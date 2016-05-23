import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import IconAlarm from 'react-icons/lib/io/ios-alarm-outline';
import IconLocation from 'react-icons/lib/io/ios-location';
import IconPodium from 'react-icons/lib/io/podium';
import IconCalendar from 'react-icons/lib/io/ios-calendar-outline';
import IconPeople from 'react-icons/lib/io/ios-people';
import './Menu.scss';

export default class Menu extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const {
      className
    } = this.props;

    return (
      <nav className={className}>
        <div className="menu-logo">
          Codeball
        </div>

        <ul>
          <li>
            <IndexLink activeClassName="focus" to="/upcoming-game">
              <IconAlarm className="icon" />
              <span className="label">
                Upcoming game
              </span>
            </IndexLink>
          </li>

          <li>
            <Link activeClassName="focus" to="/last-game">
              <IconPodium className="icon" />
              <span className="label">
                Last game
              </span>
            </Link>
          </li>

          <li>
            <Link activeClassName="focus" to="/games">
              <IconCalendar className="icon" />
              <span className="label">
                Games
              </span>
            </Link>
          </li>

          <li>
            <Link activeClassName="focus" to="/players" >
              <IconPeople className="icon" />
              <span className="label">
                Players
              </span>
            </Link>
          </li>

          <li>
            <Link activeClassName="focus" to="/pitches" >
              <IconLocation className="icon" />
              <span className="label">
                Pitches
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
