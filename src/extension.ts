import * as vscode from 'vscode';

export const activate = (context: vscode.ExtensionContext) : void => {
	console.log('Congratulations, your extension "goko" is now active!');

	let disposable: vscode.Disposable = vscode.commands.registerCommand('goko.helloWorld', () => {
		vscode.window.showInformationMessage('This is my first vscode extension');
	});

	let disposable2 = vscode.commands.registerCommand("goko.anotherOne", () => {
		vscode.window.showInputBox().then((val) => console.log(`did you entered ${val}`));
	});

	context.subscriptions.push(disposable, disposable2);
};

export const deactivate = () : void => {};
