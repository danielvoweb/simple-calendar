const simpleCalendar = () => {};

simpleCalendar.calculateSessionDates = (session) => {
  const dates = [...Array(session.weeks)];
  return dates.map((date, index) => {
    return new Date(
      new Date(new Date().setHours(0, 0, 0, 0)).setDate(
        new Date(session.startDate).getDate() + index * 7
      )
    );
  });
};

export default simpleCalendar;
