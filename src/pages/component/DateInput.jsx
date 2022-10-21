import { DatePicker, Space } from 'antd';
import moment from 'moment';

export const DateInput = ({setStartDate, setEndDate, startDate, endDate}) => {
    const { RangePicker } = DatePicker;

    const setDate = (e, dateString) => {
        const startDate = e[0].utc().format();
        const endDate = e[1].utc().format();
        setStartDate(startDate);
        setEndDate(endDate);
    }

    return(
        <> 
            <Space direction="vertical" size={12}>
                <RangePicker showTime onChange={setDate} defaultValue={[moment(startDate, moment.ISO_8601), moment(endDate, moment.ISO_8601)]} />
            </Space>
        </>
    )
}