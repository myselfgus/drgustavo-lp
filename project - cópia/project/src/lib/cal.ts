// Cal.com Integration Utility

export const initCal = () => {
  if (typeof window === 'undefined') return;

  ((host: any, doc: Document) => {
    const existing = host.Cal;
    const cal =
      existing ||
      function (...args: unknown[]) {
        (cal.q = cal.q || []).push(args);
      };

    host.Cal = cal;
    cal.q = cal.q || [];
    cal.ns = cal.ns || {};

    const script = doc.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.defer = true;
    doc.head.appendChild(script);
  })(window as any, document);
};

export const openCalModal = (calLink: string) => {
  if (typeof window === 'undefined' || !(window as any).Cal) return;

  (window as any).Cal("modal", {
    calLink,
    config: {
      theme: "light",
      branding: {
        brandColor: "#1A1A1A"
      }
    }
  });
};
