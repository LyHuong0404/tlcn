import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { ReportPayment } from '~/actions/adminActions';
import { format } from 'date-fns';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

function ChartComponent() {
    const [startDate, setStartDate] = useState(format(new Date().setDate(new Date().getDate() - 7), 'yyyy-MM-dd'));
    const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));
    const [payments, setPayments] = useState([]);
    const defaultDateRange = [dayjs().subtract(14, 'day'), dayjs(endDate)];

    useEffect(() => {
        try {
            const fetchData = async () => {
                const rs = await ReportPayment(startDate, endDate);
                setPayments(rs);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, [startDate, endDate]);
    const tooltipStyle = {
        fontSize: '14px',
    };

    const handleDateChange = (dates) => {
        setStartDate(format(dates[0].$d, 'yyyy-MM-dd'));
        setEndDate(format(dates[1].$d, 'yyyy-MM-dd'));
    };

    return (
        <>
            <RangePicker
                format="DD-MM-YYYY"
                defaultValue={defaultDateRange}
                onChange={handleDateChange}
                style={{ height: '38px', marginRight: '20px', float: 'inline-end' }}
            />
            <div>
                <BarChart
                    width={1100}
                    height={450}
                    data={payments}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </div>
        </>
    );
}

export default ChartComponent;
