# CLI Template

This is a template for a typescript CLI application project that does not require watching and rebuilding during development.

> requires Node.js version 18+, 20+

## Usage

### Create templates locally through degit

- Install degit

```sh
npm install -g degit
```

- Create project

```sh
degit hacxy/cli-template my-cli-project
```

## Development

- dev

```sh
npm run dev
```

Use [unbuild](https://github.com/unjs/unbuild) to stub the dist folder, without needing to watch and rebuild during development and output the .d.ts type declaration file. You can configure it through `build.config.ts`.

To link the package globally, use `npm link`, then run `hello-cli` to preview the default content.

- build

```sh
npm run build
```

Build code for production environment

- typecheck

```sh
npm run typecheck
```

Perform type checking for this project.
