import React from 'react';
import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    // backgroundColor:
    //   theme.palette.mode === 'dark'
    //     ? 'rgba(26, 10, 10, 0.05)'
    //     : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    // '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    //   transform: 'rotate(90deg)',
    // },
    // '& .MuiAccordionSummary-content': {
    //   marginLeft: theme.spacing(1),
    // },
  }));

interface Props {
  title: string;
  children: React.ReactNode; // TODO: Verify this is correct
}

export const CollapsiblePanel = ({ title, children }: Props) => {
  return (
    <Box>
      <Accordion
        sx={{
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={title.replace(/\s+/g, '') + '-content'}
                  id={title.replace(/\s+/g, '') + '-header'}
                  sx={{
                    fontSize: "1.15rem",
                    '& .MuiAccordionSummary.Mui-expanded': {
                      margin: "20px 0 0px 20px"
                    }
                }}
        >
          {title}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: 'grid',
            // gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto 1fr',
            gap: '1rem',
          }} // TODO: Verify this is correct
        >
          {children}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
