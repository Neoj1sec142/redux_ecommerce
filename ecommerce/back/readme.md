psql redux_ecommerce -c "GRANT ALL ON ALL TABLES IN SCHEMA public to ecomm_user;”

psql redux_ecommerce -c "GRANT ALL ON ALL SEQUENCES IN SCHEMA public to ecomm_user;”
psql redux_ecommerce -c "GRANT ALL ON ALL FUNCTIONS IN SCHEMA public to ecomm_user;”