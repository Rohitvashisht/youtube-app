import React, {useState, useEffect} from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        onSearchSubmit(defaultSearchTerm)
    }, [defaultSearchTerm]);

    const onSearchSubmit = async (term) => {
        const {data} = await youtube.get('/search', {
            params: {
                q: term,
            }
        })
        setVideos(data.items);
    }

    return [videos, onSearchSubmit]
}

export default useVideos;