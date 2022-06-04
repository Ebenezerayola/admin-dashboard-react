import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';

export const Budget = (props) => (
  <Card {...props}>
  <CardContent>
    <Grid
      container
      spacing={3}
      sx={{ justifyContent: 'space-between' }}
    >
      <Grid item>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="overline"
        >
          NGNE
        </Typography>
        <Typography
          color="textPrimary"
          variant="h4"
        >
          ₦5M
        </Typography>
      </Grid>
      
    </Grid>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        pt: 2
      }}
    >
    
      <Typography
        variant="body2"
        
        sx={{
          mr: 1
        }}
      >
        Nigerian: 
      </Typography>
      <Typography
        color="textSecondary"
        variant="caption"
      >
        Naira
      </Typography>
    </Box>
  </CardContent>
</Card>
);
