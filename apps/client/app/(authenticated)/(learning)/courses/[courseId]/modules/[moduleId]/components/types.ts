export interface Module {
  id: string;
  title: string;
  description: string;
  progress: number;
  isPersonalized: boolean;
  canBePersonalized: boolean;
  badges: Badge[];
  units: Unit[];
  nextUnit?: NavigationItem;
  previousModule?: NavigationItem;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export interface Unit {
  id: string;
  title: string;
  completed: boolean;
  active: boolean;
}

export interface NavigationItem {
  id: string;
  title: string;
}
