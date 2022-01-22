import jsonwebtoken from 'jsonwebtoken';
import environmentObject from './EnvironmentVariables';
export const tokenGenerator: Function = (id: number): string => {
  return jsonwebtoken.sign(id.toString(), environmentObject.JWTSecretToken as string);
};