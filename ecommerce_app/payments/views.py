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

stripe.api_key = os.environ.get('STRIPE_SECRET')

class StripeCheckoutView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        try:
            # Get cart items and cartTotal from the request data
            dictionary_data = request.data.get('dictionary_data')
            dictionary = json.loads(dictionary_data)
            cart_items = dictionary['cartItems']
            
            print(f'cart items: {cart_items}')
            
            # Create line items based on the cart items
            line_items = []
            for item in cart_items:
                # price_in_cents = round(float(item['price']) * 100)
                print(f" Items: {round(float(item['price']))}")
                _price = round(float(item['price']))
                line_items.append({
                    'price_data': {
                        'currency': 'usd',
                        'unit_amount': int(_price),
                        'product_data': {
                            'name': item['name'],
                            'images': [item['image']],
                            'metadata': {
                                'id': item['id'],
                                'category': item['category'],
                                'created_at': item['created_at'],
                                'avg_stars': item['avg_stars'],
                                'review_count': item['review_count']
                            }
                        },
                    },
                    'quantity': 1,
                })

            # Create the checkout session with the line items
            checkout_session = stripe.checkout.Session.create(
                line_items=line_items,
                payment_method_types=['card',],
                mode='payment',
                success_url=settings.SITE_URL + '/?success=true&session_id={CHECKOUT_SESSION_ID}',
                cancel_url=settings.SITE_URL + '/?canceled=true',
            )

            # Redirect the user to the checkout page
            return redirect(checkout_session.url)
        except Exception as e:
            # Format the exception and its traceback using traceback.format_exc()
            tb = traceback.format_exc()
            return Response(
                {'error': f'Something went wrong when creating stripe checkout session {e}\n{tb}'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )