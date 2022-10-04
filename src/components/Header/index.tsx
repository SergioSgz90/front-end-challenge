import styles from './index.module.css'
import logo_header from '../../assets/logo_albumster.svg'
import { Link } from 'react-router-dom'
export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Link to='albumList'>
        <img src={logo_header} className={styles.logo} />
      </Link>
    </header>
  )
}
