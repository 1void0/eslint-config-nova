/* eslint-env commonjs */

/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */
/* eslint-disable sort-keys */

module.exports = {
  extends: ['prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Require that member overloads be consecutive (adjacent-overload-signatures from TSLint)
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // Requires using either T[] or Array<T> for arrays (array-type from TSLint)
    '@typescript-eslint/array-type': 'error',

    // Disallow awaiting a value that is not a Promise (await-promise from TSLint)
    '@typescript-eslint/await-thenable': 'error',

    // Bans // tslint:<rule-flag> comments from being used
    '@typescript-eslint/ban-ts-comment': 'error',

    // Enforces that types will not to be used (ban-types from TSLint)
    '@typescript-eslint/ban-types': 'error',

    // Bans // tslint:<rule-flag> comments from being used
    '@typescript-eslint/ban-tslint-comment': 'error',

    // Ensures that literals on classes are exposed in a consistent style
    '@typescript-eslint/class-literal-property-style': 'error',

    // Enforces consistent usage of type assertions
    '@typescript-eslint/consistent-type-assertions': 'error',

    // Consistent with type definition either interface or type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // Require explicit return types on functions and class methods
    '@typescript-eslint/explicit-function-return-type': 'error',

    // Require explicit accessibility modifiers on class properties and methods (member-access from TSLint)
    '@typescript-eslint/explicit-member-accessibility': 'error',

    // Require explicit return and argument types on exported functions' and classes' public class methods
    '@typescript-eslint/explicit-module-boundary-types': 'error',

    // Require a specific member delimiter style for interfaces and type literals
    '@typescript-eslint/member-delimiter-style': 'off',

    // Require a consistent member declaration order
    '@typescript-eslint/member-ordering': 'error',

    // Enforces using a particular method signature syntax.
    '@typescript-eslint/method-signature-style': 'error',

    // Enforces naming conventions for everything across a codebase
    '@typescript-eslint/naming-convention': 'error',

    // Requires that .toString() is only called on objects which provide useful information when stringified
    '@typescript-eslint/no-base-to-string': 'error',

    // Disallow non-null assertion in locations that may be confusing
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    // Disallow the delete operator with computed key expressions
    '@typescript-eslint/no-dynamic-delete': 'error',

    // Disallow the declaration of empty interfaces
    '@typescript-eslint/no-empty-interface': 'error',

    // Disallow usage of the any type
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],

    // Disallow extra non-null assertion
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // Forbids the use of classes as namespaces
    '@typescript-eslint/no-extraneous-class': 'error',

    // Requires Promise-like values to be handled appropriately️
    '@typescript-eslint/no-floating-promises': 'error',

    // Disallow iterating over an array with a for-in loop️
    '@typescript-eslint/no-for-in-array': 'error',

    // Disallow the use of eval()-like methods️
    '@typescript-eslint/no-implied-eval': 'error',

    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    '@typescript-eslint/no-inferrable-types': 'error',

    // Disallows usage of void type outside of generic or return types
    '@typescript-eslint/no-invalid-void-type': 'error',

    // Enforce valid definition of new and constructor️
    '@typescript-eslint/no-misused-new': 'error',

    // Avoid using promises in places not designed to handle them️
    '@typescript-eslint/no-misused-promises': 'error',

    // Disallow the use of custom TypeScript modules and namespaces️
    '@typescript-eslint/no-namespace': 'error',

    // Disallows using a non-null assertion after an optional chain expression️
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    // Disallows non-null assertions using the ! postfix operator️
    '@typescript-eslint/no-non-null-assertion': 'error',

    // Disallow the use of parameter properties in class constructors
    '@typescript-eslint/no-parameter-properties': 'error',

    // Disallows invocation of require()
    '@typescript-eslint/no-require-imports': 'error',

    // Disallow aliasing this️
    '@typescript-eslint/no-this-alias': 'error',

    // Disallow throwing literals as exceptions
    '@typescript-eslint/no-throw-literal': 'error',

    // Disallow the use of type aliases
    '@typescript-eslint/no-type-alias': 'off',

    // Flags unnecessary equality comparisons against boolean literals
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    // Prevents conditionals where the type is always truthy or always falsy
    '@typescript-eslint/no-unnecessary-condition': 'error',

    // Warns when a namespace qualifier is unnecessary
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    // Enforces that type arguments will not be used if not required
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',

    // Warns if a type assertion does not change the type of an expression
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // Disallows assigning any to variables and properties️
    '@typescript-eslint/no-unsafe-assignment': 'error',

    // Disallows calling an any type value️
    '@typescript-eslint/no-unsafe-call': 'error',

    // Disallows member access on any typed variables️
    '@typescript-eslint/no-unsafe-member-access': 'error',

    // Disallows returning any from a function️
    '@typescript-eslint/no-unsafe-return': 'error',

    // Disallow unused variables and arguments
    '@typescript-eslint/no-unused-vars-experimental': 'error',

    // Disallows the use of require statements except in import statements️
    '@typescript-eslint/no-var-requires': 'error',

    // Prefer usage of as const over literal type
    '@typescript-eslint/prefer-as-const': 'error',

    // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
    '@typescript-eslint/prefer-for-of': 'error',

    // Use function types instead of interfaces with call signatures
    '@typescript-eslint/prefer-function-type': 'off',

    // Enforce includes method over indexOf method
    '@typescript-eslint/prefer-includes': 'error',

    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    // Enforce the usage of the nullish coalescing operator instead of logical chaining
    '@typescript-eslint/prefer-nullish-coalescing': 'error',

    // Prefer using concise optional chain expressions instead of chained logical ands
    '@typescript-eslint/prefer-optional-chain': 'error',

    // Requires that private members are marked as readonly if they're never modified outside of the constructor
    '@typescript-eslint/prefer-readonly': 'error',

    // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
    '@typescript-eslint/prefer-readonly-parameter-types': 'error',

    // Prefer using type parameter when calling Array#reduce instead of casting
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',

    // Enforce that RegExp#exec is used instead of String#match if no global flag is provided️
    '@typescript-eslint/prefer-regexp-exec': 'error',

    // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    // Recommends using // @ts-expect-error over // @ts-ignore
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // Requires any function or method that returns a Promise to be marked async
    '@typescript-eslint/promise-function-async': 'error',

    // Requires Array#sort calls to always provide a compareFunction
    '@typescript-eslint/require-array-sort-compare': 'error',

    // When adding two variables, operands must both be of type number or of type string️
    '@typescript-eslint/restrict-plus-operands': 'error',

    // Enforce template literal expressions to be of string type️
    '@typescript-eslint/restrict-template-expressions': 'error',

    // Restricts the types allowed in boolean expressions
    '@typescript-eslint/strict-boolean-expressions': 'off',

    // Exhaustiveness checking in switch with union type
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    // Sets preference level for triple slash directives versus ES6-style import declarations
    '@typescript-eslint/triple-slash-reference': [
      'error',
      { path: 'never', types: 'never', lib: 'never' },
    ],

    // Require consistent spacing around type annotations
    '@typescript-eslint/type-annotation-spacing': 'error',

    // Requires type annotations to exist
    '@typescript-eslint/typedef': 'error',

    // Enforces unbound methods are called with their expected scope️
    '@typescript-eslint/unbound-method': 'error',

    // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
    '@typescript-eslint/unified-signatures': 'error',

    // --- Extension Rules ---

    // Enforce consistent brace style for blocks
    '@typescript-eslint/brace-style': 'error',

    // Enforces consistent spacing before and after commas
    '@typescript-eslint/comma-spacing': 'error',

    // Enforce default parameters to be last
    '@typescript-eslint/default-param-last': 'error',

    // Enforce dot notation whenever possible
    '@typescript-eslint/dot-notation': 'error',

    // Require or disallow spacing between function identifiers and their invocations
    '@typescript-eslint/func-call-spacing': 'error',

    // Enforce consistent indentation
    '@typescript-eslint/indent': 'off',

    // Require or disallow initialization in variable declarations
    '@typescript-eslint/init-declarations': 'error',

    // Enforce consistent spacing before and after keywords
    '@typescript-eslint/keyword-spacing': 'error',

    // Require or disallow an empty line between class members
    '@typescript-eslint/lines-between-class-members': 'error',

    // Disallow generic Array constructors
    '@typescript-eslint/no-array-constructor': 'error',

    // Disallow duplicate class members
    '@typescript-eslint/no-dupe-class-members': 'error',

    // Disallow empty functions
    '@typescript-eslint/no-empty-function': 'error',

    // Disallow unnecessary parentheses
    '@typescript-eslint/no-extra-parens': 'error',

    // Disallow unnecessary semicolons
    '@typescript-eslint/no-extra-semi': 'error',

    // Disallow this keywords outside of classes or class-like objects
    '@typescript-eslint/no-invalid-this': 'error',

    // Disallow literal numbers that lose precision
    // '@typescript-eslint/no-loss-of-precision': 'error',

    // Disallow magic numbers
    '@typescript-eslint/no-magic-numbers': 'off',

    // Disallow unused expressions
    '@typescript-eslint/no-unused-expressions': 'error',

    // Disallow unused variables
    '@typescript-eslint/no-unused-vars': 'error',

    // Disallow the use of variables before they are defined
    '@typescript-eslint/no-use-before-define': 'error',

    // Disallow unnecessary constructors
    '@typescript-eslint/no-useless-constructor': 'error',

    // Enforce the consistent use of either backticks, double, or single quotes
    '@typescript-eslint/quotes': 'off',

    // Disallow async functions which have no await expression
    '@typescript-eslint/require-await': 'error',

    // Enforces consistent returning of awaited values
    '@typescript-eslint/return-await': 'error',

    // Require or disallow semicolons instead of ASI
    '@typescript-eslint/semi': 'off',

    // Enforces consistent spacing before function parenthesis
    '@typescript-eslint/space-before-function-paren': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
}
