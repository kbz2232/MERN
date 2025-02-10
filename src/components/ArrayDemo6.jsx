import React from 'react'

export const ArrayDemo6 = () => {
    var salesofdata = [
        {
            id:1,
            product:"Smartphones",
            discount:55,
            profit:50,
            sales:1200,
            category:"Electronics",
           
        },
        {
            id:2,
            product:"Laptop",
            discount:60,
            profit:120,
            sales:500,
            category:"Electronics",
        },
        {
            id:3,
            product:"RunningShoes",
            discount:25,
            profit:15,
            sales:2000,
            category:"FootWear",
        },
        {
            id:4,
            product:"WashingMachine",
            discount:45,
            profit:80,
            sales:300,
            category:"HomeAppliances",
        },
        {
            id:5,
            product:"Headphones",
            discount:20,
            profit:25,
            sales:1500,
            category:"Accessories",
        },
        {
            id:6,
            product:"LeatherJacket",
            discount:70,
            profit:55,
            sales:1100,
            category:"FashionWear",
        }


    ]
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Sales Of Data</h1>

            <table class='table table-secondary'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PRODUCT</th>
                        <th>DISCOUNT(%)</th>
                        <th>PROFIT($)</th>
                        <th>SALES</th>
                        <th>CATEGORY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        salesofdata.map((salesofdata) => {
                            return <tr>

                                <td>{salesofdata.id}</td>
                                <td>
                                    {salesofdata.product}
                                </td>
                                <td>
                               <span style={{color:salesofdata.discount > 50 ? 'green':'white'}} >{salesofdata.discount}%</span></td>
                                <td>{salesofdata.profit}$</td>
                                <td>{salesofdata.sales}units</td>
                                <td style={{color:salesofdata.category == "FashionWear" ? 'red':'white'}}>{salesofdata.category}
                                </td>
                            </tr>

                        })
                    }
                </tbody>
            </table>
        </div >
    )
}