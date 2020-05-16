# GitHub Users

## Learning Angular 9 using the GitHub API

This is both a functional project and a learning experiment using Angular 9.


###
* v1 2/6/2017 Angular 2.4 using npm angular cli beta.31
* v2 2/20/2017 Update to Angular 5
* v3 5/10/2020 Upgrade to Angular 9 and rewrite app extensively to experiment ith different Angular features.


###
See `https://lasellers.github.io/GitHubUsers/` for the live version of this repo posted to gh-pages.

To publish to gh-pages yourself, the procedure used was:

```
git checkout gh-pages
git merge master
ng build
git subtree push --prefix dist origin gh-pages
```
