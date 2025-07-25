// script.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://kdlggftntqejqfsbilgd.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkbGdnZnRudHFlanFmc2JpbGdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0NjQ4NzIsImV4cCI6MjA2OTA0MDg3Mn0.9BvpE1BoY6N2rSsEB3MD1cqff-s__zv1S9QgTGjwBBQ";
const supabase = createClient(supabaseUrl, supabaseKey);

// DOM elements
const form = document.getElementById("form-task");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

// Função para adicionar tarefa no Supabase
async function addTaskToSupabase(titulo) {
  const { data, error } = await supabase
    .from("tarefas")
    .insert([{ titulo }]);

  if (error) {
    console.error("Erro ao adicionar tarefa:", error.message);
  } else {
    console.log("Tarefa adicionada:", data[0]);
    renderTask(data[0]);
  }
}

// Função para renderizar tarefa na tela
function renderTask(task) {
  const li = document.createElement("li");
  li.textContent = task.titulo;
  list.appendChild(li);
}

// Submissão do formulário
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const task = input.value.trim();
  if (task === "") return;

  await addTaskToSupabase(task);
  input.value = "";
});

// Carregar tarefas ao abrir a página
window.addEventListener("DOMContentLoaded", async () => {
  const { data, error } = await supabase
    .from("tarefas")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Erro ao carregar tarefas:", error.message);
    return;
  }

  data.forEach(renderTask);
});
