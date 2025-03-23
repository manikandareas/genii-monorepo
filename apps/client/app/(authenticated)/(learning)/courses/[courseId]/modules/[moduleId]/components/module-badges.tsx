interface Badge {
  id: string;
  name: string;
  description: string;
  image?: string;
}

interface ModuleBadgesProps {
  badges: Badge[];
}

export function ModuleBadges({ badges }: ModuleBadgesProps) {
  if (badges.length === 0) return null;

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-3">Badges you can earn</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {badges.map((badge) => (
          <div key={badge.id} className="flex items-center p-4 rounded-lg border bg-slate-50">
            <div className="flex-shrink-0 h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
              {/* Badge icon/image */}
              {badge.image ? (
                <img
                  src={badge.image}
                  alt={badge.name}
                  className="h-8 w-8"
                  onError={(e) => {
                    // Fallback to default icon on image load error
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15.5H8V11.5H12V7.5H16V11.5H20V15.5H16V19.5H12V15.5Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </div>
            <div>
              <h4 className="font-medium">{badge.name}</h4>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
