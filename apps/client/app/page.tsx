import { Button } from "@genii/ui/components/button";
export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Welcome to Genii Courses</h1>
      <p className="text-lg mb-6">
        Learn with AI-powered personalized courses designed to increase your motivation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Course cards will go here */}
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
