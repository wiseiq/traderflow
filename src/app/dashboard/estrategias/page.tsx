"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus,
  Edit,
  Target,
  TrendingUp,
  Clock,
  BarChart3,
  X,
} from "lucide-react";
import { useState } from "react";

interface Indicador {
  id: string;
  nome: string;
  notas: string;
}

interface Estrategia {
  id: string;
  nome: string;
  descricao: string;
  mercado: string;
  ativo: string;
  tipoGrafico: string;
  stopGain: number;
  stopLoss: number;
  direcaoPermitida: string;
  limiteContratos: number;
  limiteDiario: number;
  horarioInicio: string;
  horarioFim: string;
  indicadores: Indicador[];
}

const estrategiasIniciais: Estrategia[] = [
  {
    id: "1",
    nome: "Rompimento 5M",
    descricao:
      "Estratégia de rompimento de suporte/resistência no gráfico de 5 minutos",
    mercado: "Futuros",
    ativo: "WIN",
    tipoGrafico: "5M",
    stopGain: 30,
    stopLoss: 15,
    direcaoPermitida: "Ambos",
    limiteContratos: 3,
    limiteDiario: 5,
    horarioInicio: "09:30",
    horarioFim: "17:00",
    indicadores: [
      { id: "1", nome: "Médias Móveis", notas: "EMA 9 e 21" },
      { id: "2", nome: "Volume", notas: "Confirmar rompimento com volume" },
    ],
  },
  {
    id: "2",
    nome: "Pullback 15M",
    descricao:
      "Operação em pullback após movimento forte no gráfico de 15 minutos",
    mercado: "Futuros",
    ativo: "WIN",
    tipoGrafico: "15M",
    stopGain: 40,
    stopLoss: 20,
    direcaoPermitida: "Ambos",
    limiteContratos: 2,
    limiteDiario: 4,
    horarioInicio: "10:00",
    horarioFim: "16:30",
    indicadores: [
      { id: "1", nome: "Fibonacci", notas: "Retração 50% e 61.8%" },
    ],
  },
];

