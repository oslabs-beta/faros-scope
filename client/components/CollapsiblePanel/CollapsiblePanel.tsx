import React from 'react';
import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  title: string;
  children: React.ReactNode; // TODO: Verify this is correct
}

export const CollapsiblePanel = ({ title, children }: Props) => {
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={title.replace(/\s+/g, '') + '-content'}
                  id={title.replace(/\s+/g, '') + '-header'}
                  sx={{
                      fontSize: "1.25rem",
                      margin: "20px 20px 20px 0px",
                      '& .MuiAccordionSummary-content': {
                          margin: "20px 0 0 20px"
                      },
                      '& .css-o4b71y-MuiAccordionSummary-content.Mui-expanded': {
                        margin: "20px 0 0px 20px"
                      },
                      '& .MuiAccordionSummary.Mui-expanded': {
                        margin: "20px 0 0px 20px"
                      }
                  }}
                //   sx={{
                //     width: '100%',
                //     height: '100%',
                //     '& .MuiChartsAxis-root': {
                //       stroke: 'black',
        >
          {title}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: 'grid',
                      gridTemplateColumns: '3fr 1fr',
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
