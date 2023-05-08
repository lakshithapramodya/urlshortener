import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function LinksTable({ urlData }) {
  const [rows, setRows] = useState([]);

  const createData = (fullUrl, shortUrl, clicks) => {
    return { fullUrl, shortUrl, clicks };
  };
  const createRows = (data) => {
    let rows = [];
    data.forEach((item) => {
      const row = createData(item.full, item.short, item.clicks);
      rows.push(row);
    });
    console.log(rows);
    return setRows(rows);
  };
  createRows(urlData);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Original URL</TableCell>
            <TableCell align="right">Shorten URL</TableCell>
            <TableCell align="right">Clicks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.fullUrl}</TableCell>
              <TableCell align="right">{row.shortUrl}</TableCell>
              <TableCell align="right">{row.clicks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
