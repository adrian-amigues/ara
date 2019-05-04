import Link from 'next/link'

const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <Link href="/about" title="my about page">
      <a>About page</a>
    </Link>
  </div>
)

export default Index
