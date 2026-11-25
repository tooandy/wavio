export function isDisliked(rating: number | null | undefined): boolean {
  return rating === 1;
}

export function toggleDislikeRating(rating: number | null | undefined): 0 | 1 {
  return isDisliked(rating) ? 0 : 1;
}
