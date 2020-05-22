# GitHub Users

## Learning Angular 9, using the GitHub API

This is both a functional project and a learning experiment using Angular 9.
Because this is a learning project, different techniques are used in various parts of the code.
And this is quite on purpose. Also, though it bugs me somewhat, much of the code is left sub-optimal
as the elimination of some of it removes a path for further experimentation or review down the line.

Hopefully playing with the code will help clear up some issues you encounter as well.

Good luck.

--Lewis

###
* v1 2/6/2017 Angular 2.4 using npm angular cli beta.31
* v2 2/20/2017 Update to Angular 5
* v3 5/10/2020 Upgrade to Angular 9 and rewrite app extensively to experiment with different Angular features.


###
See [https://lasellers.github.io/GitHubUsers/] for the live version of this repo posted to gh-pages.

To publish to gh-pages yourself, the procedure used was:

```
git checkout gh-pages
git merge master
ng build
git subtree push --prefix dist origin gh-pages
```

##
 Please, set "CHROME_BIN" env variable.
 `export CHROME_BIN=/usr/bin/chromium-browser `
export CHROME_BIN=chromium

wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb

## Notes

ng test --source=map=false
to avoid xmlRequest send bug caused by new cli.

##
import 'jasmine-ajax';

  beforeEach(() => jasmine.Ajax.install());
  afterEach(() => jasmine.Ajax.uninstall());

