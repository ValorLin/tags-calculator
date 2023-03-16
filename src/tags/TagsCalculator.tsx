import { Button, Chip, FormControlLabel, Grid, Switch, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useSnackbar } from '../snackbar';
import { useTags } from './hooks';
import { startCalculate } from './utils';

export const TagsCalculator = () => {
  const [upperCase, setUpperCase] = useState(true);
  const snackbar = useSnackbar();

  const initialTags = useTags('Tags');
  const appendTags = useTags('Append');
  const excludeTags = useTags('Exclude');

  const [resultTags, setResultTags] = useState<string[]>([]);

  const calculate = () => {
    setResultTags(
      startCalculate(upperCase)
        .addTags(initialTags.value)
        .addTags(appendTags.value)
        .removeTags(excludeTags.value)
        .getResult(),
    );
  };

  const copyResult = () => {
    navigator.clipboard.writeText(resultTags.join(','));
    snackbar.show({
      message: `${resultTags.length} tags copied`,
      severity: 'success',
    });
  };

  return (
    <>
      <Grid component="form" container gap={1}>
        <Grid item xs={12}>
          <TextField {...initialTags} />
        </Grid>
        <Grid item xs={12}>
          <TextField {...appendTags} />
        </Grid>
        <Grid item xs={12}>
          <TextField {...excludeTags} />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            label="Convert to uppercase (case insensitive)"
            control={
              <Switch
                checked={upperCase}
                onChange={(event) => setUpperCase(event.currentTarget.checked)}
              />
            }
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={calculate} fullWidth>
            Calculate
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={copyResult} fullWidth>
            Copy result
          </Button>
        </Grid>
        <Grid item xs={12}>
          <h3>Result ({resultTags.length})</h3>
          {resultTags.length === 0 ? (
            <Typography variant="body2" color="text.secondary" align="center">
              Empty
            </Typography>
          ) : (
            resultTags.map((tag) => (
              <Chip key={tag} label={tag} style={{ marginRight: 5, marginBottom: 5 }} />
            ))
          )}
        </Grid>
      </Grid>
    </>
  );
};
