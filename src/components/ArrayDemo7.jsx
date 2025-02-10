import React from 'react'

export const ArrayDemo7 = () => {
    var playerstatstable = [
        {
            id:1,
            name:"LeBronJames",
            gender:"Male",
            sport:"Basketball",
            score:55,
            isactive:"Yes",
            age:29,
        },
        {
            id:2,
            name:"CristianoRonaldo",
            gender:"Male",
            sport:"Football",
            score:100,
            isactive:"Yes",
            age:39,
        },
        {
            id:3,
            name:"NovakDjokovic",
            gender:"Male",
            sport:"Tennis",
            score:35,
            isactive:"Yes",
            age:25,
        },
        {
            id:4,
            name:"SerenaWilliams",
            gender:"Female",
            sport:"Tennis",
            score:75,
            isactive:"No",
            age:42,
        },
        {
            id:5,
            name:"PVSindhu",
            gender:"Female",
            sport:"Badminton",
            score:95,
            isactive:"Yes",
            age:28,
        },
        {
            id:6,
            name:"MeganRapinoe",
            gender:"Female",
            sport:"Football",
            score:25,
            isactive:"No",
            age:38,
        }


    ]
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Players Stats Table</h1>

            <table class='table table-primary'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>GENDER</th>
                        <th>SPORT</th>
                        <th>SCORE(points)</th>
                        <th>iSActive</th>
                        <th>AGE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        playerstatstable.map((playerstatstable) => {
                            return <tr>

                                <td>{playerstatstable.id}</td>
                                <td>{playerstatstable.name}</td>
                                <td>{playerstatstable.gender}</td>
                                <td>{playerstatstable.sport}</td>
                                <td style={{color:playerstatstable.score >=55 ? 'green':'white'}}>
                                    {playerstatstable.score}points</td>
                                <td>{playerstatstable.isactive}</td>
                                <td>{playerstatstable.age}{playerstatstable.age >30 ? '-please retire':''}</td>
                                
                            </tr>

                        })
                    }
                </tbody>
            </table>
        </div >
    )
}