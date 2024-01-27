import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-24">

      <div className='grid place-content-center'>
        <p className='mb-3 text-2xl font-bold text-center'>Landing Page</p>
        <div className='flex justify-center'>
          <Link href={"/dashboard"}>
            <Button>Go to Dashboard</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
