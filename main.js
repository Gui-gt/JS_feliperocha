const tarefas = [
{
    id:1,
    tarefa: 'Treinar',
    tarefa2: 'estudar'
},
{
    id:2,
    tarefa: 'Treinar',
    tarefa2: 'estudar'
},
{
    id:3,
    tarefa: 'Treinar',
    tarefa2: 'estudar'
}
]

const tarefasJSON = JSON.stringify(tarefas);
console.log(tarefasJSON);

const tarefasList = JSON.parse(tarefasJSON);
console.log(tarefasList);
