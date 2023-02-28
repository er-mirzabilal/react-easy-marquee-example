import React from 'react';
import { Box } from '@mui/material';
import Palette from '../constants/Palette';
import { motion } from 'framer-motion';

export const SpinningCircle = () => {
  const radius = window.screen.width * 0.1;

  const marketplaces = [
    {
      imageUrl:
        'https://pbs.twimg.com/profile_images/1544105652330631168/ZuvjfGkT_400x400.png',
    },
    {
      imageUrl:
        'https://pbs.twimg.com/profile_images/1598552600105734145/FMiNs3EO_400x400.png',
    },
    {
      imageUrl:
        'https://pbs.twimg.com/profile_images/1607554816049545216/WbL9E92K_400x400.jpg',
    },
    {
      imageUrl:
        'https://pbs.twimg.com/profile_images/1484586799921909764/A9yYenz3_400x400.png',
    },
    {
      imageUrl:
        'https://pbs.twimg.com/profile_images/1361317805384216579/4iIrKAKu_400x400.jpg',
    },
  ];

  return (
    <motion.div
      className="box"
      style={{
        position: 'relative',
        backgroundImage:
          'url("https://parcel-static-host.s3.amazonaws.com/media/landing-page/orb-1.png")',
        backgroundSize: 'cover',
        borderWidth: '1px',
        width: `${2 * radius}px`,
        height: `${2 * radius}px`,
        borderRadius: '50%',
        zIndex: 0,
      }}
    >
      <motion.div
        className="box"
        animate={{ transform: ['rotate(0)', 'rotate(360deg)'] }}
        transition={{
          duration: 12,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{
          display: 'grid',
          gridTemplateAreas: '"layer"',
          placeItems: 'center',
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
        }}
      >
        {marketplaces.map((marketplace, i) => {
          let indexRatio = i / marketplaces.length;
          let offset = -90;
          let rAmount = 360;
          let r = rAmount * indexRatio + offset;
          return (
            <Box
              sx={{
                display: 'grid',
                position: 'absolute',
                backgroundImage: `url(${marketplace.imageUrl})`,
                backgroundSize: 'cover',
                width: `${radius / 4}px`,
                height: `${radius / 4}px`,
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: Palette['primary-cta'],
                gridArea: 'layer',
                placeItems: 'center',
                transform: `rotate(${r}deg) translate(${radius}px) rotate(${
                  -1 * r
                }deg)`,
              }}
            >
              <motion.div
                className="box"
                animate={{ transform: ['rotate(0)', 'rotate(-360deg)'] }}
                transition={{
                  duration: 12,
                  ease: 'linear',
                  repeat: Infinity,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${marketplace.imageUrl})`,
                  backgroundSize: 'cover',
                }}
              ></motion.div>
            </Box>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default SpinningCircle;
