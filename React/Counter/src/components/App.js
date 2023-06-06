import Card from './Card'
import Counter from './Counter';

import axios from "axios";
import { useEffect, useState } from 'react';

function App(){

const [details,setDetails] = useState({})

    const fetchDetails = async () => {
        const {data} = await axios.get("https://randomuser.me/api/");
        
        const details = data.results[0];
        setDetails(details);
    }

    //useEffect(callback,dependanceArray);
    //dependancyArray - changes in the state of the varialbles in this array triggers the callback function 

    useEffect(() => {
        fetchDetails()
    },[])

    return (
        <div className="App">
            <Counter />
            <Card details={details} />
            {/*<Card name="Mehul"/>*/}            
        </div>
    )
}

export default App;