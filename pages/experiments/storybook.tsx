import ButtonsBar from "@/components/ButtonsBar"
import CommandBar from "@/components/CommandBar"
import HtmlHead from "@/components/HtmlHead"
import Head from "next/head"
import styles from "@/pageComponents/Experiments/Storybook/Storybook.module.css"
import Footer from "@/components/Footer"
import StoryMaker from "@/pageComponents/Experiments/Storybook/StoryMaker"
import { storyBookList } from "@/pageComponents/Experiments/Storybook/config/componentList"

function Storybook() {
  return (
    <>
      <HtmlHead
        title={"Storybook"}
        description={"Checklist for all elements to be rendered"}
      />
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div>
        <CommandBar />
      </div>
      <div className={styles.container}>
        <h1>Component storybook</h1>
        <p>
          Instead of having a dedicated storybook component, decided to have a
          simple 1 page to render whatever i wanted to. In this way i can avoid
          having to maintain another setup and thing can work straight out of
          the box.
        </p>
        <StoryMaker items={storyBookList} />
      </div>
      <Footer />
    </>
  )
}

export default Storybook
