import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import Marquee from 'react-easy-marquee';

interface ChainRowProps {
  chains: any[];
  direction: 'left' | 'right';
}

export const ChainRow: React.FC<ChainRowProps> = ({
  chains,
  direction = 'left',
}) => {
  return (
    <Box
      sx={{
        WebkitMaskImage:
          'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
      }}
    >
      <Marquee
        duration={15000}
        axis="X"
        width="100%"
        height="200px"
        reverse={direction === 'left' ? true : false}
      >
        {chains.map((chain, i) => {
          return (
            <Stack alignItems="center">
              <Image
                key={`chain-image-${chain.id}`}
                alt={`${chain.name} logo`}
                layout="fixed"
                width="150px"
                height="50px"
                objectFit="contain"
                src={chain.imageUrl}
                style={{
                  opacity: chain.live ? 1 : 0.5,
                }}
              />
              {!chain.live && chain.launchDate ? (
                <Typography
                  variant="caption"
                  color="info.dark"
                >{`Coming ${chain.launchDate}`}</Typography>
              ) : null}
            </Stack>
          );
        })}
      </Marquee>
    </Box>
  );
};

export default ChainRow;
