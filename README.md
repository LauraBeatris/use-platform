<p align="center">
<img src="./.github/docs/logo.png" />
</p>

<p align="center">
  Returns flags to make conditions based on the user-agent platform
</p>

[![Author](https://img.shields.io/badge/author-LauraBeatris-F55441?style=flat-square)](https://github.com/LauraBeatris)
[![Languages](https://img.shields.io/github/languages/count/LauraBeatris/use-platform?color=%23F55441&style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/LauraBeatris/use-platform?color=F55441&style=flat-square)](https://github.com/LauraBeatris/use-platform/stargazers)
[![Forks](https://img.shields.io/github/forks/LauraBeatris/use-platform?color=%23F55441&style=flat-square)](https://github.com/LauraBeatris/use-platform/network/members)
[![Contributors](https://img.shields.io/github/contributors/LauraBeatris/use-platform?color=F55441&style=flat-square)](https://github.com/LauraBeatris/use-platform/graphs/contributors)

## :pushpin: Table of Contents

* [Installation](#construction_worker-installation)
* [Found a bug? Missing a specific feature?](#bug-issues)
* [Contributing](#tada-contributing)
* [License](#closed_book-license)

## :construction_worker: Installation

### via npm

```
npm install use-platform
```

### via yarn

```
yarn add use-platform
```

## :airplane: Usage

Make conditions based on the user-agent platform

```
const SignInScreen: React.FC = () => {
  const { isMac, isIOS } = usePlatform();

  const shouldShowSignInWithApple = isMac || isIOS;

  return (
    <div>
      {
        shouldShowSignInWithApple && (
          <button type="button">
            Sign in with Apple
          </button>
        )
      }
    </button>
  )
}
```

## :bug: Issues

Feel free to **file a new issue** with a respective title and description on the [use-platform](https://github.com/LauraBeatris/use-platform/issues) repository. If you already found a solution to your problem, **I would love to review your pull request**! Have a look at our [contribution guidelines](https://github.com/LauraBeatris/use-platform/blob/master/CONTRIBUTING.md) to find out about the coding standards.

## :tada: Contributing

Check out the [contributing](https://github.com/LauraBeatris/use-platform/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing.

## :closed_book: License

Released in 2020
This package is under the [MIT license](https://github.com/LauraBeatris/use-platform/master/LICENSE).

Made with love by [Laura Beatris](https://github.com/LauraBeatris) 💜🚀
