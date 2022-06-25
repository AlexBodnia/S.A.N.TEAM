import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading, Image, Button} from 'theme-ui';
import TextFeature from 'components/text-feature';



import KidThumb from 'assets/kid-thumb.png';
import shapePattern from 'assets/shape-pattern1.png';




const data = {
  subTitle: 'наші послуги',
  title: 'Що ми пропонуємо?',
  features: [
    {
      id: 1,
      altText: 'Kids',
      title: 'Дитяча група',
      text:
        'Тенісна школа СанТім спеціалізується у тренуванні дітей віком від 3 років та старше.',
    },
  ],
  btnName: 'Записатись',
  btnURL: '#',
};

export default function ServiceSection() {
 
  

  return (
    <section sx={{ variant: 'section.services'}}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={KidThumb} alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt='shape'/>
          </Box>
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature subTitle={data.subTitle} title={data.title} />
          <Grid sx={styles.grid}>
            {data.features.map((feature) => (
              <Box sx={styles.card} key={feature.id}>
                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>
                    {feature.title}
                  </Heading>
                  <Text sx={styles.wrapper.subTitle}>
                    {feature.text}
                  </Text>
                  <TextFeature 
                    btnName={data.btnName}
                    btnURL={data.btnURL}
                  />
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
};
