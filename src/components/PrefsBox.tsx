import { Dialog, Switch, Transition } from '@headlessui/react';
import { useContext, Fragment } from 'react';
import PreferencesContext from '../context/PreferencesContext';

const PrefsBox = () => {
  const { prefsOpen, setPrefsOpen, prefs, setPrefs } = useContext(PreferencesContext);
  const switchSide = prefs?.units !== 'metric';

  const handleSwitchChange = () => {
    const newPrefs = {
      ...prefs,
      units: `${prefs?.units === 'metric' ? 'imperial' : 'metric'}`,
    };
    setPrefs(newPrefs);
  };

  return (
    <Transition show={prefsOpen} as={Fragment}>
      <Dialog
        onClose={() => setPrefsOpen(!prefsOpen)}
        className='relative z-50'
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 backdrop-blur-md' aria-hidden='true' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div className='fixed inset-0 flex items-center justify-center p-4 drop-shadow hover:drop-shadow-lg'>
            <Dialog.Panel className='w-full max-w-sm rounded-md bg-mantle p-8'>
              <Dialog.Title className='font-bold text-lg mb-4 text-center'>
                Preferences
              </Dialog.Title>
              <Dialog.Description as='div'>
                <div className='flex mx-auto my-auto items-center'>
                  <span className='mr-2'>Metric</span>
                  <Switch
                    checked={switchSide}
                    onChange={handleSwitchChange}
                    className={`${
                      switchSide ? 'bg-blue' : 'bg-green'
                    } relative inline-flex h-4 w-11 items-center rounded-full`}
                  >
                    <span
                      className={`${
                        switchSide ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-2 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                  <span className='ml-2'>Imperial</span>
                </div>
              </Dialog.Description>
              <button
                type='button'
                className='font-bold text-lavender mt-4 hover:text-green active:text-opacity-60 ease-in-out duration-200'
                onClick={() => setPrefsOpen(false)}
              >
                Save and close
              </button>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default PrefsBox;
