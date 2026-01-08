---
title: "Kubernetes"
description: ""
pubDate: 2026-01-03
lastEdit: 2026-01-03
---

## Docker container

A minimal environment for a program to be able to run. It includes external libraries and other dependencies but not the OS Kernel.

## Pod

The smallest unit of Kubernetes which wraps one or several container that do not need to be Docker, but most of the time are. One pod has its own IP + port.

## Node

A virtual machine (VM) on a random computer in the cloud (in a random datacenter), could also be a real physical machine. It can host several pods that share the resources of the node.

## Cluster

A collection of nodes that share attributes.

## skaffold

## helm

## Docker compose