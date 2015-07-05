# micro-karma

## vagrant
1. hub clone cores/cores-vagrant coreos
1. cd coreos
1. mv user-data.sample user-data
1. mv config.rb.sample config.rb
1. vim Vagrantfile
1. * $instance_name_prefix = "任意の名前"
1. * NFCの設定
1. * config.vm.network 80->8080, 443->3443, 3306->3306
1. vagrant up
1. vagnrat ssh

## docker
1. apache
```
docker run --net=host --name -p 80:80 -p 443:443 -v /home/core/share/app:/var/www/html -d kobabasu/apache:0.21
```
1. exit

## app
1. package.json内preinstallでglobalに必要なものを確認
1. package.json.sampleをリネームか編集
1. `karma init`でkarma.config.jsを作成
1. npm install
1. npm run test

## 確認
1. http://localhost:8080/で確認
