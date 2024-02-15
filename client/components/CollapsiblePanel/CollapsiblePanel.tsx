import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

interface Props {
  title: string;
  children: React.ReactNode; // TODO: Verify this is correct
}

export const CollapsiblePanel = ({ title, children }: Props) => {
  const theme = useTheme();
  return (
    <Accordion
      sx={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              // backgroundColor: theme.palette.background.alt,
          backgroundColor: 'rgb(34, 35, 39)'
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={title.replace(/\s+/g, "") + "-content"}
        id={title.replace(/\s+/g, "") + "-header"}
              sx={{
            // backgroundColor: theme.palette.background.alt,
          "& .MuiAccordionSummary.Mui-expanded": {
            margin: "20px 0 0px 20px",
          },
        }}
      >
        <Typography sx={{ fontSize: "1.15rem" }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          backgroundColor: theme.palette.background.alt,
        }} // TODO: Verify this is correct
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
};
