import {
  DataGrid,
  GridColDef,
  GridColumnVisibilityModel,
  GridMenuIcon,
  GridPinnedColumnFields,
  GridRowParams,
} from "@mui/x-data-grid";
import {
  IconButton,
  Menu,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";

import { Visibility } from "@mui/icons-material";
import { useContactListQuery } from "../../queries/contacts";
import { useContactContext } from "../../contexts/contact";
import { useState } from "react";

const columns: GridColDef<Contact>[] = [
  { field: "name", headerName: "Name", width: 150 },
  { field: "city", headerName: "City", width: 150 },
  {
    field: "isActive",
    headerName: "Is active",
    width: 30,
    renderHeader: () => <Visibility />,
    renderCell: ({ value }) => (value ? <Visibility color="disabled" /> : null),
  },
  {
    field: "email",
    headerName: "Email",
    align: "right",
    headerAlign: "right",
    width: 150,
  },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "surname", headerName: "Surname" },
];

type DataGridComponentProps = {
  rows: Contacts;
};

export default function DataGridContacts({ rows }: DataGridComponentProps) {
  const { setContactId } = useContactContext();

  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState<GridColumnVisibilityModel>(
      columns.reduce((agr, col) => ({ ...agr, [col.field]: true }), {}),
    );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleToggleColumn = (field: string) => {
    console.log(columnVisibilityModel);
    setColumnVisibilityModel((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const columnVisibilityColumn: GridColDef = {
    field: "columnVisibility",
    headerName: "",
    width: 50,
    disableColumnMenu: true,
    sortable: false,
    renderHeader: () => (
      <>
        <IconButton size="small" onClick={handleOpenMenu}>
          <GridMenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          {columns.map((col) => {
            if (col.field == "columnVisibility") return null;
            return (
              <MenuItem
                key={col.field}
                onClick={() => handleToggleColumn(col.field)}
              >
                <Checkbox
                  checked={columnVisibilityModel[col.field] ?? true}
                  color="secondary"
                  size="large"
                />
                <ListItemText primary={col.headerName} />
              </MenuItem>
            );
          })}
        </Menu>
      </>
    ),
  };

  return (
    <DataGrid
      rows={rows}
      columns={[...columns, columnVisibilityColumn]}
      columnVisibilityModel={columnVisibilityModel}
      onColumnVisibilityModelChange={setColumnVisibilityModel}
      onRowClick={({ id }: GridRowParams<Contact>) => {
        setContactId(id as Contact["id"]);
      }}
      hideFooter
    />
  );
}
