import { create } from 'zustand';
import { sleep } from '../utils/utils';

let genders = ['male', 'female'];
interface IInfo {
  id: number;
  age: number;
  gender: string;
}

interface IInitialState {
  bears: number;
  list: IInfo[];
  loading: boolean;
}

type IBearState = IInitialState & {
  increasePopulation: (by: number) => void;
  removeAllBears: () => void;
  toggleLoading: () => void;
  fetchInfo: () => Promise<void>;
};

const initialState = {
  bears: 0,
  list: [],
  loading: false,
};

export const useBearStore = create<IBearState>((set, get) => ({
  ...initialState,
  increasePopulation: (by = 1) => set((state) => ({ bears: state.bears + by })),
  removeAllBears: () => set({ bears: 0 }),
  fetchInfo: async () => {
    const { bears, toggleLoading } = get();

    console.log('BEFORE', get());
    toggleLoading();
    const res = await sleep();
    console.log('After', get());
    toggleLoading();

    let list = [...new Array(bears)].map((_, index) => ({
      id: index,
      age: 10 + index,
      gender: genders[index % 2],
    }));
    set({ list });
  },
  toggleLoading: () => {
    set({ loading: !get().loading });
  },
}));
