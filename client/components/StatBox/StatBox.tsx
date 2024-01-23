import { Box, Typography, useTheme } from "@mui/material";
import { FlexBetween } from "../index"; 

export const StatBox = ({ title, value }) => {
    const theme = useTheme();
    return (
        <Box
            gridColumn="span 1"
            gridRow="span 1"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p="1.25rem 1rem"
            flex="1 1 100%"
            backgroundColor={theme.palette.background.alt}
            borderRadius="0.55rem"
        >
            <FlexBetween>
                <Typography variant="h6" sx={{color: theme.palette.secondary[100]}}>
                    {title}
                </Typography>
            </FlexBetween>
            <Typography variant="h6" fontWeight="600" sx={{ color: theme.palette.secondary[100] }}>
                {value}
            </Typography>
        </Box>
    )
}; 