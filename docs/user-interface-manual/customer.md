---
id: customer
title: Customer
sidebar_label: Customer
---

## Authentication

<div style="text-align:center; width:100%">
    <img src="/img/customer/LoginMockup.jpg" width=200 height=350>
    <img src="/img/customer/OtpMockup.jpg" width=200 height=350>
    <img src="/img/customer/SignupMockup.jpg" width=200 height=350>
</div>

The user on entering the app will be asked to enter the phone number. An OTP will be sent to the phone and oauth id will be generated. A login request is made to the Zinger Core server to login the user using the oauth id and mobile number. If he is an existing user he will be redirected to the home screen. Otherwise the user will be signed up. The user must give his name, email and choose his campus. He will be onboarded to the home screen after the details are updated.

## Dashboard

<div style="text-align:center; width:100%">
    <img src="/img/customer/HomeMockup.jpg" width=200 height=350>
    <img src="/img/customer/MenuMockup.jpg" width=200 height=350>
    <img src="/img/customer/SearchMockup.jpg" width=200 height=350>
</div>

The dashboard contains all the shops in the given campus. The user will be able to explore items in each shop. The user can add an item from either the search bar or the shop menu to the cart menu.It also contains a search bar to search for all food items and restaurants available in the campus. 

## Cart

<div style="text-align:center; width:100%">
    <img src="/img/customer/CartMockup.jpg" width=200 height=350>
    <img src="/img/customer/PaymentMockup.jpg" width=200 height=350>
</div>

The cart menu contains all the items added by the customer. After adding all items to the cart the user will make a verify order request to the zinger core api. After verifying the restaurant status , items and delivery availability .The order will be placed and transaction token will be fetched from the payment gateway after initiating the order. 

The transaction token provided by the payment gateway will be used for completing the payment for the given order with the integrated payment gateway

After completing the payment, a place order request is sent to the zinger core framework. The zinger core backend verifies the completion of payment by contacting the payment gateway and order status is changed to placed. The corresponding shop owner is notified about the new order.



## Track Orders

<div style="text-align:center; width:100%">
    <img src="/img/customer/OrdersMockup.jpg" width=200 height=350>
    <img src="/img/customer/OrderDetailMockup.jpg" width=200 height=350>
    <img src="/img/customer/RateOrderMockup.jpg" width=200 height=350>
</div>

After order is placed, the user will be able to cancel the order before the order is accepted by the shop. The user will be able to track the order status change through the order details screen. The user will be notified each time the order state changes using push notification. 
The user will also be able to view all his past orders in a paginated manner.


