<p align="center">
<img src="./.github/docs/logo.png" />
</p>

<p align="center">
  Returns flags to make conditions based on the user-agent platform
</p>

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

# :closed_book: License

Released in 2020
This package is under the [MIT license](https://github.com/LauraBeatris/use-platform/master/LICENSE).

Made with love by [Laura Beatris](https://github.com/LauraBeatris) 💜🚀
