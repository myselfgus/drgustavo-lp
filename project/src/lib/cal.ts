// Cal.com Integration Utility

export const initCal = () => {
  if (typeof window === 'undefined') return;

  (function (C: any, A: any, L: any) {
    let p = function (a: any, ar: any) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.q) { cal.q = []; }
      cal.q.push(ar);
    };
    let cal = C.Cal;
    cal.ns = {};
    cal.q = cal.q || [];
    d.head.appendChild(d.createElement("script")).src =
      "https://app.cal.com/embed/embed.js";
  })(window, document);
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
