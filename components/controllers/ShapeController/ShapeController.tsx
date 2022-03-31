import { FC } from 'react';

import { Card, Tab, TabGroup } from '@components/ui';

import type { ShapeT } from '@store/useShapeStore';
import { useShapeStore } from '@store/useShapeStore';

const SHAPES: ShapeT[] = ['square', 'circle'];

const ShapeController: FC = () => {
  const currentShape = useShapeStore((state) => state.currentShape);
  const setCurrentShape = useShapeStore((state) => state.setCurrentShape);

  return (
    <Card elevation={1} title='Shape'>
      <TabGroup>
        {SHAPES.map((shape) => (
          <Tab
            key={shape}
            isActive={currentShape === shape}
            onClick={() => setCurrentShape(shape)}
          >
            {shape}
          </Tab>
        ))}
      </TabGroup>
    </Card>
  );
};

export default ShapeController;
