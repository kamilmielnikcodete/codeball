import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { findById } from 'utils';
import { Link } from 'react-router';
import { List, ListItem } from 'components/ui';
import './GamesList.scss';

export default class GamesList extends Component {
  static propTypes = {
    className: PropTypes.string,
    formatUrl: PropTypes.func.isRequired,
    games: PropTypes.array.isRequired,
    pitches: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired
  };

  render() {
    const {
      className,
      formatUrl,
      games,
      pitches
    } = this.props;

    return (
      <List
        className={classNames(
          'games-list',
          className
        )}>
        {games.map(game => {
          const {
            id,
            date,
            pitchId,
            teamAScore,
            teamBScore,
            time
          } = game;
          const pitch = findById(pitches, pitchId);
          const { name: pitchName } = pitch;

          return (
            <Link key={id} to={formatUrl(id)}>
              <ListItem className="games-list-item">
                <div className="date-time ellipsis">
                  {date} {time}
                </div>

                <div className="pitch ellipsis">
                  {pitchName}
                </div>

                <div className="score">
                  {teamAScore} : {teamBScore}
                </div>
              </ListItem>
            </Link>
          );
        })}
      </List>
    );
  }
}
