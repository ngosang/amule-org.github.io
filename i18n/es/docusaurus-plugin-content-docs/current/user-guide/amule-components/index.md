---
id: index
title: Módulos de aMule
---

aMule incluye varios binarios, cada uno con un papel diferente. Se pueden usar de forma independiente o combinados.

| Binario | Descripción |
|---|---|
| `amule` | Cliente gráfico todo en uno |
| `amuled` | Demonio sin interfaz gráfica; pensado para servidores y operación remota |
| `amulegui` | Interfaz gráfica remota que se conecta a una instancia de `amuled` mediante el protocolo EC |
| `amuleweb` | Interfaz web HTTP para una instancia de `amuled` en ejecución |
| `amulecmd` | Interfaz de línea de comandos para una instancia de `amuled` en ejecución |

## amule

El cliente gráfico todo en uno. Incluye la interfaz completa de aMule y ejecuta el núcleo directamente.

- [amule](amule.md)

## amuled

El demonio sin interfaz gráfica ejecuta aMule sin ninguna interfaz visual. Está diseñado para servidores siempre encendidos y dispositivos NAS.

- [amuled](amuled.md)

## amulegui

Una interfaz gráfica independiente que se conecta a `amuled` a través de la red.

- [amulegui](amulegui.md)

## amuleweb

Una interfaz web HTTP que permite controlar `amuled` desde el navegador.

- [amuleweb](amuleweb.md)

## amulecmd

Un cliente de línea de comandos interactivo para scripting y control de `amuled` desde el terminal.

- [amulecmd](amulecmd.md)
