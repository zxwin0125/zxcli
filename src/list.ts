export interface ListOptions {
	json: boolean;
}

export default async (
	owner: string = 'zxcli-templates',
	options: ListOptions = { json: false }
): Promise<void> => {
	console.log('========== list ==========');
	console.log(owner);
	console.log(options);
};
