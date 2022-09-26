import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse"; // for collapsible table
import IconButton from "@mui/material/IconButton"; // for collapsible table
import Typography from "@mui/material/Typography"; // for collapsible table
import Box from "@mui/material/Box";
import React from "react";
import MinusIcon from "../../vectors/MinuIcon";
import PlusIcon from "../../vectors/PlusIcon";

const DonationHistoryTable = () => {
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

  const donationHistoryTableData = [
    {
      year: "2021",
      targetAmt: 32450000,
      paidAmt: 450000,
      remainAmt: 32450000,
      date: "01/06/2022",
    },
    {
      year: "2022",
      targetAmt: 32450000,
      paidAmt: 450000,
      remainAmt: 32450000,
      date: "01/06/2022",
    },
    {
      year: "2020",
      targetAmt: 32450000,
      paidAmt: 450000,
      remainAmt: 32450000,
      date: "01/06/2022",
    },
    {
      year: "2022",
      targetAmt: 32450000,
      paidAmt: 450000,
      remainAmt: 32450000,
      date: "01/06/2022",
    },
    {
      year: "2021",
      targetAmt: 32450000,
      paidAmt: 450000,
      remainAmt: 32450000,
      date: "01/06/2022",
    },
    {
      year: "2020",
      targetAmt: 32450000,
      paidAmt: 450000,
      remainAmt: 32450000,
      date: "01/06/2022",
    },
  ];

  const donationHistoryData = (
    year: string,
    targetAmt: string,
    paidAmt: string,
    remainAmt: string,
    date: string
  ) => {
    return {
      year,
      targetAmt,
      paidAmt,
      remainAmt,
      date,
      history: [
        {
          date: "2020-01-05",
          amtAdded: "32,450,000",
          status: "Success",
          totalPaid: "32,450,000",
        },
        {
          date: "2020-01-05",
          amtAdded: "32,450,000",
          status: "Success",
          totalPaid: "32,450,000",
        },
        {
          date: "2020-01-05",
          amtAdded: "32,450,000",
          status: "Success",
          totalPaid: "32,450,000",
        },
        {
          date: "2020-01-05",
          amtAdded: "32,450,000",
          status: "Success",
          totalPaid: "32,450,000",
        },
        {
          date: "2020-01-05",
          amtAdded: "32,450,000",
          status: "Success",
          totalPaid: "32,450,000",
        },
      ],
    };
  };

  function Row(props: { row: ReturnType<typeof donationHistoryData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow>
          <StyledTableCell component="th" scope="row">
            {row.year}
          </StyledTableCell>
          <StyledTableCell align="right">{row.targetAmt}</StyledTableCell>
          <StyledTableCell align="right">{row.paidAmt}</StyledTableCell>
          <StyledTableCell align="right">{row.remainAmt}</StyledTableCell>
          <StyledTableCell align="right">{row.date}</StyledTableCell>
          <StyledTableCell align="right">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <MinusIcon /> : <PlusIcon />}
            </IconButton>
          </StyledTableCell>
        </TableRow>
        <TableRow>
          <StyledTableCell
            align="right"
            style={{ paddingBottom: 0, paddingTop: 0 }}
            colSpan={6}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box
                sx={{
                  margin: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  sx={{
                    width: "50%",
                  }}
                >
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell>Amount Added</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                        <StyledTableCell align="right">
                          Total Paid
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {row.history.map((historyRow) => (
                        <StyledTableRow key={historyRow.date}>
                          <StyledTableCell component="th" scope="row">
                            {historyRow.date}
                          </StyledTableCell>
                          <StyledTableCell>
                            {historyRow.amtAdded}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {historyRow.status}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {historyRow.totalPaid}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Box>
            </Collapse>
          </StyledTableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  const donationHistoryDataRows = donationHistoryTableData.map(
    ({ year, paidAmt, remainAmt, date, targetAmt }) =>
      donationHistoryData(
        year,
        `₦ ${targetAmt.toLocaleString()}`,
        `₦ ${paidAmt.toLocaleString()}`,
        `₦ ${remainAmt.toLocaleString()}`,
        date
      )
  );

  return (
    <div>
      {" "}
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#F2F2F2" }}>
              <TableCell>Year</TableCell>
              <TableCell align="right">Target Amount</TableCell>
              <TableCell align="right">Paid Amount</TableCell>
              <TableCell align="right">Remaining Amount</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {donationHistoryDataRows.map((row) => (
              <Row key={row.date} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DonationHistoryTable;
