
const cron = require("node-cron");
const express = require("express");

app = express();


cron.schedule("* * * * * *", () => console.log("Executando a tarefa a cada 1 minuto"));

const CronJob = require('cron').CronJob
const job = new CronJob('* * * * * *', () => {
console.log('tarefa agendada')
}, null, true, 'America/Sao_Paulo')

app.listen(1313);