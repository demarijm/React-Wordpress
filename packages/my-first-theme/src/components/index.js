import React from "react"
import { connect, Global, css } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Post from "./post"
import Page from "./page"


const Root = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <>
         <Global
            styles={css`
                html {
                    font-family: system-ui, Verdana, Aria;, sans-serif;
                }
            `}
        />  
         <h1>Hello Demari</h1>
         <p>Current URL: {state.router.link}</p>
          <nav>
              <Link link="/">Home</Link>
              <br />
              <Link link="/page/2">More posts</Link>
              <br />
               <Link link="/about-us">About Us</Link>
        </nav>
            <hr />
            <main>
                <Switch>
                <List when={data.isArchive} />
                <Post when={data.isPost}/>
                <Page when={data.isPage}/>
                </Switch>
            </main>
            </>
  )
}

export default connect(Root)