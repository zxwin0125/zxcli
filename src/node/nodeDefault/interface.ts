export interface PromptsData {
	projectName: string;
}

export interface Responses {
	packageName: string;
	version: string;
	description: string;
	entryFile: string;
	testCommand: string;
	gitUrl: string;
	keywords: string;
	author: string;
	license: string;
}

export interface PackageJsonDefaultContent {
	name: string;
	version: string;
	main: string;
	scripts: {
		test: string;
	};
	author: string;
	license: string;
	description: string;
}
