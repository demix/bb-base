#backbone修改了对underscore的依赖,去掉20行

cd zepto
MODULES="zepto event ajax detect touch gesture" npm run-script dist
mv dist/zepto.min.js ../zepto.js
