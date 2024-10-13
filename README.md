# @ayka/fiji

<!-- Package -->

[npm-url]: https://www.npmjs.com/package/@ayka/fiji
[npm-next-url]: https://www.npmjs.com/package/@ayka/fiji/v/next
[npm-version-badge]: https://img.shields.io/npm/v/%40ayka%2Ffiji/latest
[npm-version-next-badge]: https://img.shields.io/npm/v/%40ayka%2Ffiji/next
[npm-downloads-badge]: https://img.shields.io/npm/dm/%40ayka%2Ffiji
[npm-unpacked-size-badge]: https://img.shields.io/npm/unpacked-size/%40ayka%2Ffiji
[bundle-js-url]: https://bundlejs.com/?q=%40ayka%2Ffiji
[bundle-js-badge]: https://img.shields.io/bundlejs/size/%40ayka%2Ffiji

<!-- GitHub Actions -->

[actions-ci]: https://github.com/AndreyMork/fiji/actions/workflows/ci.yaml
[actions-codeql]: https://github.com/AndreyMork/fiji/actions/workflows/github-code-scanning/codeql
[actions-ci-badge]: https://github.com/AndreyMork/fiji/actions/workflows/ci.yaml/badge.svg
[actions-codeql-badge]: https://github.com/AndreyMork/fiji/actions/workflows/github-code-scanning/codeql/badge.svg

<!-- Code Climate -->

[codeclimate-url]: https://codeclimate.com/github/AndreyMork/fiji
[codeclimate-maintainability-badge]: https://api.codeclimate.com/v1/badges/511e23db3f9fe9026c49/maintainability
[codeclimate-test-coverage-badge]: https://api.codeclimate.com/v1/badges/511e23db3f9fe9026c49/test_coverage

<!-- Misc -->

[license-url]: https://opensource.org/license/MIT
[license-badge]: https://img.shields.io/npm/l/%40ayka%2Ffiji
[mutation-testing-badge]: https://img.shields.io/endpoint?url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2FAndreyMork%2Ffiji%2Fmain
[mutation-testing-url]: https://dashboard.stryker-mutator.io/reports/github.com/AndreyMork/fiji/main

<!-- Badges -->

[![NPM Version][npm-version-badge]][npm-url]
[![NPM Version][npm-version-next-badge]][npm-next-url]
[![NPM License][license-badge]][license-url]
[![NPM Downloads][npm-downloads-badge]][npm-url]

[![npm package minimized gzipped size][bundle-js-badge]][bundle-js-url]
[![NPM Unpacked Size][npm-unpacked-size-badge]][npm-url]

[![ci][actions-ci-badge]][actions-ci]
[![CodeQL][actions-codeql-badge]][actions-codeql]

[![Maintainability][codeclimate-maintainability-badge]][codeclimate-url]
[![Test Coverage][codeclimate-test-coverage-badge]][codeclimate-url]
[![Mutation testing badge][mutation-testing-badge]][mutation-testing-url]

## Overview

