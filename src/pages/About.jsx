import { Box, Container, Grid, Typography, Card, CardContent, Avatar, Link, Stepper, Step, StepLabel, StepContent, Collapse, IconButton } from '@mui/material';
import { LinkedIn as LinkedInIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useState, useEffect, useRef } from 'react';

const founders = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    bio: 'Former tech industry leader with 15+ years of experience in education technology.',
    linkedin: 'https://linkedin.com/in/johndoe',
  },
  {
    name: 'Jane Smith',
    role: 'Co-Founder & CTO',
    bio: 'Expert in educational software development and AI-powered learning systems.',
    linkedin: 'https://linkedin.com/in/janesmith',
  },
  {
    name: 'Mike Johnson',
    role: 'Co-Founder & Head of Content',
    bio: 'Education specialist with a passion for creating engaging learning experiences.',
    linkedin: 'https://linkedin.com/in/mikejohnson',
  },
];

const timeline = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'DART Council was founded with a vision to revolutionize exam preparation.',
  },
  {
    year: '2021',
    title: 'Platform Launch',
    description: 'Successfully launched our MVP with core features and initial user base.',
  },
  {
    year: '2022',
    title: 'Growth & Expansion',
    description: 'Expanded to multiple exam categories and introduced premium features.',
  },
  {
    year: '2023',
    title: 'Innovation',
    description: 'Launched AI-powered learning tools and mobile app.',
  },
  {
    year: '2024',
    title: 'Future Vision',
    description: 'Planning to expand globally and introduce new learning technologies.',
  },
];

const TeamCard = ({ founder, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Card 
      ref={cardRef}
      sx={{ 
        height: '100%',
        transition: 'all 0.6s ease-out',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translateY(0)' 
          : `translateY(${100 + index * 50}px)`,
        '&:hover': {
          transform: isVisible ? 'translateY(-8px)' : 'none',
          boxShadow: 6,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: '300px',
          background: `url(https://source.unsplash.com/400x300/?portrait,${founder.name.split(' ')[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
          }
        }}
      />
      <CardContent sx={{ 
        position: 'relative',
        mt: '-60px',
        backgroundColor: 'background.paper',
        borderRadius: '16px 16px 0 0',
        textAlign: 'left',
        pt: 4,
        pb: 2
      }}>
        <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
          {founder.name}
        </Typography>
        <Typography color="primary" gutterBottom sx={{ fontWeight: 500 }}>
          {founder.role}
        </Typography>
        <Typography 
          color="text.secondary" 
          paragraph 
          sx={{ 
            mb: 2
          }}
        >
          {founder.bio}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Link
            href={founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: 1,
              textDecoration: 'none',
              color: 'primary.main',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            <LinkedInIcon />
            Connect
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

const About = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Mission Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            sx={{ 
              mb: 4,
              fontWeight: 700,
              color: 'primary.main',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            DART Council is building a modern learning and development platform for job seekers and working professionals. Our goal is to help users strengthen core workplace skills and prepare more effectively for interviews and career growth. We're combining real-world problem solving with smart assessments to make learning practical, personalized, and impactful.
          </Typography>
        </Box>

        {/* Founders Section */}
        <Box sx={{ mb: 8 }}>
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
            About Us
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {founders.map((founder, index) => (
              <Grid item xs={12} md={4} key={index}>
                <TeamCard founder={founder} index={index} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Timeline Section */}
        <Box>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Our Journey
          </Typography>
          <Stepper orientation="horizontal" sx={{ width: '100%', overflowX: 'auto', pb: 2 }}>
            {timeline.map((step, index) => (
              <Step key={index} active={true} sx={{ minWidth: '200px' }}>
                <StepLabel>
                  <Typography variant="h6" color="primary">
                    {step.year}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography variant="h6" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {step.description}
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 