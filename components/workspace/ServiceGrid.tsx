import ServiceCard from './ServiceCard'
import type { Service, ServiceConfig } from '@/lib/types'

interface ServiceGridProps {
  onServiceSelect: (service: Service) => void
}

const services: ServiceConfig[] = [
  {
    name: 'Avatar Builder',
    description: 'Create AI-powered digital avatars',
    icon: '👤',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    name: 'Voice Lab',
    description: 'Generate realistic voice content',
    icon: '🎙️',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    name: 'Image Architect',
    description: 'Design stunning visuals with AI',
    icon: '🎨',
    gradient: 'from-orange-600 to-red-600',
  },
  {
    name: 'Video Cine-Lab',
    description: 'Produce cinematic video content',
    icon: '🎬',
    gradient: 'from-green-600 to-teal-600',
  },
  {
    name: 'Music Studio',
    description: 'Compose original music tracks',
    icon: '🎵',
    gradient: 'from-indigo-600 to-purple-600',
  },
  {
    name: 'AI Production',
    description: 'Full-scale AI content pipeline',
    icon: '⚡',
    gradient: 'from-yellow-600 to-orange-600',
  },
]

export default function ServiceGrid({ onServiceSelect }: ServiceGridProps) {
  return (
    <div className="w-full max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Choose Your Service</h2>
        <p className="text-lg text-gray-400">Select an AI service to start creating</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.name}
            service={service}
            onSelect={() => onServiceSelect(service.name)}
          />
        ))}
      </div>
    </div>
  )
}
