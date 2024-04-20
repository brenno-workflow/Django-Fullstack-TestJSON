from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import HomePageContent

def home(request):
    
    # Recuperar os dados da página inicial do banco de dados
    content = HomePageContent.objects.first()  # Assumindo que haja apenas uma entrada na tabela

    # Por padrão, será o conteudo dentro da pasta templates 
    # Se quiser colocar uma subpasta, colocar 'nome_subpasta/nome_arquivo'
    return render(request, 'home.html', {'content': content})
