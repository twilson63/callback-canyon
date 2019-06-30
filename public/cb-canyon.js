
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */













    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var fulfil;
    var done = new Promise(function (f) {
        fulfil = f;
    });
    function start() {
        if (!running) {
            running = true;
            console.log('TAP version 13');
            Promise.resolve().then(function () {
                var hasOnly = tests.some(function (test) { return test.only; });
                tests.forEach(function (test) {
                    test.shouldRun = test.skip
                        ? false
                        : hasOnly ? test.only : true;
                });
                dequeue();
            });
        }
    }
    var test = Object.assign(function test(name, fn) {
        tests.push({ name: name, fn: fn, skip: false, only: false, shouldRun: false });
        start();
    }, {
        skip: function (name, fn) {
            tests.push({ name: name, fn: fn, skip: true, only: false, shouldRun: null });
            start();
        },
        only: function (name, fn) {
            tests.push({ name: name, fn: fn, skip: false, only: true, shouldRun: null });
            start();
        }
    });
    var testIndex = 0;
    var assertIndex = 0;
    var running = false;
    var tests = [];
    var passed = 0;
    var failed = 0;
    var skipped = 0;
    var isNode = typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]';
    function logResult(ok, operator, msg, info) {
        if (info === void 0) { info = {}; }
        assertIndex += 1;
        if (ok) {
            console.log("ok " + assertIndex + " \u2014 " + msg);
            passed += 1;
        }
        else {
            console.log("not ok " + assertIndex + " \u2014 " + msg);
            failed += 1;
            console.log('  ---');
            console.log("  operator: " + operator);
            if (isNode) {
                var util = require('util');
                if ('expected' in info)
                    console.log("  expected:\n    " + util.format(info.expected).replace(/\n/gm, "\n    "));
                if ('actual' in info)
                    console.log("  actual:\n    " + util.format(info.actual).replace(/\n/gm, "\n    "));
            }
            else {
                if ('expected' in info)
                    console.log("  expected:", info.expected);
                if ('actual' in info)
                    console.log("  actual:", info.actual);
            }
            // find where the error occurred, and try to clean it up
            var lines = new Error().stack.split('\n').slice(3);
            var cwd_1 = '';
            if (isNode) {
                cwd_1 = process.cwd();
                if (/[\/\\]/.test(cwd_1[0]))
                    cwd_1 += cwd_1[0];
                var dirname = typeof __dirname === 'string' && __dirname.replace(/dist$/, '');
                for (var i = 0; i < lines.length; i += 1) {
                    if (~lines[i].indexOf(dirname)) {
                        lines = lines.slice(0, i);
                        break;
                    }
                }
            }
            var stack = lines
                .map(function (line) { return "    " + line.replace(cwd_1, '').trim(); })
                .join('\n');
            console.log("  stack:   \n" + stack);
            console.log("  ...");
        }
    }
    var assert = {
        fail: function (msg) { return logResult(false, 'fail', msg); },
        pass: function (msg) { return logResult(true, 'pass', msg); },
        ok: function (value, msg) {
            if (msg === void 0) { msg = 'should be truthy'; }
            return logResult(Boolean(value), 'ok', msg, {
                actual: value,
                expected: true
            });
        },
        equal: function (a, b, msg) {
            if (msg === void 0) { msg = 'should be equal'; }
            return logResult(a === b, 'equal', msg, {
                actual: a,
                expected: b
            });
        },
        throws: function (fn, expected, msg) {
            if (msg === void 0) { msg = 'should throw'; }
            try {
                fn();
                logResult(false, 'throws', msg, {
                    expected: expected
                });
            }
            catch (err) {
                if (expected instanceof Error) {
                    logResult(err.name === expected.name, 'throws', msg, {
                        actual: err.name,
                        expected: expected.name
                    });
                }
                else if (expected instanceof RegExp) {
                    logResult(expected.test(err.toString()), 'throws', msg, {
                        actual: err.toString(),
                        expected: expected
                    });
                }
                else if (typeof expected === 'function') {
                    logResult(expected(err), 'throws', msg, {
                        actual: err
                    });
                }
                else {
                    throw new Error("Second argument to t.throws must be an Error constructor, regex, or function");
                }
            }
        }
    };
    function dequeue() {
        return __awaiter(this, void 0, void 0, function () {
            var test, err_1, total;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        test = tests[testIndex++];
                        if (!test) return [3 /*break*/, 5];
                        if (!test.shouldRun) {
                            if (test.skip) {
                                console.log("# skip " + test.name);
                            }
                            skipped += 1;
                            dequeue();
                            return [2 /*return*/];
                        }
                        console.log("# " + test.name);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, test.fn(assert)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        failed += 1;
                        console.log("not ok " + assertIndex + " \u2014 " + err_1.message);
                        console.error("  " + err_1.stack.replace(/^\s+/gm, '    '));
                        return [3 /*break*/, 4];
                    case 4:
                        dequeue();
                        return [3 /*break*/, 6];
                    case 5:
                        total = passed + failed + skipped;
                        console.log("\n1.." + total);
                        console.log("# tests " + total);
                        if (passed)
                            console.log("# pass " + passed);
                        if (failed)
                            console.log("# fail " + failed);
                        if (skipped)
                            console.log("# skip " + skipped);
                        fulfil();
                        if (isNode)
                            process.exit(failed ? 1 : 0);
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    }

    /**
     * equals function
     *
     * takes two values and returns true if the values are the same
     *
     * @param a any
     * @param b any
     *
     * @returns boolean
     */
    const equals = function(a, b) {
      return a === b
    };

    test('equals function', async t => {
      t.ok(equals(true, true));
      t.notOk(equals(true, false));

    });

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var tapBrowserColor = createCommonjsModule(function (module) {
    /**
     * Activate the runner by overriding `console.log` to intercept tap output.
     * Call the return value to undo the override.
     */

    module.exports = function() {
      var olog = console.log;
      var pre = document.body.appendChild(document.createElement('pre'));
      style(); // Apply initial pending style.
      console.log = function(line) {
        parse(line);
        style();
        olog.apply(console, arguments);
        pre.innerHTML += line + '\n';
      };

      return function undo() {
        console.log = olog;
      }
    };

    /**
     * These control what colors are used for the pending/failing/passing states.
     * Ensure that these are assigned by individual value, and that the entire
     * object is not assigned at once to ensure that references are intact.
     */

    var colors = module.exports.colors = {
        PENDING: '#FCD62A'
      , FAILING: '#F28E82'
      , PASSING: '#8ECA6C'
    };

    var failed = 0;
    var passed = 0;

    function parse(line) {
      if (typeof line !== 'string') line = line + '';
      if (line.indexOf('ok') === 0) {
        passed += 1;
        return;
      }

      if (line.indexOf('not ok') === 0) {
        failed += 1;
        return;
      }
    }

    function style() {
      var s = document.body.style;
      if (failed > 0) {
        s.backgroundColor = colors.FAILING;
      } else if (passed > 0 && failed === 0) {
        s.backgroundColor = colors.PASSING;
      } else {
        s.backgroundColor = colors.PENDING;
      }
    }
    });
    var tapBrowserColor_1 = tapBrowserColor.colors;

    tapBrowserColor();
      /*
    const run = async function() {
      return await import('./test')
    }

    run()
    */

}());
