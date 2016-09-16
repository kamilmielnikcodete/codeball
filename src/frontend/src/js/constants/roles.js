import { _ } from 'utils';

export const ROLE_ADMIN = 'ROLE_ADMIN';
export const ROLE_USER = 'ROLE_USER';

export const ROLE_STRING = {
  [ROLE_ADMIN]: 'Admin',
  [ROLE_USER]: 'User'
};

export const ROLES = _(ROLE_STRING).keys();

export const ROLE_OPTIONS = ROLES.map(role => ({
  label: `${ROLE_STRING[role]}`,
  value: role
}));

export const PERMISSION_ADD_GAME = 'PERMISSION_ADD_GAME';
export const PERMISSION_ADD_PITCH = 'PERMISSION_ADD_PITCH';
export const PERMISSION_ADD_USER = 'PERMISSION_ADD_USER';
export const PERMISSION_CHANGE_ANOTHER_USER_ENROLLMENT_STATUS = 'PERMISSION_CHANGE_ANOTHER_USER_ENROLLMENT_STATUS';
export const PERMISSION_CLOSE_ENROLMENT = 'PERMISSION_CLOSE_ENROLMENT';
export const PERMISSION_DRAW_TEAMS = 'PERMISSION_DRAW_TEAMS';
export const PERMISSION_EDIT_GAME_SCORE = 'PERMISSION_EDIT_GAME_SCORE';
export const PERMISSION_END_GAME = 'PERMISSION_END_GAME';
export const PERMISSION_ENROLL = 'PERMISSION_ENROLL';
export const PERMISSION_ENROLL_ANOTHER_USER = 'PERMISSION_ENROLL_ANOTHER_USER';

export const ROLES_PERMISSIONS = {
  [ROLE_ADMIN]: {
    [PERMISSION_ADD_GAME]: true,
    [PERMISSION_ADD_PITCH]: true,
    [PERMISSION_ADD_USER]: [ROLE_ADMIN, ROLE_USER],
    [PERMISSION_CHANGE_ANOTHER_USER_ENROLLMENT_STATUS]: true,
    [PERMISSION_CLOSE_ENROLMENT]: true,
    [PERMISSION_DRAW_TEAMS]: true,
    [PERMISSION_EDIT_GAME_SCORE]: true,
    [PERMISSION_END_GAME]: true,
    [PERMISSION_ENROLL]: true,
    [PERMISSION_ENROLL_ANOTHER_USER]: true
  },

  [ROLE_USER]: {
    [PERMISSION_ADD_GAME]: true,
    [PERMISSION_ADD_PITCH]: false,
    [PERMISSION_ADD_USER]: [ROLE_USER],
    [PERMISSION_CHANGE_ANOTHER_USER_ENROLLMENT_STATUS]: false,
    [PERMISSION_CLOSE_ENROLMENT]: false,
    [PERMISSION_DRAW_TEAMS]: false,
    [PERMISSION_EDIT_GAME_SCORE]: false,
    [PERMISSION_END_GAME]: false,
    [PERMISSION_ENROLL]: true,
    [PERMISSION_ENROLL_ANOTHER_USER]: true
  }
};
