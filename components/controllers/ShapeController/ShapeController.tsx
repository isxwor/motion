import { Card, TabGroup, Tab } from '@components/ui';
import { useShapeStore } from '@store/useShapeStore';
import type { ShapeT } from '@store/useShapeStore';

const SHAPES: ShapeT[] = ['square', 'circle'];

const ShapeController = () => {
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
