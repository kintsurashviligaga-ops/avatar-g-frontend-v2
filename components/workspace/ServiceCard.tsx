import React from 'react'
import type { ServiceConfig } from '@/lib/types'

interface ServiceCardProps {
  service: ServiceConfig
  onSelect: () => void
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-6 text-left transition-all duration-300 hover:scale-105 hover:border-gray-700 hover:shadow-2xl hover:shadow-primary-900/20"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
      
      <div className="relative">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} mb-4 shadow-lg`}>
          <span className="text-3xl">{service.icon}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
        <p className="text-sm text-gray-400 mb-4">{service.description}</p>
        
        <div className="flex items-center text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors">
          Start Creating
          <svg
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  )
}

export default ServiceCard
