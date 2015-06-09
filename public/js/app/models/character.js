import Model from '../core/model';

class Character extends Model {

	constructor (fields) {
		super(fields, '/characters');
	}

}

export default Character;