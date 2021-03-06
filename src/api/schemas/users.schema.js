import Joi from 'joi';

/**
 * Generic user schema to be used in other Joi ObjectSchema.
 */
const UserSchema = {
  firstname: Joi.string().min(2).trim(true),
  lastname: Joi.string().min(2).trim(true),
  email: Joi.string().email(),
  password: Joi.string().min(6).trim(true).prefs({ abortEarly: true }).messages({
    'string.min': 'Password must be at least 6 characters long.',
  }),
};

/**
 * Joi ObjectSchema to validate register inputs.
 */
export const register = Joi.object({
  firstname: UserSchema.firstname.required(),
  lastname: UserSchema.lastname.required(),
  email: UserSchema.email.required(),
  password: UserSchema.password.required(),
});

/**
 * Joi ObjectSchema to validate login inputs.
 */
export const login = Joi.object({
  email: UserSchema.email.required(),
  password: UserSchema.password.required(),
});

/**
 * Joi ObjectSchema to validate forgotPassword input.
 */
export const forgotPassword = Joi.object({
  email: UserSchema.email.required(),
});

/**
 * Joi ObjectSchema to validate resetPassword inputs.
 */
export const resetPassword = Joi.object({
  password: UserSchema.password.required(),
  resetToken: Joi.string().required().messages({
    'any.required': 'Reset token is required.',
  }),
});
