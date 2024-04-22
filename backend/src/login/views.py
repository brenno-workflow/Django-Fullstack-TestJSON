from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
# Importar os forms
from .forms import UserForm, LoginForm
# Importar as models (tabelas)
from .models import User
# Importar configurações para Json e HTTP
from django.http import JsonResponse
import json

def signup(request):

    # Verificamos se o método da solicitação é POST
    if request.method == 'POST':

        # Verificamos se o formulário foi enviado com os dados corretos
        form = UserForm(request.POST)

        if form.is_valid():

            # Salvar os dados do formulário no banco de dados
            form.save()
            
            # Redirecionar para a página de login após o cadastro
            return JsonResponse({'message': 'Cadastro realizado com sucesso'})
        
        else:

            # Caso as credenciais estejam incorretas
            errors = form.errors.as_json()
            return JsonResponse({'errors': json.loads(errors)}, status=400)

    else:

        # Caso o formulário não tenha sido enviado com os dados corretos
        return JsonResponse({'error': 'Método não permitido'}, status=405)
    
def login(request):

    # Verificamos se o método da solicitação é POST
    if request.method == 'POST':

        # Verificamos se o formulário foi enviado com os dados corretos
        form = LoginForm(request.POST)

        if form.is_valid():

            # Recuperar os dados do formulário
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']

            try:

                # Buscar a linha no banco pelo email
                user = User.objects.get(email=email)

                if password == user.password:
                        
                    # Define a duração da sessão em segundos (86400 segundos = 1 dia)
                    request.session.set_expiry(86400)  

                    # Armazena o ID do usuário na sessão
                    request.session['user_id'] = user.id  

                    # Retornar token e ID do usuário na sessão
                    return JsonResponse({'token': 'token_da_sessao', 'id': user.id})
                    
                else:

                    # Caso as credenciais estejam incorretas
                    return JsonResponse({'error': 'Credenciais inválidas'}, status=400)
                
            except User.DoesNotExist:

                # Caso as credenciais naõ existam
                return JsonResponse({'error': 'Usuário não encontrado'}, status=404)

        else:

            # Caso as credenciais estejam incorretas
            errors = form.errors.as_json()
            return JsonResponse({'errors': json.loads(errors)}, status=400)

    else:

        # Caso o formulário não tenha sido enviado com os dados corretos
        return JsonResponse({'error': 'Método não permitido'}, status=405)