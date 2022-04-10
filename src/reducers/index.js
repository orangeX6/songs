import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'INVU', duration: '3:56' },
    { title: 'Spring Day', duration: '4.25' },
    { title: 'More', duration: '4.56' },
    { title: 'Into the New World', duration: '4:15' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
