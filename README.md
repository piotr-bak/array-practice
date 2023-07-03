## Array Methods Implementation

As [Richard Feynman](https://en.wikipedia.org/wiki/Richard_Feynman) once said,

> What I cannot create, I do not understand.

So, let's create some array methods!
The goal of this exercise is to implement methods for array analysis and
manipulation that are analogous to the built-in JavaScript methods. This
repository is intended as a comfortable starting point, providing you with the
necessary structure and test suites to verify if your implementations hit the
mark - or not. Let's dive in!

### Installation

To get started, make sure you have [Node.js](https://nodejs.org/) installed on your machine. This project uses [Jest](https://jestjs.io/) as the testing framework.

1. Clone this repository to your local machine:git clone <git clone https://github.com/piotr-bak/array-practice>

2. Navigate to the project directory:cd array-methods-implementation

3. Install the project dependencies:npm install

###

Running the Tests

Once you have installed the project dependencies, you can run the tests to
verify the implementations of the array methods. To execute the test suite using
Jest and display the test results in the console run

```javascript
npm test

```

Jest is configured to use `--watchAll` flag by default - hence running the
tests in watch mode, which automatically re-runs the tests when file changes are
detected. You can remove this flag in Package.json should you wish the Jest to
run differently.

### Writing Your Own Implementations

To complete the array method exercises, navigate to the `src` directory and
locate the corresponding implementation files. In the `src` directory, you will
find three files: `analysis.js`, `transformation.js`, and `utility.js`. Each
file contains (a backbone for) the implementation for a specific category of array methods.

-   For analytical methods (e.g., `indexOf`, `includes`, `every`, etc.), open the `analysis.js` file.
-   For manipulative methods (e.g., `push`, `pop`, `splice`, etc.), open the `transformation.js` file.
-   For utility methods (e.g., `toString`, `isArray`, `length`, etc.), open the `utility.js` file.

Inside each file, you will find the drafts for the corresponding methods.
Replace the placeholder code with your own implementation for the method you
want to work on.
Once you have made your changes, run the tests to verify if your implementation passes the provided test cases.

Additionally, you can explore the test files in the `__tests__` directory. Each test file corresponds to a specific method category and contains the test cases and expected behavior for the methods in that category.

Feel free to experiment, modify, and improve the implementations and tests as
needed.

### Troubleshooting

Most of the methods should be possible to implement using the good ol' For loop.
If you find yourself in a pickle, double-check that the function received all
the argument(s) it needs and that it `return`s everything you want it to.

### Contributing

If you find any issues or have suggestions for improvements, please feel free to
contribute by submitting bug reports or pull requests. Everybody's welcome!

### License

This project is licensed under the ISC License.
