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
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const UIProvider = (props) => {
  const [state, dispatch] = useReducer(uiReducer, {
    isAnimating: false,
    animationType: ANIMATION_TYPES.scale,
  });

  const setIsAnimating = useCallback(
    (isAnimating) => dispatch({ type: 'SET_IS_ANIMATING', isAnimating }),
    [dispatch]
  );

  const setAnimationType = useCallback(
    (animationType) => dispatch({ type: 'SET_ANIMATION_TYPE', animationType }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      setIsAnimating,
      setAnimationType,
    }),
    [state, setIsAnimating, setAnimationType]
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

export { UIProvider, useUI, ANIMATION_TYPES };
