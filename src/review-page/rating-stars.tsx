import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import { HeartIcon } from "lucide-react";

const RatingStars = ({ total = 5 }) => (
  <Rating defaultValue={0}>
    {Array.from({ length: total }).map((_, index) => (
      <RatingButton
        key={index}
        icon={<HeartIcon className="h-6 w-6 text-red-500" />}
        aria-label={`Rate ${index + 1} hearts`}
      />
    ))}
  </Rating>
);

export default RatingStars;
