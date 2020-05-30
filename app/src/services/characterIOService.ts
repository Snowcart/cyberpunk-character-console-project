import Character from 'src/models/Character';
import fileDownload from 'js-file-download';

export const importCharacter = (json: string) => {
	const data = JSON.parse(json);

	const character = Object.assign(new Character(), data);

	return character;
};

export const exportCharacter = (character: Character) => {
	const json = JSON.stringify(character);
	const filename = `${character.name} ${Date.now().toLocaleString()}`.replace(/[^a-z0-9]/gi, '_').toLowerCase();
	fileDownload(json, `${filename}.json`);
};
