const simpleCalendar = (function () {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const calculateSessionDates = (session) => {
    const dates = [...Array(session.weeks)];
    const sessionStartDate = new Date(session.startDate);
    return dates.map((date, index) => {
      const nextSessionDate = new Date();
      nextSessionDate.setHours(0, 0, 0, 0);
      nextSessionDate.setMonth(sessionStartDate.getMonth());
      nextSessionDate.setFullYear(sessionStartDate.getFullYear());
      nextSessionDate.setDate(sessionStartDate.getDate() + index * 7);

      return nextSessionDate;
    });
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getDaysInMonth = (date) => {
    return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
  };

  const isSessionDate = (sessionDates, date, currentMonth, currentYear) => {
    return sessionDates.includes(
      new Date(currentYear, currentMonth, date, 0, 0).toString()
    );
  };

  const render = (el, date) => {
    renderHeader(el, date);
    renderBody(el);
  };

  const renderHeader = (el, date) => {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    const currentMonthHeaderTitle = el.querySelector('thead tr th');
    currentMonthHeaderTitle.textContent = `${months[currentMonth]} ${currentYear}`;
  };

  const renderBody = (el) => {
    const body = el.querySelector('tbody');
    removeChildren(body);

    const daysHeaderRow = document.createElement('tr');
    days.forEach((day) => {
      const daysHeaderColumnHeader = document.createElement('th');
      daysHeaderColumnHeader.textContent = day;
      daysHeaderRow.appendChild(daysHeaderColumnHeader);
    });

    body.appendChild(daysHeaderRow);
  };

  const removeChildren = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  return {
    calculateSessionDates,
    getFirstDayOfMonth,
    getDaysInMonth,
    isSessionDate,
    render
  };
})();

export default simpleCalendar;
