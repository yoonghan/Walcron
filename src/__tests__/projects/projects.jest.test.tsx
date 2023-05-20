import { render, screen, fireEvent } from "@testing-library/react"
import Projects from "@/app/projects/page"
import { cards } from "@/app/projects/config"
import { assertScrollToTop } from "../utils/_scrollToTop"
import { findPageByPath } from "@/config/pages"

describe("Projects", () => {
  const renderComponent = () => {
    render(<Projects />)
  }

  it("should have a menu and scroll to top", async () => {
    renderComponent()
    await assertScrollToTop()
  })

  it("should render the page with the important components", () => {
    renderComponent()
    expect(screen.getByText("Playground projects"))
  })

  it("should be able to scroll up", () => {
    renderComponent()
    expect(screen.queryByText("Up")).not.toBeInTheDocument()
    fireEvent.scroll(window, { target: { pageYOffset: 321 } })
    expect(screen.getByText("Up")).toBeInTheDocument()
  })

  it("should have cards pointing to right projects", () => {
    const localCards = cards.filter((card) => card.href.startsWith("/"))
    localCards.forEach((localCard) => {
      const localCardHref = localCard.href
      expect(findPageByPath(localCardHref)?.path).toBe(localCardHref)
    })
  })
})
