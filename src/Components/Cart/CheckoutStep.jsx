import React from "react";
import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import "../../Styles/CheckoutStep.scss";

const CheckoutStep = ({ activeStep }) => {
  const steps = [
    {
      lable: <Typography>Shipping Details</Typography>,
      icon: <LocalShippingIcon />,
    },
    {
        lable: <Typography>Confirm Order</Typography>,
        icon: <LibraryAddCheckIcon />,
      },
      {
        lable: <Typography>Payment</Typography>,
        icon: <AccountBalanceIcon />,
      },
  ];

  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep} style={{boxSizing:"border-box"}}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "tomato" : "rgba(0,0,0,0.649)",
              }}
              icon={item.icon}
            >
              {item.lable}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default CheckoutStep;
