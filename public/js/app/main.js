import Character from './models/character';
import Characters from './models/characters';

class Application {

	constructor () {
		$('h1').html('Pulp Fiction Characters!');

		var vincent = new Character({ id: 1, firstName: 'Vincent', lastName: 'Vega' });
		var jules = new Character({ id: 2, firstName: 'Jules', lastName: 'Winnfield' });

		var characters = new Characters();

		characters.add(vincent);
		characters.add(jules);

		$('ul').html(characters.models.reduce((previous, current) => {
			return previous + `
				<li>${current.id} ${current.firstName} ${current.lastName}</li>
			`;
		}, ''));

	}

}

$(() => {
	new Application();
});