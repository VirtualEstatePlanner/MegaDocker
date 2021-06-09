import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import AdapterDateFns from '@material-ui/lab/AdapterDateFns'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'
import DatePicker from '@material-ui/lab/DatePicker'
import MobileDatePicker from '@material-ui/lab/MobileDatePicker'
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker'

export default function DatePickerBlock() {
  const [value, setValue] = React.useState<Date | null>(new Date())

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div style={{ width: 300 }}>
        <MobileDatePicker
          label='For mobile'
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          renderInput={(params) => <TextField {...params} margin='normal' />}
        />
        <DesktopDatePicker
          label='For desktop'
          value={value}
          minDate={new Date('2017-01-01')}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          renderInput={(params) => <TextField {...params} margin='normal' />}
        />
        <DatePicker
          disableFuture
          label='Responsive'
          openTo='year'
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          renderInput={(params) => <TextField {...params} margin='normal' />}
        />
      </div>
    </LocalizationProvider>
  )
}
