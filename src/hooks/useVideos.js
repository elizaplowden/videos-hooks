import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

// can now use this in any component
// as long as we provide a default search term, we will get a list of videos and a search function
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  // empty array means 'run this function only once'
  }, []);


  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

  // two separate set state function calls
  setVideos(response.data.items);


  };
  // either use react convention [] or JS object convention
  return { videos, search };
};

export default useVideos;
