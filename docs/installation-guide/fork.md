---
id: fork
title: Fork Project
sidebar_label: Fork Project
---

* [Fork](https://github.com/ddlogesh/zinger-framework/fork) the Main Repository
* Clone the forked repository locally `git clone forked_repo_url`
## Setup DB

* Open MySQL Workbench
* Run the [DB_INIT.sql](https://github.com/ddlogesh/zinger-framework/blob/master/sql/DB_INIT.sql) script to create the tables, indexes and triggers.
* Run the [DB_PROC.sql](https://github.com/ddlogesh/zinger-framework/blob/master/sql/DB_PROC.sql) script to create the procedures.
* Run the [DB_INSERT.sql](https://github.com/ddlogesh/zinger-framework/blob/master/sql/DB_INSERT.sql) script to populate the database.
* Set your MySQL username and password in [application.properties](https://github.com/ddlogesh/zinger-framework/blob/master/src/main/resources/application.properties)

## Setup Firebase Admin SDK
* Create a new [Firebase](https://console.firebase.google.com/) project 
* Navigate to `Project setting -> Service accounts -> Generate service account -> Generate new private key`
* Set your credentials file path in [application.properties](https://github.com/ddlogesh/zinger-framework/blob/master/src/main/resources/application.properties)
