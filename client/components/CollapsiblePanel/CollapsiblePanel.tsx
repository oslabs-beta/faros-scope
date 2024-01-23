import React from "react";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props  {
    title: string;
    children: React.ReactNode; // TODO: Verify this is correct
}

export const CollapsiblePanel = ({ title, children }: Props) => {
    return (
        <Box>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${title.replace("\\s+", "")}-content`}
                    id={`${title.replace("\\s+", "")}-header`}
                >
                    {title}
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>
            </Accordion>
        </Box>
    )
};