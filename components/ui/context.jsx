import {
  createContext,
  useContext,
  useCallback,
  useReducer,
  useMemo,
} from 'react';

const UIContext = createContext();
UIContext.displayName = 'UIContext';

const ANIMATION_TYPES = {
  scale: 'SCALE',
  translate: 'TRANSLATE',
  rotate: 'ROTATE',
};

const SHAPES = {
  square: 'SQUARE',
  circle: 'CIRCLE',
};

const uiReducer = (state, action) => {
  switch (action.type) {
    case 'SET_IS_ANIMATING':
      return {
        ...state,
        isAnimating: action.isAnimating,
      };
    case 'SET_ANIMATION_TYPE':
      return {
        ...state,
        animationType: ANIMATION_TYPES[action.animationType],
      };
    case 'SET_SHAPE':
      return {
        ...state,
        shape: SHAPES[action.shape],
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const UIProvider = (props) => {
  const [state, dispatch] = useReducer(uiReducer, {
    isAnimating: false,
    animationType: ANIMATION_TYPES.scale,
    shape: SHAPES.square,
  });

  const setIsAnimating = useCallback(
    (isAnimating) => dispatch({ type: 'SET_IS_ANIMATING', isAnimating }),
    [dispatch]
  );

  const setAnimationType = useCallback(
    (animationType) => dispatch({ type: 'SET_ANIMATION_TYPE', animationType }),
    [dispatch]
  );

  const setShape = useCallback(
    (shape) => dispatch({ type: 'SET_SHAPE', shape }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      setIsAnimating,
      setAnimationType,
      setShape,
    }),
    [state, setIsAnimating, setAnimationType, setShape]
  );

  return <UIContext.Provider value={value} {...props} />;
};

const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }

  return context;
};

export { UIProvider, useUI, ANIMATION_TYPES, SHAPES };
