export type Service = 
  | 'Avatar Builder'
  | 'Voice Lab'
  | 'Image Architect'
  | 'Video Cine-Lab'
  | 'Music Studio'
  | 'AI Production'

export type ChatTab = 'chat' | 'history' | 'library'

export type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export type ServiceConfig = {
  name: Service
  description: string
  icon: string
  gradient: string
}
