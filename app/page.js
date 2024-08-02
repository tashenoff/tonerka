import Hero from '@/components/hero'
import Btn from '@/components/btn'
import ServiceBlock from '@/components/ServiceBlock'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero Title='ЗАПРАВКА КАРТРИДЖЕЙ' image='https://tonerka.kz/img/home.png'>
        <Btn text='написать спмециалисту' />
      </ Hero>
      <ServiceBlock />
      <Hero Title='Оставьте заявку на консультацию' image='https://tonerka.kz/img/service.png'>
        <Btn text='написать спмециалисту' />
      </ Hero>


    </main>
  );
}
