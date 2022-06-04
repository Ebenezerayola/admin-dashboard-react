import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';

export const TasksProgress = (props) => (
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
          EURE
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
        European: 
      </Typography>
      <Typography
        color="textSecondary"
        variant="caption"
      >
        Euro
      </Typography>
    </Box>
  </CardContent>
</Card>
);
