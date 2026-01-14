'use client'

import { useState } from 'react'
import TopBar from '@/components/workspace/TopBar'
import Sidebar from '@/components/workspace/Sidebar'
import ServiceGrid from '@/components/workspace/ServiceGrid'
import ChatPanel from '@/components/workspace/ChatPanel'
import type { Service, ChatTab, ChatMessage } from '@/lib/types'

export default function HomePage() {
  const [activeService, setActiveService] = useState<Service | null>(null)
  const [chatTab, setChatTab] = useState<ChatTab>('chat')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m Avatar G. How can I help you create amazing content today?',
      timestamp: new Date(),
    },
  ])

  const handleServiceSelect = (service: Service) => {
    setActiveService(service)
    setMessages([
      {
        id: Date.now().toString(),
        role: 'assistant',
        content: `${service} mode activated. Let's create something amazing!`,
        timestamp: new Date(),
      },
    ])
  }

  const handleSendMessage = (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    }

    const assistantMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: `I received your message: "${content}". API integration coming soon!`,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage, assistantMessage])
  }

  return (
    <div className="h-screen flex flex-col bg-gray-950">
      <TopBar />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar activeService={activeService} onServiceSelect={setActiveService} />
        
        <main className="flex-1 flex overflow-hidden">
          {!activeService ? (
            <div className="flex-1 flex items-center justify-center p-8">
              <ServiceGrid onServiceSelect={handleServiceSelect} />
            </div>
          ) : (
            <ChatPanel
              activeService={activeService}
              chatTab={chatTab}
              onChatTabChange={setChatTab}
              messages={messages}
              onSendMessage={handleSendMessage}
              onBackToServices={() => setActiveService(null)}
            />
          )}
        </main>
      </div>
    </div>
  )
}
