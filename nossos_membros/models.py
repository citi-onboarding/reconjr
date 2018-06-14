from django.db import models

class Membro(models.Model):
    image = models.ImageField(upload_to="membros")
    name = models.CharField(max_length=50)
 
    def __str__(self):
        return self.name