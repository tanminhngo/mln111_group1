import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { RotateCcw, ChevronRight, Wallet, Star, Flame, Landmark, Maximize2, Minimize2 } from "lucide-react"

interface GameChoice {
  text: string
  nextScene: number
  impact?: {
    money?: number
    rating?: number
    kpi?: number
  }
}

interface Character {
  name: string
  avatar: string
  role: string
  image: string
}

interface PhoneMessage {
  sender: string
  avatar: string
  message: string
  isTyping?: boolean
}

interface GameScene {
  id: number
  title: string
  character?: Character
  dialogue: string[]
  choices?: GameChoice[]
  isEnding?: boolean
  endingType?: "bad" | "good"
  phoneMessages?: PhoneMessage[]
}

const characters = {
  minh: { name: "Minh", avatar: "👨‍💼", role: "Tài xế mới", image: "/characters/minh.png" },
  huy: { name: "Huy", avatar: "👨‍💻", role: "Tài xế lâu năm", image: "/characters/huy.png" },
  ai: { name: "AI System", avatar: "🤖", role: "Hệ thống ứng dụng", image: "/characters/ai.png" },
  company: { name: "CEO Nền Tảng", avatar: "💼", role: "Quản lý nền tảng", image: "/characters/ceo.png" },
}

const scenes: GameScene[] = [
  {
    id: 0,
    title: "CẢNH 1 — GIA NHẬP NỀN TẢNG",
    character: characters.minh,
    dialogue: [
      "Minh: Mình vừa tốt nghiệp xong, cần kiếm tiền.",
      "Bạn của Minh: Chạy app đi, tự do lắm. Muốn làm lúc nào cũng được.",
      "Minh: Thật sao? Nghe có vẻ ổn...",
      "[Minh tải ứng dụng]",
      "🤖 AI System: Chúc mừng! Bạn đã trở thành đối tác tự do của X App.",
      "🤖 AI System: Hãy làm chủ thời gian và thu nhập của bạn.",
      "Minh: Nghe có vẻ ổn thật."
    ],
    choices: [
      { text: "Bật app và bắt đầu", nextScene: 1 }
    ]
  },
  {
    id: 1,
    title: "CẢNH 2 — NHỮNG NGÀY ĐẦU 'TỰ DO'",
    character: characters.minh,
    dialogue: [
      "[Minh bật app]",
      "🤖 AI System: Có 5 cuốc chờ bạn!",
      "Minh: Dễ quá! Cuốc nào cũng nhận được.",
      "[Sau 3 giờ làm việc]",
      "💰 Kiếm được: 450.000đ",
      "⭐ Khách đánh giá: 5.0 sao (5 chuyến 5 sao)",
      "Minh: Mình thật sự đang làm chủ!"
    ],
    choices: [
      { text: "Tiếp tục chạy", nextScene: 2, impact: { money: 450000 } }
    ]
  },
  {
    id: 2,
    title: "CẢNH 3 — THUẬT TOÁN BẮT ĐẦU KIỂM SOÁT",
    character: characters.ai,
    dialogue: [
      "[Sau 5 giờ làm việc, Minh cảm thấy mệt]",
      "Minh: Mình muốn nghỉ sớm...",
      "🤖 AI System: ⚠️ THÔNG BÁO",
      "🤖 AI System: Hoàn thành thêm 3 cuốc để nhận thưởng giờ cao điểm: +500.000đ",
      "Minh: Ồ, 500k thưởng? Chạy tiếp vậy..."
    ],
    choices: [
      {
        text: "Tiếp tục chạy để nhận thưởng",
        nextScene: 4,
        impact: { money: 500000 }
      },
      {
        text: "Tắt app và nghỉ",
        nextScene: 3,
        impact: { money: 0, kpi: 10 }
      }
    ]
  },
  {
    id: 3,
    title: "CẢNH 3B — TỰ DO TRONG KHUÔN KHỔ",
    character: characters.ai,
    dialogue: [
      "[Minh quyết định tắt app và về nhà nghỉ ngơi]",
      "Minh: Cuối cùng cũng được nghỉ. Làm chủ thời gian thật sướng!",
      "[Ngày hôm sau, Minh bật app trở lại hào hứng]",
      "🤖 AI System: ⚠️ CẢNH BÁO: Tỷ lệ online trong giờ cao điểm của bạn giảm dưới 60%.",
      "🤖 AI System: Mức độ ưu tiên nhận cuốc của bạn đã bị hạ thấp.",
      "Minh: Hả? Mình được tự do tắt app cơ mà? Sao lại bị giảm ưu tiên?",
      "🤖 AI System: Để khôi phục mức độ ưu tiên, bạn bắt buộc phải hoàn thành cuốc xe tiếp theo.",
      "Minh: Thật vô lý! Nhưng mình không còn lựa chọn nào khác..."
    ],
    choices: [
      { text: "Bắt đầu nhận cuốc mới", nextScene: 4 }
    ]
  },
  {
    id: 4,
    title: "CẢNH 4 — KHÔNG ĐƯỢC QUYỀN LỰA CHỌN",
    character: characters.ai,
    dialogue: [
      "[Minh nhận một cuốc]",
      "Minh: Được rồi, nhận này.",
      "[Sau khi nhận]",
      "🤖 AI System: Đơn hàng: Quận 9 → Quận Tân Bình",
      "Minh: Cái gì? Xa quá vậy? Kẹt xe mất 1 tiếng!",
      "Minh: Mình không biết khách đi đâu trước khi nhận?",
      "[Muốn hủy cuốc]",
      "🤖 AI System: ⚠️ Tỷ lệ hủy chuyến của bạn đang vượt mức cho phép.",
      "🤖 AI System: Tiếp tục hủy sẽ bị hạn chế quyền chọn cuốc."
    ],
    choices: [
      {
        text: "Chấp nhận cuốc",
        nextScene: 5,
        impact: { money: 150000, rating: -0.2 }
      },
      {
        text: "Hủy cuốc",
        nextScene: 5,
        impact: { kpi: 20 }
      }
    ]
  },
  {
    id: 5,
    title: "CẢNH 5 — ÁP LỰC ĐÁNH GIÁ SAO",
    character: characters.ai,
    dialogue: [
      "[Cho dù chấp nhận cuốc xe bão táp hay hủy để nhận cuốc khác, áp lực mưu sinh vẫn đẩy Minh vào những hành trình đầy căng thẳng...]",
      "[Ting! Tiếng chuông báo hoàn thành chuyến đi. Nhưng đi kèm là một thông báo bất ngờ không mấy vui vẻ...]",
      "🤖 AI System: ⚠️ THÔNG BÁO: Khách hàng vừa đánh giá chuyến đi vừa rồi của bạn 1 SAO.",
      "Minh: Cái gì?! Đánh giá 1 sao? Mình đã lái xe vô cùng cẩn thận, thái độ rất lịch sự mà!",
      "[Ý kiến phản hồi từ khách: \"Tài xế đi quá chậm, làm trễ giờ hẹn quan trọng của tôi!\"]",
      "Minh: Kẹt xe giờ cao điểm kẹt cứng ngắc, mình đâu thể bay được! Khách đi trễ giờ lại đổ hết lỗi lên đầu tài xế?",
      "🤖 AI System: ⚠️ CẢNH BÁO: Điểm đánh giá (Rating) trung bình của bạn đang giảm dưới tiêu chuẩn.",
      "🤖 AI System: Tài khoản có nguy cơ bị khóa/hạn chế nhận cuốc nếu tiếp tục nhận đánh giá thấp.",
      "Minh: Thật bất công! Minh sở hữu xe, tự đổ xăng, tự chạy... nhưng chỉ vì một đánh giá chủ quan của khách hàng và thuật toán vô cảm, mình có thể bị tước quyền kiếm sống bất cứ lúc nào!"
    ],
    choices: [
      { text: "Tiếp tục", nextScene: 6, impact: { rating: -0.3 } }
    ]
  },
  {
    id: 6,
    title: "CẢNH 6 — CHI PHÍ TĂNG CAO",
    character: characters.huy,
    dialogue: [
      "[Minh gặp Huy - tài xế lâu năm]",
      "Minh: Anh Huy, sao lúc trước anh kiếm được nhiều hơn em bây giờ vậy?",
      "Huy: Cái đó là cũ rồi. Giờ xe hỏng, xăng tăng, giá cước thì không đổi.",
      "Minh: Nhưng giá cước thì do app quyết định à? Còn tất cả là mình chi tiền mua xe, đổ xăng, sửa xe...",
      "Huy: Ừ. Mình sở hữu cái xe, nhưng đâu sở hữu công việc.",
      "Huy: Đó chính là sự khác biệt.",
      "Minh: Vậy mình đang làm gì? Đối tác hay nhân viên?"
    ],
    choices: [
      { text: "Tiếp tục chạy", nextScene: 7 }
    ]
  },
  {
    id: 7,
    title: "CẢNH 7 — TĂNG CHIẾT KHẤU",
    character: characters.company,
    dialogue: [
      "💼 CEO Nền Tảng: Chào các đối tác! Nhằm nâng cấp trải nghiệm khách hàng và tối ưu hóa hệ thống vận hành...",
      "💼 CEO Nền Tảng: Chúng tôi đã đầu tư hàng triệu USD vào thuật toán AI mới để giúp các bạn nhận cuốc nhanh hơn 15%.",
      "💼 CEO Nền Tảng: Để tài trợ cho các chiến dịch khuyến mãi thu hút khách hàng – trực tiếp mang lại NHIỀU ĐƠN HÀNG HƠN cho tài xế...",
      "💼 CEO Nền Tảng: Chúng tôi xin thông báo điều chỉnh nhẹ tỷ lệ phí sử dụng ứng dụng (chiết khấu) từ 25% lên 30%, áp dụng từ tuần tới.",
      "💼 CEO Nền Tảng: Đây là bước đi cần thiết để xây dựng một hệ sinh thái bền vững và cùng nhau phát triển lâu dài!",
      "[Minh bàng hoàng tính toán lại chi phí trên điện thoại...]",
      "Minh: Cái gì?! Tăng thêm tới 5% chiết khấu mà gọi là 'điều chỉnh nhẹ' sao?",
      "Minh: Họ nói là tài trợ khuyến mãi kích cầu, nhưng thực chất tiền khuyến mãi đó lại trừ thẳng vào công sức của tài xế chạy ròng rã ngoài đường!",
      "Minh: Tính ra cứ chạy 10 cuốc xe thì bị công ty thu mất trắng 3 cuốc. Chạy nhiều hơn nhưng thu nhập thực tế giảm thảm hại!",
      "Huy: Thấy chưa Minh? Cốt lõi của kinh tế nền tảng số là đây.",
      "Huy: Một chính sách bóc lột thay đổi chỉ bằng một thông báo một chiều trên app. 'Đối tác tự do' gì mà không có bất kỳ quyền thương lượng nào?",
      "Huy: Chúng ta chỉ là những người làm thuê kiểu mới, bán sức lao động và tự gánh chịu rủi ro hao mòn phương tiện cho giới chủ công nghệ bóc lột mà thôi.",
      "Minh: Anh nói đúng... Quyền sinh sát hoàn toàn nằm trong tay họ. Chúng ta hoàn toàn bị động!"
    ],
    choices: [
      {
        text: "Bức xúc nhưng tiếp tục chạy",
        nextScene: 8,
        impact: { money: -300000 }
      }
    ]
  },
  {
    id: 8,
    title: "CẢNH 8 — NHÓM CHAT TÀI XẾ",
    character: characters.huy,
    dialogue: [
      "Minh: Mình có nên ủng hộ họ không... cân nhắc có hay không?"
    ],
    choices: [
      {
        text: "Tắt app cùng mọi người (tham gia đấu tranh)",
        nextScene: 10,
        impact: { kpi: -50 }
      },
      {
        text: "Im lặng và tiếp tục chạy",
        nextScene: 9,
        impact: { money: 400000 }
      }
    ],
    phoneMessages: [
      { sender: "Huy", avatar: "👨‍💻", message: "Anh em ơi, chiết khấu tăng lên 30% rồi!" },
      { sender: "Nguyễn Hải", avatar: "👨‍💼", message: "Chạy được gì? Tiền xăng còn tăng 50%" },
      { sender: "Trần Minh", avatar: "👨‍💻", message: "Hôm qua tôi chạy 8h chỉ kiếm 300k, còn xăng hết 200k" },
      { sender: "Phạm Thắng", avatar: "👨‍💼", message: "Công ty nói là 'đối tác', nhưng quyết định một chiều" },
      { sender: "Huy", avatar: "👨‍💻", message: "Một mình khó kháng cự. Nhưng nếu cùng nhau..." },
      { sender: "Lê Sơn", avatar: "👨‍💻", message: "Hẹn thứ ba - ai cũng tắt app, 2 tiếng" },
      { sender: "Trần Minh", avatar: "👨‍💻", message: "Tôi support! Sức mạnh tập thể!" },
      { sender: "Nguyễn Hải", avatar: "👨‍💼", message: "Gợi ý mà, không bắt buộc. Mỗi người lựa chọn" }
    ]
  },
  {
    id: 9,
    title: "KẾT THÚC - ENDING XẤU",
    isEnding: true,
    endingType: "bad",
    character: characters.ai,
    dialogue: [
      "🤖 AI System: Vì tỷ lệ hủy cao, tài khoản của bạn bị hạn chế.",
      "🤖 AI System: Bạn chỉ nhận được 20% cuốc gốc.",
      "🤖 AI System: Công việc trở nên rất khó khăn.",
      "Minh: Sao vậy? Mình không làm sai gì cả...",
      "Huy: Bạn chọn một mình đối đầu với hệ thống.",
      "Huy: Người lao động riêng lẻ khó chống lại.",
      "[💔 BÀI HỌC: Khi bạn bị cô lập, hệ thống sẽ kiểm soát bạn dễ dàng.]"
    ],
    choices: []
  },
  {
    id: 10,
    title: "CẢNH 9 — TẮT APP TẬP THỂ",
    character: characters.ai,
    dialogue: [
      "[Đột ngột, cùng lúc hàng nghìn tài xế tắt app]",
      "🤖 AI System: ⚠️ CẢNH BÁO HỆ THỐNG: LƯỢNG XE GIẢM ĐỘT NGỘT",
      "🤖 AI System: Hiện tại chỉ có 15% tài xế online.",
      "[Bản đồ đỏ rực - Giá cước tăng vọt 200%]",
      "Minh: Nó hoạt động thật đó! Sức mạnh của sự đoàn kết!"
    ],
    choices: [
      { text: "Tiếp tục tắt app", nextScene: 11 }
    ]
  },
  {
    id: 11,
    title: "KẾT THÚC - ENDING TỐT",
    isEnding: true,
    endingType: "good",
    character: characters.company,
    dialogue: [
      "💼 CEO Nền Tảng: Chúng tôi sẵn sàng đối thoại với đại diện tài xế về chính sách chiết khấu.",
      "📰 TIN TỨC: Giảm chiết khấu từ 30% về 27% & Bổ sung phí bảo hiểm.",
      "Minh: Nó thực sự làm được!",
      "Huy: Sức mạnh tập thể là vậy. Bây giờ tài xế hiểu rồi: Đấu tranh tập thể là cách bảo vệ quyền lợi.",
      "[✅ CHIẾN THẮNG: Người lao động đã tìm lại tiếng nói và sự tôn trọng.]"
    ],
    choices: []
  }
]

