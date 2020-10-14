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

Mobile OTP authentication verifies the user's contact number and a [login](https://documenter.getpostman.com/view/6369926/TVRoZ6jW#ec220cda-4d92-417b-8d2a-479ee71d0ad5) request is sent to the zinger core to confirm the user credentials. 
If the user is registering for the first time, [signup](https://documenter.getpostman.com/view/6369926/TVRoZ6jW#ec220cda-4d92-417b-8d2a-479ee71d0ad5) process takes place and it asks for the profile details. 
The user will be onboarded to the dashboard screen post the successful authentication.

## Dashboard

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/customer/HomeMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/customer/MenuMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/customer/SearchMockup.jpg" width=200 height=350>
</div>

The dashboard [list all the shops](https://documenter.getpostman.com/view/6369926/TVRoZ6jW#d61f0a9e-0c8a-4fa5-b58e-24934eafdd06) in a given campus, along with the [menu](https://documenter.getpostman.com/view/6369926/TVRoZ6jW#cc4f1b67-a95c-441c-88d4-b409f5d916fa) information.
It also contains a search bar to [search for menu](https://documenter.getpostman.com/view/6369926/TVRoZ6jW#a206cd7e-ffc8-4b78-99d0-737d2d9295ab) or restaurants available in the campus. 

## Cart

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/customer/CartMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/customer/PaymentMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/customer/OrderSuccessMockup.jpg" width=200 height=350>
</div>

After adding all items to the cart, the user initiates the order sending a [verify order](https://documenter.getpostman.com/view/6369926/TVRoZ6jW#a98cf33a-3709-41a8-b471-7df2e78c9a94) request to the zinger core. 
The order will be verified and the zinger core returns the transaction token fetched from the payment gateway, which is used for completing the payment for the given order with the integrated payment gateway.
Post the successful transaction, a [place order](https://documenter.getpostman.com/view/6369926/TVRoZ6jW#4bcf10dc-f1ba-4ee6-a1c4-9f5eef45f1cb) request is sent to the zinger core confirming the payment transaction and redirected to the order detail screen.

## Track Orders

<div style="text-align:center; width:100%">
    <img src="https://zingerdocs.netlify.app/img/customer/OrdersMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/customer/OrderDetailMockup.jpg" width=200 height=350>
    <img src="https://zingerdocs.netlify.app/img/customer/RateOrderMockup.jpg" width=200 height=350>
</div>

The user can view the [past orders](https://documenter.getpostman.com/view/6369926/TVRoZ6jW#c14d5246-c541-4203-a45e-7eb8c58979ae) and track the current order status.
The user will be notified using push notification when the order status changes.  


