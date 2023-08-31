<p align="center">
   <br/>
   <a href="https://initium.nearform.com" target="_blank"><img width="150px" src="https://initium.nearform.com/img/logo/logo-sm.png" /></a>
   <h3 align="center">Initium</h3>
   <p align="center">Get your code deployed on day zero.</p>
   <p align="center" style="align: center;">
      <a href="https://github.com/nearform/initium/actions/workflows/release.yml?query=workflow%3ARelease">
        <img src="https://github.com/nearform/initium/actions/workflows/release.yml/badge.svg" alt="Release" />
      </a>
      <a href="https://www.npmtrends.com/@nearform/initium">
        <img src="https://img.shields.io/npm/dm/@nearform/initium" alt="Downloads" />
      </a>
      <a href="https://github.com/nearform/initium/stargazers">
        <img src="https://img.shields.io/github/stars/nearform/initium" alt="Github Stars" />
      </a>
      <a href="https://www.npmjs.com/package/@nearform/initium">
        <img src="https://img.shields.io/github/v/release/nearform/initium?label=latest" alt="Github Stable Release" />
      </a>
   </p>
</p>

## Overview

This is the repository for the documentation page for Initium!

This documentation site is based on the [Docusaurus](https://docusaurus.io) framework.

## Getting Started

To start a local environment of this project, please do the following.

1. Clone the repo:

```sh
git clone git@github.com:nearform/initium.git
cd initium
```

2. Set up the correct pnpm version, using [Corepack](https://nodejs.org/api/corepack.html). Run the following in the project'a root:

```sh
corepack enable pnpm
```

(Now, if you run `pnpm --version`, it should print the same verion as the `packageManager` property in the [`package.json` file](https://github.com/nearform/initium/blob/main/package.json))

3. Install packages. Developing requires Node.js v18:

```sh
pnpm install
```

4. Start the development server

```bash
$ pnpm dev:docs
```

And thats all! Now you should have a local copy of this docs site running at [localhost:3000](http://localhost:3000)!

## Contributing

We're open to all community contributions! If you'd like to contribute in any way, please first read our [Contributing Guide](https://github.com/nearform/.github/blob/main/CONTRIBUTING.md).

## License

ISC