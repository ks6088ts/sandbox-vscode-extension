import * as vscode from 'vscode';
import {getDateFormat} from './dateformat';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('sandbox-vscode-extension.sendMail', () => {
			let sender = vscode.workspace.getConfiguration("sandbox").sender;
			let receiver = vscode.workspace.getConfiguration("sandbox").receiver;
			let subject = "[" + sender + "]";
			let body = "hello world @ " + getDateFormat(new Date());
			vscode.window.showInformationMessage(sender);
			vscode.env.openExternal(
				vscode.Uri.parse("mailto:" + receiver + "?subject=" + subject + "&body=" + body)
			);
		})
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
