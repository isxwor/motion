import {
  createContext,
  useContext,
  useCallback,
  useReducer,
  useMemo,
} from 'react';

const UIContext = createContext();
UIContext.displayName = 'UIContext';

const uiReducer = (state, action) => {
  switch (action.type) {
    case 'SET_IS_ANIMATING':
      return {
        ...state,
        isAnimating: action.isAnimating,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const UIProvider = (props) => {
  const [state, dispatch] = useReducer(uiReducer, {
    isAnimating: false,
  });

  const setIsAnimating = useCallback(
    (isAnimating) => dispatch({ type: 'SET_IS_ANIMATING', isAnimating }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      setIsAnimating,
    }),
    [state, setIsAnimating]
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

export { UIProvider, useUI };
