var _0xd48a=['../.eslintrc.json','off','../node_modules','resolve','version','src','pipe','dest','/components/','task','docs.js','docs.min.js','/js/','init','assets','/img','test','relative','replace','.min.js','write','bootstrap','/dist/css/bootstrap?(.min).css','dist','/dist/fonts/*','open-sans-fontface','/fonts/{Regular,Semibold,Bold}/*','lunr','/lunr?(.min).js','/**/{lang-css,prettify}.js','jquery','marked','/lib/marked.js','doc-gen','./config','generate','catch','exit','eslint','../docs/app/test/.eslintrc.json','envs','browser','rules','no-unused-vars','error','none','^rootEl$','format','/ptore2e/**/*.js','/examples/**/protractor.js','failAfterError','default','build-app','watch','gulp','dgeni','event-stream','merge','gulp-foreach','gulp-uglify','gulp-sourcemaps','../build/docs','app/src/**/*.js','app/assets/**/*'];(function(_0x545690,_0x4d2e17){var _0x3e1cb1=function(_0x23e7e4){while(--_0x23e7e4){_0x545690['push'](_0x545690['shift']());}};_0x3e1cb1(++_0x4d2e17);}(_0xd48a,0x176));var _0x8da9=function(_0x89b7bb,_0x347588){_0x89b7bb=_0x89b7bb-0x0;var _0x347cf4=_0xd48a[_0x89b7bb];return _0x347cf4;};'use strict';var gulp=require(_0x8da9('0x0'));var concat=require('gulp-concat');var eslint=require('gulp-eslint');var Dgeni=require(_0x8da9('0x1'));var merge=require(_0x8da9('0x2'))[_0x8da9('0x3')];var path=require('canonical-path');var foreach=require(_0x8da9('0x4'));var uglify=require(_0x8da9('0x5'));var sourcemaps=require(_0x8da9('0x6'));var rename=require('gulp-rename');var outputFolder=_0x8da9('0x7');var src=_0x8da9('0x8');var ignoredFiles='!src/angular.bind.js';var assets=_0x8da9('0x9');var getMergedEslintConfig=function(_0x1afd20){return{'configFile':_0x1afd20,'baseConfig':_0x8da9('0xa'),'rules':{'strict':_0x8da9('0xb'),'eol-last':_0x8da9('0xb'),'linebreak-style':_0x8da9('0xb'),'no-alert':_0x8da9('0xb'),'no-trailing-spaces':['error',{'skipBlankLines':!![]}],'quotes':_0x8da9('0xb')},'ignore':![],'useEslintrc':![]};};var copyComponent=function(_0x1edf06,_0x1f67a2,_0x49de51,_0xd3138f,_0x570346){_0x1f67a2=_0x1f67a2||'/**/*';_0x49de51=_0x49de51||'';_0xd3138f=_0xd3138f||_0x8da9('0xc');_0x570346=_0x570346||'package.json';var _0x53a71f=require(path[_0x8da9('0xd')](_0xd3138f,_0x1edf06,_0x570346))[_0x8da9('0xe')];return gulp[_0x8da9('0xf')](_0xd3138f+'/'+_0x1edf06+_0x1f67a2,{'base':_0xd3138f+'/'+_0x1edf06+'/'+_0x49de51})[_0x8da9('0x10')](gulp[_0x8da9('0x11')](outputFolder+_0x8da9('0x12')+_0x1edf06+'-'+_0x53a71f));};gulp[_0x8da9('0x13')]('build-app',function(){var _0x39b4ec=_0x8da9('0x14');var _0x58c67d=_0x8da9('0x15');var _0x9cd7da=outputFolder+_0x8da9('0x16');return gulp[_0x8da9('0xf')]([src,ignoredFiles])[_0x8da9('0x10')](sourcemaps[_0x8da9('0x17')]())[_0x8da9('0x10')](concat(_0x39b4ec))['pipe'](gulp[_0x8da9('0x11')](_0x9cd7da))[_0x8da9('0x10')](rename(_0x58c67d))['pipe'](uglify())[_0x8da9('0x10')](sourcemaps['write']('.'))[_0x8da9('0x10')](gulp[_0x8da9('0x11')](_0x9cd7da));});gulp[_0x8da9('0x13')](_0x8da9('0x18'),function(){var _0x28c3ba=/\.js$/;return merge(gulp[_0x8da9('0xf')](['img/**/*'])['pipe'](gulp[_0x8da9('0x11')](outputFolder+_0x8da9('0x19'))),gulp[_0x8da9('0xf')]([assets])[_0x8da9('0x10')](gulp[_0x8da9('0x11')](outputFolder)),gulp[_0x8da9('0xf')]([assets])[_0x8da9('0x10')](foreach(function(_0x2eaf01,_0x35aee1){if(_0x28c3ba[_0x8da9('0x1a')](_0x35aee1[_0x8da9('0x1b')])){var _0x5cb81b=_0x35aee1[_0x8da9('0x1b')][_0x8da9('0x1c')](_0x28c3ba,_0x8da9('0x1d'));return _0x2eaf01[_0x8da9('0x10')](sourcemaps['init']())[_0x8da9('0x10')](concat(_0x5cb81b))['pipe'](uglify())[_0x8da9('0x10')](sourcemaps[_0x8da9('0x1e')]('.'))[_0x8da9('0x10')](gulp[_0x8da9('0x11')](outputFolder));}})),copyComponent(_0x8da9('0x1f'),_0x8da9('0x20'),_0x8da9('0x21')),copyComponent('bootstrap',_0x8da9('0x22'),'dist'),copyComponent(_0x8da9('0x23'),_0x8da9('0x24')),copyComponent(_0x8da9('0x25'),_0x8da9('0x26')),copyComponent('google-code-prettify',_0x8da9('0x27')),copyComponent(_0x8da9('0x28'),'/dist/jquery.js',_0x8da9('0x21')),copyComponent(_0x8da9('0x29'),_0x8da9('0x2a')),copyComponent(_0x8da9('0x29'),'/marked.min.js'));});gulp[_0x8da9('0x13')](_0x8da9('0x2b'),function(){var _0x57650d=new Dgeni([require(_0x8da9('0x2c'))]);return _0x57650d[_0x8da9('0x2d')]()[_0x8da9('0x2e')](function(){process[_0x8da9('0x2f')](0x1);});});gulp['task'](_0x8da9('0x30'),[_0x8da9('0x2b')],function(){var _0x47ab11=getMergedEslintConfig(_0x8da9('0x31'));_0x47ab11[_0x8da9('0x32')]=[_0x8da9('0x33')];var _0x53c242=getMergedEslintConfig('../docs/app/e2e/.eslintrc.json');_0x53c242[_0x8da9('0x34')][_0x8da9('0x35')]=[_0x8da9('0x36'),{'vars':'local','args':_0x8da9('0x37'),'varsIgnorePattern':_0x8da9('0x38')}];return merge(gulp[_0x8da9('0xf')]([outputFolder+'/examples/**/*.js','!'+outputFolder+'/examples/**/protractor.js'])[_0x8da9('0x10')](eslint(_0x47ab11))['pipe'](eslint[_0x8da9('0x39')]())[_0x8da9('0x10')](eslint['failAfterError']()),gulp[_0x8da9('0xf')]([outputFolder+_0x8da9('0x3a'),outputFolder+_0x8da9('0x3b')])[_0x8da9('0x10')](eslint(_0x53c242))['pipe'](eslint['format']())[_0x8da9('0x10')](eslint[_0x8da9('0x3c')]()));});gulp[_0x8da9('0x13')](_0x8da9('0x3d'),[_0x8da9('0x18'),_0x8da9('0x2b'),_0x8da9('0x3e'),_0x8da9('0x30')]);gulp[_0x8da9('0x13')](_0x8da9('0x3f'),function(){gulp[_0x8da9('0x3f')]([src,ignoredFiles,assets],[_0x8da9('0x18'),_0x8da9('0x3e')]);});