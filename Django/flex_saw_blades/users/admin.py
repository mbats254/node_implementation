from django.contrib import admin
from .models import Users,Contact, Flex_Admin, Buyer
# Register your models here.

admin.site.register(Users)
admin.site.register(Flex_Admin)
admin.site.register(Buyer)
admin.site.register(Contact)