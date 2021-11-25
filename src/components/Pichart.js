import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import '../pichart.css'
const data = [
    { name: "Food", value: 52 },
    { name: "Invest", value: 27 },
    { name: "Other", value: 21 }
];

// const renderActiveShape = (props) => {
//     const RADIAN = Math.PI / 180;
//     const {
//         cx,
//         cy,
//         midAngle,
//         innerRadius,
//         outerRadius,
//         startAngle,
//         endAngle,
//         fill,
//         payload,
//         percent,
//         value
//     } = props;
//     const sin = Math.sin(-RADIAN * midAngle);
//     const cos = Math.cos(-RADIAN * midAngle);
//     const sx = cx + (outerRadius + 10) * cos;
//     const sy = cy + (outerRadius + 10) * sin;
//     const mx = cx + (outerRadius + 30) * cos;
//     const my = cy + (outerRadius + 30) * sin;
//     const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//     const ey = my;
//     const textAnchor = cos >= 0 ? "start" : "end";

//     return (
//         <g>
//             <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//                 {payload.name}
//             </text>
//             <Sector
//                 cx={cx}
//                 cy={cy}
//                 innerRadius={innerRadius}
//                 outerRadius={outerRadius}
//                 startAngle={startAngle}
//                 endAngle={endAngle}
//                 fill={fill}
//             />
//             <Sector
//                 cx={cx}
//                 cy={cy}
//                 startAngle={startAngle}
//                 endAngle={endAngle}
//                 innerRadius={outerRadius + 6}
//                 outerRadius={outerRadius + 10}
//                 fill={fill}
//             />
//             <path
//                 d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//                 stroke={fill}
//                 fill="none"
//             />
//             <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//             <text
//                 x={ex + (cos >= 0 ? 1 : -1) * 12}
//                 y={ey}
//                 textAnchor={textAnchor}
//                 fill="#333"
//             >{`PV ${value}`}</text>
//             <text
//                 x={ex + (cos >= 0 ? 1 : -1) * 12}
//                 y={ey}
//                 dy={18}
//                 textAnchor={textAnchor}
//                 fill="#999"
//             >
//                 {`(Rate ${(percent * 100).toFixed(2)}%)`}
//             </text>
//         </g>
//     );
// };

export default function Pichart() {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    return (
        <>
            <div className="conatainer">
                <div className="1stcontainer">
                    <h4 className="pieheading">Earnings</h4>
                    <ul>
                        <li>
                            Food-52%
                        </li>
                        <li>Invest-27%</li>
                        <li>Other-21%</li>
                    </ul>
                </div>




                <PieChart width={190} height={200} className="mincontainer">
                    <Pie
                        // activeIndex={activeIndex}
                        // activeShape={renderActiveShape}
                        data={data}
                        cx={100}
                        cy={100}
                        innerRadius={35}
                        outerRadius={50}
                        fill="#8884d8"
                        dataKey="value"
                    // onMouseEnter={onPieEnter}
                    />
                </PieChart>
            </div>

        </>
    );
}
