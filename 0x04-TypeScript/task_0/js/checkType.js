"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
(0, child_process_1.exec)('tsc', function (error, stdout, stderr) {
    if (stderr) {
        console.error('TypeScript errors found:\n', stderr);
    }
    else {
        console.log('No type errors found');
    }
});
