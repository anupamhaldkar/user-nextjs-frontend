import Head from "next/head";
import Navbar from "../../components/Navbar";
import UserList from "../../components/UserList";
import AddUser from "../../components/AddUser";

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
        </main>
      </div>
    </>
  );
}
