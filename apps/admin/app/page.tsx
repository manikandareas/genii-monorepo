export default function AdminHome() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Genii Admin Dashboard</h1>
      <p className="text-lg mb-6">
        Manage courses, users, and content for the Genii learning platform.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard cards will go here */}
      </div>
    </div>
  );
}
