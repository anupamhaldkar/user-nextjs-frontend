import Head from "next/head";
import Navbar from "../../components/Navbar";
import UserList from "../../components/UserList";
import AddUser from "../../components/AddUser";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";


export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>User Management App</title>
      </Head>
      <Navbar />
    <main>
      <AddUser />
      <UserList />
    </main>
    </div>
    <Transition appear show={isOpen} as={Fragment}> </Transition>
    </>
  );
}
