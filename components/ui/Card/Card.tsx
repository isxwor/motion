import { FC } from 'react';

import { styled, StyleObject, StyletronComponent } from 'styletron-react';

interface CardProps {
  elevation: number;
  title: string;
  sx: StyleObject;
}

interface StyledCardProps {
  $elevation: number;
}

const Card: FC<CardProps> = ({ elevation, title, sx, children }) => (
  // eslint-disable-next-line no-use-before-define
  <Root $elevation={elevation} $style={sx}>
    {/* eslint-disable-next-line no-use-before-define */}
    {title && <Title>{title}</Title>}
    {children}
  </Root>
);

const mapElevationToBackground = {
  0: 'var(--color-background-card)',
  1: 'var(--color-background-card-elevated)',
};

const Root: StyletronComponent<StyledCardProps> = styled(
  'div',
  ({ $elevation }) => ({
    paddingTop: 'var(--padding)',
    paddingBottom: 'var(--padding)',
    paddingLeft: 'var(--padding)',
    paddingRight: 'var(--padding)',
    borderRadius: '1em',
    background:
      mapElevationToBackground[$elevation] || mapElevationToBackground[0],
  })
);

const Title = styled('h4', {
  marginBottom: '1rem',
});

export default Card;
