import { format } from "date-fns";

export function stringifyTimestamp(timestamp) {
  return typeof timestamp === "undefined" ? "n/a" : format(new Date(timestamp), "yyyy-MM-dd");
}
