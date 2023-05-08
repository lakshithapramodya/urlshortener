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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: `#ed3f4a`,
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
  }));
  console.log(rows);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table
          sx={{ maxWidth: 700 }}
          stickyHeader
          aria-label="customized table"
        >
          <TableHead>
            <StyledTableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, maxWidth: 100 }}
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
                  <StyledTableRow
                    style={{ maxWidth: 300 }}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.short}
                  >
                    {columns.map((column) => {
                      const value =
                        column.id === "short" ? (
                          <a
                            className="underline text-[#ed3f4a]"
                            href={`${window.location.origin}/${row[column.id]}`}
                          >
                            {`${window.location.origin}/${row[column.id]}`}
                          </a>
                        ) : column.id === "full" ? (
                          <a className="line-clamp-1" href={row[column.id]}>
                            {row[column.id]}
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
                  </StyledTableRow>
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
