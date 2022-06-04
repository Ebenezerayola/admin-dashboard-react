import { Avatar, Card, Box, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const TotalProfit = (props) => (
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
          CEDE
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
        Ghanian: 
      </Typography>
      <Typography
        color="textSecondary"
        variant="caption"
      >
        Cedis
      </Typography>
    </Box>
  </CardContent>
</Card>
);
