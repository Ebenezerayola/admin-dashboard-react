import {
  Box,
  Button,
  Input,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography
} from '@mui/material';
import { Download as DownloadIcon } from '../../icons/download';
import { useState } from 'react';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';

export const ProductListToolbar = (props) => {
  const [activeModal, setActiveModal] = useState(false);

  const addCurrency = () => {
    // alert(true)
  };

  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
        >
          {props.title || 'Currency'}
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setActiveModal(true)}
          >
            Add currency

          </Button >
        </Box>
      </Box>
      <Box sx={{
        position: 'fixed',
        display: `${activeModal ? 'block' : 'none'}`,
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        width: '100vw',
        background: 'rgba(0,0,0,0.6)',
        zIndex: 2000
      }}>
          <Box sx={{
            position: 'absolute',
            display: `block`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '350px',
            width: '300px',
            background: '#fff',
            zIndex: 2001,
            borderRadius: '10px',
            padding: '20px'
          }}>
            <Button sx={{ position: 'absolute', float: 'right', right: '0px', top: '0px', fontSize: '14px', cursor: 'pointer'}} onClick={() => setActiveModal(false)}>Close</Button>

            <Box sx={{ marginTop: '40px' }}>
              <TextField id="curr-name" fullWidth placeholder='Currency (e.g $)' />
              <TextField id="iso" sx={{ marginTop: '15px'}} fullWidth placeholder='ISO symbol (NGN)' />
              <TextField id="curr-val" sx={{ marginTop: '15px'}} fullWidth placeholder='Country' />
              <TextField id="curr" sx={{ marginTop: '15px'}} fullWidth placeholder='hhhhhhh' />
            </Box>
            <Button sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '20px', fontSize: '14px', cursor: 'pointer'}} onClick={() => addCurrency()}>Add +</Button>
          </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search Currency"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
