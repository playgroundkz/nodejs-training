for this train we need lib mocha
to install it run command   

    `npm i mocha --save-dev`
    
    
npm test gives some error. looking for tap mudule. 
when you are trying to search with pattern *.test.js files it alse searches in node_module
the pattern \"./{,!(node_modules)/**/}*.test.js\" prevents searching node_module

    npm i --save-dev tap as spare solution