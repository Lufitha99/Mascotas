from django import forms
from .models import MyCustomUser

class MyCustomUserForm(forms.ModelForm):
    class Meta:
        model = MyCustomUser
        fields = ['email', 'first_name', 'last_name', 'password']