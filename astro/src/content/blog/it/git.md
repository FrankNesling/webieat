---
title: "Git"
description: ""
pubDate: 2026-01-05
lastEdit: 2026-01-26
---

## Head branch

Branch with changes, the source branch when merging into the target (base branch).

## Base branch

Head branch is based on it, the target to merge into. Usually main.

## Rebase

Move all head branch commits after the latest base branch commits.

## Stash

Save changes locally in the stash, temporarily, and return to original version.

## Squash Merge

When merging combine multiple commits into one new commit.

## Merge commit

Add a commit after merge that keeps track of the history of both head and base branch. Git interally remebers the paths as a graph.

## Ref

Name or pointer to a certain commit.

## Tag

Mark an important commit, often a release.

## Head

Pointer to the commit currently on.

## Piper

Google's versioning control. There is only one code base for almost all Google products and developers usually don't use branches but directly commit after a code review.