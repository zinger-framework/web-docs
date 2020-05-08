---
id: customer
title: Customer Application
sidebar_label: Customer
---
## Authentication

<div style="text-align:center; width:100%">
    <img src="/img/customer/LoginMockup.jpg" width=200 height=350>
    <img src="/img/customer/OtpMockup.jpg" width=200 height=350>
    <img src="/img/customer/SignupMockup.jpg" width=200 height=350>
</div>

Mobile OTP authentication verifies the user's contact number and a [login](https://documenter.getpostman.com/view/6369926/Szmb6KVo?version=latest#6cfdc342-eeeb-4758-a58e-d272c6554347) request is sent to the zinger core to confirm the user credentials. 
If the user is registering for the first time, [signup](https://documenter.getpostman.com/view/6369926/Szmb6KVo?version=latest#2d556c9f-67fd-4478-9b0d-b0ff18c4700b) process takes place and it asks for the profile details. 
The user will be onboarded to the dashboard screen post the successful authentication.

## Dashboard

<div style="text-align:center; width:100%">
    <img src="/img/customer/HomeMockup.jpg" width=200 height=350>
    <img src="/img/customer/MenuMockup.jpg" width=200 height=350>
    <img src="/img/customer/SearchMockup.jpg" width=200 height=350>
</div>

The dashboard [list all the shops](https://documenter.getpostman.com/view/6369926/Szmb6KVo?version=latest#0f1549f4-6542-4e25-9e0a-f6a12a982149) in a given campus, along with the [menu](https://documenter.getpostman.com/view/6369926/Szmb6KVo?version=latest#074585ad-5d73-444c-98a3-757451af0d23) information.
It also contains a search bar to [search for menu](https://documenter.getpostman.com/view/6369926/Szmb6KVo?version=latest#52136339-8e61-47c5-88ca-468add07cc31) or restaurants available in the campus. 

## Cart

<div style="text-align:center; width:100%">
    <img src="/img/customer/CartMockup.jpg" width=200 height=350>
    <img src="/img/customer/PaymentMockup.jpg" width=200 height=350>
    <img src="/img/customer/OrderSuccessMockup.jpg" width=200 height=350>
</div>

After adding all items to the cart, the user initiates the order sending a [verify order](https://documenter.getpostman.com/view/6369926/Szmb6KVo?version=latest#0d5c3879-a67d-42c9-94b5-86a3c44e6fb6) request to the zinger core. 
The order will be verified and the zinger core returns the transaction token fetched from the payment gateway, which is used for completing the payment for the given order with the integrated payment gateway.
Post the successful transaction, a [place order](https://documenter.getpostman.com/view/6369926/Szmb6KVo?version=latest#0be4745c-0a48-4542-ba4e-ed319244672f) request is sent to the zinger core confirming the payment transaction and redirected to the order detail screen.

## Track Orders

<div style="text-align:center; width:100%">
    <img src="/img/customer/OrdersMockup.jpg" width=200 height=350>
    <img src="/img/customer/OrderDetailMockup.jpg" width=200 height=350>
    <img src="/img/customer/RateOrderMockup.jpg" width=200 height=350>
</div>

The user can view the [past orders](https://documenter.getpostman.com/view/6369926/Szmb6KVo?version=latest#f841dc8b-7326-4080-9479-b0f6ad6103d1) and track the current order status.
The user will be notified using push notification when the order status changes.  


