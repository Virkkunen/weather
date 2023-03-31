import { useContext, Fragment, useState, useEffect, useCallback } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ErrorContext from '../context/ErrorContext';

const ErrorBox = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { error, setError, errorMap } = useContext(ErrorContext);

  useEffect(() => {
    setDialogOpen(Boolean(error));
  }, [error]);

  const closeDialog = useCallback(() => {
    setDialogOpen(false);
  }, [error, dialogOpen]);

  // useEffect(() => {
  //   if (!dialogOpen) setError(null);
  // }, [dialogOpen]);

  return (
    <Transition
      show={dialogOpen}
      as={Fragment}
    >
      <Dialog
        onClose={closeDialog}
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
              <Dialog.Title className='font-bold text-lg mb-2'>
                Error
              </Dialog.Title>
              <Dialog.Description>
                {error && errorMap[error.code || error.status]}
              </Dialog.Description>
              <button
                type='button'
                className='font-bold text-maroon mt-4 hover:text-red active:text-opacity-60 ease-in-out duration-200'
                onClick={closeDialog}
              >
                Close
              </button>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ErrorBox;
