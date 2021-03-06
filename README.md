# Webpack starter kit &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

## Developing

### Prerequisites

Для корректной работы SASS-компилятора и других инструментов, необходимо один
раз глобально поставить дополнительные пакеты, выполнив в терминале следующие
команды. Пользователям MacOS ничего делать не нужно.

Пользователям **Windows**, в режиме администратора.
[Как запусттить Powershell](https://youtu.be/p2tFnxcymwk) в режиме
администратора.

```shell
npm install --global --production windows-build-tools
```

Вот как выглядит процесс успешной установки для пользователей **Windows**.

![Установка windows-build-tools](https://user-images.githubusercontent.com/1426799/45007904-bde9f280-afb4-11e8-8a35-c77dffaffa2a.gif)

Пользователям **Linux**.

```shell
sudo apt-get install gcc g++ make
```

### Setting up Dev

Для быстрого старта необходимо склонировать репозиторий!!!!!!!!!!!      cd ..        d:

```shell
git clone https://github.com/luxplanjay/webpack-starter-kit.git
```
                Yevhenii Ivanov:
                Рекомендую найти нужные команды тут https://git-scm.com/book/ru/v2
                                                    https://use-web.ru/news.php?id=138&tid=3   !!!

Переименовать папку сборки именем вашего проекта.

```shell
mv webpack-starter-kit имя_проекта
rename webpack-starter-kit goit-js-hw-10-food-service
rename webpack-starter-kit goit-js-hw-13-image-finder
    mv webpack-starter-kit goit-js-hw-12-countries
rename webpack-starter-kit goit-js-hw-14-workshop
```

Затем перейти в папку проекта.

```shell
cd имя_проекта
cd goit-js-hw-10-food-service
cd goit-js-hw-13-image-finder
goit-js-hw-14-workshop
```

Находясь в папке проекта удалить папку `.git` связанную с репозиторием сборки
выполнив следующую команду.

```shell
npx rimraf .git
```


//////////////////          
    git init

Установить все зависимости.

```shell
npm install
```

И запустить режим разработки.

```shell
npm start
```
                ctrl + C
                ctrl + C

Во вкладке браузера перейти по адресу
[http://localhost:4040](http://localhost:4040).

### Building

Для того чтобы создать оптимизированные файлы для хостинга, необходимо выполнить
следующую команду. В корне проекта появится папка `build` со всеми
оптимизированными ресурсами.

```shell
npm run build
```

### Deploying/Publishing

Сборка может автоматически деплоить билд на GitHub Pages удаленного (remote)
репозитория. Для этого необходимо в файле `package.json` отредактировать поле
`homepage`, заменив имя пользователя и репозитория на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
"homepage": "https://taras-vlas.github.io/goit-js-hw-10-food-service"
  "homepage": "https://taras-vlas.github.io/goit-js-hw-12-countries"
    "homepage": "https://taras-vlas.github.io/goit-js-hw-13-image-finder"
      "homepage": "https://taras-vlas.github.io/goit-js-hw-14-workshop"
     // "homepage": "https://github.com/luxplanjay/webpack-starter-kit#readme",  
     //"homepage": "https://taras-vlas.github.io/goit-js-hw-15-paginate"
     
```
      + git init
        git add -A
      + git add --all
      + git commit -a -m “hw add - комiт”     (-am ),

    git remote add origin https://github.com/taras-vlas/goit-js-hw-10-food-service.git
      git remote add origin https://github.com/taras-vlas/goit-js-hw-12-countries
        git remote add origin https://github.com/taras-vlas/goit-js-hw-13-image-finder
          git remote add origin https://github.com/taras-vlas/goit-js-hw-14-workshop
    git remote add origin https://github.com/taras-vlas/goit-js-hw-15-paginate      
    git branch -M master
    git push -u origin master

После чего в терминале выполнить следующую команду.

```shell
npm run deploy
```

Если нет ошибок в коде и свойство `homepage` указано верно, запустится сборка
проекта в продакшен, после чего содержимое папки `build` будет помещено в ветку
`gh-pages` на удаленном (remote) репозитории. Через какое-то время живую
страницу можно будет посмотреть по адресу указанному в отредактированном
свойстве `homepage`.

Залишити  Active branches!!!  gh-pages



/webpack/       - залишаю
/src/menu.json  - залишаю
/src/styles.css - залишаю
/src/index.html - знято стилі <!--  <link rel="stylesheet" href="styles.css" />  -->
/src/index.js - вставка:  import './js/menu-template';
                          import './js/themes-change';
/src/templates/menu-items.hbs - створили (шаблон + теми), Шаблоны Handlebars використали: https://handlebarsjs.com/  

/src/images/ - заміна файлів
/src/js/themes-change.js    - добавлено 
/src/js/menu-template.js - шаблон + теми меню


        npm run deploy
        момент Deploying/Publishing
        http://localhost:4040/ 
        
  "repository": {
    "type": "git",
    "url": "git+https://github.com/luxplanjay/webpack-starter-kit.git"
//  "url": "git+https://github.com/taras-vlas/goit-js-hw-10-food-service.git"
  },





    Olya Verbetska:
Я делаю сначала все по инструкции Репеты с Вебпаком
Потом создаю пустой репозиторий на гите, с именем проекта
То есть имя папки с вебпаком на компе и имя репозитория на гите совпадают
Потом на компе заходишь через вскод или терминал в папку с вебпаком
Инициализирую через git init     /////////////////   Ініціалізувати треба !!!   git init

   git init
        git add -A
      + git add --all 
      + git commit -a -m “hw add - комiт”    (-am ),

    git remote add origin https://github.com/taras-vlas/goit-js-hw-10-food-service.git
      git remote add origin https://github.com/taras-vlas/goit-js-hw-13-image-finder
   + git branch -M master
   + git push -u origin master


    

Но тут терминал напишет что ему некуда пушить, и нужно прописать команду с адресом твоего репозитория, чтоб их связать
Он сам тебе подскажет что сделать)
Так же и когда будешь делать npm run deploy, тебе терминал подскажет что прописать чтоб создалась новая ветка

                

... Запустите `npm rebuild node-sass`, чтобы загрузить привязку для вашей текущей среды.
  ... git remote add origin https://github.com/taras-vlas/goit-js-hw-10-food-service
// git remote add origin https://github.com/taras-vlas/goit-js-hw-10-food-service.git
// git branch -M master
// git push -u origin master
-- позволяет связать данный локальный репозиторий с удалённый, причем назначить этот удалённый репозиторий основным (origin)
... Удали сразу стили из html   !!!!!!!
- привязать локальный проект к гиту: Ты же по инструкции удалил папку .git, и тебе нужно указать репозиторий на гит

    Alexandra Gubar: 
Я делаю так же как @Mykhaylo Lyubov. Тут главное создать свой пустой репо без readme и gitignore, а то будут конфликты с этими файлами в сборщике. И в этом пустом репо СТАРТовая страница с командами-подсказками основными.
(удалил папку .git, и тебе нужно указать репозиторий на гит хабе (edited)) 

When I do       git branch -a
                git branch gh-pages



                где искать список библиотек с вебинара Саши Репеты?
https://openbase.com/
https://www.npmjs.com/
https://github.com/luxplanjay/js-18/blob/10-1-libs/README.md



                Консоль Git Bash
Мы будем использовать консоль Git Bash.
Чтобы ее установить/использовать, необходимо установить Git и Git Bash
Установим с сайта: https://git-scm.com.

                Команды в Git Bash консоли
clear — Очистить консоль

Навигация
pwd — Показать текущий каталог
ls - Показать файлы в данной папке, кроме скрытых
ls -f — Показать файлы в данной папке, включая и скрытые
cd c:/ — Перейти в конкретный каталог
cd - — Вернуться назад
cd .. — Выйти на 1 уровень вверх
cd ../.. — Выйти на 2 уровня вверх
          d:
          d:\goit-js-hw-12-countries
          
Создание каталогов
mkdir — Создать папку
cd !$ — Перейти в только что созданную папку
mkdir -p {app1,app2} — Создать сразу несколько папок
mkdir -p app/{css,js} — Создать сразу несколько вложенных папок

Создание файлов
touch index.html — Создать файл index.html
touch app/{css/main.css,js/main.js,index.html} — Создать сразу несколько файлов, никаких лишних пробелов быть не должно

Удаление файлов
touch — позволяет создавать файлы
rm test — Удалить пустую папку test
rm -r test — Удалить папку test с файлами внутри неё

Перемещение файлов
mv app1/*.* app2 — Переместить все файлы из папки app1 в папку app2









pnotify

npm install basiclightbox
npm i --save lodash.debounce
npm install spinjs --save-dev  
npm install spin.js     or save the spin.js and spin.css files in your repository,     spin.js для отображения анимации загрузки https://spin.js.org/

bootstrap/4.4.1  - через HTML


#  СКРОЛ
- Кнопками
- Плагін скрола
              https://infinite-scroll.com/

- Пагінація pagination-controls plagins /WP, js

2. Кастомний скролінг
              https://spin.js.org/
              bootstrap    getbootstrap.com