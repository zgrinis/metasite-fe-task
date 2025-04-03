import { render, screen, within } from "@testing-library/react";
import DataGridContacts from "../src/components/DataGridContacts/DataGridContacts";
describe("DataGridContacts", () => {
  it("should say No rows when rows array is empty", () => {
    // Render empty data grid
    render(<DataGridContacts rows={[]} />);

    // Check for empty content
    expect(screen.getByText(/No rows/i)).toBeInTheDocument();
  });

  it("should render a list of contacts", async () => {
    const rows: Contacts = [
      {
        city: "Birmingham",
        email: "email@domain.com",
        id: "a45gweg45w",
        isActive: true,
        name: "Geezer",
        phone: "+3701236547",
        surname: "Butler",
      },
      {
        city: "Manchester",
        email: "email@domain.com",
        id: "gksg54gr5g4",
        isActive: false,
        name: "Steve",
        phone: "+3701236547",
        surname: "Harris",
      },
      {
        city: "Greater Upper Marlboro",
        email: "email@domain.com",
        id: "9ksg54gr5g9",
        isActive: false,
        name: "Sean",
        phone: "+3701236547",
        surname: "Beasley",
      },
    ];

    render(<DataGridContacts rows={rows} />);

    // Find all rows
    const allRows = await screen.findAllByRole("row");

    // Find the row with the matching `data-id`
    const targetRow = allRows.find(
      (row) => row.getAttribute("data-id") === rows[0].id,
    );
    expect(targetRow).not.toBeNull(); // Ensure the row exists

    // Use `within` to check individual cells inside the found row
    const { name, city, email, phone } = rows[0];
    expect(
      within(targetRow!).getByRole("gridcell", { name }),
    ).toBeInTheDocument();
    expect(
      within(targetRow!).getByRole("gridcell", { name: city }),
    ).toBeInTheDocument();
    expect(
      within(targetRow!).getByRole("gridcell", { name: email }),
    ).toBeInTheDocument();
    expect(
      within(targetRow!).getByRole("gridcell", { name: phone }),
    ).toBeInTheDocument();
  });
});
