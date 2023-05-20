import { render, screen } from "@testing-library/react"
import NotFound from "@/app/not-found"

describe("not-found", () => {
  it("should render correctly", () => {
    render(<NotFound />)
    expect(screen.getByText("This page is not found")).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: "Go back to home" })
    ).toHaveAttribute("href", "/")
  })
})