---
title: Setting Up a Development Environment (Ubuntu)
date: 2020-07-01
type: article
hide: true
sidebar: auto
tags: ubuntu, linux
image: https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80
---

# Setting Up a Development Environment (Ubuntu)

Hey there!
You can either follow the steps or just run the script I wrote which does exactly this!

<!-- more -->

Download the script [here](./setup-dev-env.sh).

Install the following dependencies first

```bash
sudo apt install git tldr python3-pip net-tools
```

## Install zsh

This would replace bash as your default shell.  
```bash
sudo apt install zsh
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

## Install node.js

As of now, v12.x is the LTS version.

```bash
# for v14.x
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
# for v12.x
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt-get install -y nodejs
```

### Install yarn

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update && sudo apt install yarn
```

## Set up vim

Make sure vim is installed, and then save the following contents in `~/.vimrc`.
Download [vimrc](https://missing.csail.mit.edu/2020/files/vimrc).

## Install virtualenvwrapper

```bash
pip3 install virtualenvwrapper
```

Add following lines to your `.zshrc`:

```bash
VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
source $HOME/.local/bin/virtualenvwrapper.sh
```