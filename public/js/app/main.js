import Character from './models/character';
import Characters from './models/characters';
import CharactersView from './views/charactersView';

class Application {

	constructor () {
		$('h1').html('Hold on to your butts, ES6 bitches!');

		var characters = new Characters();

		var charactersView = new CharactersView(characters);

		characters.fetch().done(() => {

			if (characters.size() == 0) { /* there is no motherfucking character in db */

				var vincent = new Character({ firstName: 'Vincent', lastName: 'Vega' });
				var jules = new Character({ firstName: 'Jules', lastName: 'Winnfield' });
				var mia = new Character({ firstName: 'Mia', lastName: 'Wallace' });

				vincent.save().done(
					() => jules.save().done(
						() => mia.save().done(
							() => characters.fetch().done(console.info(characters))
						)
					)
				);

			} else { /* yeah, there is bitch! show them, motherfucker */

				console.info(characters);

			}

		});

	}

}

$(() => {
	new Application();
});