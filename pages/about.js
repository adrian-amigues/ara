import Link from 'next/link'

export default function about() {
  return (
    <div>
      <p>Let's do this.</p>
      <Link href="/">
        <a>Home page</a>
      </Link>
    </div>
  )
}
