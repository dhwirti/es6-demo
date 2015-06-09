import Collection from '../core/collection';
import Character from './character';

class Characters extends Collection {

	constructor (characters) {
		super(Character, '/characters', characters);
	}
	
}

export default Characters;