import Layout from 'components/Layout';
import Head from 'next/head';
import { getList } from 'lib/markdownParser';

export const getStaticProps =()=>{
  const projects = getList('_projects');
  return {
    props : {projects}
  }
}

export default function Projects({projects}) {

  console.log(projects);
  return (
    <Layout>
      <Head>
        <title>projects</title>
      </Head>
      All my Projects
    </Layout>
  );
}
