import Badge from '@/components/ui/Badge'

export default function TopBar() {
  return (
    <header className="h-16 border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm flex items-center px-6">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 shadow-lg shadow-primary-900/50">
          <span className="text-xl font-bold text-white">A</span>
        </div>
        <div>
          <h1 className="text-lg font-bold text-white">Avatar G</h1>
          <p className="text-xs text-gray-400">AI Workspace</p>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <Badge variant="success">Pro Plan</Badge>
        
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-200">Demo User</p>
            <p className="text-xs text-gray-400">demo@avatar-g.com</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-semibold shadow-lg">
            DU
          </div>
        </div>
      </div>
    </header>
  )
}
