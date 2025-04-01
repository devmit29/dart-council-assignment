import { Box, Container, Grid, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import { School, Speed, EmojiEvents } from '@mui/icons-material';

const features = [
  {
    icon: <School sx={{ fontSize: 40 }} />,
    title: 'Comprehensive Learning',
    description: 'Access a wide range of study materials and practice tests curated by experts.',
  },
  {
    icon: <Speed sx={{ fontSize: 40 }} />,
    title: 'Smart Progress Tracking',
    description: 'Monitor your performance and identify areas for improvement with detailed analytics.',
  },
  {
    icon: <EmojiEvents sx={{ fontSize: 40 }} />,
    title: 'Achievement System',
    description: 'Stay motivated with rewards and recognition for your learning milestones.',
  },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/image-removebg-preview.png" 
              alt="DART Council" 
              style={{ width: '250px', height: '250px', objectFit: 'cover' }}
            />
          </Box>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ 
              fontWeight: 600,
              color: 'white',
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Welcome to DART Council
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 4, opacity: 0.9 }}
          >
            Your comprehensive platform for job seekers.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ px: 4 }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ px: 4 }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ 
              fontWeight: 600,
              color: 'primary.main',
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Why Choose DART Council?
          </Typography>
        </Box>
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 4, 
          justifyContent: 'center'
        }}>
          {features.map((feature, index) => (
            <Card
              key={index}
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 32px)', md: '1 1 calc(33.333% - 32px)' },
                maxWidth: { xs: '100%', sm: 'calc(50% - 32px)', md: 'calc(33.333% - 32px)' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6,
                  '& .MuiSvgIcon-root': {
                    transform: 'scale(1.1)',
                    color: 'primary.dark',
                  },
                },
                '& .MuiSvgIcon-root': {
                  transition: 'all 0.3s ease-in-out',
                },
              }}
            >
              <CardContent>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h5" component="h3" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* CTA Section */}
      <Box sx={{ 
        bgcolor: theme => theme.palette.mode === 'light' ? 'grey.100' : 'grey.900',
        py: 8 
      }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ 
              mb: 4,
              fontWeight: 600,
              color: 'primary.main',
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Ready to Start Your Journey?
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Join thousands of job seekers who have already achieved their goals with DART Council.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ 
                px: 6,
                '&:hover': {
                  bgcolor: 'primary.dark',
                }
              }}
            >
              Start Free Trial
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 