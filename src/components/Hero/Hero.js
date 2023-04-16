import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my Personal Portfolio
      </SectionTitle>
      <SectionText>
      My goal is to provide exceptional service to my clients by delivering high-quality work that meets their requirements and exceeds their expectations. If you are interested in working with me, please feel free to get in touch via my contact information below. Thank you for taking the time to visit my portfolio!
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/paulo-thomaz-junior'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;