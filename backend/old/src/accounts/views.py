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
            return redirect('login')
        
        else:

            # Caso as credenciais estejam incorretas
            form.add_error(None, 'Credenciais não cadastradas. Por favor, tente novamente.')

    else:

        # Caso o formulário não tenha sido enviado com os dados corretos
        form = UserForm()

    return render(request, 'signup.html', {'form': form})

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

                # Buscar o ID da linha
                user_id = user.id

            except User.DoesNotExist:

                # Retornar como None para erro
                user = None
                user_id = None

            if user_id is not None and password == user.password:
                    
                # Define a duração da sessão em segundos (86400 segundos = 1 dia)
                request.session.set_expiry(86400)  

                # Armazena o ID do usuário na sessão
                request.session['user_id'] = user.id  

                # Mover para a pagina especifica
                return redirect('signup')
                
            else:

                # Caso as credenciais estejam incorretas
                form.add_error(None, 'Credenciais inválidas. Por favor, tente novamente.')

        else:

            # Caso as credenciais estejam incorretas
            form.add_error(None, 'Erro na requisição. Por favor, tente novamente.')

    else:

        # Caso o formulário não tenha sido enviado com os dados corretos
        form = LoginForm()

    return render(request, 'login.html', {'form': form})