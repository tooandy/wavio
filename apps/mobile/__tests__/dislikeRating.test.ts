import { isDisliked, toggleDislikeRating } from "@/utils/dislikeRating";

describe("dislike rating", () => {
  it.each([undefined, null, 0, 2, 3, 4, 5])(
    "sets a non-disliked rating (%s) to one star",
    (rating) => {
      expect(isDisliked(rating)).toBe(false);
      expect(toggleDislikeRating(rating)).toBe(1);
    },
  );
  it("clears a one-star rating when toggled again", () => {
    expect(isDisliked(1)).toBe(true);
    expect(toggleDislikeRating(1)).toBe(0);
  });
});
