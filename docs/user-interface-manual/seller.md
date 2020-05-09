---
id: seller
title: Seller Application
sidebar_label: Seller 
---

## Authentication

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/seller/LoginMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/OtpMockup.jpg" width=200 height=350>
</div>

Mobile OTP authentication verifies the user's contact number and a [login](https://documenter.getpostman.com/view/6369926/Szmb6KVo?version=latest#f60f885d-0fdb-4cc3-b40d-2e30f51742a9) request is sent to the zinger core to confirm the user credentials. The user will be onboarded to the dashboard screen post the successful authentication.

## Dashboard

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/seller/NewOrdersMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/PreparingMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/ReadyMockup.jpg" width=200 height=350>
</div>

The dashboard [list all the current orders](https://documenter.getpostman.com/view/6369926/Szmb6KVo?version=latest#34d6371a-4244-404b-a04a-d710a35c4fb8), which are classified into three tabs namely 
* New Orders 
* Preparing 
* Ready

The user can update the order status by sending an [update order](https://documenter.getpostman.com/view/6369926/Szmb6KVo?version=latest#5d57a934-dac8-410b-8e78-55577231a975) request. 
The user should enter the secret key received by the customer to complete the order.

## Inventory

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/seller/MenuCategoryMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/MenuItemMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/AddUpdateItemMockup.jpg" width=200 height=350>
</div>

The user can [add](https://documenter.getpostman.com/view/6369926/Szmb6KVo?version=latest#2f2038c3-c509-4da6-bba4-796ea786148d), [delete](https://documenter.getpostman.com/view/6369926/Szmb6KVo?version=latest#1cf0bea0-c378-42db-a2b8-b8cc3e3d8d80) or [modify](https://documenter.getpostman.com/view/6369926/Szmb6KVo?version=latest#93f7f12e-51be-4da0-a5b0-ac2efc3ff268) the dish information, which includes price, availability, etc.

## Past Orders

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/seller/PastOrdersMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/SearchOrdersMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/OrderDetailsMockup.jpg" width=200 height=350>
</div>

The user can [review](https://documenter.getpostman.com/view/6369926/Szmb6KVo?version=latest#2bd40cb5-a6cb-4712-9e17-029707269b14) the order history for business analysis and customer insights.
The user can also [search](https://documenter.getpostman.com/view/6369926/Szmb6KVo?version=latest#3f2ad8d4-12c2-4c44-8f15-726b4430ad61) for past orders by customer name, mobile number or order id.
