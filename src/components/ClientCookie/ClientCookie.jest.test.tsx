import { render, screen } from "@testing-library/react"
import ClientCookie from "."
import userEvent from "@testing-library/user-event"

describe("Client Cookie", () => {
  const expectedCookieValue = "termsRead=true;secure;path=/"

  beforeAll(() => {
    //allow cookie to be re-written
    Object.defineProperty(window.document, "cookie", {
      writable: true,
    })
  })

  afterAll(() => {
    Object.defineProperty(window.document, "cookie", {
      writable: false,
    })
  })

  const renderComponent = () => render(<ClientCookie />)

  const assertCookie = () => {
    expect(document.cookie).toBe(expectedCookieValue)
  }

  it("should show cookie message", () => {
    renderComponent()
    expect(screen.getByText("This site uses cookies.")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Accept" })).toBeInTheDocument()
  })

  it("should show hide message when Accept button is clicked", async () => {
    renderComponent()
    await userEvent.click(screen.getByRole("button", { name: "Accept" }))
    expect(
      screen.queryByText("This site uses cookies.")
    ).not.toBeInTheDocument()
    assertCookie()
  })

  it("should not show message if cookie is already set", async () => {
    Object.defineProperty(window.document, "cookie", {
      writable: true,
      value: expectedCookieValue,
    })
    renderComponent()
    expect(
      screen.queryByText("This site uses cookies.")
    ).not.toBeInTheDocument()
  })

  it("should not show message if cookie read cookie has extra attribute", async () => {
    Object.defineProperty(window.document, "cookie", {
      writable: true,
      value: `specialCookie=1; ${expectedCookieValue}`,
    })
    renderComponent()
    expect(
      screen.queryByText("This site uses cookies.")
    ).not.toBeInTheDocument()
  })
})
