import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BookIcon from "../../vectors/BookIcon";

const ProjectHistoryTable = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#F2F2F2",
      color: "#858585",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: "#F9F9F9",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(
    projects: string,
    supportingAmount: string,
    paidAmount: string,
    remainingAmount: string,
    date: string
  ) {
    return { projects, supportingAmount, paidAmount, remainingAmount, date };
  }

  const tableData = [
    {
      project: "Water",
      supportAmount: 32450000,
      payAmount: 450000,
      remainValue: 32450000,
      date: "01/06/2022",
    },
    {
      project: "Orphanage",
      supportAmount: 32450000,
      payAmount: 450000,
      remainValue: 32450000,
      date: "01/06/2022",
    },
    {
      project: "Building",
      supportAmount: 32450000,
      payAmount: 450000,
      remainValue: 32450000,
      date: "01/06/2022",
    },
    {
      project: "Zakat",
      supportAmount: 32450000,
      payAmount: 450000,
      remainValue: 32450000,
      date: "01/06/2022",
    },
  ];

  const rows = tableData.map(
    ({ project, supportAmount, payAmount, remainValue, date }) =>
      createData(
        project,
        `₦ ${supportAmount}`,
        `₦ ${payAmount}`,
        `₦ ${remainValue}`,
        date
      )
  );
  return (
    <div>
      <TableContainer style={{ border: 0 }} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Projects</StyledTableCell>
              <StyledTableCell align="right">Supporting Amount</StyledTableCell>
              <StyledTableCell align="right">Paid Amount</StyledTableCell>
              <StyledTableCell align="right">Remaining Amount</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ border: "none" }}>
            {rows.map((row) => (
              <StyledTableRow key={row.projects}>
                <StyledTableCell component="th" scope="row">
                  {row.projects}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.supportingAmount}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.paidAmount}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.remainingAmount}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <div className=" flex justify-end">
                    <span className="mr-8">{row.date}</span>
                    <BookIcon />
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProjectHistoryTable;
