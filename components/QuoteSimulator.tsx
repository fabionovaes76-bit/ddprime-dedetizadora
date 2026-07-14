"use client";

import { FormEvent } from "react";

export default function QuoteSimulator() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = {
      nome: String(form.get("nome") || ""),
      telefone: String(form.get("telefone") || ""),
      bairro: String(form.get("bairro") || ""),
      tipoImovel: String(form.get("tipoImovel") || ""),
      servico: String(form.get("servico") || ""),
      tamanho: String(form.get("tamanho") || ""),
      urgencia: String(form.get("urgencia") || ""),
      detalhes: String(form.get("detalhes") || "Não informado"),
    };

    const mensagem = [
      "Olá, gostaria de solicitar um orçamento.",
      "",
      `Nome: ${values.nome}`,
      `Telefone: ${values.telefone}`,
      `Bairro: ${values.bairro}`,
      `Tipo de imóvel: ${values.tipoImovel}`,
      `Serviço: ${values.servico}`,
      `Tamanho aproximado: ${values.tamanho}`,
      `Urgência: ${values.urgencia}`,
      `Detalhes: ${values.detalhes}`,
    ].join("\n");

    window.open(
      `https://wa.me/5567981086008?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );
  }

  const field =
    "rounded-xl border border-slate-300 bg-white p-3 font-normal outline-none transition focus:border-orange-500";

  return (
    <form onSubmit={handleSubmit} className="card grid gap-4 p-6 md:grid-cols-2">
      <label className="grid gap-2 font-bold">
        Nome
        <input name="nome" required className={field} />
      </label>
      <label className="grid gap-2 font-bold">
        Telefone
        <input name="telefone" required className={field} />
      </label>
      <label className="grid gap-2 font-bold">
        Bairro
        <input name="bairro" required className={field} />
      </label>
      <label className="grid gap-2 font-bold">
        Tipo de imóvel
        <select name="tipoImovel" required className={field}>
          <option value="">Selecione</option>
          <option>Residência</option>
          <option>Comércio</option>
          <option>Restaurante ou lanchonete</option>
          <option>Condomínio</option>
          <option>Galpão ou indústria</option>
        </select>
      </label>
      <label className="grid gap-2 font-bold">
        Serviço
        <select name="servico" required className={field}>
          <option value="">Selecione</option>
          <option>Dedetização</option>
          <option>Descupinização</option>
          <option>Desratização</option>
          <option>Controle de escorpiões</option>
          <option>Contrato empresarial</option>
        </select>
      </label>
      <label className="grid gap-2 font-bold">
        Tamanho aproximado
        <select name="tamanho" required className={field}>
          <option value="">Selecione</option>
          <option>Até 100 m²</option>
          <option>De 101 a 250 m²</option>
          <option>De 251 a 500 m²</option>
          <option>Acima de 500 m²</option>
          <option>Não sei informar</option>
        </select>
      </label>
      <label className="grid gap-2 font-bold">
        Urgência
        <select name="urgencia" required className={field}>
          <option value="">Selecione</option>
          <option>Preciso o quanto antes</option>
          <option>Nos próximos 7 dias</option>
          <option>Estou pesquisando preços</option>
        </select>
      </label>
      <label className="grid gap-2 font-bold md:col-span-2">
        Detalhes
        <textarea
          name="detalhes"
          rows={4}
          className={field}
          placeholder="Conte onde aparecem as pragas e há quanto tempo..."
        />
      </label>
      <button className="btn btn-primary md:col-span-2" type="submit">
        Enviar orçamento pelo WhatsApp
      </button>
    </form>
  );
}
