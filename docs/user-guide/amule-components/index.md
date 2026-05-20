---
id: index
title: aMule Modules
---

aMule ships several binaries, each serving a distinct role. They can be used independently or in combination.

| Binary | Description |
|---|---|
| `amule` | All-in-one GUI client |
| `amuled` | Headless daemon (no GUI); intended for servers and remote operation |
| `amulegui` | Remote GUI that connects to a running `amuled` instance via the EC protocol |
| `amuleweb` | HTTP web interface for a running `amuled` instance |
| `amulecmd` | Interactive command-line interface for a running `amuled` instance |

## amule

The all-in-one graphical client. Includes the full aMule interface and runs the core directly.

- [amule](amule.md)

## amuled

The headless daemon runs aMule without any graphical interface. It is designed for always-on servers and NAS devices.

- [amuled](amuled.md)

## amulegui

A standalone remote GUI that connects to `amuled` over the network.

- [amulegui](amulegui.md)

## amuleweb

An HTTP web interface that allows browser-based control of `amuled`.

- [amuleweb](amuleweb.md)

## amulecmd

An interactive command-line client for scripting and terminal-based control of `amuled`.

- [amulecmd](amulecmd.md)
