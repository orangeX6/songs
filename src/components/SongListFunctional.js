import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSong } from '../actions';

const SongListFunctional = (props) => {
  const renderList = () => {
    return props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };
  // console.log(props);

  return <div className="ui divided list">{renderList()}</div>;
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { songs: state.songs };
};

//  Solution 1
// const mapDispatchToProps = (dispatch) => ({
//   selectSong: (song) => dispatch(selectSong(song)),
// });

//  Solution 2 - using bindActionCreators
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectSong }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SongListFunctional);
