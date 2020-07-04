enum EPersona {
  NotSelected = 0,
  Economic = 1,
  Premium = 2,
}

export interface TUserInitialState {
  name: string;
  email: string;
  persona: EPersona;
}
