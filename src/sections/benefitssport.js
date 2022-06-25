/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Tree from 'assets/key-feature/tree.svg';
import Noinjury from 'assets/key-feature/noinjury.svg';
import Heart from 'assets/key-feature/heart.svg';
import Brain from 'assets/key-feature/brain.svg';
import FeatureCard from 'components/feature-card';

const data = [
  {
    id: 1,
    imgSrc: Tree,
    altText: 'Tree',
    title: 'Гра на свіжому повітрі',
    text:
      'Гра на відкритих кортах та у гарну погоду принесе вам масу крутих емоцій.',
  },
  {
    id: 2,
    imgSrc: Noinjury,
    altText: 'Noinjury',
    title: 'Збалансований спорт',
    text:
      'Теніс, якщо не грати на максимумі своїх можливостей, він майже не травмонебезпечний.',
  },
  {
    id: 3,
    imgSrc: Heart,
    altText: 'Heart',
    title: 'Активне  кардіо',
    text:
      'Теніс розвиває серцево-судинну і дихальну системи, зміцює імунітет та м’язи.',
  },
  {
    id: 4,
    imgSrc: Brain,
    altText: 'Brain',
    title: 'Покращення роботи мозку',
    text:
      'Під час гри розвивається реакція, стратегія та сама гра допомагає знизити рівень стресу',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.keyFeature'}} id="feature">
    <Container>
      <SectionHeader 
      slogan="Чому саме теніс?"
      title="Дізнайтеся переваги цього виду спорту"
      />

      <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCardColumn 
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
        ))}
      </Grid>
    </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
