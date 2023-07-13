import BasicTable from "./components/BasicTable";
import Nav from "./components/Nav";
import "./styles.css";
import Typography from "@mui/material/Typography";

export default function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Typography sx={({ fontFamily: "monospace" }, { fontSize: "40px" })}>
        Shift Allowance Portal
      </Typography> */}
      <br />
      <BasicTable />
    </div>
  );
}
