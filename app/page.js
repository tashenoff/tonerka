import Hero from '@/components/hero'
import Btn from '@/components/btn'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero Title='ЗАПРАВКА КАРТРИДЖЕЙ' image='https://tonerka.kz/img/home.png'>
      <Btn text='написать спмециалисту'/>
      </ Hero>

    </main>
  );
}
