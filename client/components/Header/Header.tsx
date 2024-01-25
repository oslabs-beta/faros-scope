import { Typography, Box, useTheme } from '@mui/material';
import { useCustomTheme } from '../../hooks';

interface Props {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: Props) => {
  const theme = useTheme();
  const { theme: customTheme } = useCustomTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        color={
          customTheme === 'dark'
            ? theme.palette.neutral.light
            : theme.palette.neutral.dark
        }
        fontWeight="bold"
        xs={{ mb: '5px' }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[300]}>
        {subtitle}
      </Typography>
    </Box>
  );
};
