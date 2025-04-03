import { DataGrid, GridRowParams } from "@mui/x-data-grid";

import { Card, SxProps, Theme } from "@mui/material";

import { useContactContext } from "../../contexts/contact";
import { useColumnVisibility } from "./hooks";
import { columns } from "./columns";

type DataGridComponentProps = {
  rows: Contacts;
};

export default function DataGridContacts({ rows }: DataGridComponentProps) {
  const { setContactId } = useContactContext();

  const {
    columnVisibilityColumn,
    columnVisibilityModel,
    setColumnVisibilityModel,
  } = useColumnVisibility({ columns });

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
        sx={gridStyles}
      />
    </Card>
  );
}

const gridStyles: SxProps<Theme> = {
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
};
