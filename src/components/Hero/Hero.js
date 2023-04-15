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
        The purpose of this website is to showcase my skills and projects...
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/paulo-thomaz-junior'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;