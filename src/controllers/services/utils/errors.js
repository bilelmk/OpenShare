import {AuthenticationError, UserInputError, ForbiddenError, ApolloError} from 'apollo-server-errors'
export const INVALID_EMAIL_OR_PASSWORD_ERROR = new UserInputError('Invalid email or password')
export const TOKEN_IS_MISSING_ERROR = new AuthenticationError('Auth token is not supplied')
export const UNVALID_TOKEN_ERROR = new AuthenticationError( 'Token is unvalid')
export const MEMBER_ID_NOT_FOUND = (id)=> new UserInputError(`Member Id ${id} is not found`)
export const SELECTION_OPTIONS_MISSING = (entity) => new UserInputError(`selection options are missing \n entity: ${entity}`)
export const UNVALID_SELECTION_OPTIONS = (entity, options) => new UserInputError(`selection options are unvalide \n entity: ${entity}\n options: ${options}`)
export const ACCESS_DENIED = new ForbiddenError( 'you don\'t have the permition to this action')
export const MEMBER_MUST_BELONGS_TO_CHANNEL = new ForbiddenError('member must belong to channel')
export const MEMBER_MUST_BELONGS_TO_MESSENGER = new ForbiddenError('member must belong to messenger')
export const CHANNEL_ALREADY_EXISITS = new UserInputError('channel already exists')
export const FAILED_TO_SAVE_MESSENGER = new ApolloError( 'failed to save new messenger')
export const MESSENGER_ALREADY_EXISITS = new UserInputError('messenger already exists')
export const AUTHENTICATED_MEMBER_IS_NOT_ADMIN = new AuthenticationError( 'authenticated member is not an admin')
export const FAILED_TO_SAVE_EVENT = new ApolloError( 'failed to save new event')
export const UNIQUE_CONSTRAINT_VIOLATION = (entity, key, value) => new UserInputError( `this ${key} of value ${value} for ${entity} is already taken`)
export const VALIDATION_ERROR = (entity, keys, errors) => new UserInputError(`validation error on entity ${entity} 
    ${keys.map((key) => `${key}: ${errors[key].message}`)}
`) 
