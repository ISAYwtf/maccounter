# Code conventions

## Commits

Для правильного версионирования пакетов и генерации CHANGELOG необходимо создавать коммиты по
спецификации [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Также в коммите нужно указывать задачу, в рамках которой ведется работа.

### Формат

```
<type>[optional scope]: <subject>

[optional body]

[optional footer(s)]
```

`type` – тип коммита, который будет отображен в CHANGELOG. Для каждого npm пакета ведется свой CHANGELOG, в который
попадают изменения, произведенные именно в папке пакета. Например, коммиты, касающиеся файлов в папке `app/assets`
не повлияют на CHANGELOG в `app/utils`, и наоборот. Для автоматической генерации используются следующие типы
коммитов:

- `feat` – добавление новой функциональности в библиотеку. Это может быть новый компонент (функция) или
доработка уже существующих;
- `fix` – исправление багов, ошибок и прочего;
- `refactor` – изменение поведения компонента, либо внутренней организации кода в библиотеке;
- `style` – изменение визуального отображения компонентов, без изменений в логике работы;
- `tech` – изменения в коде, связанные с dev-окружением, но не относящиеся к коду сборки;
- `docs` – изменения в коде документации;
- `test` – добавление/изменение тестов;
- `build` – изменение кода сборки проекта.

`scope` – необязательный параметр, описывающий область кодовой базы, в которую были внесены изменения. Указывается в
круглых скобках.
Пример: `docs(components): Добавлен компонент Switcher`.

`subject` - основной текст коммита, который попадет в CHANGELOG. Если коммит выполнен в рамках работы над задачей (issue),
то `subject` строится по форме `<issue>: <summary>`. Придерживаемся следующего правила: одна задача выполняется в один
коммит. Описание параметров:

- `summary` – название задачи, например: "Исследование и реализация Changelog". При отсутствии задачи в gitHub
кратко указывается назначение коммита;
- `issue` – номер задачи для разработки в gitHub, например `#19`. Некоторые коммиты могут не иметь прямого
  отношения ни к одной из задач gitHub, в таком случае `issue` не указывается.

`body` – полный текст коммита, в генерации CHANGELOG не используется. Здесь может быть список изменений или их подробное
описание. `body` обязательно отделяется пустой строкой сверху, формат написания свободный.

`footer` – отделяется от `body` пустой строкой, может быть использован для описания критических изменений
(см. __Breaking Changes__), или для приведения дополнительной информации в
формате [git trailer format](https://git-scm.com/docs/git-interpret-trailers).

### Breaking Changes

Иногда при развитии библиотеки приходится делать изменения, при которых пропадает совместимость с проектами,
использовавшими предыдущую версию. Такие изменения называются `Breaking Changes` и могут быть добавлены в CHANGELOG
двумя способами:

1) добавление `!` после префикса с типом и скоупом (`<type>[optional scope]!: <subject>`). Используется в том случае,
   когда `subject` коммита совпадает с критическими изменениями.  
   Пример: `refactor!: Убрана поддержка Internet Explorer`


2) добавления футера `BREAKING CHANGE: <subject>`. Желательно использовать в большинстве случаев. Здесь могут
   быть подробно описаны все критические изменения, сообщение может быть многострочным. Критические изменения в логе
__отображаются отдельно от коммита__, поэтому не должны опираться на текст коммита. Пример использования футера
`BREAKING CHANGE` есть ниже.

### Примеры коммитов

Новая фича из gitHub:
```
feat: #25: Добавить локализацию
```

Новая фича из gitHub, с критическими изменениями:
```
feat: #190: Изменение пропсов для button

BREAKING CHANGE: Изменен набор пропсов для button. Удалено свойство mobile.  
```

Исправление бага из gitHub:
```
fix: #218: У ContentPage неправильно заданы отступы
```

Исправление бага, найденного во время разработки:
```
fix: commitlint падает при импорте с помощью import
```

Рефакторинг во время разработки:
```
refactor: Исправлены циклические зависимости
```

Добавление документации:
```
docs: #192: Добавлена документация для функции stringParser
```
