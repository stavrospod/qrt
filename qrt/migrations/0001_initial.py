# Generated by Django 3.0.2 on 2020-03-17 20:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RandomWebsites',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('website_name', models.CharField(max_length=64)),
                ('website_url', models.CharField(max_length=64)),
                ('number_of_clicks', models.IntegerField()),
            ],
        ),
    ]