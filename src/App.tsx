import { AppBar, Container, CssBaseline, Paper, Toolbar, Typography } from '@mui/material';
import { SnackbarProvider } from './snackbar';
import { TagsCalculator } from './tags';

const App = () => {
  return (
    <SnackbarProvider>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Tags Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <TagsCalculator />
        </Paper>
      </Container>
    </SnackbarProvider>
  );
};

export default App;
