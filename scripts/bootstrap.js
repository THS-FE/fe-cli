const program = require('commander');
const error = require('chalk').bold.red;

program
    //cli版本号
    .version(require('../package').version, '-v, --version');

program
    //初始化项目
    .command('init <name> [otherDirs...]')
    .description('generate a new project from a template')
    .action((name, otherDirs) => {
            // if (!name) {
            //     console.log('Every great project needs a name!');
            // }
            // 查看是否有除init外的剩余参数
            if (otherDirs.length) {
              switch (otherDirs[0]) {
                case 'vue2-ts':
                  require('./init')('direct:' + require('../package').template['vue2-starter-ts'], process.cwd() + '\\' + name, {clone: false});
                  break;
                case 'vue2-js':
                  require('./init')('direct:' + require('../package').template['vue2-starter-js'], process.cwd() + '\\' + name, {clone: false});
                  break;
                case 'webpack-ts':
                  require('./init')('direct:' + require('../package').template['typescript-webpack-starter'], process.cwd() + '\\' + name, {clone: false});
                  break;
                default: 
                  otherDirs.reduce((val1, val2) => (val1 + val2));
                  console.log(error(`error: ${otherDirs} doesn't exist.`));
              }
            } else {
              require('./init')('direct:' + require('../package').template.h5, process.cwd() + '\\' + name, {clone: false});
            }
        }
    );

program.parse(process.argv);

// 如果参数为空，则显示帮助
if (!program.args.length) program.help();
