---
title: Install Metasploit Framework in openSUSE
date: 2020-10-25
type: article
sidebar: auto
tags: openSUSE, ethical-hacking, metasploit
image: https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80
---

# Install Metasploit Framework in openSUSE

I'm writing this post since I couldn't find any resource related to this and I hope this would help someone other there! ;)

### Add GPG Key

This will import the gpg key.

```bash
$ sudo rpm --import https://apt.metasploit.com/metasploit-framework.gpg.key
```

### Add Repository

```bash
$ sudo zypper addrepo --refresh https://rpm.metasploit.com metasploit
```

### Install Metasploit!

```bash
$ sudo zypper in metasploit-framework
```

That's it, wait for it to get installed!