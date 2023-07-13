import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DownloadIcon from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmployeeDetailsPopup from "./EmployeeDetailsPopup.jsx";
import { useState } from "react";
import employees from "../employeesData";

export default function BasicTable() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to handle view button click
  // console.log(rows);
  const handleViewClick = (employees) => {
    setSelectedEmployee(employees);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setSelectedEmployee(null);
  };

  // jsx
  return (
    <TableContainer component={Paper}>
      <Table
        sx={({ minWidth: 250 }, { backgroundColor: "white" }, { border: 3 })}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: "black" }}>
            <TableCell sx={{ color: "white" }}>
              <b>Employee Name</b>
            </TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              <b>Employee Id</b>
            </TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              <b>Project Name</b>
            </TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              <b>Shift Type</b>
            </TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              <b>Shift Time</b>
            </TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              <b>Download Payroll</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employees) => (
            <TableRow
              key={employees.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {employees.name}
              </TableCell>
              <TableCell align="right">{employees.id}</TableCell>
              <TableCell align="right">{employees.pname}</TableCell>
              <TableCell align="right">{employees.shtype}</TableCell>
              <TableCell align="right">{employees.stime}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete">
                  <DownloadIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    handleViewClick(employees);
                  }}
                >
                  <VisibilityIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedEmployee && (
        <div className="overlay" onClick={handleClosePopup}>
          <EmployeeDetailsPopup
            employee={selectedEmployee}
            onClose={handleClosePopup}
          />
        </div>
      )}
    </TableContainer>
  );
}
