import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { 
  Trophy, RotateCcw, Check, X
} from "lucide-react"

interface BoardQuestion {
  id: number
  question: string
  options: string[]
  answer: number // 0-based index of correct option
  explanation: string
}

const DICE_QUESTIONS: BoardQuestion[] = [
  {
    id: 1,
    question: "Tập đoàn người có địa vị kinh tế - xã hội khác nhau trong một hệ thống sản xuất xã hội nhất định được gọi là gì?",
    options: ["Tầng lớp", "Dân tộc", "Giai cấp", "Nghiệp đoàn"],
    answer: 2,
    explanation: "Định nghĩa kinh điển của V.I. Lênin nêu rõ giai cấp là những tập đoàn người to lớn có địa vị khác nhau trong một hệ thống sản xuất lịch sử nhất định."
  },
  {
    id: 2,
    question: "Điểm mấu chốt quyết định sự khác biệt giữa các giai cấp theo Lênin là gì?",
    options: ["Quan hệ đối với tư liệu sản xuất", "Mức thu nhập hàng tháng", "Địa bàn sinh sống", "Trình độ học vấn chính quy"],
    answer: 0,
    explanation: "Quan hệ sở hữu tư liệu sản xuất là tiêu chí cốt lõi, quyết định địa vị thống trị hay bị trị và cách thức phân phối hưởng thụ của cải."
  },
  {
    id: 3,
    question: "Giai cấp nào nắm quyền sở hữu tư liệu sản xuất chủ yếu và thống trị trong xã hội tư bản?",
    options: ["Tầng lớp trung lưu", "Giai cấp tư sản", "Giai cấp vô sản", "Giai cấp nông dân"],
    answer: 1,
    explanation: "Giai cấp tư sản là giai cấp chiếm hữu tư bản và tư liệu sản xuất chủ yếu của xã hội, bóc lột lao động làm thuê."
  },
  {
    id: 4,
    question: "Giai cấp vô sản phải bán thứ gì để duy trì sự sống dưới chế độ tư bản chủ nghĩa?",
    options: ["Tư liệu tiêu dùng cá nhân", "Tư liệu sản xuất cá thể", "Quyền công dân chính trị", "Sức lao động"],
    answer: 3,
    explanation: "Vì không có tư liệu sản xuất, giai cấp vô sản buộc phải bán sức lao động của mình cho nhà tư bản để đổi lấy tiền lương sống qua ngày."
  },
  {
    id: 5,
    question: "Nguyên nhân trực tiếp, sâu xa dẫn đến sự xuất hiện của các giai cấp trong lịch sử là gì?",
    options: ["Sự xuất hiện chế độ tư hữu về tư liệu sản xuất", "Chiến tranh giữa các bộ tộc", "Sự phân chia lại lãnh thổ quốc gia", "Sự xuất hiện của chữ viết và tôn giáo"],
    answer: 0,
    explanation: "Chế độ tư hữu xuất hiện khi lực lượng sản xuất phát triển tạo ra sản phẩm thặng dư, dẫn đến phân hóa giai cấp giàu nghèo, bóc lột."
  },
  {
    id: 6,
    question: "Lực lượng nào được coi là động lực phát triển xã hội trong các xã hội có đối kháng giai cấp?",
    options: ["Tiến bộ kỹ thuật công nghệ", "Tự do thương mại toàn cầu", "Đấu tranh giai cấp", "Ý chí của các vĩ nhân lịch sử"],
    answer: 2,
    explanation: "Theo quan điểm chủ nghĩa Mác - Lênin, đấu tranh giai cấp là động lực trực tiếp thúc đẩy sự phát triển của lịch sử có đối kháng giai cấp."
  },
  {
    id: 7,
    question: "Đỉnh cao của cuộc đấu tranh giai cấp của giai cấp bị trị là gì?",
    options: ["Đàm phán tăng lương tập thể", "Cách mạng xã hội", "Biểu tình bãi công ôn hòa", "Đình công đòi cải thiện sinh hoạt"],
    answer: 1,
    explanation: "Cách mạng xã hội là đỉnh cao của đấu tranh giai cấp, thay thế hình thái kinh tế - xã hội cũ lỗi thời bằng hình thái mới tiến bộ hơn."
  },
  {
    id: 8,
    question: "Theo lý luận Mác - Lênin, Nhà nước ra đời là sản phẩm và biểu hiện của điều gì?",
    options: ["Sự thỏa thuận tự nguyện của toàn xã hội", "Những mâu thuẫn giai cấp đối kháng không thể điều hòa được", "Ý chí tối cao của đấng thần linh", "Sự phân công lao động tự nhiên"],
    answer: 1,
    explanation: "Nhà nước xuất hiện như một công cụ chuyên chính bạo lực của giai cấp thống trị dùng để dập tắt và quản lý các mâu thuẫn giai cấp không thể điều hòa."
  },
  {
    id: 9,
    question: "Hình thức đấu tranh đầu tiên, sơ khai nhất của giai cấp công nhân chống tư sản là hình thức nào?",
    options: ["Đấu tranh tư tưởng", "Đấu tranh chính trị", "Đấu tranh ngoại giao", "Đấu tranh kinh tế"],
    answer: 3,
    explanation: "Đấu tranh kinh tế (như đòi tăng lương, giảm giờ làm) xuất hiện sớm nhất khi công nhân chưa có ý thức giai cấp tự giác, chỉ đấu tranh tự phát."
  },
  {
    id: 10,
    question: "Hình thức đấu tranh cao nhất, quyết định sứ mệnh lịch sử của giai cấp công nhân là gì?",
    options: ["Đấu tranh chính trị", "Đấu tranh kinh tế", "Đấu tranh tư tưởng giáo dục", "Đấu tranh nghị trường"],
    answer: 0,
    explanation: "Đấu tranh chính trị nhằm lật đổ chính quyền của giai cấp tư sản, thiết lập chuyên chính vô sản là hình thức cao nhất và quyết định thắng lợi."
  },
  {
    id: 11,
    question: "Bản chất kinh tế của sự bóc lột trong xã hội tư bản là nhà tư bản chiếm đoạt cái gì?",
    options: ["Công cụ sản xuất của công nhân", "Giá trị thặng dư do công nhân tạo ra", "Phương tiện sinh hoạt cá nhân", "Thuế thu nhập của nhà nước"],
    answer: 1,
    explanation: "Nhà tư bản chiếm đoạt lao động thặng dư của công nhân dưới dạng giá trị thặng dư (m) bằng cách chỉ trả tiền lương tương đương lao động tất yếu."
  },
  {
    id: 12,
    question: "Đình công bãi công của công nhân chống giới chủ đòi tăng lương thuộc hình thức đấu tranh nào?",
    options: ["Đấu tranh kinh tế", "Đấu tranh tư tưởng", "Đấu tranh chính trị", "Đấu tranh vũ trang"],
    answer: 0,
    explanation: "Đây là hình thức đấu tranh kinh tế, bảo vệ quyền lợi vật chất hằng ngày của người bán sức lao động trước sự chèn ép của giới chủ."
  },
  {
    id: 13,
    question: "Liên minh cách mạng bền vững nhất mang tính quyết định thắng lợi đấu tranh thuộc về các giai cấp nào?",
    options: ["Công nhân và Tư sản dân tộc", "Nông dân và Địa chủ yêu nước", "Công nhân, Nông dân và các tầng lớp lao động khác", "Trí thức và Giới chủ ngân hàng"],
    answer: 2,
    explanation: "Liên minh công - nông và trí thức lao động là nền tảng chính trị vững chắc nhất cho cuộc đấu tranh vô sản giành chính quyền."
  },
  {
    id: 14,
    question: "Theo quan điểm chủ nghĩa Mác - Lênin, cuộc đấu tranh giai cấp của vô sản gồm bao nhiêu hình thức cơ bản?",
    options: ["2 hình thức", "4 hình thức", "5 hình thức", "3 hình thức"],
    answer: 3,
    explanation: "Có 3 hình thức đấu tranh cơ bản: đấu tranh kinh tế, đấu tranh chính trị, và đấu tranh tư tưởng."
  },
  {
    id: 15,
    question: "Mục tiêu cuối cùng của cuộc đấu tranh giai cấp của giai cấp vô sản là gì?",
    options: ["Được ký hợp đồng lao động vô thời hạn", "Sơ hữu toàn bộ cổ phần của doanh nghiệp", "Giải phóng xã hội hoàn toàn khỏi áp bức, xây dựng xã hội cộng sản chủ nghĩa", "Thay thế giai cấp tư sản để tự làm giới chủ mới"],
    answer: 2,
    explanation: "Mục tiêu cuối cùng không phải là cải thiện tạm thời điều kiện sống, mà là tiêu diệt hoàn toàn áp bức giai cấp, tiến tới xã hội không còn giai cấp."
  }
]

