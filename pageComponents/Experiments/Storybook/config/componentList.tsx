import dynamic from "next/dynamic"
import ButtonsBar from "./ButtonsBar"
import Cards from "./Cards"

const NoSSRDialog = dynamic(() => import("./Dialogs"), {
  ssr: false,
})

export const storyBookList = [
  {
    title: "Buttons Bar",
    component: ButtonsBar,
  },
  {
    title: "Dialogs",
    component: <NoSSRDialog />,
  },
  {
    title: "Cards",
    component: Cards,
  },
]
