import {
  Checkbox,
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  GridColDef,
  GridColumnVisibilityModel,
  GridMenuIcon,
} from "@mui/x-data-grid";
import React from "react";
import { useState } from "react";

export function useColumnVisibility({
  columns,
}: {
  columns: GridColDef<Contact>[];
}) {
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

  return {
    columnVisibilityColumn,
    columnVisibilityModel,
    setColumnVisibilityModel,
  };
}
