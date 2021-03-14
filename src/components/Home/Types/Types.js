import React, {useEffect} from 'react'

function Types() {

    useEffect(() => {
        fetch("https://morning-star.p.rapidapi.com/market/v2/get-movers", {
	        "method": "GET",
	        "headers": {
		    "x-rapidapi-key": "************************************",
		    "x-rapidapi-host": "************************"
	        }})
            .then(res => res.json())
            .then(data => console.log(data))
    })

    return (
        <div>
            <div className='home-container'>
                <div className='home-change'>
                    <p>Passive Income / Real Estate</p>
                    <div className="home-timing">
                        <li>1W</li>
                        <li>1M</li>
                        <li>1Q</li>
                        <li>1Y</li>
                        <li>3Y</li>
                        <li>5Y</li>
                    </div>
                </div>
                <h1 className="home-heading">Real Estate</h1>
            </div>
        </div>
    )
}


export default Types
