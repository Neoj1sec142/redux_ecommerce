# Generated by Django 4.1.2 on 2022-10-06 18:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0002_product_status_product_system'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='user',
        ),
    ]