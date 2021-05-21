import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';


const useVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    onTermSubmit('flowers');
  // empty array means 'run this function only once'
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

  // two separate set state function calls
  setVideos(response.data.items);


  };
};

export default useVideos;
