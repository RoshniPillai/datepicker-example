import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SxProps } from "@mui/system";

export default function CustomPicker() {
  //const [value, setValue] = React.useState(new Date("04/01/2022 12:00:00"));
  const [value, setValue] = React.useState<Date | null>(new Date());

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  const popperSx: SxProps = {
    "& .MuiPaper-root": {
      border: "1px solid black",
      padding: 2,
      marginTop: 1,
      backgroundColor: "rgba(120, 120, 120, 0.2)"
    },
    "& .MuiCalendarPicker-root": {
      backgroundColor: "rgba(45, 85, 255, 0.4)"
    },
    "& .PrivatePickersSlideTransition-root": {},
    "& .MuiPickersDay-dayWithMargin": {
      color: "rgb(229,228,226)",
      backgroundColor: "rgba(50, 136, 153)"
    },
    "& .MuiTabs-root": { backgroundColor: "rgba(120, 120, 120, 0.4)" }
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          {/* <DesktopDatePicker
            label="Date"
            inputFormat="MM/DD/YYYY" //depends on date lib
            value={value}
            onChange={setValue}
            renderInput={(params: TextFieldProps) => {
              return <TextField {...params} />;
            }}
            views={["day", "month"]}
            showDaysOutsideCurrentMonth //very useful
          />
          <DesktopTimePicker
            label="Time"
            value={value}
            onChange={handleChange}
            renderInput={(params: TextFieldProps) => <TextField {...params} />}
          /> */}
          <DateTimePicker
            label="Date And Time Picker"
            value={value}
            onChange={handleChange}
            components={{
              OpenPickerIcon: CalendarMonthIcon,
              LeftArrowIcon: ArrowLeftIcon,
              RightArrowIcon: ArrowRightIcon
            }}
            InputProps={{ sx: { "& .MuiSvgIcon-root": { color: "blue" } } }}
            PopperProps={{
              sx: popperSx
            }}
            renderInput={(params: TextFieldProps) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
      <div style={{ marginTop: 50 }}>
        <a
          target="_blank"
          href="https://smartdevpreneur.com/the-ultimate-material-ui-v5-datepicker-and-timepicker-tutorial/"
        >
          Here's everything to know about styling the Date Picker!
        </a>
      </div>
    </>
  );
}
