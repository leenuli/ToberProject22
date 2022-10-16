import styled from "@emotion/styled";
import {
  Box,
  Button,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";

const steps = [
  {
    label: "Year 2019",
    description: `🤯 - heard first time about Hacktoberfest! Made my very first hacktoberfest project!`,
  },
  {
    label: "Year 2020",
    description: "Made simple unity project - 🎮",
  },
  {
    label: "Year 2021",
    description: ` I didn't participed, because i didn't had time - 😭 `,
  },
  {
    label: "Year 2022",
    description: `Last year (2021) I made a promise to myself that i will participating 2022 hactoberfest! - 💪`,
  },
  {
    label: "Future 🙌",
    description: `This project will be my Hacktober project! 😘 `,
  },
];

function TextComponent() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const StyledBox = styled(Box)`
   text-align: center,
   margin: auto;
   max-width: 100%;
   padding: 100px;
   margin: 10px;

  `;

  return (
    <Box>
      <br></br>
      <Typography variant="h1">🥳</Typography>
      <br></br>
      <Typography variant="h5">
        I am really excited to participate in this year's Hacktober 2022
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        - Leenuli -
      </Typography>
      <StyledBox sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="horizontal">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper
            style={{ backgroundColor: "transparent" }}
            square
            elevation={0}
            sx={{ p: 3 }}
          >
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
        <br></br>
      </StyledBox>
    </Box>
  );
}

export default TextComponent;
