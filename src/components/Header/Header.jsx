import { Button, useAuthenticator } from '@aws-amplify/ui-react'

import styles from './Header.module.scss'

const Header = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user])

  return (
    <header className={styles.header}>
      <span className={styles.headerTitle}>Music Storage</span>
      <div className={styles.userTab}>
        <span className={styles.username}>{user.username}</span>
        <Button onClick={signOut}>
          Sign out
        </Button>
      </div>
    </header>
  )
}

export default Header
