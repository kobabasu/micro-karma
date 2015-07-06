# micro-karma

`hub clone kobabasu/micro-karma karma`

## npm
1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. package.json.sampleを確認。流用する場合はリネーム  
   `mv package.json.sample package.json`
1. `npm install`

## karma
1. karma.config.jsを作成。流用する場合はリネーム  
   `karma init` or `mv karma.config.js.sample karma.config.js`

## check
1. `npm test`
1. すべてsuccessならOK
