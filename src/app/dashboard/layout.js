export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-gray-900 text-white p-4">
        <p className="font-bold mb-4">Admin Panel</p>
        <nav className="space-y-2 flex flex-col gap-y-2">
          <a href="/dashboard/groups">Groups</a>
          <a href="/dashboard/students">Students</a>
          <a href="/dashboard/lessons">Lessons</a>
          <a href="/dashboard/payments">Payments</a>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
