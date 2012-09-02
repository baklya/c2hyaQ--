({
    block: 'b-page',
    js: true,
    title: 'Ответы на технические вопросы',
    head: [
        {
            tag: 'meta',
            attrs: { 'http-equiv': 'content-type', content: 'text/html; charset=utf-8' }
        },
        { elem: 'css', url: 'css/bootstrap.css' },
	{ elem: 'css', url: 'css/bootstrap-responsive.css' },
	{ elem: 'css', url: 'css/docs.css' },
	{ elem: 'css', url: 'css/prettify.css' },
	{ elem: 'css', url: 'css/print.css', attrs: { 'media': 'print'} },
	'<!--[if lt IE 9]>',
	{ elem: 'js', url: 'js/html5.js' },
        '<![endif]-->',
		
        { elem: 'js', url: 'js/FloatingMenu.js' },
        { elem: 'js', url: 'js/jquery.js' },
        { elem: 'js', url: 'js/prettify.js' },

        { elem: 'js', content: '$(document).ready(function(){ prettyPrint(); initFloatingMenu(\'#left-nav-bar\');})'}

   
    ],
    content: [
        {
            tag: 'header',
            cls: 'jumbotron subhead',
            content: {
                tag: 'div',
                cls: 'container',
                content: [
                    {tag: 'h1', content: 'Ответы на технические вопросы'},
                    {tag: 'p', cls: 'lead', content: 'Матвеева Владимира'}
                ]
            }
        },
        {
            tag: 'div',
            cls: 'container',
            content: [
                {
                    tag: 'div',
                    cls: 'row',
                    content: [
                        {
                            tag: 'div',
                            cls: 'span3',
                            content: 
                            {
                                tag: 'ul',
                                cls: 'nav nav-list bs-docs-sidenav',
                                attrs: { 'id': 'left-nav-bar'},
                                js: true,
                                content: [
                                    {
                                        tag: 'li',
                                        content: {
                                            block: 'b-link',
                                            url: '#debug-ways',
                                            content: 'Способы отладки js-кода'
                                        }
                                    },
                                    {
                                        tag: 'li',
                                        content: {
                                            block: 'b-link',
                                            url: '#browser-events',
                                            content: 'Что происходит в браузере после клика по ссылке?'
                                        }
                                    },
                                    {
                                        tag: 'li',
                                        content: {
                                            block: 'b-link',
                                            url: '#auto-trader',
                                            content: 'Автосалон'
                                        }
                                    },
                                    {
                                        tag: 'li',
                                        content: {
                                            block: 'b-link',
                                            url: '#file-search',
                                            content: 'Поиск файлов'
                                        }
                                    },
                                    {
                                        tag: 'li',
                                        content: {
                                            block: 'b-link',
                                            url: '#print-args',
                                            content: 'Программа, реализованная на Bash, Python и Perl'
                                        }
                                    },
                                    {
                                        tag: 'li',
                                        content: {
                                            block: 'b-link',
                                            url: '#experience',
                                            content: 'Мой опыт'
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            tag: 'div',
                            cls: 'span9',
                            content: [
                                {
                                    block: 'b-answer',
                                    sid: 'debug-ways',
                                    h1: '1. Способы отладки js-кода',
                                    lead: 'Перечислите известные вам инструменты и приёмы для отладки кода в разных браузерах.',
                                    content: [
                                        {tag: 'h2', content: 'alert()'},
                                        {tag: 'p', content: 'Останавливает поток, малоинформативен. Советуют <strong>не пользоваться</strong> им.'},
                                        {tag: 'h2', content: 'Встроенные в браузер средства отладки'},
                                        {tag: 'p', content: 'Использование консоли (<strong>Console.log()</strong>) в средствах разработчиков в браузерах:'},
                                        {tag: 'ul', content: [
                                            {tag: 'li', content: 'Firefox:  <strong>Firebug</strong>;'},
                                            {tag: 'li', content: 'Safari,  Chrome:  <strong>WebKit Web Inspector</strong>;'},
                                            {tag: 'li', content: 'Opera:  <strong>Dragonfly</strong>;'},
                                        ]},

                                        {tag: 'h2', content: 'Blackbird'},
                                        {tag: 'p', content: 'Консоль для отладки и журналирования скриптов.'}
   
                                    ]
                                },
                                
                                {
                                    block: 'b-answer',
                                    sid: 'browser-events',
                                    h1: '2. Что происходит в браузере при клике по ссылке?',
                                    lead: 'Опишите своими словами, что происходит в браузерах при клике на ссылку <a href="http://www.yandex.ru/">yandex.ru</a> (полнота ответа — на ваше усмотрение).',
                                    content: [
                                        {tag: 'p', content: 'JavaScript события в браузерах выполняются в две фазы. В первой фазе осуществляется последовательный проход по обработчикам событий от основного DOM элемента (<strong>document</strong>) до целевого элемента, в котором произошло событие, в нашем случае до элемента <strong>&lt;a&gt;</strong>. Это называется фазой захвата (<strong>capturing</strong>). После начинается фаза всплытия (<strong>bubbling</strong>). В ней процесс срабатывания обработчиков события идет по дереву элементов в обратную сторону (от целевого элемента к главному).'},
                                        {tag: 'p', content: 'Далее будет выполнено действие по перенаправлению нас на целевой URL, представленный в атрибуте href, www.yandex.ru. Это действие произойдет <strong>вне зависимости</strong> от того, было ли остановлено всплытие события или нет.'}
                                      
                                    ]
                                },
                                {
                                    block: 'b-answer',
                                    sid: 'auto-trader',
                                    h1: '3. Автосалон',
                                    lead: 'Предположим, что мы представляем автосалон по продаже японских и немецких автомобилей. У нас есть базовые классы и примеры их использования. Допишите недостающий код.',
                                    content: [
                                        {tag: 'pre', cls: 'prettyprint linenums', content: [
'/**\n',
' * Создает экземпляр Машины\n',
' * @this {Car}\n',
' * @param {string} manufacturer Производитель\n',
' * @param {string} model Модель\n',
' * @param {number} year Год производство\n',
' */\n',
'function Car(manufacturer, model, year) {\n',
'    this.manufacturer = manufacturer;\n',
'    this.model = model;\n',
'    this.year = year || new Date().getFullYear();\n',
'    this.getInfo = function(){\n',
'        return this.manufacturer + " " + this.model + " " + this.year\n',
'    };\n',
'    this.getDetailedInfo = function(){\n',
'        return "Производитель: " + this.manufacturer + ". Модель: " + this.model + ". Год: " + this.year\n',
'    };\n',
'    this.toString = function(){\n',
'        return this.getInfo();\n',
'    };\n',
'    this.getCountry = function() {\n',
'        switch (this.manufacturer.toLowerCase()) {\n',
'            case \'bmw\':\n',
'            case \'audi\':\n',
'                return \'Germany\';\n',
'            case \'toyota\':\n',
'                return \'Japan\';\n',
'        }\n',
'    };\n',
'    var rusCurrencyRatio ={\n',
'        \'€\': 40,\n',
'        \'?\': 0.4,\n',
'        \'$\': 32,\n',
'        \'?\': 50\n',
'    };\n',
'    this.getRusCurrencyPrice = function() {\n',
'        if(rusCurrencyRatio[this.currencyType])\n',
'            return this.price * rusCurrencyRatio[this.currencyType] + \' RUR\';\n',
'        else\n',
'            if(this.price)\n',
'                return this.price + \' RUR\';\n',
'            else\n',
'                return \'price have not been declared\';\n',
'    };\n',
'}\n',
'// @TODO: если конструктор вызывается без указания текущего года, то подставлять текущий\n',
'// @TODO: реализовать методы вывода информации о машине:\n',
'// console.log(\'Car: \' + bmw); // Car: BMW X5 2010\n',
'// console.log(bmw.getInfo()); // BMW X5 2010\n',
'// console.log(bmw.getDetailedInfo()); // Производитель: BMW. Модель: X5. Год: 2010\n',
'\n',
'var bmw = new Car("BMW", "X5", 2010),\n',
'    audi = new Car("Audi", "Q5", 2012),\n',
'    toyota = new Car("Toyota", "Camry");\n',
'\n',
'\n',
'/**\n',
' * Создает экземпляр Автосалона\n',
' * @this {CarDealer}\n',
' * @param {string} name Название автосалона\n',
' */\n',
'function CarDealer(name) {\n',
'    this.name = name;\n',
'    this.cars = [];\n',
'    this.add = function(){\n',
'        for( var i = 0; i < arguments.length; i++ )\n',
'            if(arguments[i] instanceof Car)\n',
'                this.cars.push(arguments[i]);\n',
'        return this;\n',
'    };\n',
'    this.setPrice = function(carInfo, price){\n',
'        for( var i = 0; i < this.cars.length; i++ )\n',
'            if(this.cars[i] == carInfo)\n',
'                if(isNaN(price.charAt(0)))\n',
'                {\n',
'                    this.cars[i].currencyType = price.charAt(0);\n',
'                    this.cars[i].price = price.substring(1, price.length);\n',
'                }\n',
'                else\n',
'                    this.cars[i].price = price;\n',
'        return this;\n',
'    };\n',
'    this.list = function(){\n',
'        var chosenCars = [];\n',
'        for( var i = 0; i < this.cars.length; i++ )\n',
'            chosenCars.push(this.cars[i] + \': \' + this.cars[i].getRusCurrencyPrice());\n',
'        return chosenCars.join(", ");\n',
'    };\n',
'    this.listByCountry = function(country){\n',
'        var chosenCars = [];\n',
'        for( var i = 0; i < this.cars.length; i++ )\n',
'            if(this.cars[i].getCountry() == country)\n',
'                chosenCars.push(this.cars[i] + \': \' + this.cars[i].getRusCurrencyPrice());\n',
'        return chosenCars.join(", ");\n',
'    };\n',
'}\n',
'\n',
'var yandex = new CarDealer(\'Яндекс.Авто\');\n',
'\n',
'// @TODO: реализовать метод добавления машин в автосалон. Предусмотреть возможность добавления одной машины, нескольких машин.\n',
'yandex\n',
'    .add(toyota)\n',
'    .add(bmw, audi);\n',
'\n',
'// @TODO: реализовать метод установки цены на машину\n',
'/**\n',
' * Установить цену на машину\n',
' * @param {string} car идентификатор машины\n',
' * @param {string} price стоимость\n',
' */\n',
'// идентификатор машины составляется следующим образом "производитель модель год"\n',
'// стоимость машины может быть задана в двух валютах: йена и евро.\n',
'yandex\n',
'    .setPrice(\'BMW X5 2010\', \'€2000\')\n',
'    .setPrice(\'Audi Q5 2012\', \'€3000\')\n',
'    .setPrice(\'Toyota Camry 2012\', \'?3000\');\n',
'\n',
'yandex.list(); //BMW X5 2010, Audi Q5 2012, Toyota Camry 2012\n',
'yandex.listByCountry(\'Germany\'); //BMW X5 2010, Audi Q5 2012\n',
'\n',
'// @TODO: бонус! выводить список машин с ценой в рублях.\n'
                                        ]}
                                    ]
                                },
                                {
                                    block: 'b-answer',
                                    sid: 'file-search',
                                    h1: '4. Поиск файлов',
                                    lead: 'Найдите все текстовые файлы (*.txt), в имени которых содержится «yandex», а в содержимом — «школа разработки интерфейсов».',
                                    content: {tag: 'code', cls: 'prettyprint', content: 'find . -name "*yandex*.txt" -type f -exec grep -Hn "школа разработки интерфейсов" {} \\;'}
                                },
                                {
                                    block: 'b-answer',
                                    sid: 'print-args',
                                    h1: '5. Программа, реализованная на Bash, Python и Perl',
                                    lead: 'Дана программа, реализованная одновременно на Bash, Python и Perl. Программа принимает произвольное количество аргументов и печатает их количество. Нужно добавить опцию -v для verbose-режима, в котором дополнительно выводится значение каждого из аргументов.',
                                    content: [
                                        {tag: 'h2', content: 'Bash'},
                                        {tag: 'pre', cls: 'prettyprint linenums', content: [
'#!/usr/bin/env bash\n',
'\n',
'usage() {\n',
'cat << EOF\n',
'Usage: printargs.sh [OPTIONS] [ARGUMENTS]\n',
'  Print the number of arguments.\n',
'\n',
'OPTIONS:\n',
'  -h      print help message\n',
'  -m MSG  custom message\n',
'  -v      print arguments\n',
'\n',
'Examples:\n',
'  printargs.sh a b c\n',
'  printargs.sh -m \'Arguments count: \' a b c\n',
'  printargs.sh -h\n',
'  printargs.sh -v a b c\n',
'\n',
'EOF\n',
'}\n',
'\n',
'while getopts "hvm:" OPTION\n',
'do\n',
'    case $OPTION in\n',
'        h)\n',
'            usage\n',
'            exit 1\n',
'            shift;;\n',
'        m)\n',
'            MESSAGE=$OPTARG\n',
'            shift;shift;;\n',
'        v)\n',
'            VERBOSE=1\n',
'            shift;;\n',
'    esac\n',
'done\n',
'if [[ "$#" != "0" ]]; then\n',
'    if [[ "$MESSAGE" != "" ]]; then\n',
'        echo $MESSAGE\n',
'    fi\n',
'\n',
'    echo $#\n',
'\n',
'    if [[ "$VERBOSE" != "" ]]; then\n',
'        echo $@;\n',
'    fi\n',
'else\n',
'    usage\n',
'fi\n'
                                        ]},
                                        {tag: 'h2', content: 'Python'},
                                        {tag: 'pre', cls: 'prettyprint linenums', content: [
'#!/usr/bin/env python\n',
'\n',
'import argparse\n',
'\n',
'parser = argparse.ArgumentParser(description=\'Print the number of arguments.\')\n',
'parser.add_argument(\'arguments\', metavar=\'ARG\', type=str, nargs=\'*\', help=\'some arguments\')\n',
'parser.add_argument(\'-m\', dest=\'message\', default=\'\', help=\'custom message\')\n',
'parser.add_argument(\'-v\', dest=\'verbose\', action=\'store_true\', help=\'print arguments\')\n',
'\n',
'args = parser.parse_args()\n',
'\n',
'count = len(args.arguments)\n',
'\n',
'if(count > 0):\n',
'    if args.message != \'\':\n',
'        print(args.message)\n',
'\n',
'    print(count)\n',
'    if args.verbose:\n',
'        print (\' \'.join(args.arguments));\n',
'else:\n',
'    parser.print_usage();\n'
                                        ]},
                                        {tag: 'h2', content: 'Perl'},
                                        {tag: 'pre', cls: 'prettyprint linenums', content: [
'#!/usr/bin/env perl\n',
'\n',
'use strict;\n',
'use Getopt::Long;\n',
'use Pod::Usage;\n',
'\n',
'my $help;\n',
'my $message = \'\';\n',
'my $verbose;\n',
'\n',
'@ARGV and GetOptions(\n',
'    "h" => \\$help,\n',
'    "m:s" => \\$message,\n',
'    "v" => \\$verbose,\n',
') or pod2usage(1);\n',
'pod2usage(-verbose => 2, -exitval => 2) if $help;\n',
'\n',
'my $count = $#ARGV + 1;\n',
'\n',
'if($message ne "") {\n',
'    print($message . "\\n");\n',
'}\n',
'\n',
'print($count . "\\n");\n',
'\n',
'if ($verbose) {\n',
'    print((join \' \', @ARGV) . "\\n");\n',
'}\n',
'\n',
'__END__\n',
'\n',
'=head1 NAME\n',
'\n',
'    printargs.pl - Print the number of arguments.\n',
'\n',
'=head1 SYNOPSIS\n',
'\n',
'    printargs.pl [options] [arguments]\n',
'\n',
'=head1 OPTIONS\n',
'\n',
'    -h      Show help message.\n',
'\n',
'    -m MSG  Specify a custom message.\n',
'\n',
'    -v      Print arguments.\n',
'\n',
'\n',
'=head1 EXAMPLE\n',
'\n',
'    printargs.sh a b c\n',
'\n',
'    printargs.sh -m \'Arguments count: \' a b c\n',
'\n',
'    printargs.sh -h\n',
'\n',
'    printargs.sh -v a b c\n'
                                        ]},
                                    ]
                                },
                                {
                                    block: 'b-answer',
                                    sid: 'experience',
                                    h1: '6. Мой опыт',
                                    lead: 'Расскажите, в каком объёме и при каких обстоятельствах вы изучали следующие темы: языки программирования (императивные/декларативные, разные системы типов), структуры (классы, структуры данных, примитивные типы), парадигмы (события, ООП, параллельность/асинхронность, кеширование), алгоритмы (парсинг, сортировка, поиск), паттерны.',
                                    content: {tag: 'p', content: 'В детстве у меня был компьютер «байт». На нем я впервые познакомился с языком программирования Basic. В школе с класса 8-го мы изучали опять же Basic. В университете сначала был Pascal и C++. Далее Delphi и С#, а так же Prolog и Lisp. После устроился работать программистом PHP в интернет-магазин. Тогда же более подробно узнал язык JavaScript. Сейчас работаю разработчиком на .NET. Впервые я стал использовать ООП на более-менее внятном уровне, при работе с OpenGL на Delphi. Более глубоко стал применять только недавно. Параллельность и асинхронность так же открыл для себя относительно недавно, около года назад. События – пока это для меня новая тема, и я нахожусь в процессе ее изучения. С парсингом дел никогда не имел. Сортировка – одна из лучших – слиянием. Поиск – были лекции о двоичных деревьях поиска, но так уже не особо помню. Паттерны – узнал об их существовании тоже год назад. Пока их не изучал, использовать не приходилось.'}
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            tag: 'footer',
            cls: 'footer',
            content: {
                tag: 'div',
                cls: 'container',
                content: {
                    tag: 'p', cls: 'pull-right', content: {
                        block: 'b-link',
                        url: '#',
                        content: 'Наверх'
                    }
                }
            }
        }

    ]
})
