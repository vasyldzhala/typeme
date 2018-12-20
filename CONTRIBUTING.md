## Contributing

Thank you for considering contributing to TypeMe App. 
TypeMe App is an open source project and we love to receive contributions from community. 
There are many ways to contribute, from writing tutorials, improving the documentation, design, add features,
submitting bug reports or writing code which can be incorporated into TypeMe App.

## How to start

If you want to do something [search the issue tracker](https://github.com/vasyldzhala/typeme/issues) to see if
someone else in the community has already created a ticket. If not, go ahead and
make new issue.

### Fork repository & create a branch

If this is something you think you can fix, then fork TypeMe App and
create a branch with a descriptive name which contains issue #. For instance:

```sh
git checkout -b 01-add-user-help
```

### Install repository 

Go follow [README.md](https://github.com/vasyldzhala/typeme/blob/master/README.md) 
to install and deploy TypeMe App.

### If you find a bug

* **Ensure the bug was not already reported** by [searching all issues](https://github.com/vasyldzhala/typeme/issues).

* If you're sure open new issue addressing the problem, include a **title and clear
  description**, as much relevant information as possible, and a **code sample**
  or an **executable test case** demonstrating the expected behavior that is not
  occurring.

### Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help.

### Make a Pull Request

Update your feature branch from your local copy of master, and push it!

```sh
git checkout 01-add-user-help
git rebase master
git push origin 01-add-user-help
```

Finally, go to GitHub and make a [Pull Request](https://github.com/vasyldzhala/typeme/pulls)

### Keeping your Pull Request updated

If a lot of code has changed you have to "rebase" your PR , and that you need to update your branch 
so it's easier to merge.

```sh
git checkout 01-add-user-help
git pull --rebase upstream master
git push --force-with-lease 01-add-user-help
```
