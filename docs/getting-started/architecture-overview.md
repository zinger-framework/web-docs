---
id: architecture-overview
title: Architecture Overview 
sidebar_label: Architecture Overview
---
<br><br>
![](/img/zinger/zinger-v2-arch.png)

## Zinger Core
&emsp;&emsp;A backend server that exposes the REST API, written in Ruby on Rails using PostgreSQL database and Redis cache. It also exclusively uses Elastic Search for searching inventory, shops, etc.

## Zinger Client
&emsp;&emsp;Zinger [Client](https://github.com/zinger-framework/zinger-ui) is a frontend application built in Angular, incorporating Zinger Admin and Zinger Platform for managing admin and platform specific operations respectively.

## Zinger Admin
&emsp;&emsp;A web dashboard providing a one-stop solution for shop employees to manage and track orders from their clients and it provides an effective order and inventory management solutions.

## Zinger Platform
&emsp;&emsp;A web dashboard to monitor the zinger customer and admin applications. It is a powerful tool to track application performance, manage outlet information and promotes new arrivals to increase brand engagement.

## Zinger Customer
&emsp;&emsp;A customer-side [mobile](https://github.com/shrikanth7698/Zinger-Android-App) application to place and track your orders from multiple store partners near your location. It allows you to browse catalogs of all stores and provides you a seamless shopping experience from order acceptance to last mile delivery.
