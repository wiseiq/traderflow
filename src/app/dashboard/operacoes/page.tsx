"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, TrendingUp, ArrowUpRight, ArrowDownRight, Calendar, Clock } from "lucide-react"
import { useState } from "react"

interface Operacao {
  id: string
  mercado: string
  ativo: string
  tipoGrafico: string
  estrategia: string
  direcao: "Compra" | "Venda"
  ticks: number
  notas: string
  dataEntrada: string
  horarioInicio: string
  horarioFim: string
}

const operacoesIniciais: Operacao[] = [
  {
    id: "1",
    mercado: "Futuros",
    ativo: "WIN",
    tipoGrafico: "5M",
    estrategia: "Rompimento 5M",
    direcao: "Compra",
    ticks: 25,
    notas: "Rompimento de resistência com volume forte",
    dataEntrada: "2024-01-07",
    horarioInicio: "10:15",
    horarioFim: "10:45"
  },
  {
    id: "2",
    mercado: "Futuros",
    ativo: "WIN",
    tipoGrafico: "15M",
    estrategia: "Pullback 15M",
    direcao: "Venda",
    ticks: -15,
    notas: "Entrada prematura, não esperou confirmação",
    dataEntrada: "2024-01-07",
    horarioInicio: "14:20",
    horarioFim: "14:50"
  },
  {
    id: "3",
    mercado: "Futuros",
    ativo: "WIN",
    tipoGrafico: "5M",
    estrategia: "Rompimento 5M",
    direcao: "Compra",
    ticks: 30,
    notas: "Operação perfeita, seguiu todos os critérios",
    dataEntrada: "2024-01-06",
    horarioInicio: "11:00",
    horarioFim: "11:25"
  },
  {
    id: "4",
    mercado: "Futuros",
    ativo: "WIN",
    tipoGrafico: "30M",
    estrategia: "Reversão 30M",
    direcao: "Venda",
    ticks: 18,
    notas: "Reversão em região de topo",
    dataEntrada: "2024-01-06",
    horarioInicio: "15:30",
    horarioFim: "16:15"
  }
]

