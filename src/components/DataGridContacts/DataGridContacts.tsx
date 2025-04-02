import {
  DataGrid,
  GridColDef,
  GridColumnVisibilityModel,
  GridMenuIcon,
  GridRowParams,
} from "@mui/x-data-grid";
import {
  IconButton,
  Menu,
  MenuItem,
  Checkbox,
  ListItemText,
  Card,
} from "@mui/material";

import { Visibility } from "@mui/icons-material";
import { useContactContext } from "../../contexts/contact";
import { useState } from "react";

const columns: GridColDef<Contact>[] = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "city", headerName: "City", flex: 1 },
  {
    field: "isActive",
    headerName: "Is active",
    flex: 0,
    width: 60,
    align: "center",
    headerAlign: "center",
    renderHeader: () => <Visibility />,
    renderCell: ({ value }) => (value ? <Visibility color="disabled" /> : null),
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
    setColumnVisibilityModel((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const columnVisibilityColumn: GridColDef = {
    field: "columnVisibility",
    headerName: "",
    width: 50,
    headerClassName: !!anchorEl ? "open" : undefined,
    disableColumnMenu: true,
    sortable: false,
    renderHeader: () => (
      <>
        <IconButton size="small" onClick={handleOpenMenu}>
          <GridMenuIcon className="dropdown-toggle" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleCloseMenu}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {columns.map((col) => {
            if (["columnVisibility", "isActive"].includes(col.field))
              return null;
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

  const handleRowClick = ({ id }: GridRowParams<Contact>) => {
    setContactId(id as Contact["id"]);
  };
  return (
    <Card>
      <DataGrid
        rows={rows}
        columns={[...columns, columnVisibilityColumn]}
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={setColumnVisibilityModel}
        onRowClick={handleRowClick}
        hideFooter
        sx={{
          ".MuiDataGrid-columnHeader": {
            bgcolor: "primary.light",
            color: "white",
            "&.open": {
              bgcolor: "white",
            },
            "&.open svg.MuiSvgIcon-root": {
              color: (theme) => theme.palette.primary.main,
            },
          },
          ".MuiDataGrid-columnHeader svg": {
            color: "white",
          },
          "&.MuiDataGrid-root": {
            border: "none",
          },
        }}
      />
    </Card>
  );
}