export default function EstrategiasPage() {
  const [estrategias, setEstrategias] =
    useState<Estrategia[]>(estrategiasIniciais);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editandoId, setEditandoId] = useState<string | null>(null);

  // Form state
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipoGrafico, setTipoGrafico] = useState("5M");
  const [stopGain, setStopGain] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [direcaoPermitida, setDirecaoPermitida] = useState("Ambos");
  const [limiteContratos, setLimiteContratos] = useState("");
  const [limiteDiario, setLimiteDiario] = useState("");
  const [horarioInicio, setHorarioInicio] = useState("");
  const [horarioFim, setHorarioFim] = useState("");
  const [indicadores, setIndicadores] = useState<Indicador[]>([]);

  const resetForm = () => {
    setNome("");
    setDescricao("");
    setTipoGrafico("5M");
    setStopGain("");
    setStopLoss("");
    setDirecaoPermitida("Ambos");
    setLimiteContratos("");
    setLimiteDiario("");
    setHorarioInicio("");
    setHorarioFim("");
    setIndicadores([]);
    setEditandoId(null);
  };

  const handleEdit = (estrategia: Estrategia) => {
    setNome(estrategia.nome);
    setDescricao(estrategia.descricao);
    setTipoGrafico(estrategia.tipoGrafico);
    setStopGain(estrategia.stopGain.toString());
    setStopLoss(estrategia.stopLoss.toString());
    setDirecaoPermitida(estrategia.direcaoPermitida);
    setLimiteContratos(estrategia.limiteContratos.toString());
    setLimiteDiario(estrategia.limiteDiario.toString());
    setHorarioInicio(estrategia.horarioInicio);
    setHorarioFim(estrategia.horarioFim);
    setIndicadores(estrategia.indicadores);
    setEditandoId(estrategia.id);
    setDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const novaEstrategia: Estrategia = {
      id: editandoId || Date.now().toString(),
      nome,
      descricao,
      mercado: "Futuros",
      ativo: "WIN",
      tipoGrafico,
      stopGain: Number(stopGain),
      stopLoss: Number(stopLoss),
      direcaoPermitida,
      limiteContratos: Number(limiteContratos),
      limiteDiario: Number(limiteDiario),
      horarioInicio,
      horarioFim,
      indicadores,
    };

    if (editandoId) {
      setEstrategias(
        estrategias.map((e) => (e.id === editandoId ? novaEstrategia : e))
      );
    } else {
      setEstrategias([...estrategias, novaEstrategia]);
    }

    setDialogOpen(false);
    resetForm();
  };

  const adicionarIndicador = () => {
    setIndicadores([
      ...indicadores,
      { id: Date.now().toString(), nome: "", notas: "" },
    ]);
  };

  const removerIndicador = (id: string) => {
    setIndicadores(indicadores.filter((ind) => ind.id !== id));
  };

  const atualizarIndicador = (
    id: string,
    campo: "nome" | "notas",
    valor: string
  ) => {
    setIndicadores(
      indicadores.map((ind) =>
        ind.id === id ? { ...ind, [campo]: valor } : ind
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1">Estratégias</h1>
          <p className="text-gray-400">Gerencie suas estratégias de trading</p>
        </div>
      </div>

      {/* Grid de Estratégias */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {estrategias.map((estrategia) => (
          <Card
            key={estrategia.id}
            className="bg-[#0f0f0f] border-gray-800 p-6 hover:border-emerald-500/30 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-200">
                    {estrategia.nome}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {estrategia.ativo} • {estrategia.tipoGrafico}
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleEdit(estrategia)}
                className="text-gray-400 hover:bg-gray-800 hover:text-emerald-400"
              >
                <Edit className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              {estrategia.descricao}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-900/50 rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-1">Stop Gain</div>
                <div className="text-emerald-400 font-semibold">
                  {estrategia.stopGain} ticks
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-1">Stop Loss</div>
                <div className="text-red-400 font-semibold">
                  {estrategia.stopLoss} ticks
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <TrendingUp className="w-4 h-4" />
                <span>
                  Direção:{" "}
                  <span className="text-white">
                    {estrategia.direcaoPermitida}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <BarChart3 className="w-4 h-4" />
                <span>
                  Limite:{" "}
                  <span className="text-white">
                    {estrategia.limiteContratos} contratos /{" "}
                    {estrategia.limiteDiario} ops/dia
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>
                  Horário:{" "}
                  <span className="text-white">
                    {estrategia.horarioInicio} - {estrategia.horarioFim}
                  </span>
                </span>
              </div>
            </div>

            {estrategia.indicadores.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="text-xs text-gray-400 mb-2">Indicadores:</div>
                <div className="flex flex-wrap gap-2">
                  {estrategia.indicadores.map((ind) => (
                    <span
                      key={ind.id}
                      className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs"
                    >
                      {ind.nome}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Botão Flutuante */}
      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) resetForm();
        }}
      >
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-2xl shadow-emerald-500/30 z-50"
          >
            <Plus className="w-8 h-8" />
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-[#0f0f0f] border-gray-800 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {editandoId ? "Editar Estratégia" : "Nova Estratégia"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Nome</Label>
              <Input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="bg-gray-900 border-gray-700"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Descrição</Label>
              <Textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="bg-gray-900 border-gray-700 min-h-[80px]"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Mercado</Label>
                <Input
                  value="Futuros"
                  disabled
                  className="bg-gray-900 border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label>Ativo</Label>
                <Input
                  value="WIN"
                  disabled
                  className="bg-gray-900 border-gray-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Tipo de Gráfico</Label>
              <Select value={tipoGrafico} onValueChange={setTipoGrafico}>
                <SelectTrigger className="bg-gray-900 border-gray-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="5M">5M</SelectItem>
                  <SelectItem value="15M">15M</SelectItem>
                  <SelectItem value="30M">30M</SelectItem>
                  <SelectItem value="1H">1H</SelectItem>
                  <SelectItem value="1D">1D</SelectItem>
                  <SelectItem value="Renko 18R">Renko 18R</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Stop Gain (Ticks)</Label>
                <Input
                  type="number"
                  value={stopGain}
                  onChange={(e) => setStopGain(e.target.value)}
                  className="bg-gray-900 border-gray-700"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Stop Loss (Ticks)</Label>
                <Input
                  type="number"
                  value={stopLoss}
                  onChange={(e) => setStopLoss(e.target.value)}
                  className="bg-gray-900 border-gray-700"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Direção Permitida</Label>
              <Select
                value={direcaoPermitida}
                onValueChange={setDirecaoPermitida}
              >
                <SelectTrigger className="bg-gray-900 border-gray-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="Compra">Compra</SelectItem>
                  <SelectItem value="Venda">Venda</SelectItem>
                  <SelectItem value="Ambos">Ambos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Limite de Contratos</Label>
                <Input
                  type="number"
                  value={limiteContratos}
                  onChange={(e) => setLimiteContratos(e.target.value)}
                  className="bg-gray-900 border-gray-700"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Limite Diário de Operações</Label>
                <Input
                  type="number"
                  value={limiteDiario}
                  onChange={(e) => setLimiteDiario(e.target.value)}
                  className="bg-gray-900 border-gray-700"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Horário de Início</Label>
                <Input
                  type="time"
                  value={horarioInicio}
                  onChange={(e) => setHorarioInicio(e.target.value)}
                  className="bg-gray-900 border-gray-700"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Horário de Fim</Label>
                <Input
                  type="time"
                  value={horarioFim}
                  onChange={(e) => setHorarioFim(e.target.value)}
                  className="bg-gray-900 border-gray-700"
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Indicadores</Label>
                <Button
                  type="button"
                  size="sm"
                  onClick={adicionarIndicador}
                  className="bg-emerald-500 hover:bg-emerald-600"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Adicionar
                </Button>
              </div>

              {indicadores.map((indicador) => (
                <Card
                  key={indicador.id}
                  className="bg-gray-900/50 border-gray-700 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1 space-y-3">
                      <Input
                        placeholder="Nome do indicador"
                        value={indicador.nome}
                        onChange={(e) =>
                          atualizarIndicador(
                            indicador.id,
                            "nome",
                            e.target.value
                          )
                        }
                        className="bg-gray-800 border-gray-700"
                      />
                      <Textarea
                        placeholder="Notas sobre o indicador"
                        value={indicador.notas}
                        onChange={(e) =>
                          atualizarIndicador(
                            indicador.id,
                            "notas",
                            e.target.value
                          )
                        }
                        className="bg-gray-800 border-gray-700 min-h-[60px]"
                      />
                    </div>
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => removerIndicador(indicador.id)}
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setDialogOpen(false);
                  resetForm();
                }}
                className="flex-1 hover:text-white border-gray-700 bg-gray-900 hover:bg-gray-800"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
              >
                {editandoId ? "Salvar Alterações" : "Criar Estratégia"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
