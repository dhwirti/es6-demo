class CharactersView {
	
	constructor (charactersCollection) {
		charactersCollection.addObserver(this);
		this.collection = charactersCollection;
		this.list = $('charactersList');
	}

	render () {
		this.list.html(this.collection.models.reduce((previous, current) => {
			return previous +
				`<li><h3>
					${current.id()} :
					${current.get('firstName')}
					${current.get('lastName')}
				</h3></li>`;
		}, '<ul>') + '</ul>');
	}

	update (context) {
		this.render();
	}

}

export default CharactersView;