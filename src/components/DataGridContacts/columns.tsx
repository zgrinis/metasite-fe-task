import { Visibility } from "@mui/icons-material";
import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef<Contact>[] = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "city", headerName: "City", flex: 1 },
  {
    field: "isActive",
    headerName: "Is active",
    flex: 0,
    width: 65,
    align: "center",
    headerAlign: "center",
    renderHeader: () => <Visibility />,
    renderCell: ({ value }) =>
      value ? <Visibility sx={{ color: "#747474" }} /> : null,
  },
  {
    field: "email",
    headerName: "Email",
    align: "right",
    headerAlign: "right",
    flex: 1,
  },
  { field: "phone", headerName: "Phone", flex: 1 },
];
