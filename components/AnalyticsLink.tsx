"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type AnalyticsLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventParams?: Record<string, string | number | boolean>;
  children: ReactNode;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function AnalyticsLink({
  eventName,
  eventParams,
  onClick,
  children,
  ...props
}: AnalyticsLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        window.gtag?.("event", eventName, eventParams ?? {});
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
