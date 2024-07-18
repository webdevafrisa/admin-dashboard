import SideNav from "@/components/Navigation/SideNav";

export const metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex  flex-row text-black">
      <aside className="w-56">
        <SideNav />
      </aside>

      <main className="bg-white flex-1 py-24 px-14"> {children}</main>
    </div>
  );
}