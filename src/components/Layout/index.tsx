import { Footer } from '../Footer'
import { Header } from '../Header'

export function Layout ({ children }: { children: JSX.Element }): JSX.Element {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  )
}
