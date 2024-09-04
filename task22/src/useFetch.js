import React, { useEffect, useState } from 'react'

function useFetch(apiurl) {
    const[data,setdata] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
        const fetchData = async () => {
        try{
            const response = await fetch(apiurl);
            if(!response.ok){
                throw new Error(` HTTP error!${response.status}`);
            }
            const result = await response.json();
            setdata(result);
        }
        catch{
            setError(error);
        }
        finally{
            setLoading(false);
        }
    };
    fetchData();
},[])

return [data, loading, error];

}

export default useFetch

