import { Notify } from "quasar";

export const INFO = "info";
export const POSITIVE = "positive";
export const WARNING = "warning";
export const NEGATIVE = "negative";

export const notify = (message, level = "info") => {
  let color = "";
  let icon = "";

  switch (level) {
    case "info":
      color = "info";
      icon = "fal fa-info-circle";
      break;
    case "positive":
      color = "positive";
      icon = "fal fa-check-circle";
      break;
    case "warning":
      color = "warning";
      icon = "fal fa-exclamation-circle";
      break;
    case "negative":
      color = "negative";
      icon = "fal fa-times-circle";
      break;
    default:
      color = "info";
      break;
  }
  Notify.create({
    message,
    color,
    icon,
    textColor: "white",
    actions: [{ label: "X", color: "white" }],
    position: "top-right"
  });
};
