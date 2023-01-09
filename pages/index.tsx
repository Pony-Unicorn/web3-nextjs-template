import type { NextPage } from 'next';

import { useState } from 'react';

import { Switch } from '@headlessui/react';

import shallow from 'zustand/shallow';

import { ConnectButton } from '@rainbow-me/rainbowkit';

import useCountStore from '../src/store/useCountStore';

import conf from '../src/conf/env';

const Home: NextPage = () => {
  const [enabled, setEnabled] = useState(false);

  const [count, setCount] = useCountStore(
    (state) => [state.count, state.increment, state.decrement],
    shallow
  );

  return (
    <div className="container mx-auto">
      <ConnectButton />
      {enabled && <p>{conf.BASE_URL}</p>}
      <div className="py-16">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
      <p>{count}</p>
      <div className="space-x-6">
        <button
          className="bg-red-500 hover:bg-red-700 rounded-md p-4"
          onClick={() => {
            setCount(1);
          }}>
          zustand +1
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 rounded-md p-4"
          onClick={() => {
            setCount(-1);
          }}>
          zustand -1
        </button>
      </div>
    </div>
  );
};

export default Home;
