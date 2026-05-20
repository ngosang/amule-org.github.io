---
id: index
title: Componentes de aMule
---

aMule incluye varios binarios, cada uno con una función específica. Pueden utilizarse de forma independiente o en combinación.

| Binario | Descripción |
|---|---|
| `amule` | Cliente GUI todo en uno |
| `amuled` | Daemon sin interfaz gráfica; pensado para servidores y uso remoto |
| `amulegui` | GUI remota que se conecta a una instancia de `amuled` mediante el protocolo EC |
| `amuleweb` | Interfaz web HTTP para una instancia de `amuled` en ejecución |
| `amulecmd` | Interfaz interactiva de línea de comandos para una instancia de `amuled` en ejecución |

## amule

El cliente GUI todo en uno. Incluye la interfaz completa de aMule y ejecuta el núcleo directamente.

- [amule](amule.md)

## amuled

El daemon sin interfaz gráfica ejecuta aMule sin ninguna GUI. Está diseñado para servidores siempre encendidos y dispositivos NAS.

- [amuled](amuled.md)

## amulegui

Una GUI remota independiente que se conecta a `amuled` a través de la red.

- [amulegui](amulegui.md)

## amuleweb

Una interfaz web HTTP que permite controlar `amuled` desde el navegador.

- [amuleweb](amuleweb.md)

## amulecmd

Un cliente de línea de comandos interactivo para scripting y control de `amuled` desde el terminal.

- [amulecmd](amulecmd.md)
