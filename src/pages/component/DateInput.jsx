import { DatePicker, Space } from "antd";
import moment from "moment";

import { formatDateTime } from "../../utils/utils";

export const DateInput = ({ setStartDate, setEndDate, startDate, endDate }) => {
  const { RangePicker } = DatePicker;

  const setDate = dateTime => {
    setStartDate(formatDateTime(dateTime[0].toDate()));
    setEndDate(formatDateTime(dateTime[1].toDate()));
  };

  return (
    <>
      <Space direction="vertical" size={12}>
        <RangePicker
          showTime
          onChange={setDate}
          defaultValue={[moment(startDate, moment.ISO_8601), moment(endDate, moment.ISO_8601)]}
        />
      </Space>
    </>
  );
};
