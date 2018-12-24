const program = require('commander');

program
    //cli版本号
    .version(require('../package').version, '-v, --version');

program
    //初始化项目
    .command('init <name>')
    .description('generate a new project from a template')
    .action((name) => {
            // if (!name) {
            //     console.log('Every great project needs a name!');
            // }
            require('./init')('direct:' + require('../package').template.h5, process.cwd() + '\\' + name, {clone: false});
        }
    );

program.parse(process.argv);

// 如果参数为空，则显示帮助
if (!program.args.length) program.help();
