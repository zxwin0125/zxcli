const path = require('path');
const writePackageJson = require('./writePackageJson');
const prompts = require('prompts');

const confirmAndWritePackageJson = async responses => {
	const packageJsonPath = path.join(__dirname, 'package.json');
	const packageJsonContent = {
		name: responses.packageName,
		version: responses.version,
		main: responses.entryFile,
		scripts: {
			test:
				responses.testCommand || 'echo "Error: no test specified" && exit 1',
		},
		author: responses.author,
		license: responses.license,
		description: responses.description,
	};

	const preview = `
About to write to ${packageJsonPath}:

${JSON.stringify(packageJsonContent, null, 2)}
`;

	const confirmation = await prompts([
		{
			type: 'toggle',
			name: 'confirm',
			message: preview + '\nIs this OK?',
			initial: true,
			active: 'yes',
			inactive: 'no',
		},
	]);

	if (confirmation.confirm) {
		writePackageJson(packageJsonContent);
	} else {
		console.log('Operation cancelled by user.');
	}
};

module.exports = confirmAndWritePackageJson;
