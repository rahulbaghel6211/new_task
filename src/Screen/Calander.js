import React from "react";
import { View } from "react-native";
import { Calendar } from 'react-native-calendars';

const MyCalendar = () => {
  return (
    <View>
        <View style={{backgroundColor:'#b2d1ff',height:50}}>

        </View>
      <Calendar
        // You can add various calendar props here
        // For example, marking dates with custom styles
        markedDates={{
          '2023-11-04': { selected: true, marked: true, selectedColor: 'blue' },
          // Add more marked dates as needed
        }}
      />
    </View>
  );
}

export default MyCalendar;
