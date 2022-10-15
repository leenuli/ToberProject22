import { Box, Paper } from "@mui/material";
function HeaderContent() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
          padding: "5px",
        },
        textAlign: "center",
      }}
    >
      <Paper style={{ backgroundColor: "transparent" }} elevation={0}>
        <h1>👩‍💻</h1>
      </Paper>
      <Paper elevation={0} style={{ backgroundColor: "transparent" }}>
        {" "}
        <h1>💻</h1>
      </Paper>
      <Paper style={{ backgroundColor: "transparent" }} elevation={0}>
        {" "}
        <h1>👾</h1>
      </Paper>
    </Box>
  );
}

export default HeaderContent;
