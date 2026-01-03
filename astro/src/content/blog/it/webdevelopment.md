---
title: "Webdevelopment"
description: ""
pubDate: 2026-01-03
lastEdit: 2026-01-03
---

## Client-Side Rendering (CSR)

The client (web browser like Firefox) retrieves mostly a JavaScript file from the server and via this file builds the .html then displayed to the user on the browser.

## Server-Side Rendering (SSR)

Dynamic (eg. data from DB) is rendered into the .html on the server. Less work on the client, more work on the server.

## Static Site Generation (SSG)

Pages programmed via JavaScript or a framework and then built into static .html that are then served by the server, statically.

## Single-Page Application (SPA)

Navigation over the client. URL changed via javascript. No new .html fetched from the server.

## Search Engine Optimization (SEO)

Search Engines like Google prefer fully rendered HTMLs (ie. SSR or SSG). Building the page via CSR/SPA costs more resources for the search engine.
For pages behind authentication or where the content is irrelevant, SEO and therefore SSR/SSG has less significance.