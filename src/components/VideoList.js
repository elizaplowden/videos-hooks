import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  // this inner function will be called for each video in the array
  const renderedList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });
  // props.videos - array of different records
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
