import Clock from '@/components/molecules/hero/hero';
import Layout from '@/components/organisms/layout/layout';

export default function Home() {
  return (
    <main>
      <Layout>
        {<Clock/>}
      </Layout>
    </main>
  );
}
