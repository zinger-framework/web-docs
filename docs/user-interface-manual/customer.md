---
id: customer
title: Customer Application
sidebar_label: Customer
---
## Authentication

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/customer/LoginMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/customer/OtpMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/customer/SignupMockup.jpg" width=200 height=350>
</div>

Mobile OTP authentication verifies the user's contact number and a [login](https://documenter.getpostman.com/view/6369926/TVRoYmFY#574ae04c-a4fc-4ae4-9dd7-860599c024d9) request is sent to the zinger core to confirm the user credentials. 
If the user is registering for the first time, [signup](https://documenter.getpostman.com/view/6369926/TVRoYmFY#574ae04c-a4fc-4ae4-9dd7-860599c024d9) process takes place and it asks for the profile details. 
The user will be onboarded to the dashboard screen post the successful authentication.

## Dashboard

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/customer/HomeMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/customer/MenuMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/customer/SearchMockup.jpg" width=200 height=350>
</div>

The dashboard [list all the shops](https://documenter.getpostman.com/view/6369926/TVRoYmFY#e0a7a6cf-2ce9-45c5-80f4-6dbffcf56c10) in a given campus, along with the [menu](https://documenter.getpostman.com/view/6369926/TVRoYmFY#62f86e81-2408-4d33-90f3-313ba9a06e65) information.
It also contains a search bar to [search for menu](https://documenter.getpostman.com/view/6369926/TVRoYmFY#7460ad29-6cb9-4005-81c2-ae4c275293e2) or restaurants available in the campus. 

## Cart

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/customer/CartMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/customer/PaymentMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/customer/OrderSuccessMockup.jpg" width=200 height=350>
</div>

After adding all items to the cart, the user initiates the order sending a [verify order](https://documenter.getpostman.com/view/6369926/TVRoYmFY#df286a2e-0a64-4373-8c90-cfe1eca625fc) request to the zinger core. 
The order will be verified and the zinger core returns the transaction token fetched from the payment gateway, which is used for completing the payment for the given order with the integrated payment gateway.
Post the successful transaction, a [place order](https://documenter.getpostman.com/view/6369926/TVRoYmFY#9806b3bd-de60-435f-889e-40f511d2323a) request is sent to the zinger core confirming the payment transaction and redirected to the order detail screen.

## Track Orders

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/customer/OrdersMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/customer/OrderDetailMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/customer/RateOrderMockup.jpg" width=200 height=350>
</div>

The user can view the [past orders](https://documenter.getpostman.com/view/6369926/TVRoYmFY#c4d76301-1fce-4634-aa7a-e46276853d76) and track the current order status.
The user will be notified using push notification when the order status changes.  


