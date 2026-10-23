// What warm-compact keeps in $.state: the armed timer of the session, so a
// reload of the module (which drops its timers) can arm it again.
declare module 'claude-code' {
  interface PluginState {
    'warm-compact': {
      armed: WarmCompactArmed | null;
    };
  }
}

export type WarmCompactArmed = {
  sessionId: string;
  // When the main loop last sent a request to the model, in $.clock.now() ms.
  lastRequestAt: number;
};
