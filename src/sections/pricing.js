/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui';
import { keyframes } from '@emotion/core';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from 'components/price-card';
import ButtonGroup from 'components/button-group';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

const packages = {
  rent: [
    {
      id: 1,
      name: 'Оренда ракетки',
      description: 'Оренда тенісної ракетки для гри у великий теніс.',
      buttonText: 'Замовити по телефону',
      priceWithUnit: '50 грн',
    },
    {
      id: 2,
      name: 'Оренда корзини м`ячів',
      description: 'Оренда корзини з м’ячами для гри у великий теніс.',
      priceWithUnit: '100 грн',
      buttonText: 'Замовити по телефону',
    },
    {
      id: 3,
      header: 'Рекомендовано',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Оренда корту',
      description: 'Оренда площадки для гри у великий теніс.',
      priceWithUnit: '300 грн',
      buttonText: 'Замовити по телефону',
      anotherOption: '',
    },
  ],
  training: [
    {
      id: 1,
      name: 'Групове заняття',
      description: 'Групове заняття з тренером',
      buttonText: 'Записатись',
      priceWithUnit: '300 грн',
    },
    {
      id: 2,
      name: 'Персональне заняття',
      description: 'Персональне заняття з тренером',
      priceWithUnit: '600 грн',
      buttonText: 'Записатись',
      anotherOption: '',
    },
    {
      id: 3,
      header: 'Рекомендовано',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Двійка',
      description: 'Двоє гравців проти одного',
      priceWithUnit: '800 грн',
      buttonText: 'записатись',
      anotherOption: '',
    },
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const { rent, training } = packages;
  const [state, setState] = useState({
    active: 'оренда',
    pricingPlan: rent,
  })

  const handlePricingPlan= (plan) => {
    if(plan === 'training') {
      setState({
        active: 'training',
        pricingPlan: training,
      })
    } 
    else {
      setState({
        active: 'rent',
        pricingPlan: rent,
      })
    }
  }

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <section id="pricing" sx={{variant: 'section.pricing'}}>
      <Container>
        <SectionHeader 
          slogan="Ціни на послуги"
          title="Оберіть те що вам потрібно"
        />

        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={state.active === 'rent' ? 'active' : ''} 
              type="button"
              aria-label="Оренда"
              onClick={() => handlePricingPlan('rent')}
            >
              Послуги
            </button>
            <button
              className={state.active === 'training' ? 'active' : ''} 
              type="button"
              aria-label="Заняття"
              onClick={() => handlePricingPlan('training')}
            >
              Робота з тренером
            </button>
          </Box>
        </Flex>
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((packageData) => (
              <Box sx={styles.pricingItem} key={packageData.id}>
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
};
