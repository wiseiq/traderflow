"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Lock, Bell, Shield } from "lucide-react"
import { useState } from "react"

export default function PerfilPage() {
  const [name, setName] = useState("Trader Demo")
  const [email, setEmail] = useState("trader@demo.com")
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular salvamento
    alert("Perfil atualizado com sucesso!")
  }

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular atualização de senha
    alert("Senha atualizada com sucesso!")
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Configurações do Perfil</h1>
        <p className="text-gray-400">Gerencie suas informações pessoais e preferências de conta</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="bg-gray-900 border border-gray-800 p-1">
          <TabsTrigger 
            value="general"
            className="data-[state=active]:bg-emerald-500/10 data-[state=active]:text-emerald-400"
          >
            <User className="w-4 h-4 mr-2" />
            Geral
          </TabsTrigger>
          <TabsTrigger 
            value="security"
            className="data-[state=active]:bg-emerald-500/10 data-[state=active]:text-emerald-400"
          >
            <Lock className="w-4 h-4 mr-2" />
            Segurança
          </TabsTrigger>
          <TabsTrigger 
            value="notifications"
            className="data-[state=active]:bg-emerald-500/10 data-[state=active]:text-emerald-400"
          >
            <Bell className="w-4 h-4 mr-2" />
            Notificações
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Informações Pessoais</CardTitle>
              <CardDescription className="text-gray-400">
                Atualize suas informações básicas de perfil
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveProfile} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-gray-200">Nome Completo</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-emerald-500"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-gray-200">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-emerald-500"
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    Salvar Alterações
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Alterar Senha</CardTitle>
              <CardDescription className="text-gray-400">
                Mantenha sua conta segura atualizando sua senha periodicamente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpdatePassword} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="current-password" className="text-gray-200">Senha Atual</Label>
                  <Input
                    id="current-password"
                    type="password"
                    className="bg-gray-800 border-gray-700 text-white focus:border-emerald-500"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="new-password" className="text-gray-200">Nova Senha</Label>
                  <Input
                    id="new-password"
                    type="password"
                    className="bg-gray-800 border-gray-700 text-white focus:border-emerald-500"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password" className="text-gray-200">Confirmar Nova Senha</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    className="bg-gray-800 border-gray-700 text-white focus:border-emerald-500"
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    Atualizar Senha
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Preferências de Notificação</CardTitle>
              <CardDescription className="text-gray-400">
                Escolha como você quer ser notificado sobre suas atividades
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-medium text-white">Alertas de Trade</h4>
                    <p className="text-xs text-gray-400">Receba notificações sobre suas operações</p>
                  </div>
                  <input type="checkbox" className="toggle toggle-emerald" defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-medium text-white">Resumo Diário</h4>
                    <p className="text-xs text-gray-400">Receba um resumo do seu desempenho diário</p>
                  </div>
                  <input type="checkbox" className="toggle toggle-emerald" defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-medium text-white">Novidades e Atualizações</h4>
                    <p className="text-xs text-gray-400">Fique por dentro das novidades da plataforma</p>
                  </div>
                  <input type="checkbox" className="toggle toggle-emerald" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