export function GameSection() {
  const [currentScene, setCurrentScene] = useState(0)
  const [gameState, setGameState] = useState({
    money: 2000000,
    rating: 5,
    kpi: 0
  })
  const [displayedDialogue, setDisplayedDialogue] = useState(0)
  const [displayedPhoneMessages, setDisplayedPhoneMessages] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isPortrait, setIsPortrait] = useState(false)

  useEffect(() => {
    const checkLayout = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setIsPortrait(window.innerHeight > window.innerWidth && window.innerWidth < 1024)
    }
    checkLayout()
    window.addEventListener("resize", checkLayout)
    window.addEventListener("orientationchange", checkLayout)
    return () => {
      window.removeEventListener("resize", checkLayout)
      window.removeEventListener("orientationchange", checkLayout)
    }
  }, [])

  const toggleFullscreen = () => {
    if (!stageRef.current) return

    if (!document.fullscreenElement) {
      stageRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  // Scroll to bottom of chat when new phone messages arrive without scrolling the whole page
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      })
    }
  }, [displayedPhoneMessages, currentScene])

  const scene = scenes[currentScene]
  const currentLine = scene.dialogue[displayedDialogue] || ""

  // Preload character images
  useEffect(() => {
    Object.values(characters).forEach((char) => {
      const img = new Image()
      img.src = char.image
    })
  }, [])

  // Parse current dialogue line to determine type, speaker, and text
  const parseLine = (line: string) => {
    if (!line) return { type: "narrative", speaker: "", text: "" }

    if (line.startsWith("[") && line.endsWith("]")) {
      return { type: "action", speaker: "", text: line.slice(1, -1) }
    }

    const colonIndex = line.indexOf(":")
    if (colonIndex !== -1) {
      const speakerRaw = line.substring(0, colonIndex).trim()
      const text = line.substring(colonIndex + 1).trim()

      let speakerKey = ""
      let speakerName = speakerRaw

      const lowerSpeaker = speakerRaw.toLowerCase()
      if (lowerSpeaker.includes("minh") && !lowerSpeaker.includes("bạn của minh")) {
        speakerKey = "minh"
        speakerName = "Minh"
      } else if (lowerSpeaker.includes("huy")) {
        speakerKey = "huy"
        speakerName = "Huy"
      } else if (lowerSpeaker.includes("ai") || lowerSpeaker.includes("system")) {
        speakerKey = "ai"
        speakerName = "AI System"
      } else if (lowerSpeaker.includes("ceo") || lowerSpeaker.includes("đại diện") || lowerSpeaker.includes("công ty")) {
        speakerKey = "company"
        speakerName = "CEO Nền Tảng"
      } else if (lowerSpeaker.includes("bạn của minh")) {
        speakerKey = "friend"
        speakerName = "Bạn của Minh"
      }

      return { type: "dialogue", speaker: speakerName, speakerKey, text }
    }

    return { type: "narrative", speaker: "", text: line }
  }

  const parsed = parseLine(currentLine)

  // Scan current scene dialogue to see who is present
  const getPresentCharacters = (dialogue: string[]) => {
    const present = { minh: false, huy: false, ai: false, company: false }
    dialogue.forEach((line) => {
      const parsedLine = parseLine(line)
      if (parsedLine.type === "dialogue" && parsedLine.speakerKey) {
        if (parsedLine.speakerKey === "minh" || parsedLine.speakerKey === "friend") present.minh = true
        if (parsedLine.speakerKey === "huy") present.huy = true
        if (parsedLine.speakerKey === "ai") present.ai = true
        if (parsedLine.speakerKey === "company") present.company = true
      }
    })
    // Ensure the main character of the scene is always on stage if defined
    if (scene.character) {
      if (scene.character.name === "Minh") present.minh = true
      if (scene.character.name === "Huy") present.huy = true
      if (scene.character.name === "AI System") present.ai = true
      if (scene.character.name === "CEO Nền Tảng") present.company = true
    }
    return present
  }

  const present = getPresentCharacters(scene.dialogue)

  const handleChoice = (choice: GameChoice) => {
    if (choice.impact) {
      setGameState((prev) => ({
        money: Math.max(0, prev.money + (choice.impact?.money || 0)),
        rating: Math.max(0, Math.min(5, prev.rating + (choice.impact?.rating || 0))),
        kpi: Math.max(0, prev.kpi + (choice.impact?.kpi || 0))
      }))
    }
    setDisplayedDialogue(0)
    setDisplayedPhoneMessages(0)
    setCurrentScene(choice.nextScene)
  }

  const handleContinueDialogue = () => {
    // If there's a phone screen, show messages progressively
    if (scene.phoneMessages && displayedPhoneMessages < scene.phoneMessages.length) {
      setDisplayedPhoneMessages((prev) => prev + 1)
      return
    }

    // Otherwise, show dialogue lines progressively
    if (displayedDialogue < scene.dialogue.length - 1) {
      setDisplayedDialogue((prev) => prev + 1)
    } else if (scene.choices && scene.choices.length > 0) {
      // Prompt choices
    } else if (scene.isEnding) {
      setGameComplete(true)
    }
  }

  const resetGame = () => {
    setCurrentScene(0)
    setGameState({ money: 2000000, rating: 5, kpi: 0 })
    setDisplayedDialogue(0)
    setDisplayedPhoneMessages(0)
    setGameComplete(false)
    setGameStarted(false)
  }

  const formatCurrency = (value: number) => {
    return value.toLocaleString("vi-VN", { style: "currency", currency: "VND" }).replace("₫", "đ")
  }

  // Handle click on the stage to advance dialog (if not currently choosing)
  const handleStageClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button") || (e.target as HTMLElement).closest(".choice-container")) {
      return
    }
    const hasChoices = scene.choices && scene.choices.length > 0
    const isDialogueFinished = displayedDialogue >= scene.dialogue.length - 1
    const isPhoneFinished = scene.phoneMessages ? displayedPhoneMessages >= scene.phoneMessages.length : true

    if (hasChoices && isDialogueFinished && isPhoneFinished) {
      return
    }
    handleContinueDialogue()
  }

  // Check which character is currently active speaker
  const activeSpeakerKey = parsed.type === "dialogue" ? parsed.speakerKey : ""

  return (
    <section id="section-7" className="min-h-screen py-24 px-4 bg-bg-base relative flex items-center justify-center">
      <div className="absolute top-0 right-0 text-[20rem] font-serif font-bold text-text-muted opacity-5 select-none leading-none -mt-16 -mr-16">
        08
      </div>

      <div className="max-w-5xl mx-auto w-full z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Game Nhập Vai: Đối Tác Hay Người Làm Thuê?</h2>
          <div className="w-24 h-1 bg-accent-red mx-auto mb-6"></div>
          <p className="text-lg text-text-muted">Trải nghiệm một ngày làm tài xế công nghệ trong thời đại số</p>
        </motion.div>

        {!gameComplete ? (
          <div className="flex flex-col gap-6">
            {/* The Main Stage (Enforced landscape aspect ratio, co-proportional scaling) */}
            <div
              ref={stageRef}
              onClick={handleStageClick}
              className="relative w-full aspect-[16/9] bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#e0d9d0] cursor-pointer group select-none flex flex-col justify-between p-3 sm:p-6"
            >
              {/* Screen Orientation Prompt Overlay */}
              {isPortrait && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center p-6 bg-black/90 backdrop-blur-md pointer-events-auto cursor-default animate-fade-in">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-xs flex flex-col items-center justify-center"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 text-accent-gold animate-pulse flex items-center justify-center bg-accent-gold/10 rounded-full border border-accent-gold/25">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin-slow"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                    </div>
                    <h4 className="text-[#FAF6EE] font-serif font-bold text-xs sm:text-lg mb-1 sm:mb-2">Trải Nghiệm Tốt Nhất 📱</h4>
                    <p className="text-[9px] sm:text-xs text-slate-300 font-serif leading-relaxed mb-3 sm:mb-4">
                      Vui lòng **xoay ngang điện thoại** để chơi game với giao diện và nhân vật đẹp mắt nhất giống như trên máy tính!
                    </p>
                    <button 
                      onClick={() => setIsPortrait(false)}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent-red hover:bg-red-800 text-[#FAF6EE] text-[8px] sm:text-xs font-serif font-bold rounded-lg transition-all cursor-pointer shadow-md"
                    >
                      Tiếp tục ở màn hình dọc
                    </button>
                  </motion.div>
                </div>
              )}

              {/* Cinematic Background Video */}
              <video
                src="/hinh_nen.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0 filter brightness-[0.70] contrast-[1.05] transition-all duration-700 ${scene.phoneMessages ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
              />

              {/* Game Grid Overlay */}
              <div className={`absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015)_50%,rgba(0,0,0,0.015)_50%)] bg-[length:100%_4px] pointer-events-none z-25 opacity-60 transition-opacity duration-700 ${scene.phoneMessages ? "opacity-0" : "opacity-100"
                }`} />

              {!gameStarted ? (
                /* START SCREEN MENU */
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center p-4 sm:p-8 bg-black/45 backdrop-blur-[2px] pointer-events-auto cursor-default animate-fade-in">
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl flex flex-col items-center justify-center"
                  >
                    <span className="text-[8px] sm:text-[10px] text-accent-gold font-bold tracking-widest font-mono border border-accent-gold/40 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-black/60 backdrop-blur-md shadow-lg uppercase mb-3 sm:mb-5 inline-block select-none">
                      Dự Án Học Tập Nghiên Cứu Lênin
                    </span>

                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-serif text-[#FAF6EE] tracking-wide mb-3 sm:mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] select-none leading-tight">
                      ĐỐI TÁC HAY <br />
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-red to-accent-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                        NGƯỜI LÀM THUÊ?
                      </span>
                    </h3>

                    <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 font-serif italic mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] select-none">
                      Nhập vai Minh - một cử nhân vừa tốt nghiệp lựa chọn chạy xe công nghệ kiếm sống. Trải nghiệm áp lực đánh giá từ khách hàng và quyền lực vô hình của thuật toán giám sát platform toàn trị...
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setGameStarted(true)}
                      className="px-6 py-3.5 sm:px-8 sm:py-4.5 bg-gradient-to-r from-accent-red to-red-800 hover:from-accent-red hover:to-accent-red text-[#FAF6EE] font-bold font-serif text-xs sm:text-base rounded-xl border border-red-500/20 shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-2.5 mx-auto hover:shadow-red-950/40"
                    >
                      <span>BẮT ĐẦU HÀNH TRÌNH</span>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce-horizontal" />
                    </motion.button>
                  </motion.div>

                  {/* Fullscreen Button on Start Menu */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-auto">
                    <button
                      onClick={toggleFullscreen}
                      className="flex items-center justify-center p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 hover:bg-black/80 hover:border-accent-gold/40 text-[#FAF6EE] transition-all hover:scale-105 cursor-pointer"
                      title={isFullscreen ? "Thoát toàn màn hình" : "Bật toàn màn hình"}
                    >
                      {isFullscreen ? <Minimize2 className="w-4 h-4 text-accent-gold" /> : <Maximize2 className="w-4 h-4 text-accent-gold" />}
                    </button>
                  </div>
                </div>
              ) : (
                /* ACTIVE RPG GAMEPLAY */
                <>

              {/* HUD / Top Bar */}
              <div className="flex flex-wrap items-center justify-between w-full gap-2 z-30 pointer-events-none">
                {/* Title and Progress */}
                <div className="flex flex-col gap-0.5 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/10 shadow-lg">
                  <span className="text-[8px] sm:text-[10px] text-accent-gold font-bold tracking-widest font-mono truncate max-w-[120px] sm:max-w-none">
                    {scene.title}
                  </span>
                  <span className="text-[10px] sm:text-xs text-white/80 font-medium font-sans">
                    Tiến độ: {currentScene + 1}/{scenes.length}
                  </span>
                </div>

                {/* RPG Stats Overlay */}
                <div className="flex items-center gap-1.5 sm:gap-3 flex-wrap justify-end">
                  <div className="flex items-center gap-1 sm:gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/10 shadow-lg">
                    <Wallet className="w-3.5 h-3.5 text-yellow-500 animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-bold text-yellow-400 font-mono">
                      {formatCurrency(gameState.money)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 sm:gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/10 shadow-lg">
                    <Star className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
                    <span className="text-[10px] sm:text-xs font-bold text-blue-300 font-mono">
                      ⭐ {gameState.rating.toFixed(1)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 sm:gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/10 shadow-lg">
                    <Flame className="w-3.5 h-3.5 text-red-500" />
                    <span className="text-[10px] sm:text-xs font-bold text-red-400 font-mono">
                      KPI: {gameState.kpi}
                    </span>
                  </div>

                  {/* Fullscreen Button */}
                  <button
                    onClick={toggleFullscreen}
                    className="flex items-center justify-center p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 hover:bg-black/80 hover:border-accent-gold/40 text-[#FAF6EE] transition-all hover:scale-105 pointer-events-auto cursor-pointer"
                    title={isFullscreen ? "Thoát toàn màn hình" : "Bật toàn màn hình"}
                  >
                    {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 text-accent-gold" /> : <Maximize2 className="w-3.5 h-3.5 text-accent-gold" />}
                  </button>
                </div>
              </div>

              {/* RPG Character Sprites Layer */}
              {!scene.phoneMessages && (
                <div className="absolute inset-x-0 bottom-0 top-16 flex items-end justify-between px-4 sm:px-12 pointer-events-none z-10 overflow-hidden">
                  {/* MINH (Left) */}
                  <motion.div
                    animate={{
                      opacity: present.minh ? (activeSpeakerKey === "minh" || parsed.type === "action" || parsed.type === "narrative" ? 1 : 0.45) : 0,
                      scale: present.minh ? (activeSpeakerKey === "minh" ? 1.55 : 1.35) : 0.8,
                      x: present.minh ? (isMobile ? 5 : 25) : -100,
                      filter: activeSpeakerKey === "minh" || parsed.type === "action" || parsed.type === "narrative" ? "brightness(1.05) contrast(1.05)" : "brightness(0.55)"
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="relative w-[32%] h-[100%] flex items-end justify-center origin-bottom shrink-0"
                  >
                    <img
                       src="/characters/minh.png"
                       alt="Minh"
                       className="h-full object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]"
                    />
                  </motion.div>

                  {/* CEO (Center-Left) */}
                  <motion.div
                    animate={{
                      opacity: present.company ? (activeSpeakerKey === "company" || parsed.type === "action" || parsed.type === "narrative" ? 1 : 0.45) : 0,
                      scale: present.company ? (activeSpeakerKey === "company" ? 1.55 : 1.35) : 0.8,
                      x: present.company ? (isMobile ? 5 : 15) : -50,
                      filter: activeSpeakerKey === "company" || parsed.type === "action" || parsed.type === "narrative" ? "brightness(1.05) contrast(1.05)" : "brightness(0.55)"
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="relative w-[32%] h-[100%] flex items-end justify-center origin-bottom shrink-0"
                  >
                    <img
                      src="/characters/ceo.png"
                      alt="CEO"
                      className="h-full object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]"
                    />
                  </motion.div>

                  {/* AI System (Center-Right) */}
                  <motion.div
                    animate={{
                      opacity: present.ai ? (activeSpeakerKey === "ai" || parsed.type === "action" || parsed.type === "narrative" ? 1 : 0.45) : 0,
                      scale: present.ai ? (activeSpeakerKey === "ai" ? 1.6 : 1.38) : 0.8,
                      y: present.ai ? (activeSpeakerKey === "ai" ? -8 : 0) : 100,
                      x: present.ai ? (isMobile ? -5 : -15) : 50,
                      filter: activeSpeakerKey === "ai" ? "brightness(1.1)" : "brightness(0.55)"
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="relative w-[32%] h-[100%] flex items-end justify-center origin-bottom shrink-0"
                  >
                    <img
                      src="/characters/ai.png"
                      alt="AI System"
                      className="h-full object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]"
                    />
                  </motion.div>

                  {/* HUY (Right) */}
                  <motion.div
                    animate={{
                      opacity: present.huy ? (activeSpeakerKey === "huy" || parsed.type === "action" || parsed.type === "narrative" ? 1 : 0.45) : 0,
                      scale: present.huy ? (activeSpeakerKey === "huy" ? 1.55 : 1.35) : 0.8,
                      x: present.huy ? (isMobile ? -5 : -25) : 100,
                      filter: activeSpeakerKey === "huy" || parsed.type === "action" || parsed.type === "narrative" ? "brightness(1.05) contrast(1.05)" : "brightness(0.55)"
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="relative w-[32%] h-[100%] flex items-end justify-center origin-bottom shrink-0"
                  >
                    <img
                      src="/characters/huy.png"
                      alt="Huy"
                      className="h-full object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]"
                    />
                  </motion.div>
                </div>
              )}

              {/* Group Chat Screen Mode (If present in Scene) */}
              {scene.phoneMessages && (
                <div className="absolute inset-0 flex items-center justify-center z-15 p-2 sm:p-4 bg-black/40 backdrop-blur-sm">
                  <div className="w-full max-w-[285px] sm:max-w-[340px] h-[95%] sm:h-[90%] bg-black rounded-[24px] sm:rounded-[36px] border-[4px] sm:border-[6px] border-slate-700 shadow-2xl overflow-hidden flex flex-col pointer-events-auto animate-fade-in">
                    {/* Header */}
                    <div className="bg-slate-900 text-white px-4 py-2 sm:px-5 sm:py-2.5 flex items-center justify-between text-[9px] sm:text-[11px] font-medium font-mono border-b border-slate-800">
                      <span>9:41</span>
                      <span className="text-accent-gold font-bold">💬 NHÓM TÀI XẾ</span>
                      <span>📶 🔋</span>
                    </div>

                    {/* Messages Body */}
                    <div ref={chatContainerRef} className="flex-1 overflow-y-auto bg-slate-950 p-3 sm:p-4 space-y-2.5 sm:space-y-3 scrollbar-thin">
                      {scene.phoneMessages.slice(0, displayedPhoneMessages).map((msg, idx) => (
                        <motion.div
                          key={`msg-${idx}-${msg.sender}`}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex gap-2"
                        >
                          <span className="text-lg sm:text-xl flex-shrink-0 bg-slate-800 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow">
                            {msg.avatar}
                          </span>
                          <div className="flex-1">
                            <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 mb-0.5">{msg.sender}</div>
                            <div className={`inline-block max-w-[85%] px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl text-[10px] sm:text-xs leading-relaxed shadow-sm ${msg.sender === "Huy"
                              ? "bg-accent-red text-white"
                              : "bg-slate-800 text-slate-100 border border-slate-700"
                              }`}>
                              {msg.message}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Footer Input Area */}
                    <div className="bg-slate-900 px-3 py-2.5 sm:px-4 sm:py-3.5 border-t border-slate-800 flex gap-2">
                      <input
                        type="text"
                        placeholder="Nhập ý kiến của bạn..."
                        className="flex-1 bg-slate-950 text-slate-400 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs border border-slate-800 focus:outline-none"
                        disabled
                      />
                      <button className="text-accent-gold text-xs sm:text-sm hover:scale-105 transition-transform">📤</button>
                    </div>
                  </div>
                </div>
              )}

              {/* COMIC SPEECH BUBBLE LAYER */}
              <div className="absolute inset-x-3 md:inset-x-6 bottom-2.5 md:bottom-4 z-20 pointer-events-none flex flex-col items-center">
                {/* 1. Cinematic System Narration/Action Line */}
                {parsed.type === "action" && (
                  <motion.div
                    key={`narration-${displayedDialogue}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-2xl bg-black/75 border border-[#b8860b]/30 shadow-2xl rounded-xl p-3 md:p-5 text-center text-white backdrop-blur-md"
                  >
                    <p className="text-xs md:text-sm font-serif italic tracking-wide text-amber-200">
                      {parsed.text}
                    </p>
                  </motion.div>
                )}

                {/* 2. Character Speech Bubble */}
                {parsed.type === "dialogue" && !scene.phoneMessages && (
                  <motion.div
                    key={`speech-${currentScene}-${displayedDialogue}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ type: "spring", stiffness: 150, damping: 18 }}
                    className={`w-full max-w-2xl ${activeSpeakerKey === "minh"
                      ? "self-start md:pl-8"
                      : activeSpeakerKey === "huy"
                        ? "self-end md:pr-8"
                        : "self-center"
                      }`}
                  >
                    <div className={`relative p-3.5 md:p-5 rounded-2xl shadow-2xl border-2 z-30 ${activeSpeakerKey === "ai"
                      ? "bg-cyan-950/95 border-cyan-500/50 text-cyan-50 text-center"
                      : "bg-[#FAF6EE] border-[#b8860b]/40 text-[#1a1410]"
                      }`}>
                      {/* Speaker Badge */}
                      <div className={`absolute -top-3 px-3.5 py-0.5 text-[9px] md:text-[11px] font-bold rounded-full font-serif shadow border ${activeSpeakerKey === "ai"
                        ? "left-1/2 -translate-x-1/2 bg-cyan-600 border-cyan-400 text-white"
                        : activeSpeakerKey === "minh"
                          ? "left-6 bg-accent-gold border-amber-300 text-[#FAF6EE]"
                          : "right-6 bg-accent-red border-red-400 text-[#FAF6EE]"
                        }`}>
                        {parsed.speaker}
                      </div>

                      {/* Dialog Text */}
                      <p className="text-xs md:text-sm font-medium leading-relaxed mt-0.5 font-serif">
                        {parsed.text}
                      </p>

                      {/* Custom Comics Bubble Arrow Tail */}
                      {activeSpeakerKey !== "ai" && (
                        <div className={`absolute w-3.5 h-3.5 rotate-45 border-r border-b ${activeSpeakerKey === "minh"
                          ? "-bottom-[8px] left-10 bg-[#FAF6EE] border-[#b8860b]/30"
                          : "-bottom-[8px] right-10 bg-[#FAF6EE] border-[#b8860b]/30"
                          }`} />
                      )}
                    </div>
                  </motion.div>
                )}

                {/* 3. Pure Narrative Text (Simple captions) */}
                {parsed.type === "narrative" && (
                  <motion.div
                    key={`narrative-${displayedDialogue}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="w-full max-w-xl bg-[#FAF6EE]/90 border border-slate-200 shadow-xl rounded-xl p-3 md:p-4 text-center text-slate-800 backdrop-blur"
                  >
                    <p className="text-xs md:text-sm font-serif font-medium">
                      {parsed.text}
                    </p>
                  </motion.div>
                )}

                {/* Click to Continue Pulsating Arrow */}
                {!(scene.choices && scene.choices.length > 0 && displayedDialogue >= scene.dialogue.length - 1) && (
                  <div className="absolute right-4 bottom-2 text-white/50 text-[9px] md:text-[10px] flex items-center gap-1 font-mono tracking-widest animate-pulse pointer-events-none select-none">
                    CLICK STAGE TO CONTINUE
                    <ChevronRight className="w-3.5 h-3.5 animate-bounce-horizontal" />
                  </div>
                )}
              </div>

              {/* Genshin styled Floating Dialogue Choices */}
              {displayedDialogue >= scene.dialogue.length - 1 &&
                (!scene.phoneMessages || displayedPhoneMessages >= scene.phoneMessages.length) &&
                scene.choices && scene.choices.length > 0 && (
                  <div className="absolute right-3 sm:right-6 top-[40%] sm:top-1/2 -translate-y-1/2 w-[65%] sm:w-80 max-w-[230px] sm:max-w-none flex flex-col gap-1.5 sm:gap-3.5 z-40 choice-container pointer-events-auto">
                    {scene.choices.map((choice, idx) => (
                      <motion.button
                        key={`choice-${scene.id}-${idx}`}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.15, type: "spring", stiffness: 120 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleChoice(choice)}
                        className="w-full text-left p-2 sm:p-4 bg-black/90 backdrop-blur-md border border-[#b8860b]/40 text-[#FAF6EE] rounded-xl hover:border-accent-red hover:bg-[#1a1410] shadow-lg transition-all flex items-center justify-between group cursor-pointer pointer-events-auto"
                      >
                        <span className="text-[9px] sm:text-xs font-serif font-semibold pr-2 leading-relaxed">
                          {choice.text}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-accent-gold group-hover:text-accent-red transition-colors shrink-0" />
                      </motion.button>
                    ))}
                  </div>
                )}
                  </>
                )}
            </div>

            {/* Quick Helper hint */}
            <div className="text-center text-xs text-text-muted italic flex items-center justify-center gap-2 mt-2">
              <span>💡 Bạn có thể click trực tiếp vào khung game để tiếp tục cuộc trò chuyện!</span>
            </div>
          </div>
        ) : (
          /* High-Fidelity Ending / Game Complete Stage Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full animate-fade-in"
          >
            <Card className="bg-[#FAF6EE] border-4 border-[#b8860b] shadow-2xl overflow-hidden rounded-2xl">
              <CardContent className="p-0">
                {/* Header graphic banner */}
                <div className={`p-8 text-center text-white flex flex-col items-center justify-center gap-2 ${scenes[currentScene].endingType === "good"
                  ? "bg-gradient-to-r from-emerald-800 to-teal-900 border-b-4 border-emerald-950"
                  : "bg-gradient-to-r from-red-800 to-rose-950 border-b-4 border-red-950"
                  }`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 180, damping: 15 }}
                    className="text-6xl mb-2"
                  >
                    {scenes[currentScene].endingType === "good" ? "🏆" : "💀"}
                  </motion.div>

                  <h3 className="text-3xl font-bold font-serif uppercase tracking-widest text-[#FAF6EE]">
                    {scenes[currentScene].endingType === "good"
                      ? "Kết Thúc Viên Mãn"
                      : "Kết Thúc Bị Hạn Chế"}
                  </h3>

                  <p className="text-sm font-serif font-medium tracking-wide text-[#FAF6EE]/80">
                    {scenes[currentScene].endingType === "good"
                      ? "✅ Đấu tranh tập thể giành chiến thắng!"
                      : "❌ Bị cô lập và bị kiểm soát bởi hệ thống"}
                  </p>
                </div>

                <div className="p-8 max-w-3xl mx-auto space-y-8">
                  {/* Explanation text */}
                  <div className="bg-bg-muted/40 p-6 rounded-xl border border-[#e0d9d0] shadow-inner text-center">
                    <p className="text-base font-serif italic text-text-ink leading-relaxed font-medium">
                      {scenes[currentScene].endingType === "good"
                        ? "Khi người lao động đoàn kết và hành động tập thể, họ có sức mạnh để bảo vệ quyền lợi của mình. Cuộc đấu tranh không phải chống lại tiến bộ công nghệ, mà là đòi sự công bằng trong kinh tế số."
                        : "Một cá nhân lao động đơn lẻ hoàn toàn bất lực trước quyền lực của thuật toán nền tảng. Khi bạn chọn một mình chịu đựng hoặc làm việc biệt lập, bạn hoàn toàn nằm dưới sự kiểm soát một chiều."}
                    </p>
                  </div>

                  {/* Core Lessons from the story */}
                  <div className="border border-[#b8860b]/30 rounded-xl overflow-hidden bg-[#FAF6EE] shadow-sm">
                    <div className="bg-[#b8860b]/10 px-5 py-3 border-b border-[#b8860b]/20 flex items-center gap-2">
                      <Landmark className="w-5 h-5 text-accent-gold" />
                      <span className="font-bold text-sm text-[#1a1410] font-serif uppercase tracking-wider">
                        Bài Học Ý Thức Hệ
                      </span>
                    </div>

                    <ul className="p-5 space-y-3.5 text-sm text-text-muted">
                      <li className="flex items-start gap-3">
                        <span className="text-accent-red font-bold font-mono">1.</span>
                        <span>
                          <strong>"Đối tác tự do" chỉ là danh nghĩa:</strong> Không có quyền tự thương lượng, tự quản hay kiểm soát giá cước của mình thì thực chất tài xế vẫn chỉ là người bán sức lao động kiếm sống.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-red font-bold font-mono">2.</span>
                        <span>
                          <strong>Sự thống trị của thuật toán:</strong> Trí tuệ nhân tạo (AI) đã trở thành công cụ quản lý nhân sự kiểu mới – ẩn mình, toàn trị và không thể thương thảo trực tiếp.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-red font-bold font-mono">3.</span>
                        <span>
                          <strong>Quyền lực tập thể:</strong> Giai cấp công nhân và lao động tự do công nghệ chỉ có thể tìm thấy sự cân bằng và bảo vệ quyền lợi thông qua sự đoàn kết và tập hợp tổ chức.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Final Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-center shadow-sm">
                      <div className="text-sm font-semibold text-text-muted font-serif mb-1">Thu nhập cuối</div>
                      <div className="text-xl font-bold text-yellow-700 font-mono">{formatCurrency(gameState.money)}</div>
                    </div>

                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center shadow-sm">
                      <div className="text-sm font-semibold text-text-muted font-serif mb-1">Đánh giá sao</div>
                      <div className="text-xl font-bold text-blue-700 font-mono">⭐ {gameState.rating.toFixed(1)}</div>
                    </div>

                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-center shadow-sm">
                      <div className="text-sm font-semibold text-text-muted font-serif mb-1">Áp lực KPI</div>
                      <div className="text-xl font-bold text-red-700 font-mono">{gameState.kpi}</div>
                    </div>
                  </div>

                  {/* Replay action */}
                  <div className="flex justify-center pt-2">
                    <Button
                      onClick={resetGame}
                      className="gap-2.5 bg-accent-red hover:bg-red-800 text-[#FAF6EE] px-8 py-6 rounded-xl font-serif font-bold text-base shadow-lg transition-transform hover:scale-105 active:scale-95"
                    >
                      <RotateCcw className="w-5 h-5 animate-spin-slow" />
                      Trải nghiệm lại câu chuyện
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  )
}
