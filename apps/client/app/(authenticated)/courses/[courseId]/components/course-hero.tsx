import { HeroVideoDialog } from "@/components/hero-video-dialog";
import { cn } from "@genii/ui/lib/utils";
import Image from "next/image";

type CourseHeroProps = {
  title: string;
  thumbnail: string;
  trailer?: string;
};

export function CourseHero({ title, thumbnail, trailer }: CourseHeroProps) {
  return (
    <div className="space-y-6">
      <div
        className={cn(
          "relative w-full rounded-xl overflow-hidden shadow-md transition-all group h-fit ",
          {
            "h-[400px]": !trailer,
          }
        )}
      >
        {!trailer && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        )}
        {trailer ? (
          <HeroVideoDialog thumbnailSrc={thumbnail} videoSrc={trailer} thumbnailAlt={title} />
        ) : (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{title}</h1>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm mr-4">
          <Image
            src={"/genii-white.svg"}
            alt={"GE"}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">A course by</p>
          <p className="font-semibold">Genii Edu</p>
        </div>
      </div>
    </div>
  );
}
