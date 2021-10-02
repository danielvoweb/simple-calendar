describe("rendering simple calendar", () => {
  it("should load the calendar on demo page", () => {
    cy.visit("http://localhost:9081");
    cy.get("table.calendar");
  });

  it("should display the current month in the calendar header", () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const expectedMonth = months[new Date().getMonth()];
    cy.get("table.calendar thead tr th").contains(expectedMonth);
  });

  it("should display the current year in the calendar header", () => {
    const expectedYear = new Date().getFullYear();
    cy.get("table.calendar thead tr th").contains(expectedYear);
  });

  it("should display the days of the week in the calendar body", () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    cy.get("table.calendar tbody tr th").each((item, index) => {
      cy.wrap(item).should("contain.text", days[index]);
    });
  });

  it("should display all days in the month", () => {
    cy.get("table.calendar tbody tr td").contains(/^[1-3]?[0-9]$|^$/);
    cy.get("table.calendar tbody tr td").should("have.length.greaterThan", 30);
  });
  it("should display the first day on the correct day of the week", () => {});
  it("should display the last day on the correct day of the week", () => {});
  it("should display empty cells for days of the week outside the current month", () => {});
});
