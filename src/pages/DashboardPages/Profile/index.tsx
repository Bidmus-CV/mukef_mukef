import Button from "../../../atoms/Button";
import AgasBox from "../../../molecules/AgasBox";
import DashboardLayout from "../../../organisms/DashboardLayout";
import * as React from "react";
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
import "./Profile.scss";
import BookIcon from "../../../vectors/BookIcon";
import MinusIcon from "../../../vectors/MinuIcon";
import PlusIcon from "../../../vectors/PlusIcon";

const Profile = () => {
  const personalInfoList = [
    {
      title: "Title",
      value: "Professor",
    },
    {
      title: "Full Name",
      value: "Abdul-Ganiyy Oladosu AGAS OON",
    },
    {
      title: "Email",
      value: "profagas@gmail.com",
    },
    {
      title: "Phone Number",
      value: "080123456789",
    },
    {
      title: "Phone Number 2",
      value: "080123456780",
    },
    {
      title: "Home Address",
      value: "No 32 Sheikh Ganiyy Street GRA Ilorin",
    },
    {
      title: "State",
      value: "Kwara",
    },
    {
      title: "Nationality",
      value: "Nigeria",
    },
    {
      title: "Favourite quote",
      value: "إِنَّ سَعْيَكُمْ لَشَتَّىٰ",
    },
  ];

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

  // Project History Table Logit start here

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

  // Project History Table Logic End here

  // Donation History Table Logic Start here
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
        <TableRow
        // sx={{
        //   // "& > *": { borderBottom: "unset" },
        //   "&:nth-of-type(odd)": {
        //     backgroundColor: "#F2F2F2",
        //   },
        // }}
        >
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
                      <TableRow
                        sx={{
                          border: "1px solid red",
                        }}
                      >
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
  // Donation History Table Logic End here

  return (
    <DashboardLayout>
      <AgasBox />
      <div className="personal-info">
        <h3 className="">Personal Information</h3>
        <hr />
        <div className="wrapper">
          {personalInfoList.map(({ title, value }) => (
            <div className="personal-info-field">
              <span className=" text-[#858585]">{title}</span>
              <span className="ml-4 text-[#222222] text-lg">{value}</span>
            </div>
          ))}
        </div>
        <div className="button w-[13.5575rem]">
          <Button customClasses="bg-primary text-whitee rounded-md font-medium">
            Edit
          </Button>
        </div>
      </div>

      <div className="project-history">
        <h3>Project support history</h3>
        <hr />
        <div className="mt-[2.8rem]">
          <TableContainer style={{ border: 0 }} component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Projects</StyledTableCell>
                  <StyledTableCell align="right">
                    Supporting Amount
                  </StyledTableCell>
                  <StyledTableCell align="right">Paid Amount</StyledTableCell>
                  <StyledTableCell align="right">
                    Remaining Amount
                  </StyledTableCell>
                  <StyledTableCell align="center">Date</StyledTableCell>
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
        <div className=" mt-6 flex justify-end w-full">
          <Button customClasses="bg-primary w-[13.5575rem] text-whitee rounded-md font-medium">
            Support a Project
          </Button>
        </div>
      </div>
      <div className="project-history">
        <h3>Donation history</h3>
        <hr />
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
    </DashboardLayout>
  );
};

export default Profile;
