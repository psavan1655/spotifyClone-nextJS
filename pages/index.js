import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <main className="bg-black h-screen overflow-hidden">
        {/* SideBar */}
        <Sidebar />
        {/* Center */}
      </main>

      <div> {/* Player */} </div>
    </div>
  );
}
