# micro-karma
`node_modules`にインストールするものはなく、  
すべてグローバルで済むため  
他プロジェクトで使用する場合でも、  
standaloneでも同じ

```
hub clone kobabasu/micro-karma test
```

## npm
**requireがないためbrowserifyは必要ない**

1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. `npm start`
1. `npm install`
1. `npm test`

## karma
1. karma.config.jsを作成。流用する場合はそのまま使用  
   `karma init` or `mv karma.config.js.sample karma.config.js`

## gulp
1. gulp/dir.es6.sampleをコピーしgulp/dir.es6を作成
1. gulp/dir.es6を変更

## run
1. documentRootでgulp testを実行
1. 別コンソールで、documentRootのgulp karma:watchを実行
1. src/HelloSpec.jsxを変更し保存
1. 結果が表示されればOK
