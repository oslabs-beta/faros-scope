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
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
          }} // TODO: Verify this is correct
        >
          {children}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
