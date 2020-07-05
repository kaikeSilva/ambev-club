enum EPersona {
  NotSelected = 0,
  Economic = 1,
  Premium = 2,
}

enum ENavigationGroup {
  Auth = 0,
  Client = 1,
  Bar = 2,
}

export interface TUserState {
  name: string;
  email: string;
  persona: EPersona;
}

export interface TNavigationState {
  page: string;
  group: ENavigationGroup;
}

export interface TGlobalState {
  navigation: TNavigationState;
  user: TUserState;
}
