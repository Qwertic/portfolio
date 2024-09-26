import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Sorts dates in DD/MM/YYYY format from newest to oldest
 * @param dateA - First date string in DD/MM/YYYY format
 * @param dateB - Second date string in DD/MM/YYYY format
 * @returns number - Positive if dateA is older, negative if dateB is older, 0 if equal
 */
export function sortDateStringsDescending(
  dateA: string,
  dateB: string
): number {
  const [aDay, aMonth, aYear] = dateA.split("/").map(Number);
  const [bDay, bMonth, bYear] = dateB.split("/").map(Number);

  // Create Date objects using the parsed values
  const dateObjA = new Date(aYear, aMonth - 1, aDay);
  const dateObjB = new Date(bYear, bMonth - 1, bDay);

  // Sort in descending order (most recent first)
  return dateObjB.getTime() - dateObjA.getTime();
}
