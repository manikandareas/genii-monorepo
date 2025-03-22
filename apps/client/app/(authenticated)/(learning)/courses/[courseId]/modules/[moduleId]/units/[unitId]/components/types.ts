export type Unit = {
  id: string;
  title: string;
  completed: boolean;
  active: boolean;
};

export type Module = {
  id: string;
  title: string;
  progress: number;
  active: boolean;
  units: Unit[];
};

export type ChapterContent = {
  section: number;
  chapter: number;
  totalChapters: number;
  title: string;
  content: string[];
  example: string;
  progress: number;
};

export type Discussion = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  message: string;
  timestamp: string;
  replies: number;
};

export type Note = {
  id: string;
  content: string;
  timestamp: string;
  pinned: boolean;
};
