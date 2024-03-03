interface IAppState {
  accessToken?: string;
}

type TSubscriber = () => void;
type TSelector<T> = (state: IAppState) => T;

interface IUseStoreData {
  get: () => IAppState;
  set: (value: Partial<IAppState>) => void;
  subscribe: (callback: TSubscriber) => () => boolean;
}

export type { IAppState, IUseStoreData, TSubscriber, TSelector };
