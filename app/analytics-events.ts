export type AnalyticsLocation = 'nav' | 'hero' | 'bottom_cta' | 'footer';

export type AnalyticsEventName =
  | 'click_nav_repos_cli'
  | 'click_nav_workflow'
  | 'click_nav_architecture'
  | 'click_nav_install'
  | 'click_install_repos_cli'
  | 'click_view_source'
  | 'click_pypi'
  | 'click_github'
  | 'click_sponsor'
  | 'click_skillkraftz'
  | 'click_trifactoria';

export type AnalyticsEventParams = {
  location: AnalyticsLocation;
  link_url?: string;
  link_text?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: 'event',
      eventName: AnalyticsEventName,
      eventParams?: AnalyticsEventParams,
    ) => void;
  }
}

export function trackEvent(eventName: AnalyticsEventName, eventParams: AnalyticsEventParams) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, eventParams);
}
