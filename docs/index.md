# 作業ログ

```bash
# install modules
npm install -g \
    npm \
    yo \
    generator-code \
    typescript

# setup project
yo code

# open repository
code sandbox-vscode-extension/
```

**動作確認**

1. press `F5` to open Extension Development Host window
2. Run the `Hello World` command from the command palette(`Ctrl+Shift+P`)
3. Update `src/extension.ts`
4. reload window on Extension Development Host window and run `Hello world` command

**リリース**

```bash
npm install -g vsce
cd sandbox-vscode-extension

# publisher, repository を package.json に追記
# vsix ファイルを生成
vsce package

# vsix ファイルをインストール
code --install-extension sandbox-vscode-extension-0.0.1.vsix

# アンインストール
code --uninstall-extension <extension-id>
```

# リンク

- [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension)
