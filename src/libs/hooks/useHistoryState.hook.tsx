import { useCallback, useReducer, useRef } from 'react';

// ---------------------------------------–-------------------------------------
// Types
// ---------------------------------------–-------------------------------------

enum EActionType {
  UNDO = 'UNDO',
  REDO = 'REDO',
  SET = 'SET',
  CLEAR = 'CLEAR',
}

type TState<T> = {
  past: Array<T | null>;
  present: T | null;
  future: Array<T | null>;
};

type TAction<T> =
  | {
      type: EActionType.CLEAR;
      initialPresent: T | null;
    }
  | {
      type: EActionType.REDO;
    }
  | {
      type: EActionType.SET;
      newPresent: T;
    }
  | {
      type: EActionType.UNDO;
    };

type THistoryState<T> = {
  state: T | null;
  set: (newPresent: T) => void;
  undo: () => void;
  redo: () => void;
  clear: () => void;
  canUndo: boolean;
  canRedo: boolean;
};

// ---------------------------------------–-------------------------------------
// Hooks
// ---------------------------------------–-------------------------------------

const initialUseHistoryStateState = {
  past: [],
  present: null,
  future: [],
};

const useHistoryStateReducer =
  <T,>() =>
  (state: TState<T>, action: TAction<T>): TState<T> => {
    const { past, present, future } = state;

    if (action.type === EActionType.UNDO) {
      return {
        past: past.slice(0, past.length - 1),
        present: past[past.length - 1],
        future: [present, ...future],
      };
    } else if (action.type === EActionType.REDO) {
      return {
        past: [...past, present],
        present: future[0],
        future: future.slice(1),
      };
    } else if (action.type === EActionType.SET) {
      const { newPresent } = action;

      if (action.newPresent === present) {
        return state;
      }

      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };
    } else if (action.type === EActionType.CLEAR) {
      return {
        ...initialUseHistoryStateState,
        present: action.initialPresent,
      };
    } else {
      throw new Error('Unsupported action type');
    }
  };

export const useHistoryState = <T,>(initialPresent?: T): THistoryState<T> => {
  const initialPresentRef = useRef<T | null>(initialPresent ?? null);

  const reducer = useHistoryStateReducer<T>();

  const [state, dispatch] = useReducer(reducer, {
    ...initialUseHistoryStateState,
    present: initialPresentRef.current,
  } as TState<T>);

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;

  const undo = useCallback(() => {
    if (canUndo) {
      dispatch({ type: EActionType.UNDO });
    }
  }, [canUndo]);

  const redo = useCallback(() => {
    if (canRedo) {
      dispatch({ type: EActionType.REDO });
    }
  }, [canRedo]);

  const set = useCallback(
    (newPresent: T) => dispatch({ type: EActionType.SET, newPresent }),
    [],
  );

  const clear = useCallback(
    () =>
      dispatch({
        type: EActionType.CLEAR,
        initialPresent: initialPresentRef.current,
      }),
    [],
  );

  return { state: state.present, set, undo, redo, clear, canUndo, canRedo };
};
