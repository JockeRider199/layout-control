import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.Disposable.from(
		vscode.commands.registerCommand('layout-control.activate-sidebar', () => {
			vscode.commands.executeCommand("workbench.action.toggleSidebarVisibility");
		}),

		vscode.commands.registerCommand('layout-control.desactivate-sidebar', () => {
			vscode.commands.executeCommand("workbench.action.toggleSidebarVisibility");
		}),

		vscode.commands.registerCommand("layout-control.activate-panel", () => {
			vscode.commands.executeCommand("workbench.action.togglePanel");
		}),

		vscode.commands.registerCommand("layout-control.desactivate-panel", () => {
			vscode.commands.executeCommand("workbench.action.togglePanel");
		}),
	);

	context.subscriptions.push(disposable);
}

export function deactivate() {}
