import { Sidebar } from '@/components/layout/Sidebar'
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen" style={{ background: '#0a0a0f' }}>
      <Sidebar />
      <main className="flex-1 ml-60 overflow-y-auto">{children}</main>
    </div>
  )
}