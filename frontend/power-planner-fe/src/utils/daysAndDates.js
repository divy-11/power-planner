

export const isDateInCurrentWeek = (date) => {
    const now = new Date();
    
    // Get the start of the week (Sunday)
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    startOfWeek.setHours(0, 0, 0, 0); // Set the start time to 00:00:00
    
    // Get the end of the week (Saturday)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999); // Set the end time to 23:59:59
  
    // Convert the passed date to Date object if it's not already
    const givenDate = new Date(date);
    
    // Compare the given date with the week range
    return givenDate >= startOfWeek && givenDate <= endOfWeek;
  }

  export const weekDays = [
    { value: "Monday", label: "Mon" },
    { value: "Tuesday", label: "Tue" },
    { value: "Wednesday", label: "Wed" },
    { value: "Thursday", label: "Thu" },
    { value: "Friday", label: "Fri" },
    { value: "Saturday", label: "Sat" },
    { value: "Sunday", label: "Sun" },
  ];
  
  export const getToday = () => {
    const dayOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = dayOfWeek[new Date().getDay()];
    return today;
  };
  