import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  // this inner function will be called for each video in the array
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
  });
  // props.videos - array of different records
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
