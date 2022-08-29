import create from 'zustand';

interface IDemoState {
  count: number;
  increase: (by: number) => void;
}

const useStoreDemo = create<IDemoState>((set) => ({
  count: 1,
  increase: (by: number) => set((state) => ({ count: state.count + by }))
}));

export default useStoreDemo;
