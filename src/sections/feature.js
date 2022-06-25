/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Medal from 'assets/feature/medal-icon.svg';
import Champion from 'assets/feature/sports-man.svg';
import TV from 'assets/feature/tv.svg';
import Umbrella from 'assets/feature/umbrella.svg';

const data = [
  {
    id: 1,
    imgSrc: Medal,
    altText: 'Medal',
    title: 'Регулярне проведення змагань',
    text:
      'Ми регулярно проводимо змагання у м.Львові Кубок Львова, Левеня, ліга САН-ТІМ.',
  },
  {
    id: 2,
    imgSrc: Champion,
    altText: 'Champ',
    title: 'Виховуємо найкращих спортсменів',
    text:
      'Наші спортсмени стають призерами та чемпіонами України, області, а згодом стануть і першими ракетками світу!',
  },
  {
    id: 3,
    imgSrc: TV,
    altText: 'Online stream',
    title: 'Онлайн трансляції змагань',
    text:
      'Наша школа вперше у Львові запровадила змагання з онлайн трансляціями.',
  },
  {
    id: 4,
    imgSrc: Umbrella,
    altText: 'Umbrella',
    title: 'Проведення спортивних зборів',
    text:
      'Наша команда проводить спортивні збори для наших вихованців у горах та на морі.',
  },
];

export default function Feature() {
  return (
   <section sx={{ variant: 'section.feature'}}>
     <Container>
       <SectionHeader 
        slogan="Чому саме ми?"
        title="Переглянь що ми пропонуємо!"
       />
      <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
