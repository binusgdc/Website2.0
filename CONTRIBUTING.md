# Contributing

## Instruction for all maintainers

The branch `main` is a central development branch, which should be clean and **ready for production**. There should be no unnecessary comments and debugging code.

1. Please follow the guide on how to [work on new feature](#working-on-a-feature)

2. Make a commit to your feature branch. Commit messages should be descriptive and help others to understand the change that was made.

    - Make sure the code is following the [Coding standards](#coding-standards)

3. When your feature is ready to merge, create a pull request.

    - Before merging, please make sure that the code is following the [Coding standards](#coding-standards) by running `npm run lint`. **Make sure no errors are reported**.
    - This will automatically assign a reviewer to  your pull request.
    - There are several test and review that needs to be passed before merging.

4. **Tidy up!** After the pull request is merged delete the branch from your local and GitHub repository.

```
git branch -D <your-branch-name>
git push origin --delete your-branch-name
```

## Working on a feature

Before working on a feature, please make sure that you're on the **latest version of the main branch** of the repository.

```
git fetch origin main:main
git checkout -b <newFeature> main
```

To **ensure update with the development dependencies** of the project run

```
npm install
```

Then, you can start working on the feature.

## Coding Standards

code formatting rules are defined in [.eslintrc](https://github.com/binusgdc/Website2.0/blob/main/.eslintrc.json) and [.prettierrc](https://github.com/binusgdc/Website2.0/blob/main/.prettierrc.json). Check your code against these standards by running:

```
npm run lint
```

Beside running the lint command you can use [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension on vscode. Then with the predefined [vscode config](https://github.com/binusgdc/Website2.0/blob/main/.vscode/settings.json), it will automatically format your code on save.

**Make sure there are no violation of the coding standards before requesting a pull request.**

## Learn More

To learn more about used dependencies take a look at the following resources:

- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs/installation-CSS)
- [SCSS](https://sass-lang.com/documentation)
- [Mongoose](https://mongoosejs.com/)

## API Endpoints and Documentation

[The following document](https://docs.google.com/spreadsheets/d/1S7p6zPIyBLdY8MuZhdMzbUOUBYxOoN3X_4A3K6rDLQA/edit#gid=0) serves as documentation regarding available API endpoints and their parameters.
