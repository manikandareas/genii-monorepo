interface ModuleDescriptionProps {
  description: string;
}

export function ModuleDescription({ description }: ModuleDescriptionProps) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-3">About this module</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