`@ayka/fiji` is a configuration management library that provides a flexible and type-safe way to handle application configurations. It supports environment variables, default values, and secret management.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
  - [Basic Example](#basic-example)
  - [Using Context for Dynamic Configuration](#using-context-for-dynamic-configuration)
  - [Hiding Secrets](#hiding-secrets)
  - [Environment Variables](#environment-variables)
  - [Defining Environment Variables](#defining-environment-variables)
  - [Validation and Default Values](#validation-and-default-values)
  - [Loading Environment Variables](#loading-environment-variables)
    - [Options for `load` Method](#options-for-load-method)
  - [Secret Management](#secret-management)
  - [Adding Environment Sources](#adding-environment-sources)
    - [Adding Environment Source from Object](#adding-environment-source-from-object)
    - [Adding Environment Source from File](#adding-environment-source-from-file)
    - [Combining Multiple Sources](#combining-multiple-sources)
  - [Extending Configuration](#extending-configuration)
  - [Patching Configuration](#patching-configuration)
  - [Using `asClass` for NestJS Dependency Injection](#using-asclass-for-nestjs-dependency-injection)
- [API Reference](#api-reference)
  - [ConfigFactory](#configfactory)
    - [Methods](#methods)
      - [toJS](#tojsopts-tojst-configt)
      - [load](#loadopts-loadopts-configfactoryt)
      - [patch](#patchpatch-initparamstpatcht-configfactoryt)
      - [extend](#extendr-extends-trawconfigextension-initparamsr-configfactorytextensiont-r)
      - [asClass](#asclass-configclassconstructort)
      - [addEnvSource](#addenvsourceenvsource-nodejsprocessenv-configfactoryt)
      - [addEnvFile](#addenvfilepath-env-configfactoryt)
      - [parseEnv](#parseenvenvsource-nodejsprocessenv-processenv-configfactoryt)
      - [envInfo](#envinfo-recordstring-any)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Installation

You can install `@ayka/fiji` using npm, yarn, or pnpm:

```bash
npm install @ayka/fiji
```

```bash
yarn add @ayka/fiji
```

```bash
pnpm add @ayka/fiji
```

## Getting Started

To get started with `@ayka/fiji`, follow these steps:

1. Install the package using your preferred package manager.
2. Initialize a configuration factory in your project.
3. Define your configuration using a plain object or a function for dynamic configurations.
4. Load environment variables and convert the configuration to a JavaScript object.

## Usage

To use `@ayka/fiji` in your project, you need to initialize a configuration factory. You can define your configuration using either a plain object or a function that receives a context (`ctx`) for more dynamic configurations.

### Basic Example

```typescript
import * as Fiji from '@ayka/fiji';

// Initialize with a plain object
const factory = Fiji.init({
  appName: 'MyApp',
  port: ctx.z.port().default(3000),
  debug: true,
});

// Convert the configuration to a JavaScript object
const config = factory.toJS();
console.log(config);
```

### Using Context for Dynamic Configuration

```typescript
import * as Fiji from '@ayka/fiji';

// Initialize with a function
const factory = Fiji.init((ctx) => ({
  appName: 'MyApp',
  port: ctx.env('PORT', ctx.z.port().default(3000)),
  debug: ctx.env('DEBUG', ctx.z.boolean().default(false)),
}));

// Load environment variables and convert to JavaScript object
factory.load();
const config = factory.toJS();
console.log(config);
```

### Hiding Secrets

You can mark certain configuration values as secrets, which will be hidden when `toJS` is called with the `hideSecrets` option.

```typescript
import * as Fiji from '@ayka/fiji';

const factory = Fiji.init((ctx) => ({
  apiKey: ctx.value('my-secret-key').secret(),
  dbPassword: ctx.env('DB_PASSWORD').secret(),
}));

const config = factory.toJS({ hideSecrets: true });
console.log(config); // { apiKey: '<secret>', dbPassword: '<secret>' }
```

### Environment Variables

`@ayka/fiji` provides robust support for environment variables, allowing you to define, validate, and use them seamlessly within your configuration. It leverages [zod](https://github.com/colinhacks/zod) for schema validation and [znv](https://github.com/lostfictions/znv) for parsing.

### Defining Environment Variables

You can define environment variables using the `ctx.env` method. This method allows you to specify a default value and a validation schema.

```typescript
import * as Fiji from '@ayka/fiji';

const factory = Fiji.init((ctx) => ({
  port: ctx.env('PORT', ctx.z.port().default(3000)),
  dbUrl: ctx.env('DATABASE_URL', ctx.z.string().url()),
}));

factory.load();
const config = factory.toJS();
console.log(config);
```

### Validation and Default Values

The `ctx.env` method supports validation and default values. You can use `ctx.z` to define schemas for your environment variables, ensuring they meet your application's requirements.

```typescript
import * as Fiji from '@ayka/fiji';

const factory = Fiji.init((ctx) => ({
  port: ctx.env('PORT', ctx.z.port().default(3000)),
  dbUrl: ctx.env('DATABASE_URL', ctx.z.string().url().nonempty()),
}));

factory.load();
const config = factory.toJS();
console.log(config);
```

### Loading Environment Variables

To load environment variables, use the `load` method on your configuration factory. This method reads the variables from the environment and applies any defined schemas and defaults. It also allows you to specify additional options for loading environment variables from files or other sources.

```typescript
factory.load({
  processEnv: process.env, // Optional: Specify a custom environment source
  envFiles: ['.env', 'config.env'], // Optional: Load variables from specified files
  envSources: [customEnvSource], // Optional: Load variables from additional sources
});
```

#### Options for `load` Method

- **processEnv**: A custom environment source to use instead of the default `process.env`.
- **envFiles**: An array of file paths to load environment variables from. The files are processed in the order they are specified.
- **envSources**: An array of additional environment sources to load variables from. These sources can override values from earlier sources.

The `load` method processes the sources in the following order:

1. Environment files specified in `envFiles`.
2. Additional environment sources specified in `envSources`.
3. The `processEnv` source, which defaults to `process.env` if not specified.

This order allows later sources to override values from earlier ones, providing flexibility in managing your configuration.

```typescript
factory.load({
  envFiles: ['.env', 'config.env'],
  envSources: [{ PORT: '8080' }],
});
const config = factory.toJS();
console.log(config); // Configuration with values from specified sources
```

### Secret Management

Environment variables can also be marked as secrets, ensuring they are not exposed when the configuration is converted to a JavaScript object.

```typescript
import * as Fiji from '@ayka/fiji';

const factory = Fiji.init((ctx) => ({
  apiKey: ctx.env('API_KEY').secret(),
}));

const config = factory.toJS({ hideSecrets: true });
console.log(config); // { apiKey: '<secret>' }
```

### Adding Environment Sources

`@ayka/fiji` allows you to add environment sources from objects or files, providing flexibility in how you manage and load your configuration.

#### Adding Environment Source from Object

You can add an environment source from a plain object. This is useful for testing or when you want to override environment variables programmatically.

```typescript
import * as Fiji from '@ayka/fiji';

const envSource = {
  PORT: '4000',
  DATABASE_URL: 'postgres://user:password@localhost:5432/mydb',
};

const factory = Fiji.init((ctx) => ({
  port: ctx.env('PORT', ctx.z.port().default(3000)),
  dbUrl: ctx.env('DATABASE_URL', ctx.z.string().url()),
}));

// Add the environment source from the object
factory.addSource(envSource);

factory.load();
const config = factory.toJS();
console.log(config); // { port: 4000, dbUrl: 'postgres://user:password@localhost:5432/mydb' }
```

#### Adding Environment Source from File

You can also add an environment source from a file. This is useful for loading environment variables from `.env` files or other configuration files.

```typescript
import * as Fiji from '@ayka/fiji';
import * as fs from 'fs';
import * as path from 'path';

const factory = Fiji.init((ctx) => ({
  port: ctx.env('PORT', ctx.z.port().default(3000)),
  dbUrl: ctx.env('DATABASE_URL', ctx.z.string().url()),
}));

// Add the environment source from a file. Defaults to '.env' if path is not specified.
factory.addEnvFile('.env').load();
const config = factory.toJS();
console.log(config);
// This will log the configuration with values from the .env file
// For example: { port: 8080, dbUrl: 'postgres://user:password@localhost:5432/mydb' }
```

#### Combining Multiple Sources

You can combine multiple environment sources, such as objects and files, to create a comprehensive configuration.

```typescript
import * as Fiji from '@ayka/fiji';
import * as fs from 'fs';
import * as path from 'path';

const envSourceObject = {
  PORT: '4000',
};

const factory = Fiji.init((ctx) => ({
  port: ctx.env('PORT', ctx.z.port().default(3000)),
  dbUrl: ctx.env('DATABASE_URL', ctx.z.string().url()),
}));

// Combine multiple sources by chaining methods
factory.addSource(envSourceObject).addEnvFile('.env').addEnvFile('config.env');

// The sources are processed in the order they are added
// Later sources can override values from earlier sources

factory.load();
const config = factory.toJS();
console.log(config);
```

### Extending Configuration

You can extend an existing configuration factory with additional properties. This is useful for adding additional configuration options to an existing configuration without modifying the original factory. This feature is particularly helpful when you need to add or override configuration for specific scenarios, such as testing environments.

```typescript
import * as Fiji from '@ayka/fiji';

const baseFactory = Fiji.init((ctx) => ({
  appName: 'BaseApp',
  port: ctx.env('PORT', ctx.z.port().default(3000)),
}));

const extendedFactory = baseFactory.extend((ctx) => ({
  debug: ctx.env('DEBUG', ctx.z.boolean().default(false)),
}));

extendedFactory.load();
const config = extendedFactory.toJS();
console.log(config);
```

### Patching Configuration

The `patch` method allows you to modify an existing configuration factory by applying changes to specific properties. This is useful for making targeted adjustments to your configuration without recreating the entire factory.

```typescript
import * as Fiji from '@ayka/fiji';

const baseFactory = Fiji.init((ctx) => ({
  appName: 'BaseApp',
  port: ctx.env('PORT', ctx.z.port().default(3000)),
}));

const patchedFactory = baseFactory.patch((ctx) => ({
  appName: 'PatchedApp',
}));

patchedFactory.load();
const config = patchedFactory.toJS();
console.log(config); // { appName: 'PatchedApp', port: 3000 }
```

### Using `asClass` for NestJS Dependency Injection

The `asClass` method can be particularly useful when integrating with NestJS. By converting your configuration factory into a class, you can easily inject it into your NestJS services or controllers.

```typescript
import { Injectable } from '@nestjs/common';
import * as Fiji from '@ayka/fiji';

// Initialize the configuration factory
const factory = Fiji.init((ctx) => ({
  appName: ctx.value('MyApp'),
  port: ctx.env('PORT', ctx.z.port().default(3000)),
  debug: ctx.env('DEBUG', ctx.z.boolean().default(false)),
}));

// Load the configuration
factory.load();

// Convert the factory to a class
class Config extends factory.asClass() {}

// Use the class in a NestJS service
@Injectable()
export class AppService {
  // Do not forget to add `Config` to module providers
  constructor(private readonly config: Config) {}
}
```

## API Reference

### ConfigFactory

The `ConfigFactory` class is the core of the `@ayka/fiji` library. It provides methods to initialize, load, and manipulate configuration.

- **init(configSource: initParams<t>): ConfigFactory<t>**

  - Initializes a new configuration factory with the provided configuration source. The configuration source can be a plain object or a function that receives a context for dynamic configurations.

#### Methods

- **toJS(opts?: toJSOpts): T.config<t>**

  - Converts the configuration to a JavaScript object. Optionally hides secrets if the `hideSecrets` option is set to `true`.

  - **Example:**

    ```typescript
    const factory = Fiji.init((ctx) => ({
      apiKey: ctx.value('my-secret-key').secret(),
      dbPassword: ctx.env('DB_PASSWORD').secret(),
    }));

    factory.load();
    const config = factory.toJS({ hideSecrets: true });
    console.log(config); // { apiKey: '<secret>', dbPassword: '<secret>' }
    ```

- **load(opts?: loadOpts): ConfigFactory<t>**

  - Loads environment variables and applies schemas and defaults. You can specify custom environment sources, files, and additional sources.

  - **Example:**

    ```typescript
    const factory = Fiji.init((ctx) => ({
      port: ctx.env('PORT', ctx.z.port().default(3000)),
      dbUrl: ctx.env('DATABASE_URL', ctx.z.string().url()),
    }));

    factory.load({
      processEnv: { PORT: '8080' },
      envFiles: ['.env', 'config.env'],
      envSources: [{ DATABASE_URL: 'postgres://user:pass@localhost:5432/db' }],
    });

    const config = factory.toJS();
    console.log(config); // { port: 8080, dbUrl: 'postgres://user:pass@localhost:5432/db' }
    ```

- **patch(patch: initParams<T.patch<t>>): ConfigFactory<t>**

  - Applies a patch to the existing configuration and returns a new factory instance. This allows you to modify specific properties without recreating the entire configuration.

  - **Example:**

    ```typescript
    const factory = Fiji.init((ctx) => ({
      apiKey: ctx.value('my-secret-key').secret(),
      dbPassword: ctx.env('DB_PASSWORD').secret(),
    }));

    factory.load();

    const newFactory = factory.patch({
      apiKey: 'new-secret-key',
    });

    const config = newFactory.toJS();
    console.log(config); // { apiKey: 'new-secret-key', dbPassword: '<secret>' }
    ```

- **extend<r extends T.rawConfig>(extension: initParams<r>): ConfigFactory<T.extension<t, r>>**

  - Extends the existing configuration with additional properties and returns a new factory instance. This is useful for adding new configuration options without modifying the original factory.

  - **Example:**

    ```typescript
    const factory = Fiji.init((ctx) => ({
      apiKey: ctx.value('my-secret-key').secret(),
      dbPassword: ctx.env('DB_PASSWORD').secret(),
    }));

    const extendedFactory = factory.extend({
      newProperty: 'new-value',
    });
    extendedFactory.load();

    const config = extendedFactory.toJS();
    console.log(config); // { apiKey: '<secret>', dbPassword: '<secret>', newProperty: 'new-value' }
    ```

- **asClass(): configClassConstructor<t>**

  - Converts the configuration factory to a class constructor. This is particularly useful for integrating with the NestJS framework. The resulting class can be used as a provider in NestJS modules, allowing for typed configuration injection throughout your application.

  - **Example:**

    ```typescript
    import * as Fiji from '@ayka/fiji';

    const factory = Fiji.init((ctx) => ({
      apiKey: ctx.env('API_KEY').secret(),
      dbPassword: ctx.env('DB_PASSWORD').secret(),
    }));

    factory.load();
    class Config extends factory.asClass() {}
    const config = new Config();
    console.log(config.apiKey);
    console.log(config.dbPassword);
    ```

    ```typescript
    import { Module } from '@nestjs/common';
    import { Config } from './config';

    @Module({
      providers: [Config],
    })
    export class AppModule {}
    ```

- **addEnvSource(envSource: NodeJS.ProcessEnv): ConfigFactory<t>**

  - Adds an environment source to the configuration factory. This allows you to programmatically override environment variables.

- **addEnvFile(path = '.env'): ConfigFactory<t>**

  - Adds an environment source from a file. This is useful for loading environment variables from `.env` files or other configuration files.

- **parseEnv(envSource: NodeJS.ProcessEnv = process.env): ConfigFactory<t>**

  - Parses the environment variables and updates the internal environment map. This method ensures that all environment variables are validated and applied according to the defined schemas.

- **envInfo(): { missing: string[], loaded: string[], defaulted: string[], sourced: string[] }**

  - Provides information about the environment variables, including which are missing, loaded, defaulted, and sourced.

For more detailed examples and API references, please refer to the test files and source code.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Acknowledgements

This project makes use of the following libraries:

- [Zod](https://github.com/colinhacks/zod): A TypeScript-first schema declaration and validation library.
- [ZNV](https://github.com/lostfictions/znv): A library for parsing and validating environment variables.

## License

This project is licensed under the MIT License
