from dotenv import load_dotenv
load_dotenv()
from django.conf import settings
from django.shortcuts import redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from corsheaders.decorators import cors_allow_all
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
@cors_allow_all
class StripeCheckoutView(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request):
        try:
            data = request.data['cart']
            cart_data = json.loads(data)
            # user = cart_data['username']
            cartItems = cart_data['cartItems']
            cart_items = []
            for item in cartItems:
                rounded = round_price(item)
                print(f'Item Price: {rounded["price"]}')
                new_item = {
                        "price_data": {
                            "currency": "usd",
                            "unit_amount": int(rounded['price']) * 100,
                            "product_data": {
                                "name": rounded['name'],
                                "images": ["https://example.com/t-shirt.png"],
                            },
                        },
                        "quantity": 1,
                    }
                
                cart_items.append(new_item)
            
                
            
            # Create the checkout session with the line items and other required parameters
            checkout_session = stripe.checkout.Session.create(
                line_items=cart_items,
                payment_method_types=['card',],
                mode='payment',  # Assuming that you want to create a subscription
                success_url=settings.SITE_URL + '/?success=true&session_id={CHECKOUT_SESSION_ID}',
                cancel_url=settings.SITE_URL + '/?canceled=true',
            )
            return redirect(checkout_session.url)
        except Exception as e:
            tb = traceback.format_exc()
            return Response(
                {'error': f'Something went wrong when creating stripe checkout session {e.with_traceback}\n{tb}'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )