export type AnalyticsEventName =
  | "article_click"
  | "pdf_click"
  | "line_click"
  | "official_info_click"
  | "risk_answer"
  | "risk_result"
  | "risk_reset";

export type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

type PlausibleWindow = Window & {
  plausible?: (eventName: string, options?: { props?: AnalyticsPayload }) => void;
  gtag?: (command: "event", eventName: string, payload?: AnalyticsPayload) => void;
};

export function trackEvent(eventName: AnalyticsEventName, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  const analyticsWindow = window as PlausibleWindow;

  analyticsWindow.plausible?.(eventName, { props: payload });
  analyticsWindow.gtag?.("event", eventName, payload);

  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", eventName, payload);
  }
}
