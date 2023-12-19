import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function ChartComponent({ payments }) {
    const tooltipStyle = {
        fontSize: '14px',
    };
    return (
        <div>
            <BarChart width={1100} height={450} data={payments} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="payDate" />
                <YAxis />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
        </div>
    );
}

export default ChartComponent;
