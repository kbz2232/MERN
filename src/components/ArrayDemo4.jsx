import React from 'react'

export const ArrayDemo4 = () => {
    var Employee = [
        {
            id: 101,
            age: 25,
            name: "ram",
            salary: 15000,
            gender: "male",
        },
        {
            id: 102,
            age: 29,
            name: "seeta",
            salary: 29000,
            gender: "female",
        },
        {
            id: 103,
            age: 30,
            name: "ghanshyam",
            salary: 30000,
            gender: "male",
        },
        {
            id: 104,
            age: 32,
            name: "geeta",
            salary: 45000,
            gender: "female",
        },
        {
            id: 105,
            age: 40,
            name: "ravan",
            salary: 56000,
            gender: "male",
        }

    ]
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Employee Table</h1>

            <table class='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>AGE</th>
                        <th>NAME</th>
                        <th>SALARY</th>
                        <th>GENDER</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employee.map((emp) => {
                            return <tr>

                                <td>{emp.id}</td>
                                <td>
                                 <span style={{color:emp.age >30 ? 'red':'white' }}>{emp.age}</span>
                                </td>
                                <td>
                                  <span style={{color:emp.name.startsWith('g') ? 'green':'whitesmoke'}}>{emp.name}</span>  
                                </td>
                                <td> 
                                 <span style={{color:emp.salary>30000 ? 'blue':'black'}}>{emp.salary}</span></td>
                                <td style={{backgroundColor:emp.gender == "male"?'red':'pink'}}>
                                {emp.gender}
                                </td>
                            </tr>

                        })




                    }






                </tbody>




            </table>


        </div >
    )
}

