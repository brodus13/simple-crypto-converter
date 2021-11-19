import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface iProps {
  children: JSX.Element | JSX.Element[];
}

const Theme = (props: iProps) => {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Container component={'main'} maxWidth={'xs'}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {props.children}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Theme;