export default function OperacoesPage() {
  const [operacoes, setOperacoes] = useState<Operacao[]>(operacoesIniciais)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editandoId, setEditandoId] = useState<string | null>(null)
  
  // Form state
  const [tipoGrafico, setTipoGrafico] = useState("5M")
  const [estrategia, setEstrategia] = useState("")
  const [direcao, setDirecao] = useState<"Compra" | "Venda">("Compra")
  const [ticks, setTicks] = useState("")
  const [notas, setNotas] = useState("")
  const [dataEntrada, setDataEntrada] = useState("")
  const [horarioInicio, setHorarioInicio] = useState("")
  const [horarioFim, setHorarioFim] = useState("")

  const resetForm = () => {
    setTipoGrafico("5M")
    setEstrategia("")
    setDirecao("Compra")
    setTicks("")
    setNotas("")
    setDataEntrada("")
    setHorarioInicio("")
    setHorarioFim("")
    setEditandoId(null)
  }

  const handleEdit = (operacao: Operacao) => {
    setTipoGrafico(operacao.tipoGrafico)
    setEstrategia(operacao.estrategia)
    setDirecao(operacao.direcao)
    setTicks(operacao.ticks.toString())
    setNotas(operacao.notas)
    setDataEntrada(operacao.dataEntrada)
    setHorarioInicio(operacao.horarioInicio)
    setHorarioFim(operacao.horarioFim)
    setEditandoId(operacao.id)
    setDialogOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const novaOperacao: Operacao = {
      id: editandoId || Date.now().toString(),
      mercado: "Futuros",
      ativo: "WIN",
      tipoGrafico,
      estrategia,
      direcao,
      ticks: Number(ticks),
      notas,
      dataEntrada,
      horarioInicio,
      horarioFim
    }

    if (editandoId) {
      setOperacoes(operacoes.map(op => op.id === editandoId ? novaOperacao : op))
    } else {
      setOperacoes([novaOperacao, ...operacoes])
    }

    setDialogOpen(false)
    resetForm()
  }

  const calcularResultado = (ticks: number) => {
    const valorPorTick = 10 // R$ 10 por tick no WIN
    return ticks * valorPorTick
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1">Operações</h1>
          <p className="text-gray-400">Registre e acompanhe suas operações</p>
        </div>
      </div>

      {/* Grid de Operações */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {operacoes.map((operacao) => {
          const resultado = calcularResultado(operacao.ticks)
          const isPositivo = operacao.ticks > 0

          return (
            <Card key={operacao.id} className={`bg-[#0f0f0f] border-gray-800 p-6 hover:border-${isPositivo ? 'emerald' : 'red'}-500/30 transition-all`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${isPositivo ? 'bg-emerald-500/10' : 'bg-red-500/10'} rounded-lg flex items-center justify-center`}>
                    {operacao.direcao === "Compra" ? (
                      <ArrowUpRight className={`w-6 h-6 ${isPositivo ? 'text-emerald-400' : 'text-red-400'}`} />
                    ) : (
                      <ArrowDownRight className={`w-6 h-6 ${isPositivo ? 'text-emerald-400' : 'text-red-400'}`} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{operacao.estrategia}</h3>
                    <p className="text-sm text-gray-400">{operacao.ativo} • {operacao.tipoGrafico}</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleEdit(operacao)}
                  className="text-gray-400 hover:text-emerald-400"
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Direção</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    operacao.direcao === "Compra" 
                      ? "bg-emerald-500/10 text-emerald-400" 
                      : "bg-blue-500/10 text-blue-400"
                  }`}>
                    {operacao.direcao}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Ticks</span>
                  <span className={`text-lg font-bold ${isPositivo ? 'text-emerald-400' : 'text-red-400'}`}>
                    {isPositivo ? '+' : ''}{operacao.ticks}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Resultado</span>
                  <span className={`text-xl font-bold ${isPositivo ? 'text-emerald-400' : 'text-red-400'}`}>
                    {isPositivo ? '+' : ''}R$ {resultado}
                  </span>
                </div>
              </div>

              {operacao.notas && (
                <div className="bg-gray-900/50 rounded-lg p-3 mb-4">
                  <div className="text-xs text-gray-400 mb-1">Notas</div>
                  <p className="text-sm text-gray-300 leading-relaxed">{operacao.notas}</p>
                </div>
              )}

              <div className="pt-4 border-t border-gray-800 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(operacao.dataEntrada + 'T00:00:00').toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{operacao.horarioInicio} - {operacao.horarioFim}</span>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Botão Flutuante */}
      <Dialog open={dialogOpen} onOpenChange={(open) => {
        setDialogOpen(open)
        if (!open) resetForm()
      }}>
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
              {editandoId ? "Editar Operação" : "Nova Operação"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Mercado</Label>
                <Input value="Futuros" disabled className="bg-gray-900 border-gray-700" />
              </div>
              <div className="space-y-2">
                <Label>Ativo</Label>
                <Input value="WIN" disabled className="bg-gray-900 border-gray-700" />
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

            <div className="space-y-2">
              <Label>Estratégia</Label>
              <Input
                value={estrategia}
                onChange={(e) => setEstrategia(e.target.value)}
                placeholder="Nome da estratégia utilizada"
                className="bg-gray-900 border-gray-700"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Direção</Label>
              <Select value={direcao} onValueChange={(value) => setDirecao(value as "Compra" | "Venda")}>
                <SelectTrigger className="bg-gray-900 border-gray-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="Compra">Compra</SelectItem>
                  <SelectItem value="Venda">Venda</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Ticks (positivo para ganho, negativo para perda)</Label>
              <Input
                type="number"
                value={ticks}
                onChange={(e) => setTicks(e.target.value)}
                placeholder="Ex: 25 ou -15"
                className="bg-gray-900 border-gray-700"
                required
              />
              {ticks && (
                <p className={`text-sm ${Number(ticks) > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  Resultado: {Number(ticks) > 0 ? '+' : ''}R$ {calcularResultado(Number(ticks))}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Notas</Label>
              <Textarea
                value={notas}
                onChange={(e) => setNotas(e.target.value)}
                placeholder="Observações sobre a operação..."
                className="bg-gray-900 border-gray-700 min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label>Data da Entrada</Label>
              <Input
                type="date"
                value={dataEntrada}
                onChange={(e) => setDataEntrada(e.target.value)}
                className="bg-gray-900 border-gray-700"
                required
              />
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

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setDialogOpen(false)
                  resetForm()
                }}
                className="flex-1 border-gray-700 hover:bg-gray-800"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
              >
                {editandoId ? "Salvar Alterações" : "Registrar Operação"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
