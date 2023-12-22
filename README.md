# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

### Installation

```sh
yarn
```

### Local Development

```sh
# This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
yarn start

# serve the static site
yarn run serve
```

### Build

```sh
# This command generates static content into the `build` directory and can be served using any static contents hosting service.
yarn build
```

### Deployment

```sh
# Using SSH:
USE_SSH=true yarn deploy

# Not using SSH:
GIT_USER=<Your GitHub username> yarn deploy

# If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
```

### Todo

1. 可以考虑将文章分段书写，在组装成一个整体文章时，加入头尾信息；
2. 动态中不内嵌文章整体，须在动态主页中定义 truncate 标记；
3. 动态中隐藏自带的更新时间，显示自定义的更新时间；