# Generated by Django 4.1.7 on 2023-02-25 05:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_paymentmethod_expiration_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paymentmethod',
            name='card_number',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='paymentmethod',
            name='cvv',
            field=models.CharField(default='', max_length=170, null=True),
        ),
        migrations.AlterField(
            model_name='paymentmethod',
            name='expiration_mon',
            field=models.CharField(default='', max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='paymentmethod',
            name='expiration_year',
            field=models.CharField(default='', max_length=200, null=True),
        ),
    ]