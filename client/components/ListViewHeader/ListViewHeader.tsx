import { Typography, Box, useTheme } from '@mui/material';

interface Props {
  title: string;
}

export const ListViewHeader = ({ title }: Props) => {
  const theme = useTheme();
  const muiTheme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        color={
          muiTheme.palette.mode === 'dark'
            ? theme.palette.neutral.light
            : theme.palette.neutral.dark
        }
        fontWeight="bold"
        sx={{ pb: '1rem', pl: '1rem' }}
      >
        {title}
      </Typography>
    </Box>
  );
};
