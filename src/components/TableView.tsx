import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import data from "../assets/data/data.json"; // Adjust the path as needed
import { useState, useMemo } from "react";
import Navbar from "./Navbar";

// Define the type for the JSON data
interface FMSCAData {
  FMSCA_records: DataRow[];
}

interface DataRow {
  id: number;
  created_dt: string;
  data_source_modified_dt: string;
  entity_type: string;
  operating_status?: string;
  legal_name: string;
  dba_name?: string;
  physical_address: string;
  phone: string;
  usdot_number: string;
  mc_mx_ff_number?: string;
  power_units: number;
  out_of_service_date?: string;
  record_status?: string;
}

const typedData: FMSCAData = data as FMSCAData;

const columns: GridColDef[] = [
  { field: "created_dt", headerName: "Created_DT", width: 150 },
  { field: "data_source_modified_dt", headerName: "Modified_DT", width: 150 },
  { field: "entity_type", headerName: "Entity", width: 150 },
  { field: "operating_status", headerName: "Operating Status", width: 150 },
  { field: "legal_name", headerName: "Legal Name", width: 200 },
  { field: "dba_name", headerName: "DBA Name", width: 200 },
  { field: "physical_address", headerName: "Physical Address", width: 300 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "usdot_number", headerName: "DOT", width: 150 },
  { field: "mc_mx_ff_number", headerName: "MC/MX/FF", width: 150 },
  { field: "power_units", headerName: "Power Units", width: 150 },
  { field: "out_of_service_date", headerName: "Out of Service Date", width: 150 },
];

export default function TableView() {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 10,
    page: 0,
  });

  // Memoize rows to optimize performance with large datasets
  const rows = useMemo(() => {
    return typedData.FMSCA_records.map((item: DataRow) => ({
      id: item.id,
      created_dt: item.created_dt,
      data_source_modified_dt: item.data_source_modified_dt,
      entity_type: item.entity_type,
      operating_status: item.operating_status || "",
      legal_name: item.legal_name,
      dba_name: item.dba_name || "",
      physical_address: item.physical_address,
      phone: item.phone,
      usdot_number: item.usdot_number,
      mc_mx_ff_number: item.mc_mx_ff_number || "",
      power_units: item.power_units,
      out_of_service_date: item.out_of_service_date || "",
      record_status: item.record_status || "",
    }));
  }, [typedData.FMSCA_records]);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          padding: 2,
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "calc(100% - 56px)", 
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pagination
              paginationMode="client"
              paginationModel={paginationModel}
              onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
              pageSizeOptions={[5, 10, 25]}
              sortingOrder={["asc", "desc"]}
              disableRowSelectionOnClick
              checkboxSelection={false}
              sx={{
                height: "100%",
                width: "100%",
                "@media (max-width:600px)": {
                  fontSize: "0.875rem",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
