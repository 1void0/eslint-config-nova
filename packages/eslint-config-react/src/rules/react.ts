/* eslint-env commonjs */

/* eslint-disable import/unambiguous */
/* eslint-disable import/no-commonjs */
/* eslint-disable sort-keys */

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ['react'],
  rules: {
    // Enforces consistent naming for boolean props
    'react/boolean-prop-naming': 'error',

    // Forbid "button" element without an explicit "type" attribute
    'react/button-has-type': 'error',

    // Prevent extraneous defaultProps on components
    'react/default-props-match-prop-types': 'error',

    // Rule enforces consistent usage of destructuring assignment in component
    'react/destructuring-assignment': 'error',

    // Prevent missing displayName in a React component definition
    'react/display-name': 'error',

    // Forbid certain props on Components
    'react/forbid-component-props': 'off',

    // Forbid certain props on DOM Nodes
    'react/forbid-dom-props': 'off',

    // Forbid certain elements
    'react/forbid-elements': 'error',

    // Forbid certain propTypes
    'react/forbid-prop-types': 'error',

    // Forbid foreign propTypes
    'react/forbid-foreign-prop-types': 'error',

    // Standardize the way function component get defined
    'react/function-component-definition': 'error',

    // Prevent using this.state inside this.setState
    'react/no-access-state-in-setstate': 'error',

    // Prevent adjacent inline elements not separated by whitespace.
    'react/no-adjacent-inline-elements': 'off',

    // Prevent using Array index in key props
    'react/no-array-index-key': 'error',

    // Prevent passing children as props
    'react/no-children-prop': 'error',

    // Prevent usage of dangerous JSX properties
    'react/no-danger': 'error',

    // Prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-danger-with-children': 'error',

    // Prevent usage of deprecated methods
    'react/no-deprecated': 'error',

    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': ['error', 'disallow-in-func'],

    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': ['error', 'disallow-in-func'],

    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 'error',

    // Prevent usage of findDOMNode
    'react/no-find-dom-node': 'error',

    // Prevent usage of isMounted
    'react/no-is-mounted': 'error',

    // Prevent multiple component definition per file
    'react/no-multi-comp': 'error',

    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    'react/no-redundant-should-component-update': 'error',

    // Prevent usage of the return value of React.render
    'react/no-render-return-value': 'error',

    // Prevent usage of setState
    'react/no-set-state': 'error',

    // Prevent common casing typos
    'react/no-typos': 'error',

    // Prevent using string references in ref attribute.
    'react/no-string-refs': 'error',

    // Prevent using this in stateless functional components
    'react/no-this-in-sfc': 'error',

    // Prevent invalid characters from appearing in markup
    'react/no-unescaped-entities': 'error',

    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 'error',

    // Prevent usage of unsafe lifecycle methods
    'react/no-unsafe': 'error',

    // Prevent definitions of unused prop types
    'react/no-unused-prop-types': 'error',

    // Prevent definitions of unused state properties
    'react/no-unused-state': 'error',

    // Prevent usage of setState in componentWillUpdate
    'react/no-will-update-set-state': 'error',

    // Enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': 'error',

    // Require read-only props
    'react/prefer-read-only-props': 'error',

    // Enforce stateless React Components to be written as a pure function
    'react/prefer-stateless-function': 'error',

    // Prevent missing props validation in a React component definition
    'react/prop-types': 'error',

    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 'error',

    // Enforce a defaultProps definition for every prop that is not a required prop
    'react/require-default-props': 'error',

    // Enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': 'error',

    // Enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 'error',

    // Prevent extra closing tags for components without children (fixable)
    'react/self-closing-comp': ['error', { component: true, html: false }],

    // Enforce component methods order (fixable)
    'react/sort-comp': 'error',

    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': 'error',

    // Enforce the state initialization style to be either in a constructor or with a class property
    'react/state-in-constructor': ['error', 'never'],

    // Defines where React component static properties should be positioned.
    'react/static-property-placement': 'error',

    // Enforce style prop value being an object
    'react/style-prop-object': 'error',

    // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    'react/void-dom-elements-no-children': 'error',

    // -- JSX-specific rules

    // Enforce boolean attributes notation in JSX (fixable)
    'react/jsx-boolean-value': 'error',

    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
    'react/jsx-child-element-spacing': 'off',

    // Validate closing bracket location in JSX (fixable)
    'react/jsx-closing-bracket-location': 'off',

    // Validate closing tag location in JSX (fixable)
    'react/jsx-closing-tag-location': 'off',

    // Enforce or disallow newlines inside of curly braces in JSX attributes and expressions (fixable)
    'react/jsx-curly-newline': 'off',

    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions (fixable)
    'react/jsx-curly-spacing': 'off',

    // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
    'react/jsx-equals-spacing': 'off',

    // Restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

    // Enforce position of the first prop in JSX (fixable)
    'react/jsx-first-prop-new-line': 'off',

    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 'error',

    // Validate JSX indentation (fixable)
    'react/jsx-indent': 'off',

    // Validate props indentation in JSX (fixable)
    'react/jsx-indent-props': 'off',

    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 'error',

    // Validate JSX maximum depth
    'react/jsx-max-depth': 'off',

    // Limit maximum of props on a single line in JSX (fixable)
    'react/jsx-max-props-per-line': 'off',

    // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': 'error',

    // Prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 'error',

    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

    // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': 'off',

    // Forbid javascript: URLs
    'react/jsx-no-script-url': 'error',

    // Prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': 'error',

    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 'error',

    // Disallow unnecessary fragments
    'react/jsx-no-useless-fragment': 'error',

    // Limit to one expression per line in JSX
    'react/jsx-one-expression-per-line': 'off',

    // Enforce curly braces or disallow unnecessary curly braces in JSX
    'react/jsx-curly-brace-presence': 'off',

    // Enforce shorthand or standard form for React fragments
    'react/jsx-fragments': 'error',

    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': 'error',

    // Disallow multiple spaces between inline JSX props (fixable)
    'react/jsx-props-no-multi-spaces': 'off',

    // Disallow JSX props spreading
    'react/jsx-props-no-spreading': 'off',

    // Enforce default props alphabetical sorting
    'react/jsx-sort-default-props': 'error',

    // Enforce props alphabetical sorting (fixable)
    'react/jsx-sort-props': 'error',

    // Validate whitespace in and around the JSX opening and closing brackets (fixable)
    'react/jsx-tag-spacing': 'off',

    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 'error',

    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 'error',

    // Prevent missing parentheses around multilines JSX (fixable)
    'react/jsx-wrap-multilines': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
