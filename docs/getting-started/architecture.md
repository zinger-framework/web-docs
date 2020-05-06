---
id: architecture
title: Architecture Overview 
sidebar_label: Architecture
---

Zinger Framework consiste of 3 components :

1. Zinger Core:  is the backend server that exposes the REST API. The core is written using java spring boot framework. Mysql database is used for maintaining the state. Zinger core does not have an user interface on its own 

2. Zinger Customer App: implements the user interface the customers used to interact with a shop outlet. They will be able to browse the catalogue ,place and track the orders.

3. Zinger Seller App:  implements the user interface the shop owner used to interact with a customer. It provides inventory management and order management features.

4. Super Admin App: implements the user interface for administering the entire application and managing the users.

