import styled from "@emotion/styled";
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, TextField, Typography } from "@mui/material";

const StyleTextField = styled(TextField)`
  color: white;
  outline: black;
`;

function ContentB() {
  return (
    <header className="App-content-B">
      <Typography variant="h5">Cute Form</Typography>
      <Typography variant="body1">which is very simple style</Typography>
      <Box>
        <div className="formStyle">
          <StyleTextField fullWidth label="Name" id="fullWidth" />
        </div>
        <div className="formStyle">
          <StyleTextField label="email" id="email" placeholder="Email" />

          <StyleTextField label="Phone" id="email" placeholder="Phone" />
        </div>
        <div className="formStyle">
          <StyleTextField fullWidth label="Opinion" id="fullWidth" />
        </div>
      </Box>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </header>
  );
}

export default ContentB;
