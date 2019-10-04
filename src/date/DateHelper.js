import { formatRelative } from "date-fns";

export default function stringifyTimestamp(timestamp) {
  if (typeof timestamp === "undefined") {
    return "n/a";
  } else {
    return formatRelative(new Date(timestamp), Date.now());
  }
}
