import React from 'react'
import styles from './Sing.module.scss'
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Page1 from './page1/Page1'
import Page2 from './page2/Page2'
import Page3 from './page3/Page3'
import Page4 from './page4/Page4'

const routes = createBrowserRouter([
  

]);


const Sing = () => {
  return (
    <main className={styles.main}>
      <RouterProvider router={routes}/>
    </main>
  )
}

export default Sing;