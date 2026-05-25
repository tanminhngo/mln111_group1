
import { ArrowUp } from "lucide-react"
import { Button } from "../ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-bg-surface border-t border-border py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-serif font-medium text-lg">Chương 3 – Chủ nghĩa duy vật lịch sử</p>
          <p className="text-text-muted text-sm mt-1">Bài thuyết trình Triết học Mác – Lênin</p>
        </div>
        <Button onClick={scrollToTop} variant="outline" size="icon" className="rounded-full border-accent-red text-accent-red hover:bg-accent-red hover:text-white">
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  )
}
