---
title: "Kubernetes"
description: ""
pubDate: 2026-01-03
lastEdit: 2026-01-08
---

## Docker container

A minimal environment for a program to be able to run. It includes external libraries and other dependencies but not the OS Kernel.

## Pod

The smallest unit of Kubernetes which wraps one or several container that do not need to be Docker, but most of the time are. One pod has its own IP + port.

## Node

A virtual machine (VM) on a random computer in the cloud (in a random datacenter), could also be a real physical machine. It can host several pods that share the resources of the node.

## Cluster

A collection of nodes that share attributes.

## Skaffold

Defined in a .yaml file and used for the CI/CD or local pipeline that orchestrates the build and deploy process, eg. in GitHub Actions.

## Helm

Package manager for Kubernetes. Allows to download configuration templates.

## Docker compose

Similar concept as Kubernetes, in a more lightweight and simple way. Mainly for local setups.