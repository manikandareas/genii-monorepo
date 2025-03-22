"use client";

import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@genii/ui/components";
import { Menu } from "lucide-react";
import { ChapterContent } from "./components/chapter-content";
import { CourseNavigation } from "./components/course-navigation";
import { DiscussionPanel } from "./components/discussion-panel";
import { NotesPanel } from "./components/notes-panel";
import { PageHeader } from "./components/page-header";
import type {
  ChapterContent as ChapterContentType,
  Discussion,
  Module,
  Note,
} from "./components/types";

// Mock data
const MOCK_MODULES: Module[] = [
  {
    id: "module-1",
    title: "Introduction to UI Design",
    progress: 100,
    active: false,
    units: [
      { id: "unit-1-1", title: "Welcome to the course", completed: true, active: false },
      { id: "unit-1-2", title: "What you'll learn", completed: true, active: false },
      { id: "unit-1-3", title: "Tools and resources", completed: true, active: false },
    ],
  },
  {
    id: "module-2",
    title: "Design Principles",
    progress: 75,
    active: true,
    units: [
      { id: "unit-2-1", title: "Contrast and balance", completed: true, active: false },
      { id: "unit-2-2", title: "Color theory basics", completed: true, active: false },
      { id: "unit-2-3", title: "Typography fundamentals", completed: false, active: true },
      { id: "unit-2-4", title: "Layout principles", completed: false, active: false },
    ],
  },
  {
    id: "module-3",
    title: "User Experience",
    progress: 0,
    active: false,
    units: [
      { id: "unit-3-1", title: "User research", completed: false, active: false },
      { id: "unit-3-2", title: "Wireframing", completed: false, active: false },
      { id: "unit-3-3", title: "Prototyping", completed: false, active: false },
      { id: "unit-3-4", title: "User testing", completed: false, active: false },
    ],
  },
];

const MOCK_CHAPTER_CONTENT: ChapterContentType = {
  section: 2,
  chapter: 3,
  totalChapters: 4,
  title: "Typography fundamentals",
  content: [
    "Typography is a crucial element of design that can make or break your user interface. When choosing fonts, consider both readability and how the style aligns with your brand identity.",
    "There are several key typography terms every designer should know: font family, font weight, line height, kerning, and tracking. Each of these properties can be adjusted to create a more refined and readable experience.",
    "When selecting fonts for your design, try to limit yourself to 2-3 font families. Too many different fonts can make your design look unprofessional and confusing.",
    "Establish a clear hierarchy with your typography by using different font weights, sizes, and colors. This helps guide users through your content in the intended order of importance.",
    "Remember: Good typography should be invisible, allowing users to focus on the content rather than the styling.",
  ],
  example:
    "In the example above, we've created a simple notification component with a title, subtitle, and action buttons. Notice how different font weights create a natural hierarchy, guiding the user's eye from the most important information to the action buttons.",
  progress: 75,
};

const MOCK_DISCUSSIONS: Discussion[] = [
  {
    id: "1",
    user: {
      name: "Alex Johnson",
      avatar: "",
    },
    message:
      "I've been struggling with pairing fonts. Any tips for selecting complementary font families?",
    timestamp: "2 days ago",
    replies: 3,
  },
  {
    id: "2",
    user: {
      name: "Maria Rodriguez",
      avatar: "",
    },
    message:
      "The section about font hierarchy was really helpful! I've applied it to my current project and it looks much more professional now.",
    timestamp: "1 day ago",
    replies: 1,
  },
];

const MOCK_NOTES: Note[] = [
  {
    id: "1",
    content: "Remember to check out the resources section for font pairing tools.",
    timestamp: "2 days ago",
    pinned: true,
  },
  {
    id: "2",
    content:
      "Font combinations to try:\n- Roboto + Playfair Display\n- Montserrat + Merriweather\n- Poppins + Lora",
    timestamp: "1 day ago",
    pinned: false,
  },
];

export default function DetailUnitPage() {
  const courseId = "course-1";
  const courseName = "UI/UX Design Fundamentals";
  const currentModuleId = "module-2";
  const currentUnitId = "unit-2-3";
  const overallProgress = 42;
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="container p-4 sm:py-8 mx-auto">
      <div className="flex items-center justify-between ">
        <PageHeader
          section={`Design Principles`}
          chapter={`${MOCK_CHAPTER_CONTENT.chapter}`}
          totalChapters={MOCK_CHAPTER_CONTENT.totalChapters}
          title={MOCK_CHAPTER_CONTENT.title}
          courseId={courseId}
        />

        {/* Mobile navigation toggle - only shown on mobile */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button className="lg:hidden p-2 rounded-md hover:bg-gray-100">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Course navigation</span>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="p-0 w-full sm:w-[350px]">
            <SheetHeader className="sr-only">
              <SheetTitle>Course navigation</SheetTitle>
            </SheetHeader>
            <div className="h-full overflow-y-auto">
              <CourseNavigation
                modules={MOCK_MODULES}
                currentModuleId={currentModuleId}
                currentUnitId={currentUnitId}
                courseId={courseId}
                courseName={courseName}
                overallProgress={overallProgress}
                isMobileSheet={true}
                onClose={() => setSheetOpen(false)}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-6 gap-4 md:gap-6">
        {/* Left sidebar - course navigation (Hidden on mobile, shown on desktop) */}
        <div className="hidden lg:block lg:col-span-2">
          <CourseNavigation
            modules={MOCK_MODULES}
            currentModuleId={currentModuleId}
            currentUnitId={currentUnitId}
            courseId={courseId}
            courseName={courseName}
            overallProgress={overallProgress}
            isMobileSheet={false}
          />
        </div>

        {/* Main content area with tabs */}
        <div className="lg:col-span-4">
          <Tabs defaultValue="content" className="space-y-4 sm:space-y-6">
            <TabsList className="w-fit flex justify-start overflow-x-auto sticky top-5 bg-white/50 backdrop-blur-sm z-50">
              <TabsTrigger className="p-4 data-[state=active]:bg-primary/10" value="content">
                Content
              </TabsTrigger>
              <TabsTrigger className="p-4 data-[state=active]:bg-primary/10" value="discussions">
                Discussions
              </TabsTrigger>
              <TabsTrigger className="p-4 data-[state=active]:bg-primary/10" value="notes">
                Notes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="content">
              <ChapterContent
                chapter={MOCK_CHAPTER_CONTENT}
                onPrevious={() => {}}
                onNext={() => {}}
              />
            </TabsContent>

            <TabsContent value="discussions">
              <DiscussionPanel discussions={MOCK_DISCUSSIONS} />
            </TabsContent>

            <TabsContent value="notes">
              <NotesPanel notes={MOCK_NOTES} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
