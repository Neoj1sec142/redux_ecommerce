from dotenv import load_dotenv
load_dotenv()
from django.conf import settings
from django.shortcuts import redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
import stripe
import traceback
import os
import json
import math

def round_price(obj):
    name = obj['name']
    price = math.ceil(float(obj['price']))
    return {'name': name, 'price': price}

stripe.api_key = os.environ.get('STRIPE_SECRET')

class StripeCheckoutView(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request):
        try:
            data = request.data['cart']
            cart_data = json.loads(data)
            user = cart_data['username']
            cartItems = cart_data['cartItems']
            cart_items = []
            total = 0
            for item in cartItems:
                new_item = round_price(item)
                cart_items.append(new_item['name'])
                total += int(new_item['price'])
            
                
            
            # Create the checkout session with the line items and other required parameters
            checkout_session = stripe.checkout.Session.create(
                line_items=[{
                    'name': 'Payment for {}'.format(user),
                    'price': total,  
                    'quantity': 1,
                },],
                payment_method_types=['card',],
                mode='payment',  # Assuming that you want to create a subscription
                success_url=settings.SITE_URL + '/?success=true&session_id={CHECKOUT_SESSION_ID}',
                cancel_url=settings.SITE_URL + '/?canceled=true',
            )
            return redirect(checkout_session.url)
        except Exception as e:
            tb = traceback.format_exc()
            return Response(
                {'error': f'Something went wrong when creating stripe checkout session {e}\n{tb}'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )