const program = require('commander');

program
//cli版本号
    .version(require('../package').version, '-v, --version')

program
    .command('init <name>')
    .description('generate a new project from a template')
    .action((name) => {
            require('./init')('direct:https://github.com/THS-FE/Html5Template/archive/master.zip', {clone: false});
            console.log("name:" + name);
        }
    )

//
// program
//     .command('exec <cmd>')
//     .alias('ex')
//     .description('execute the given remote cmd')
//     .option('-e, --exec_mode <mode>', 'Which exec mode to use')
//     .actifbion((cmd, options) => {
//         console.log('exec "%s" using %s mode', cmd, options.exec_mode);
//     })
//     .on('--help', () => {npm
//
//     });
//
// program
//     .command('*')
//     .action((env) => {
//         console.log('deploying "%s"', env);
//     });

program.parse(process.argv);

// 如果参数为空，则显示帮助
if (!program.args.length) program.help();
