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

Mobile OTP authentication verifies the user's contact number and a [login](https://documenter.getpostman.com/view/6369926/TVRoYmFY#de7b4d5a-84a4-41de-b604-bef7972c4c0c) request is sent to the zinger core to confirm the user credentials. The user will be onboarded to the dashboard screen post the successful authentication.

## Dashboard

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/seller/NewOrdersMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/PreparingMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/ReadyMockup.jpg" width=200 height=350>
</div>

The dashboard [list all the current orders](https://documenter.getpostman.com/view/6369926/TVRoYmFY#966fc9f2-efa4-402f-ad8e-1242bb617c73), which are classified into three tabs namely 
* New Orders 
* Preparing 
* Ready

The user can update the order status by sending an [update order](https://documenter.getpostman.com/view/6369926/TVRoYmFY#91033e98-5638-4e90-80f2-832584a0d85a) request. 
The user should enter the secret key received by the customer to complete the order.

## Inventory

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/seller/MenuCategoryMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/MenuItemMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/AddUpdateItemMockup.jpg" width=200 height=350>
</div>

The user can [add](https://documenter.getpostman.com/view/6369926/TVRoYmFY#49ac7c35-ec40-4445-8540-90db8724178e), [delete](https://documenter.getpostman.com/view/6369926/TVRoYmFY#1d1aee84-3a96-486d-8256-027a7674b3e1) or [modify](https://documenter.getpostman.com/view/6369926/TVRoYmFY#25bd5783-93d6-4390-a3e2-ff1e4d0cdb2a) the dish information, which includes price, availability, etc.

## Past Orders

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/seller/PastOrdersMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/SearchOrdersMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/seller/OrderDetailsMockup.jpg" width=200 height=350>
</div>

The user can [review](https://documenter.getpostman.com/view/6369926/TVRoYmFY#73d3a350-297e-412b-b9dc-bfbee2ba9a74) the order history for business analysis and customer insights.
The user can also [search](https://documenter.getpostman.com/view/6369926/TVRoYmFY#38b89d7c-f1b7-4141-bbc3-96b1c480d50b) for past orders by customer name, mobile number or order id.
