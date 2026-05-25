'use client';

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import type { AnalyticsEventName, AnalyticsLocation } from './analytics-events';
import { trackEvent } from './analytics-events';

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  analyticsEvent: AnalyticsEventName;
  analyticsLocation: AnalyticsLocation;
  children: ReactNode;
};

export function TrackedLink({
  analyticsEvent,
  analyticsLocation,
  children,
  href,
  onClick,
  ...props
}: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackEvent(analyticsEvent, {
      location: analyticsLocation,
      link_url: typeof href === 'string' ? href : undefined,
      link_text: event.currentTarget.textContent?.trim() || undefined,
    });

    onClick?.(event);
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
