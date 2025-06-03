import Link from 'next/link'

export default function Home() {
  const modules = [
    {
      title: 'Life Minute Tracker',
      description: 'Plan and track your day by the minute',
      href: '/time-tracker',
      icon: '⏰'
    },
    {
      title: 'Study Organizer',
      description: 'Manage your academic life and assignments',
      href: '/study',
      icon: '📚'
    },
    {
      title: 'Progress Tracker',
      description: 'Set and track your personal goals',
      href: '/goals',
      icon: '📈'
    },
    {
      title: 'Weekly Planner',
      description: 'Plan your week with a clean visual format',
      href: '/planner',
      icon: '📅'
    },
    {
      title: 'Finance Tracker',
      description: 'Track your expenses and income',
      href: '/finance',
      icon: '💰'
    }
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Harmony</h1>
        <p className="text-lg text-gray-600">Your all-in-one life management system</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Link
            key={module.title}
            href={module.href}
            className="block p-6 bg-white bg-opacity-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center space-x-4">
              <span className="text-3xl">{module.icon}</span>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{module.title}</h2>
                <p className="text-gray-600 mt-1">{module.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
