import React from 'react'

export const ArrayDemo2 = () => {
    var student = [
        {
            name: "KBZ",
            age: "21",
            marks: 98,
        },
        {
            name: "DP",
            age: "78",
            marks: 45,


        },
        {
            name: "MJ",
            age: "52",
            marks: 88,




        }
    ]
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'black' }}>ArrayDemo2</h1>

            {
                student.map((stu) => {
                    return <div>
                        <h2>Name:{stu.name}</h2>
                        <h2>Age:{stu.age}</h2>
                        <h2>Marks:{stu.marks}</h2>
                    </div>


                }
                )
            }










        </div>
    )
}
