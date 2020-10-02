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

**Node.js のプロキシ設定**
```bash
npm -g config set proxy http://<server>:<port>
npm -g config set https-proxy http://<server>:<port>
```

# リンク

- [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension)
- [Windows10でnode/npm周りにproxy設定する備忘録](https://qiita.com/flat-8-kiki/items/f71f5375a053fab01033)
- [『プログラマーのためのVisual Studio Codeの教科書』（マイナビ出版）](https://github.com/vscode-textbook)
- [vscode-extension-ci/.github/workflows/vscode.yml](https://github.com/vscode-textbook/vscode-extension-ci/blob/master/.github/workflows/vscode.yml)