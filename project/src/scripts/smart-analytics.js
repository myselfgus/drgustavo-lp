// Analytics Inteligente - envia eventos pro agente IA que decide tudo
(function() {
  const sessionId = crypto.randomUUID();
  let eventQueue = [];

  // Observer de seções
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const event = {
          type: 'section_view',
          section: entry.target.id,
          timestamp: new Date().toISOString(),
          scroll_depth: Math.round((window.scrollY / document.body.scrollHeight) * 100),
          session_id: sessionId,
          viewport_height: window.innerHeight,
          section_height: entry.target.offsetHeight
        };

        eventQueue.push(event);

        // A cada 5 eventos, envia pro agente
        if (eventQueue.length >= 5) {
          sendToAgent();
        }
      }
    });
  }, { threshold: 0.5 });

  // Observa todas as seções
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // Track de cliques importantes
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-open-cal], a[href*="wa.me"]');
    if (target) {
      const event = {
        type: 'conversion_intent',
        action: target.dataset.openCal ? 'agendar' : 'whatsapp',
        timestamp: new Date().toISOString(),
        session_id: sessionId,
        from_section: document.querySelector('section:hover')?.id || 'unknown'
      };

      eventQueue.push(event);
      sendToAgent();
    }
  });

  // Envia eventos pro agente IA
  async function sendToAgent() {
    if (eventQueue.length === 0) return;

    const events = [...eventQueue];
    eventQueue = [];

    try {
      await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: {
            batch: events,
            session_summary: {
              total_events: events.length,
              session_id: sessionId,
              user_agent: navigator.userAgent,
              referrer: document.referrer
            }
          }
        })
      });
    } catch (err) {
      console.error('Analytics error:', err);
    }
  }

  // Envia eventos pendentes ao sair da página
  window.addEventListener('beforeunload', () => {
    if (eventQueue.length > 0) {
      navigator.sendBeacon('/api/agent', JSON.stringify({
        event: {
          batch: eventQueue,
          session_end: true
        }
      }));
    }
  });
})();
