import React from "react";
import "./employee.css";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import { TableRow } from "@mui/material";
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";
const EmployeeDetailsPopup = ({ employee, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Employee Allowance Details</h2>
        <Table>
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
              <b>Allowance amount</b>
            </TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              <b>Total</b>
            </TableCell>
          </TableRow>
          <TableBody>
            <TableRow>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.pname}</TableCell>
              <TableCell>{employee.shtype}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <DisabledByDefaultOutlinedIcon>Close</DisabledByDefaultOutlinedIcon>
        {/* Add more employee details as needed */}
      </div>
    </div>
  );
};

export default EmployeeDetailsPopup;
