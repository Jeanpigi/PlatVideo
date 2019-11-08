import { useState, useEffect} from 'react';

const useInitialState = (API) => { 
    const [ videos, setViedos ] = useState([]);
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setViedos(data));
    }, []);
    return videos;
};

export default useInitialState;