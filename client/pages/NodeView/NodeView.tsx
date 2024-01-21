import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export const NodeView = () => {
    const { data } = useDemoData({
        dataSet: "Employee",
        visibleFields: VISIBLE_FIELDS,
        rowLength: 100,
    });
    
    return (
        <div className="node-view">
            <Box sx={{
                height: 400,
                maxHeight: 400,
                overflow: "auto",
            }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Accordion1
                    </AccordionSummary>
                    <AccordionDetails>
                        <DataGrid {...data} slots={{ toolbar: GridToolbar }} />
                    </AccordionDetails>
                </Accordion>
            </Box>
        </div>
    );
};