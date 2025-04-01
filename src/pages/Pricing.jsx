import { Box, Container, Grid, Typography, Button, Card, CardContent, CardActions, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';

const plans = [
  {
    title: 'Prep Lite',
    price: '$9.99',
    period: 'month',
    features: [
      'Basic study materials',
      'Limited practice tests',
      'Progress tracking',
      'Email support',
      'Mobile app access',
    ],
    buttonText: 'Subscribe',
    popular: false,
  },
  {
    title: 'Prep Explorer',
    price: '$19.99',
    period: 'month',
    features: [
      'All Prep Lite features',
      'Unlimited practice tests',
      'Advanced analytics',
      'Priority support',
      'Study groups access',
      'Custom study plans',
    ],
    buttonText: 'Subscribe',
    popular: true,
  },
  {
    title: 'DART Pro',
    price: '$29.99',
    period: 'month',
    features: [
      'All Prep Explorer features',
      '1-on-1 tutoring sessions',
      'Mock interviews',
      'Resume building tools',
      'Career guidance',
      'Exclusive webinars',
    ],
    buttonText: 'Subscribe',
    popular: false,
  },
];

const Pricing = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ 
            mb: 2,
            fontWeight: 600,
            color: 'primary.main',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Choose Your Plan
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 8 }}
        >
          Select the perfect plan for your preparation journey
        </Typography>

        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index} display="flex" justifyContent="center">
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                  ...(plan.popular && {
                    transform: 'scale(1.05)',
                    boxShadow: 3,
                    border: '2px solid',
                    borderColor: 'primary.main',
                    '&:hover': {
                      transform: 'scale(1.05) translateY(-8px)',
                      boxShadow: 6,
                    },
                  }),
                }}
              >
                {plan.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -2,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bgcolor: 'primary.main',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      Most Popular
                    </Typography>
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1, pt: plan.popular ? 4 : 2 }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    gutterBottom
                  >
                    {plan.title}
                  </Typography>
                  <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h3" component="div">
                      {plan.price}
                    </Typography>
                    <Typography color="text.secondary">
                      per {plan.period}
                    </Typography>
                  </Box>
                  <List>
                    {plan.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex}>
                        <ListItemIcon>
                          <CheckIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    fullWidth
                    variant={plan.popular ? 'contained' : 'outlined'}
                    color={plan.popular ? 'primary' : 'inherit'}
                  >
                    {plan.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Need a custom plan?
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Contact us for enterprise solutions and custom packages
          </Typography>
          <Button variant="outlined" color="primary">
            Contact Sales
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing; 