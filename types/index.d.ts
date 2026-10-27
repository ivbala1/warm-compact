// What warm-compact keeps in $.state: the armed timer of the session, so a
// reload of the module (which drops its timers) can arm it again, and the mark
// that a surface has drawn the session, so a reload while it is hidden does
// not take it for a headless run.
declare module 'claude-code' {
  interface PluginState {
    'warm-compact': {
      armed: WarmCompactArmed | null;
      drawn: WarmCompactDrawn | null;
    };
  }
}

export type WarmCompactDrawn = {
  sessionId: string;
};

export type WarmCompactArmed = {
  sessionId: string;
  // When the main loop last sent a request to the model, in $.clock.now() ms.
  lastRequestAt: number;
};
