import { FC } from 'react';

import { styled, StyleObject, StyletronComponent } from 'styletron-react';

const mapElevationToBackground = {
  0: 'var(--color-background-card)',
  1: 'var(--color-background-card-elevated)',
};

type Elevation = keyof typeof mapElevationToBackground;

interface CardProps {
  elevation?: Elevation;
  title?: string;
  sx?: StyleObject;
}

interface StyledCardProps {
  $elevation: Elevation;
}

const Card: FC<CardProps> = ({ elevation, title, sx, children }) => (
  // eslint-disable-next-line no-use-before-define
  <Root $elevation={elevation} $style={sx}>
    {/* eslint-disable-next-line no-use-before-define */}
    {title && <Title>{title}</Title>}
    {children}
  </Root>
);

Card.defaultProps = {
  elevation: 0,
  title: '',
  sx: {},
};

const Root: StyletronComponent<StyledCardProps> = styled(
  'div',
  ({ $elevation }) => ({
    paddingTop: 'var(--padding)',
    paddingBottom: 'var(--padding)',
    paddingLeft: 'var(--padding)',
    paddingRight: 'var(--padding)',
    borderRadius: '1em',
    background: mapElevationToBackground[$elevation],
  })
);

const Title = styled('h4', {
  marginBottom: '1rem',
});

export default Card;
