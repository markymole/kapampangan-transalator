import Image from "next/image";
import Banner from "./components/Banner";
import Search from "./components/Search";
import Switcher from "./components/Switcher";

export default function Home() {
  return (
    <main className="dark:bg-asphalt animate relative bg-support/50 px-4 md:px-14 lg:px-20 2xl:px-0">
      <div className="mx-auto flex h-screen max-w-4xl flex-col gap-6 pt-10 lg:justify-center lg:pb-32 lg:pt-0">
        <Banner />
        <Search />
        <div className="fixed bottom-8 right-8 lg:bottom-14 lg:right-20">
          <Switcher />
        </div>
        <div></div>
      </div>
    </main>
  );
}
