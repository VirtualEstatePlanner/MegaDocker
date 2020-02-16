import { IMite } from '../interfaces/IMite';

/**
 * an array of all the Mites in the current Mob
 * TODO: make programmatically generated array from userMob
 */
export const userMobMites: IMite[] = [];

/**
 * a string with all of the YML necessary to make a docker-compose.yml file for the current Mob
 */
export const mobOutputString: string = userMobMites.concat.toString();
