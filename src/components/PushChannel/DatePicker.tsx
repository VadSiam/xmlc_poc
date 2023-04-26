import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Grid } from '@mui/material';

interface DateTimePickerValueProps {
  setPeriod: (period: { from: string; to: string }) => void;
}

const DateTimePickerValue: React.FC<DateTimePickerValueProps> = ({
  setPeriod,
}) => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  const [valueTo, setValueTo] = React.useState<Dayjs | null>(null);

  const handleFromDateChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    setPeriod({
      from: newValue?.format('DD/MM/YYYY') || '',
      to: valueTo?.format('DD/MM/YYYY') || '',
    })
  }

  const handleToDateChange = (newValue: Dayjs | null) => {
    setValueTo(newValue);
    setPeriod({
      from: value?.format('DD/MM/YYYY') || '',
      to: newValue?.format('DD/MM/YYYY') || '',
    })
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} sx={{ marginTop: '10px', marginBottom: '10px' }}>
          <DateTimePicker
            format='DD/MM/YYYY'
            views={['year', 'month', 'day']}
            label="Start Date"
            value={value}
            onChange={(newValue) => handleFromDateChange(newValue)}
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ marginTop: '10px', marginBottom: '10px' }}>
          <DateTimePicker
            format='DD/MM/YYYY'
            views={['year', 'month', 'day']}
            label="End Date"
            value={valueTo}
            onChange={(newValue) => handleToDateChange(newValue)}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}

export default DateTimePickerValue;