import { styled } from 'styletron-react';

import { Card, TabGroup, Tab } from '@components/ui';
import { SHAPES, useShapeStore } from '@store/useShapeStore';
import findObjectKey from '@lib/find-object-key';

const ShapeController = () => {
  const currentShape = useShapeStore((state) => state.currentShape);
  const setCurrentShape = useShapeStore((state) => state.setCurrentShape);

  return (
    <Card $elevation={1}>
      <Title>Shape</Title>
      <TabGroup>
        <>
          {Object.keys(SHAPES).map((shape) => (
            <Tab
              key={shape}
              isActive={findObjectKey(SHAPES, currentShape) === shape}
              onClick={() => setCurrentShape(shape)}
            >
              {shape}
            </Tab>
          ))}
        </>
      </TabGroup>
    </Card>
  );
};

const Title = styled('h4', {
  marginBottom: '1rem',
});

export default ShapeController;
