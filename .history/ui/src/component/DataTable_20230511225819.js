import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Url } from "../config";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: `#ff385c`,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const columns = [
  { id: "full", align: "center", label: "Original URL", minWidth: 100 },
  { id: "short", align: "center", label: "Shorten URL", minWidth: 100 },
  { id: "clicks", align: "center", label: "Clicks", minWidth: 100 },
];

export default function DataTable({ urlData }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = urlData.map(({ full, short, clicks }) => ({
    full,
    short,
    clicks,
    truncate:
      full.length > 50 ? full.substring(0, 50) + "..." : full.substring(0, 50),
  }));
  console.log(rows);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="customized table">
          <TableHead>
            <StyledTableRow style={{ maxWidth: 50 }}>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ maxWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover="true"
                    role="checkbox"
                    tabIndex={-1}
                    key={row.short}
                  >
                    {columns.map((column) => {
                      const value =
                        column.id === "short" ? (
                          <a
                            className="underline text-[#ff385c]"
                            href={`${Url}/${row[column.id]}`}
                          >
                            {`${Url}/${row[column.id]}`}
                          </a>
                        ) : column.id === "full" ? (
                          <a className="line-clamp-1" href={row[column.id]}>
                            {row.truncate}
                          </a>
                        ) : (
                          row[column.id]
                        );
                      return (
                        <StyledTableCell
                          key={column.id}
                          align={column.id === "clicks" ? "center" : "left"}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </StyledTableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
