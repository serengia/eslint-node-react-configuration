# Eslint, Prettier, Nodejs, React and AirBnB style guide configuration

This is a dummy NodeJs - React app with the sole aim of showing how to correctly configure Eslint, Prettier, AirBnB style guide, and related plugins with a decoupled Node -React app

## A). Backend configuration

### 1. Ensure you have Installed ESLint & Prettier extensions for VSCode, or any popular code editor of your choice.

### 2. Install Packages - at the root of your project

```sh
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
```

```sh
npx install-peerdeps --dev eslint-config-airbnb-base
```

### 3. Create .prettierrc for rules such as quotes, etc - at the root of your project.

### 4. Create .eslintrc.json file - at the root of your project. (Alternatively you can generate the file with the following command):

```sh
npm init @eslint/config
```

## Sample .eslintrc.json file rules

Extend the rules to fit your project needs

```

{
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": [
    "prettier",
    "plugin:react/recommended",
    "airbnb",
    "plugin:node/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest"
  },
  "plugins": ["react", "prettier", "node"],
  "rules": {
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "linebreak-style": ["error", "windows"],
    "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next" }],
    "no-console": "warn",
    "func-names": "off",
    "object-curly-newline": "off"
  }
}

```

---

## B). Frontend configuration

### 1. CD to frontend folder and Install Packages

```sh
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier
```

```sh
npx install-peerdeps --dev eslint-config-airbnb
```

### 3. Create .prettierrc file at the root of "frontend folder" for rules such as quotes, etc

### 4. Create .eslintrc.json file at the root of the "frontend folder". (Alternatively you can generate the file with the following command. In this case, make sure you have CD to frontend folder running the file generate command):

```sh
npm init @eslint/config
```

## Sample .eslintrc.json file rules

Extend the rules to fit your project needs

```
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": [
    "prettier",
    "plugin:react/recommended",
    "airbnb",
    "plugin:react/jsx-runtime"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest"
  },
  "plugins": ["react", "prettier"],
  "rules": {
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "linebreak-style": ["error", "windows"],
    "no-unused-vars": ["error", { "argsIgnorePattern": "req|res|next" }],
    "no-console": "warn",
    "func-names": "off",
    "object-curly-newline": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}

```

### Reference links

- VSCode Editor - https://code.visualstudio.com/
- ESLint Rules - https://eslint.org/
- Airbnb Style Guide - https://www.npmjs.com/package/eslint-config-airbnb/
- Prettier - https://prettier.io/
