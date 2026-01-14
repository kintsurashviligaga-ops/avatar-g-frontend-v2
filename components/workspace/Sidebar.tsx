import { Service } from '@/lib/types'

interface SidebarProps {
  activeService: Service | null
  onServiceSelect: (service: Service | null) => void
}

const services: Service[] = [
  'Avatar Builder',
  'Voice Lab',
  'Image Architect',
  'Video Cine-Lab',
  'Music Studio',
  'AI Production',
]

const serviceIcons: Record<Service, string> = {
  'Avatar Builder': '👤',
  'Voice Lab': '🎙️',
  'Image Architect': '🎨',
  'Video Cine-Lab': '🎬',
  'Music Studio': '🎵',
  'AI Production': '⚡',
}

export default function Sidebar({ activeService, onServiceSelect }: SidebarProps) {
  return (
    <aside className="w-72 border-r border-gray-800 bg-gray-900/30 flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Services</h2>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {services.map((service) => (
          <button
            key={service}
            onClick={() => onServiceSelect(service)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              activeService === service
                ? 'bg-primary-600/20 text-primary-400 border border-primary-600/30'
                : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
            }`}
          >
            <span className="text-2xl">{serviceIcons[service]}</span>
            <span className="text-sm font-medium">{service}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className="bg-gradient-to-br from-primary-900/40 to-purple-900/40 rounded-lg p-4 border border-primary-800/30">
          <p className="text-xs font-semibold text-gray-300 mb-1">Credits Available</p>
          <p className="text-2xl font-bold text-white">1,250</p>
          <button className="mt-3 w-full bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium py-2 rounded-md transition-colors">
            Buy More Credits
          </button>
        </div>
      </div>
    </aside>
  )
}
