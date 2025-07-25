# 📝 Minha Lista de Tarefas

Projeto simples de uma aplicação web para gerenciamento de tarefas (To-do List), com integração em tempo real com o banco de dados Supabase.

---

## 🚀 Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- [Supabase](https://supabase.com) — como backend e banco de dados

---

## 🔧 Funcionalidades

- ✅ Adicionar tarefas  
- ✅ Listar tarefas em tempo real  
- 🔒 Integração com Supabase para persistência de dados  
- ⏳ (Em breve) Marcar como concluída e remover tarefas  

---

## 📦 Como executar o projeto

1. Clone o repositório:

```bash```
git clone https://github.com/seu-usuario/seu-repositorio.git

1. Abra o arquivo index.html no seu navegador.

2. Edite o arquivo script.js e configure as seguintes variáveis com as informações do seu projeto Supabase:

   const supabaseUrl = "https://SEU-PROJETO.supabase.co](https://kdlggftntqejqfsbilgd.supabase.co";
   
   const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkbGdnZnRudHFlanFmc2JpbGdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0NjQ4NzIsImV4cCI6MjA2OTA0MDg3Mn0.9BvpE1BoY6N2rSsEB3MD1cqff-s__zv1S9QgTGjwBBQ";

## 🛠️ Configurando o Supabase

1. Crie um projeto em https://app.supabase.com
2. Vá em Table Editor e crie uma tabela chamada tarefas com os seguintes campos:

| Nome        | Tipo   | Extra                                   |
| ----------- | ------ | --------------------------------------- |
| `id`        | `uuid` | `primary key default gen_random_uuid()` |
| `titulo`    | `text` | obrigatório                             |
| `concluida` | `bool` | padrão: `false`                         |

3. Ative o RLS (Row Level Security) da tabela

4. Adicione uma política de leitura e escrita aberta:
```
CREATE POLICY "Permitir tudo"
ON tarefas
FOR ALL
USING (true)
WITH CHECK (true);
```
