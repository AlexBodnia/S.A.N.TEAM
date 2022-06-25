/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';


const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Сюзанна Лавриш',
    title: 'Сюзанна Лавриш',
    designation: 'Старший тренер Кандидат в майстри спорту України Диплом ЛДУФК Переможець та призер чемпіонатів області та України Стаж роботи 16 років',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/profile.php?id=100002578604109',
        icon: <FaFacebookF />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/tennis_coach_suzismile/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Наталія Бодня',
    title: 'Наталія Бодня',
    designation: 'Старший тренер Кандидат в майстри спорту України Диплом ЛДУФК Переможець та призер чемпіонатів області та України Стаж роботи 18 років',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/nataliia.bodnya',
        icon: <FaFacebookF />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/natalia.bodnya/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Олексій Кузьмічов',
    title: 'Олексій Кузьмічов',
    designation: 'Старший тренер по ОФП і СФП Член національної збірної Майстер спорту України Диплом ЛДУФК Переможець та призер чемпіонатів області та України Призер чемпіонатів та кубків СНГ Стаж роботи 20 років',
    socialProfile: [
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/santeam.tennis/',
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section id='team'>
      <Container>
        <SectionHeader 
          slogan="Наша команда"
          title="найдосвідченіші і найталановитіші тренери"
        />
          <Grid sx={styles.grid}>
            {data.map((item) => (
              <TeamCard 
                key={item.id}
                src={item.imgSrc}
                altText={item.altText}
                title={item.title}
                designation={item.designation}
                social={item.socialProfile}
              />
            ))}
          </Grid>

      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
