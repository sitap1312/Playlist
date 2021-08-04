import Layout from "../../components/Layout/Layout"
import { Link } from "react-router-dom"

export default function HomePage() {

  return (
    <Layout >
      <h1>PLAYLISTIFY</h1>
      <Link to="/preview"><button>PREVIEW</button></Link>
    </Layout>
  );
}
