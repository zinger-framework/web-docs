---
id: build
title: Build & Deploy 
sidebar_label: Build
---

## Eclipse IDE
* Choose `File -> Import -> Maven -> Existing Maven projects`
* Right-click [MainApplication.java](https://github.com/zinger-framework/zinger-core/blob/master/src/main/java/com/food/ordering/zinger/MainApplication.java) and choose `Run As -> Java Application`  

## IntelliJ IDEA
* Choose `File -> Open` and choose the project location
* Right-click [MainApplication.java](https://github.com/zinger-framework/zinger-core/blob/master/src/main/java/com/food/ordering/zinger/MainApplication.java) and choose `Run MainApplication.main()` 

## Test
* Visit [localhost:8080](localhost:8080) in the browser to check if the setup is successful.
* Test the endpoints in Postman by importing the [API collection](https://github.com/zinger-framework/zinger-core/blob/master/Zinger%20framework%20(Release).json)
* For detailed API documentation, please refer [API Docs](https://documenter.getpostman.com/view/6369926/TVRoZ6jW?version=latest)

## Deploy
If you would like to integrate with any mobile or web application, use [Ngrok](https://ngrok.com/download) to get a public URL of 
your localhost. Also, you can host in any of the online cloud service providers like [Heruko](https://www.heroku.com/), [Azure](https://azure.microsoft.com/), [AWS](https://aws.amazon.com/), etc.
