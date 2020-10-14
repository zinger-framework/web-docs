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

Mobile OTP authentication verifies the user's contact number and a [login](https://documenter.getpostman.com/view/6369926/TVRoZ6jW#f89e990e-1841-4742-baef-3344f2d6cc9a) request is sent to the zinger core to confirm the user credentials. The user will be onboarded to the dashboard screen post the successful authentication.

## Dashboard

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/seller/NewOrdersMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/PreparingMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/ReadyMockup.jpg" width=200 height=350>
</div>

The dashboard [list all the current orders](https://documenter.getpostman.com/view/6369926/TVRoZ6jW#04eadaa8-09d7-48a4-926f-119e0bff1ac6), which are classified into three tabs namely 
* New Orders 
* Preparing 
* Ready

The user can update the order status by sending an [update order](https://documenter.getpostman.com/view/6369926/TVRoZ6jW#de4f1b2c-1753-4c83-b291-21fcdac96b1e) request. 
The user should enter the secret key received by the customer to complete the order.

## Inventory

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/seller/MenuCategoryMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/MenuItemMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/AddUpdateItemMockup.jpg" width=200 height=350>
</div>

The user can [add](https://documenter.getpostman.com/view/6369926/TVRoZ6jW#d6437e76-edfe-4028-b710-e4a71dbc5b4e), [delete](https://documenter.getpostman.com/view/6369926/TVRoZ6jW#7f7aec86-e907-4164-b3bd-5814a38e306d) or [modify](https://documenter.getpostman.com/view/6369926/TVRoZ6jW#6036931a-156a-4d53-8a32-082e9f1f86b5) the dish information, which includes price, availability, etc.

## Past Orders

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/seller/PastOrdersMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/SearchOrdersMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/OrderDetailsMockup.jpg" width=200 height=350>
</div>

The user can [review](https://documenter.getpostman.com/view/6369926/TVRoZ6jW#02f2456a-0dd7-48bb-b260-1400b33e7720) the order history for business analysis and customer insights.
The user can also [search](https://documenter.getpostman.com/view/6369926/TVRoZ6jW#5a4fb3d1-cfe8-4974-a755-d641c68c28a8) for past orders by customer name, mobile number or order id.
