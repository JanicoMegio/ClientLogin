import { Stepper, Step, StepLabel, StepContent, Button, Icon, Typography} from '@material-ui/core';

function MyStepper() {
  const steps = [
    {
      label: 'Step 1',
      icon: <Icon>1</Icon>,
    },
    {
      label: 'Step 2',
      icon: <Icon>2</Icon>,
      content: (
        <StepContent>
          <Typography variant="h6">Step 2 content</Typography>
          <Typography variant="body1">This is some sample content for step 2.</Typography>
          <Button variant="contained" color="primary">Next</Button>
        </StepContent>
      ),
    },
    {
      label: 'Step 3',
      icon: <Icon>3</Icon>,
    },
  ];

  return (
    <Stepper activeStep={1} alternativeLabel>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel>{step.label}</StepLabel>
          {step.content}
        </Step>
      ))}
    </Stepper>
  );
}