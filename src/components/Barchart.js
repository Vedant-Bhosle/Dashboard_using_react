import React from 'react'
import '../barchart.css'

import { AiOutlineEllipsis } from "react-icons/ai";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    {
        name: 'Mon',

        pv: 80,

    },
    {
        name: 'son',

        pv: 70,
        amt: 2210,
    },
    {
        name: 'Tue',

        pv: 40,
        amt: 2290,
    },
    {
        name: 'Web',

        pv: 50,
        amt: 2000,
    },
    {
        name: 'thu',

        pv: 70,
        amt: 2181,
    },
    {
        name: 'Fri',

        pv: 30,
        amt: 2500,
    },
    {
        name: 'Sat',

        pv: 80,
        amt: 2100,
    },
];
export default function Barchart(props) {
    return (
        <>
            <div className="container" >
                <h6 className="heading">{props.name} <span className="barcharticon"><AiOutlineEllipsis /></span></h6>

                <p className="text">{props.sentence}</p>
                <BarChart
                    width={280}
                    height={90}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 18, right: 10 }} />
                    {/* <YAxis /> */}
                    {/* <Tooltip /> */}
                    {/* <Legend /> */}
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <Bar dataKey="pv" fill="#a09ded" />
                </BarChart>


            </div>
        </>
    )
}
