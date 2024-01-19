import { Outlet } from 'react-router-dom'
import classes from "./Root.module.css"
import MainNavigation from '../components/mainnavigation/MainNavigation'

function RootLayout () {
<>
<MainNavigation/>
<main className={classes.content}>
    <Outlet/>
</main>
</>
}

export default RootLayout;