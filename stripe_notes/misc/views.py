class StripeCheckoutView(APIView):
    def post(self, request):
        try:
            # Get cart items and cartTotal from the request data
            cart_items = request.data.get('cart_items')
            cart_total = request.data.get('cart_total')

            # Create line items based on the cart items
            line_items = []
            for item in cart_items:
                line_items.append({
                    'price': item['price_id'],
                    'quantity': item['quantity']
                })

            # Add a line item for the cart total
            line_items.append({
                'price_data': {
                    'currency': 'usd',
                    'unit_amount': int(cart_total * 100),
                    'product_data': {
                        'name': 'Cart Total',
                    },
                },
                'quantity': 1,
            })

            # Create the checkout session with the line items
            checkout_session = stripe.checkout.Session.create(
                line_items=line_items,
                payment_method_types=['card'],
                mode='payment',
                success_url=settings.SITE_URL + '/?success=true&session_id={CHECKOUT_SESSION_ID}',
                cancel_url=settings.SITE_URL + '/?canceled=true',
            )

            # Redirect the user to the checkout page
            return redirect(checkout_session.url)
        except Exception as e:
            return Response(
                {'error': f'Something went wrong when creating stripe checkout session {e.with_traceback(None)}'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            