export function DiceGameSection() {
  const [playerPosition, setPlayerPosition] = useState<number>(0) // 0-based slot index (0 = start, 14 = finish)
  const [previousPosition, setPreviousPosition] = useState<number>(0)
  const [diceValue, setDiceValue] = useState<number>(1)
  const [isRolling, setIsRolling] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)
  const [rollsCount, setRollsCount] = useState<number>(0)
  const [showQuestion, setShowQuestion] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false)
  const [showVictory, setShowVictory] = useState<boolean>(false)
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0)
  
  // Custom board winding coordinates for rendering
  // Bousteophedon 3 rows x 5 cols
  const getSlotCoordinates = (index: number) => {
    const row = Math.floor(index / 5)
    const colInRow = index % 5
    // Odd rows reverse the direction
    const col = row % 2 === 1 ? 4 - colInRow : colInRow
    return { row, col }
  }

  // Roll the dice
  const rollDice = () => {
    if (isRolling || showQuestion || showVictory) return
    setIsRolling(true)
    setPreviousPosition(playerPosition)
    
    // Simulate dice rolling with interval
    let counter = 0
    const interval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 3) + 1) // Rolls 1, 2 or 3 to play more questions
      counter++
      if (counter > 10) {
        clearInterval(interval)
        
        // Final roll result
        const finalRoll = Math.floor(Math.random() * 3) + 1
        setDiceValue(finalRoll)
        setRollsCount(prev => prev + 1)
        setIsRolling(false)

        // Move player
        const nextPosition = Math.min(14, playerPosition + finalRoll)
        
        // Animate movement step-by-step
        animatePlayerMovement(playerPosition, nextPosition)
      }
    }, 100)
  }

  const animatePlayerMovement = (from: number, to: number) => {
    let current = from
    const timer = setInterval(() => {
      current++
      setPlayerPosition(current)
      if (current >= to) {
        clearInterval(timer)
        // Trigger question modal for the landed square
        setSelectedOption(null)
        setIsAnswerChecked(false)
        setShowQuestion(true)
      }
    }, 400) // Step delay for cool token sliding effect
  }

  const animateBackMovement = (from: number, to: number) => {
    let current = from
    const timer = setInterval(() => {
      current--
      setPlayerPosition(current)
      if (current <= to) {
        clearInterval(timer)
      }
    }, 300) // Step delay for sliding back
  }

  const handleAnswerSubmit = (optionIndex: number) => {
    if (isAnswerChecked) return
    setSelectedOption(optionIndex)
    setIsAnswerChecked(true)

    const currentQuestion = DICE_QUESTIONS[playerPosition]
    if (optionIndex === currentQuestion.answer) {
      setScore(prev => prev + 10)
      setCorrectAnswersCount(prev => prev + 1)
    }
  }

  const handleCloseQuestion = () => {
    setShowQuestion(false)
    
    const currentQuestion = DICE_QUESTIONS[playerPosition]
    const isCorrect = selectedOption === currentQuestion.answer

    if (!isCorrect) {
      animateBackMovement(playerPosition, previousPosition)
    } else if (playerPosition === 14) {
      setShowVictory(true)
    }
  }

  const resetGame = () => {
    setPlayerPosition(0)
    setPreviousPosition(0)
    setDiceValue(1)
    setIsRolling(false)
    setScore(0)
    setRollsCount(0)
    setShowQuestion(false)
    setSelectedOption(null)
    setIsAnswerChecked(false)
    setShowVictory(false)
    setCorrectAnswersCount(0)
  }


  return (
    <section id="section-12" className="min-h-screen py-24 px-4 bg-bg-surface relative flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 text-[15rem] sm:text-[20rem] font-serif font-bold text-text-muted opacity-5 select-none leading-none -mt-16 -mr-16 pointer-events-none">
        12
      </div>

      <div className="max-w-6xl mx-auto w-full z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl text-accent-red font-semibold font-serif">🎲 Game Xúc Xắc Ôn Tập</span>
          </div>
          <h2 className="text-4xl font-serif font-bold mb-4">Hành Trình Lý Luận Vô Sản</h2>
          <div className="w-24 h-1 bg-accent-red mx-auto mb-6"></div>
          <p className="text-lg text-text-muted max-w-3xl mx-auto font-sans leading-relaxed">
            Đổ xúc xắc để dẫn dắt **Quân cờ Vô sản** vượt qua 15 bậc thử thách trí tuệ, trả lời các câu hỏi trắc nghiệm kiến thức để kiểm tra mức độ hiểu bài hôm nay!
          </p>
        </motion.div>

        {!showVictory ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT BOARD COL: Winding Path Grid (7 cols in LG) */}
            <div className="lg:col-span-8 flex flex-col items-center">
              <Card className="bg-[#FAF6EE] border-4 border-[#b8860b] shadow-2xl p-6 sm:p-8 rounded-3xl w-full select-none relative overflow-hidden">
                {/* Winding path grid (3 rows x 5 cols) */}
                <div className="grid grid-cols-5 gap-3.5 sm:gap-5 relative z-10 aspect-[5/3] w-full">
                  {/* Decorative path lines inside board */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 stroke-accent-gold stroke-[6] fill-none stroke-dasharray-[10,10]">
                    {/* S-shaped winding board connection paths can be rendered if wanted, using standard absolute lines */}
                  </svg>

                  {Array(15).fill(null).map((_, idx) => {
                    const { row, col } = getSlotCoordinates(idx)
                    const isCurrent = playerPosition === idx
                    const isStart = idx === 0
                    const isFinish = idx === 14
                    const isSolved = idx < playerPosition

                    return (
                      <motion.div
                        key={`slot-${idx}`}
                        className={`relative rounded-2xl border-2 flex flex-col justify-between p-2.5 sm:p-3.5 transition-all shadow-md aspect-square ${
                          isCurrent 
                            ? "bg-accent-red border-red-500 text-white ring-4 ring-red-300 z-20 scale-[1.05]" 
                            : isSolved
                              ? "bg-emerald-500/10 border-emerald-500 text-emerald-800"
                              : "bg-white border-border text-text-ink hover:border-accent-gold hover:bg-bg-muted/10 cursor-default"
                        }`}
                        style={{
                          gridRowStart: row + 1,
                          gridColumnStart: col + 1
                        }}
                      >
                        {/* Square Index Number */}
                        <span className={`text-[10px] sm:text-xs font-mono font-bold ${isCurrent ? "text-red-200" : "text-text-muted"}`}>
                          #{idx + 1}
                        </span>

                        {/* Special text for Start/Finish */}
                        {isStart && (
                          <span className={`text-[9px] sm:text-[11px] font-bold font-serif absolute inset-x-0 bottom-2.5 text-center ${isCurrent ? "text-white" : "text-accent-red"}`}>
                            KHỞI ĐẦU
                          </span>
                        )}
                        {isFinish && (
                          <span className={`text-[9px] sm:text-[11px] font-bold font-serif absolute inset-x-0 bottom-2.5 text-center ${isCurrent ? "text-white" : "text-accent-gold"}`}>
                            VỀ ĐÍCH 🏁
                          </span>
                        )}

                        {/* Player Token (Avatar) */}
                        {isCurrent && (
                          <motion.div 
                            layoutId="player-token"
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                          >
                            <div className="w-9 h-9 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-accent-red animate-pulse-slow">
                              <span className="text-xl sm:text-2xl">⚒️</span>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </Card>
            </div>

            {/* RIGHT SIDEBAR: Dice Rolling & Stats (4 cols in LG) */}
            <div className="lg:col-span-4 flex flex-col gap-6 w-full">
              
              {/* Rolling Panel */}
              <Card className="bg-bg-surface border border-border shadow-xl rounded-3xl p-6 flex flex-col items-center justify-between text-center relative overflow-hidden h-72">
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-text-ink uppercase tracking-wide">
                    Đổ Xúc Xắc Di Chuyển
                  </h3>
                  <p className="text-xs text-text-muted">
                    Lăn từ 1 đến 3 bước trên hành trình
                  </p>
                </div>

                {/* 3D Dice Display Container */}
                <div className="my-3">
                  <motion.div
                    animate={isRolling ? { rotate: [0, 360, 720, 1080], scale: [1, 1.2, 1.2, 1] } : {}}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="w-20 h-20 bg-accent-red text-white rounded-2xl flex items-center justify-center text-4xl font-extrabold shadow-xl border-4 border-red-800 border-b-8 select-none"
                  >
                    {diceValue === 1 && "⚀"}
                    {diceValue === 2 && "⚁"}
                    {diceValue === 3 && "⚂"}
                    {diceValue > 3 && "⚃"}
                  </motion.div>
                </div>

                {/* Roll Action Button */}
                <Button
                  onClick={rollDice}
                  disabled={isRolling || showQuestion}
                  className="w-full bg-accent-red hover:bg-red-800 text-[#FAF6EE] font-serif font-bold text-base py-6 rounded-2xl shadow-lg transition-transform hover:scale-103 active:scale-97 disabled:opacity-50 cursor-pointer"
                >
                  {isRolling ? "Đang lắc..." : "QUAY XÚC XẮC"}
                </Button>
              </Card>

              {/* Scoreboard Panel */}
              <Card className="bg-bg-surface border border-border shadow-md rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="font-serif font-bold text-sm text-text-ink uppercase tracking-wide">
                    BẢNG ĐIỂM CỦA BẠN
                  </span>
                  <Trophy className="w-5 h-5 text-accent-gold" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-bg-muted/40 p-3 rounded-xl border border-border/50 text-center shadow-inner">
                    <div className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-0.5">Tổng Điểm</div>
                    <div className="text-2xl font-black text-accent-red font-mono">{score}</div>
                  </div>

                  <div className="bg-bg-muted/40 p-3 rounded-xl border border-border/50 text-center shadow-inner">
                    <div className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-0.5">Số Lượt Đi</div>
                    <div className="text-2xl font-black text-text-ink font-mono">{rollsCount}</div>
                  </div>
                </div>

                <div className="text-[11px] text-text-muted leading-relaxed font-sans text-center flex items-center justify-center gap-1.5 pt-1">
                  <span>🎯 Tỉ lệ đúng: {correctAnswersCount}/{rollsCount || 0} câu hỏi.</span>
                </div>
              </Card>
            </div>
          </div>
        ) : (
          /* HIGH-FIDELITY VICTORY SCREEN */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-3xl mx-auto animate-fade-in"
          >
            <Card className="bg-[#FAF6EE] border-4 border-[#b8860b] shadow-2xl overflow-hidden rounded-3xl">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-emerald-800 to-teal-900 p-8 text-center text-white flex flex-col items-center justify-center gap-3 border-b-4 border-emerald-950">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 180, damping: 15 }}
                    className="text-6xl mb-2"
                  >
                    🏆
                  </motion.div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold font-serif uppercase tracking-widest text-[#FAF6EE]">
                    HOÀN THÀNH HÀNH TRÌNH!
                  </h3>
                  <p className="text-base font-serif font-semibold text-emerald-200 tracking-wide">
                    Chúc mừng! Bạn đã đưa quân cờ vô sản cán đích an toàn và hoàn thành xuất sắc đợt ôn tập lý thuyết!
                  </p>
                </div>

                <div className="p-8 sm:p-10 space-y-8 text-center">
                  <div className="bg-white/80 p-6 rounded-2xl border border-[#e0d9d0] shadow-inner max-w-xl mx-auto">
                    <h4 className="font-serif font-bold text-accent-red text-lg mb-4">THÀNH TÍCH ÔN TẬP</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-[10px] font-semibold text-text-muted uppercase mb-1">Điểm số</div>
                        <div className="text-2xl font-black text-emerald-700 font-mono">{score}</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold text-text-muted uppercase mb-1">Trả lời đúng</div>
                        <div className="text-2xl font-black text-emerald-700 font-mono">{correctAnswersCount}</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold text-text-muted uppercase mb-1">Tổng số xúc xắc</div>
                        <div className="text-2xl font-black text-text-ink font-mono">{rollsCount} Lượt</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm font-serif italic text-text-muted leading-relaxed max-w-xl mx-auto">
                    "Ý thức giai cấp tự giác là vũ khí sắc bén nhất của người lao động. Đấu tranh cách mạng không chỉ cần lòng quả cảm, mà trước hết cần một nền tảng lý luận vững chắc và đúng đắn."
                  </p>

                  <div className="flex justify-center pt-2">
                    <Button
                      onClick={resetGame}
                      className="gap-2 bg-accent-red hover:bg-red-800 text-[#FAF6EE] px-8 py-5.5 rounded-xl font-serif font-bold text-base shadow-lg transition-transform hover:scale-105 active:scale-95"
                    >
                      <RotateCcw className="w-5 h-5 animate-spin-slow" />
                      Trải nghiệm lại hành trình
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* QUESTION PANEL MODAL OVERLAY */}
        <AnimatePresence>
          {showQuestion && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="w-full max-w-2xl bg-[#FAF6EE] rounded-3xl border-4 border-[#b8860b] shadow-2xl overflow-hidden flex flex-col justify-between"
              >
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-accent-red to-red-950 px-6 py-4.5 border-b border-red-950 flex items-center justify-between text-[#FAF6EE]">
                  <h4 className="font-serif font-bold text-sm sm:text-base uppercase tracking-wider">
                    Thử Thách Ở Ô Số {playerPosition + 1}
                  </h4>
                  <Badge variant="gold" className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full border border-amber-300">
                    CÂU HỎI TRẮC NGHIỆM
                  </Badge>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[70vh]">
                  {/* Question Text */}
                  <div className="bg-white p-4.5 rounded-2xl border border-[#e0d9d0] shadow-inner">
                    <p className="text-sm sm:text-base font-serif font-bold text-text-ink leading-relaxed">
                      {DICE_QUESTIONS[playerPosition].question}
                    </p>
                  </div>

                  {/* Multiple Choice Options */}
                  <div className="grid grid-cols-1 gap-3 font-serif font-semibold">
                    {DICE_QUESTIONS[playerPosition].options.map((option, idx) => {
                      const isSelected = selectedOption === idx
                      const isCorrect = idx === DICE_QUESTIONS[playerPosition].answer
                      
                      let optionStyle = "bg-white border-border text-text-ink hover:border-accent-gold hover:bg-bg-muted/10 cursor-pointer"
                      
                      if (isAnswerChecked) {
                        if (isCorrect) {
                          optionStyle = "bg-emerald-500/10 border-emerald-500 text-emerald-800 cursor-default"
                        } else if (isSelected) {
                          optionStyle = "bg-red-500/10 border-red-500 text-red-800 cursor-default"
                        } else {
                          optionStyle = "bg-bg-muted/30 border-border text-text-muted opacity-65 cursor-default"
                        }
                      }

                      return (
                        <button
                          key={`opt-${idx}`}
                          onClick={() => handleAnswerSubmit(idx)}
                          disabled={isAnswerChecked}
                          className={`w-full text-left p-4 rounded-xl border-2 flex items-center justify-between gap-3 text-xs sm:text-sm font-medium transition-all ${optionStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono font-bold text-xs border shrink-0 ${
                              isAnswerChecked && isCorrect
                                ? "bg-emerald-600 border-emerald-400 text-white"
                                : isAnswerChecked && isSelected
                                  ? "bg-red-600 border-red-400 text-white"
                                  : isSelected
                                    ? "bg-accent-gold border-amber-300 text-white"
                                    : "bg-bg-muted border-border"
                            }`}>
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="leading-relaxed font-sans">{option}</span>
                          </div>

                          {isAnswerChecked && isCorrect && <Check className="w-5 h-5 text-emerald-600 shrink-0" />}
                          {isAnswerChecked && isSelected && !isCorrect && <X className="w-5 h-5 text-red-600 shrink-0" />}
                        </button>
                      )
                    })}
                  </div>

                  {/* Explanation panel */}
                  {isAnswerChecked && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white p-4 rounded-xl border border-accent-gold/20 pl-4 border-l-4 border-l-accent-gold shadow-sm space-y-1"
                    >
                      <span className="font-bold text-xs text-accent-red block font-serif">👉 GIẢI THÍCH:</span>
                      <p className="text-text-muted text-xs leading-relaxed font-serif font-medium">
                        {DICE_QUESTIONS[playerPosition].explanation}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="bg-bg-muted/40 border-t border-border px-6 py-4 flex justify-end">
                  <Button
                    onClick={handleCloseQuestion}
                    disabled={!isAnswerChecked}
                    className="bg-accent-red hover:bg-red-800 text-[#FAF6EE] font-serif font-bold text-sm px-6 py-2.5 rounded-xl shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    TIẾP TỤC HÀNH TRÌNH
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
