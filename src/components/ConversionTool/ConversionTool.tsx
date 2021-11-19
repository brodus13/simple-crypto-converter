import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import useGetPrice from '../../hooks/useGetPrice';
import { useState } from 'react';

interface iCryptoPrices {
  btc: number | undefined,
  eth: number | undefined,
  lrc: number | undefined
}

const ConversionTool = () => {
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [initialValue, setInitialValue] = useState<number | undefined>(undefined);
  const [endValue, setEndValue] = useState<number | undefined>(undefined);

  const cryptoPrices: iCryptoPrices = ({
    btc: useGetPrice('BTCUSDT'),
    eth: useGetPrice('ETHUSDT'),
    lrc: useGetPrice('LRCUSDT')
  });
  
  const cryptoSelectOptions = [
    <MenuItem value={cryptoPrices.btc}>BTC</MenuItem>,
    <MenuItem value={cryptoPrices.eth}>ETH</MenuItem>,
    <MenuItem value={cryptoPrices.lrc}>LRC</MenuItem>
  ];

  const result = (amount !== undefined && initialValue !== undefined && endValue !== undefined) ? ((amount * initialValue) / endValue) : undefined;

  return (
    <Box component={'form'} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            type={'number'}
            margin={'normal'}
            fullWidth
            id={'amount-input'}
            label={'Amount'}
            name={'amount'}
            onChange={(event) => {
              if (typeof(+event.target.value) === 'number') {
                setAmount(+event.target.value);
              }
            }}
          />
        </Grid>
        <Grid item xs={4}> 
          <FormControl fullWidth margin={'normal'}>
            <InputLabel id={'initial-currency-label'}>{'From'}</InputLabel>
            <Select
              labelId={'initial-currency-label'}
              id={'initial-currency-select'}
              label={'Initial Currency'}
              onChange={(event) => {
                if (typeof(event.target.value) === 'number') {
                  setInitialValue(event.target.value);
                }
              }}
            >
              {cryptoSelectOptions}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8}> 
          <TextField
            disabled={true}
            margin={'normal'}
            fullWidth
            id={'result-display'}
            label={'Result'}
            name={'result'}
            InputProps={{
              readOnly: true,
            }}
            value={result || '-----'}
          />
        </Grid>
        <Grid item xs={4}> 
          <FormControl fullWidth margin={'normal'}>
            <InputLabel id={'end-currency-label'}>{'To'}</InputLabel>
            <Select
              labelId={'end-currency-label'}
              id={'end-currency-select'}
              label={'To Currency'}
              onChange={(event) => {
                if (typeof(event.target.value) === 'number') {
                  setEndValue(event.target.value);
                }
              }}
            >
              {cryptoSelectOptions}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ConversionTool;
