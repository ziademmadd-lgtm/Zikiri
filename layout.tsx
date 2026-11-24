import './globals.css';
import type { Metadata } from 'next';
import { PwaRegister } from '@/components/PwaRegister';
export const metadata: Metadata = { title:'ذِكري | ZIKRI', description:'رفيقك في كل ذِكر', manifest:'/manifest.webmanifest', themeColor:'#123B31', appleWebApp:{ capable:true, statusBarStyle:'default', title:'ذِكري' } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="ar" dir="rtl"><body>{children}<PwaRegister/></body></html> }
