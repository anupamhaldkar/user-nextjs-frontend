import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const AddUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal(){
    setIsOpen(false);
  }

  function openModal(){
    setIsOpen(true);
  }
  
  return (
    <>
      <div className="container mx-auto my-8">
        <div className="h-12">
          <button
            onClick={openModal}
            className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
          >
            Add User
          </button>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add new User
                </Dialog.Title>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddUser;
