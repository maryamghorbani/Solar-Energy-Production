import { DatePicker, Space } from 'antd';

export const DateInput = () => {
    const { RangePicker } = DatePicker;
    return(
        <>
            <Space direction="vertical" size={12}>
                <RangePicker showTime />
            </Space>
        </>
    )
}