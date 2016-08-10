import { model } from 'utils';
import { isInteger } from 'utils/validation';
import { ENROLLMENT_STATUS_YES } from 'constants';

const EnrollUserModel = model({
  defaultAttributes: () => ({
    userId: undefined,
    enrollmentStatus: ENROLLMENT_STATUS_YES
  }),

  validators: {
    isUserIdValid({ userId }) {
      return isInteger(userId);
    }
  }
});

export default EnrollUserModel;
