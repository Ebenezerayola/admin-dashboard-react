import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';

export const TotalCustomers = (props) => (
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
            USDE
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            $3M
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
          United State: 
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Dollar
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
