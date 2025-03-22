import { CourseOverview } from "@genii/dto";
import { Accordion, AccordionContent, AccordionItem } from "@genii/ui/components/accordion";
import * as AccordionPrimitive from "@genii/ui/components/accordion";
import { Avatar } from "@genii/ui/components";
import { ChevronRight, Star } from "lucide-react";

type ReviewSectionProps = {
  reviews: CourseOverview["reviews"];
  averageRating: number;
  totalReviews: number;
};

const ReviewSection = ({ reviews, averageRating, totalReviews }: ReviewSectionProps) => {
  // Generate empty array for rating display
  const generateRatingStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}
        />
      ));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Student Reviews</h2>
        <div className="flex items-center">
          <div className="flex mr-2">{generateRatingStars(Math.round(averageRating))}</div>
          <span className="text-muted-foreground">
            ({averageRating.toFixed(1)}) · {totalReviews} reviews
          </span>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full border rounded-lg overflow-hidden">
        <AccordionItem value="reviews">
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-4 px-5 text-left font-medium transition-all hover:bg-muted/30 data-[state=open]:bg-muted/20">
              <span>See all reviews</span>
              <ChevronRight
                size={16}
                className="shrink-0 text-muted-foreground transition-transform duration-200 data-[state=open]:rotate-90"
                aria-hidden="true"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className="px-5 pb-4 pt-1">
            <div className="space-y-4">
              {reviews && reviews.length > 0 ? (
                reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                  >
                    <div className="flex items-start">
                      <Avatar className="h-10 w-10 mr-3">
                        <div className="bg-primary/10 rounded-full h-full w-full flex items-center justify-center">
                          <span className="text-primary font-medium text-sm">
                            {review.user_id.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">User {review.user_id}</p>
                          <span className="text-xs text-muted-foreground">
                            {review.created_at instanceof Date
                              ? review.created_at.toLocaleDateString()
                              : new Date().toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex my-1">
                          {generateRatingStars(Number(review.rating))}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{review.comments}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4">
                  <p className="text-muted-foreground">No reviews yet for this course.</p>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export { ReviewSection };
