---
title: Setting Up a Development Environment (openSUSE)
date: 2020-07-01
type: article
sidebar: auto
tags: openSUSE, linux
image: https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80
---

# Setting Up a Development Environment (openSUSE)

Hey there!

Install the following dependencies first

<!-- more -->


```bash
$ sudo zypper install git nodejs yarn zsh python3-pip
```

### Install Oh My ZSH!
```bash
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

After it is installed, set the preferred theme:

```bash
ZSH_THEME="mortalscumbag"
```

### Install zsh-autosuggestions

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

Add the plugin to `.zshrc`:

```bash
plugins=(zsh-autosuggestions)
```

## Set up vim

Make sure vim is installed, and then save the following contents in `~/.vimrc`.
Download [vimrc](https://missing.csail.mit.edu/2020/files/vimrc).

## Install virtualenvwrapper

```bash
pip3 install virtualenvwrapper virtualenv
```

Add following lines to your `.zshrc`:

```bash
VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
source $HOME/.local/bin/virtualenvwrapper.sh
```