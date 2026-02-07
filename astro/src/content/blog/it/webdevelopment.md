---
title: "Webdevelopment"
description: ""
pubDate: 2026-01-03
lastEdit: 2026-02-07
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

## Web Socket

A protocol, ws (or wss with TLS), that defines how two processes over the network communicate in real-time. With this the server and client communicate with each other continuously and bidirectionally, opposite to a classic http communication that is strictly request-response.

## Web Hook

Your system gives an URL to another system B, from which your system wants to get fresh data. On receive of new data, the other system B sends their data to the specified URL, so that your system does not need to poll.

## TCP

Send data to another system in a reliable way, so all data will eventually be sent in the correct order.

## UDP

Send data to another system as fast as possible with loss accepted.

## Differentiation

HTTP    → Ask & answer

Webhook → Notify on events

Socket  → Ongoing conversation

## IMAP

Protocol that defines how to sync emails with the mail server.

## POP3

Protocol that defines how to download emails with the mail server. It does not sync mailbox state (eg. read/unread), opposite to IMAP.

## SMTP

Protocol that defines how to send emails between mail servers and clients. A new email is sent from the client to the mail server via SMTP and then from there to the receipient's mail server also via SMTP. There it is retrieved with either IMAP or POP on the receipient's client app.

## Mail server

It is essentially a database where the mails are stored. The desktop app or the web mail app are clients of it (and for example synced via IMAP).

## Nginx

A modern webserver that is very performant in serving files like css, js or html. A worker can have thousands of connetions.

## Apache

In the past the most popular webserver, that starts one thread per connection, which is slower at scale.