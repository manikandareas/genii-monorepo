interface ModuleProgressProps {
  progress: number;
}

export function ModuleProgress({ progress }: ModuleProgressProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-muted-foreground">Progress</span>
        <span className="text-sm font-medium">{progress}%</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2.5">
        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
