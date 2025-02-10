import React from 'react'

export const ArrayDemo5 = () => {
    var citiesdata = [
        {
            id:1,
            cityname:"Delhi",
            population:3.2,
            aqi:402,
        },
        {
            id: 2,
            cityname:"Gurugram",
            population:1,
            aqi:310,
        },
        {
            id: 3,
            cityname:"Patna",
            population:2,
            aqi:228,
        },
        {
            id: 4,
            cityname:"Lucknow",
            population:3,
            aqi:178,
        },
        {
            id: 5,
            cityname:"Kanpur",
            population:4,
            aqi:191,
        }

    ]
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Cities Table</h1>

            <table class='table table-danger'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CITYNAME</th>
                        <th>POPULATION(Million)</th>
                        <th>AQI</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        citiesdata.map((citiesdata) => {
                            return <tr>

                                <td>{citiesdata.id}</td>
                                <td>
                                    {citiesdata.cityname}
                                </td>
                                <td> 
                                 <span style={{color:citiesdata.population>2n ? 'red':'white'}}>{citiesdata.population}Million</span></td>
                                <td>
                                 <span style={{color:citiesdata.aqi >300 ? 'red' : citiesdata.aqi < 200 ?'green': 'white' }}>{citiesdata.aqi}</span>
                                </td>   
                            </tr>

                        })
                    }
                </tbody>
            </table>
        </div >
    )
}

