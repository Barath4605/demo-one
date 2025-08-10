import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import { HeartIcon } from "lucide-react";

interface RatingStarsProps {
  total?: number;
  rating?: number; // instead of value
  onChange?: (value: number) => void;
}

const RatingStars: React.FC<RatingStarsProps> = ({
  total = 5,
  rating = 0,
  onChange,
}) => {
  return (
    <Rating value={rating} onValueChange={onChange}>
      {Array.from({ length: total }).map((_, index) => (
        <RatingButton
          key={index}
          icon={<HeartIcon className="h-6 w-6 text-red-500" />}
          aria-label={`Rate ${index + 1} hearts`}
        />
      ))}
    </Rating>
  );
};

export default RatingStars;
