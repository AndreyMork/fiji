# @ayka/fiji

[![NPM Version](https://img.shields.io/npm/v/%40ayka%2Ffiji)](https://www.npmjs.com/package/@ayka/fiji)
[![NPM License](https://img.shields.io/npm/l/%40ayka%2Ffiji)](https://www.npmjs.com/package/@ayka/fiji)
[![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40ayka%2Ffiji)](https://www.npmjs.com/package/@ayka/fiji)
[![NPM Downloads](https://img.shields.io/npm/dm/%40ayka%2Ffiji)](https://www.npmjs.com/package/@ayka/fiji)

[![Tests and Code Quality](https://github.com/AndreyMork/fiji/actions/workflows/tests-and-code-quality.yaml/badge.svg)](https://github.com/AndreyMork/fiji/actions/workflows/tests-and-code-quality.yaml)
[![CodeQL](https://github.com/AndreyMork/fiji/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/AndreyMork/fiji/actions/workflows/github-code-scanning/codeql)

[![Maintainability](https://api.codeclimate.com/v1/badges/511e23db3f9fe9026c49/maintainability)](https://codeclimate.com/github/AndreyMork/fiji/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/511e23db3f9fe9026c49/test_coverage)](https://codeclimate.com/github/AndreyMork/fiji/test_coverage)

<!-- ![npms.io](https://img.shields.io/npms-io/final-score/%40ayka%2Ffiji) -->

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
	port: ctx.z.port().default(3000), // Updated to use ctx.z.port
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
	port: ctx.env('PORT', ctx.z.port().default(3000)), // Already correct
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
	port: ctx.env('PORT', ctx.z.port().default(3000)), // Already correct
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
	port: ctx.env('PORT', ctx.z.port().default(3000)), // Already correct
	dbUrl: ctx.env('DATABASE_URL', ctx.z.string().url().nonempty()),
}));

factory.load();
const config = factory.toJS();
console.log(config);
```

### Loading Environment Variables

To load environment variables, call the `load` method on your configuration factory. This will read the variables from the environment and apply any defined schemas and defaults.

```typescript
factory.load();
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
	port: ctx.env('PORT', ctx.z.port().default(3000)), // Already correct
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
	port: ctx.env('PORT', ctx.z.port().default(3000)), // Updated to use ctx.z.port
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
	port: ctx.env('PORT', ctx.z.port().default(3000)), // Updated to use ctx.z.port
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
	port: ctx.env('PORT', ctx.z.port().default(3000)), // Updated to use ctx.z.port
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
	port: ctx.env('PORT', ctx.z.port().default(3000)), // Updated to use ctx.z.port
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
	port: ctx.env('PORT', ctx.z.port().default(3000)), // Updated to use ctx.z.port
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

  - Constructor function that creates a new configuration factory with the given source.

#### Methods

- **toJS(opts?: toJSOpts): T.config<t>**

  - Converts the configuration to a JavaScript object. Optionally hides secrets.

- **load(opts?: loadOpts): ConfigFactory<t>**

  - Loads environment variables and applies schemas and defaults.

- **patch(patch: initParams<T.patch<t>>): ConfigFactory<t>**

  - Applies a patch to the existing configuration.

- **extend<r extends T.rawConfig>(extension: initParams<r>): ConfigFactory<T.extension<t, r>>**

  - Extends the existing configuration with additional properties.

- **clone(): ConfigFactory<t>**

  - Creates a clone of the current configuration factory.

- **asClass(): configClassConstructor<t>**

  - Converts the configuration factory to a class constructor. This is particularly useful for integrating with NestJS, a popular Node.js framework. The resulting class can be used as a provider in NestJS modules, allowing for typed configuration injection throughout your application. For example:

- **addEnvSource(envSource: NodeJS.ProcessEnv): ConfigFactory<t>**

  - Adds an environment source from a plain object.

- **addEnvFile(path = '.env'): ConfigFactory<t>**

  - Adds an environment source from a file.

- **parseEnv(envSource: NodeJS.ProcessEnv = process.env): ConfigFactory<t>**

  - Parses environment variables from the given source.

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
