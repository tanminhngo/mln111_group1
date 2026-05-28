import { motion } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Card, CardContent } from "../ui/card"

export function HistoricalComparisonSection() {
  const tableData = [
    {
      criteria: "Bối cảnh",
      past: "Cách mạng công nghiệp (Cơ khí hóa)",
      present: "Cách mạng 4.0 (Số hóa, AI, Thuật toán)"
    },
    {
      criteria: "Đối tượng bị bóc lột",
      past: "Công nhân nhà máy (Vô sản truyền thống)",
      present: "Tài xế công nghệ (Người lao động số / Vô sản kiểu mới)"
    },
    {
      criteria: "Công cụ sản xuất",
      past: "Máy móc cơ khí khổng lồ, dây chuyền",
      present: "Ứng dụng (App), Thuật toán, Xe cá nhân"
    },
    {
      criteria: "Hình thức quản lý",
      past: "Trực tiếp bởi quản đốc, chủ xưởng",
      present: "Gián tiếp qua thuật toán, đánh giá sao, định vị"
    },
    {
      criteria: "Hình thức đấu tranh",
      past: "Bãi công tập trung, đập phá máy móc",
      present: "Tắt ứng dụng (offline) đồng loạt, đánh giá 1 sao"
    },
    {
      criteria: "Không gian đấu tranh",
      past: "Tại nhà máy, công xưởng",
      present: "Không gian mạng, trụ sở hỗ trợ đối tác"
    },
    {
      criteria: "Mục tiêu",
      past: "Giảm giờ làm, tăng lương, cải thiện điều kiện",
      present: "Giảm chiết khấu, minh bạch thuật toán, quyền lợi cơ bản"
    },
    {
      criteria: "Bản chất",
      past: "Mâu thuẫn giữa Tư bản và Lao động",
      present: "Mâu thuẫn giữa Nền tảng Tư bản Số và Lao động Số"
    }
  ]

  return (
    <section id="section-10" className="min-h-screen py-24 bg-bg-base relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[10rem] sm:text-[20rem] font-serif font-bold text-text-muted opacity-5 select-none leading-none -mt-16 -mr-16 pointer-events-none">
        10
      </div>

      <div className="max-w-6xl mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">So Sánh Với Bãi Công Đập Phá Máy Móc Thế Kỷ 19</h2>
          <div className="w-24 h-1 bg-accent-red mx-auto mb-8"></div>
        </motion.div>

        {/* Visual Timeline Split */}
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden mb-16 shadow-lg border border-border">
          {/* 19th Century */}
          <motion.div
            whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#f5efe0] p-8 md:p-12 flex flex-col items-center border-b md:border-b-0 md:border-r border-border"
          >
            <h3 className="font-serif text-2xl font-bold text-text-ink mb-6">Thế Kỷ 19</h3>
            <svg viewBox="0 0 300 200" className="w-full max-w-xs mb-6">
              <rect width="300" height="200" fill="none" />
              {/* Factory silhouette */}
              <path d="M20,180 L20,100 L60,80 L60,180 Z" fill="#1a1410" />
              <path d="M70,180 L70,90 L110,70 L110,180 Z" fill="#1a1410" />
              <path d="M120,180 L120,80 L160,60 L160,180 Z" fill="#1a1410" />
              {/* Smokestacks */}
              <rect x="35" y="40" width="10" height="50" fill="#1a1410" />
              <rect x="85" y="30" width="10" height="50" fill="#1a1410" />
              <rect x="135" y="20" width="10" height="50" fill="#1a1410" />
              {/* Smoke */}
              <circle cx="40" cy="20" r="15" fill="#c0392b" opacity="0.8" />
              <circle cx="90" cy="10" r="20" fill="#c0392b" opacity="0.8" />
              <circle cx="140" cy="0" r="18" fill="#c0392b" opacity="0.8" />
              {/* Workers / Fists */}
              <path d="M220,180 L220,140 L210,140 L210,130 L230,130 L230,140 L220,140" stroke="#1a1410" strokeWidth="3" fill="none" />
              <path d="M250,180 L250,130 L240,130 L240,120 L260,120 L260,130 L250,130" stroke="#1a1410" strokeWidth="3" fill="none" />
              <path d="M280,180 L280,145 L270,145 L270,135 L290,135 L290,145 L280,145" stroke="#1a1410" strokeWidth="3" fill="none" />
              <text x="150" y="195" fontSize="14" fill="#c0392b" textAnchor="middle" fontWeight="bold">Công nhân nhà máy</text>
            </svg>
            <p className="text-center text-text-muted font-medium">Bãi công, đình công, đập phá máy móc cơ khí.</p>
          </motion.div>
          {/* Present */}
          <motion.div
            whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#f8faff] p-8 md:p-12 flex flex-col items-center"
          >
            <h3 className="font-serif text-2xl font-bold text-text-ink mb-6">Hiện Nay</h3>
            <svg viewBox="0 0 300 200" className="w-full max-w-xs mb-6">
              <rect width="300" height="200" fill="none" />
              {/* Smartphone */}
              <rect x="100" y="20" width="100" height="160" rx="10" stroke="#1a1410" strokeWidth="4" fill="white" />
              {/* Screen */}
              <rect x="110" y="35" width="80" height="130" rx="5" fill="#f0f4ff" />
              {/* Offline Icon (X) */}
              <path d="M130,80 L170,120 M170,80 L130,120" stroke="#c0392b" strokeWidth="6" strokeLinecap="round" />
              {/* Signal down */}
              <path d="M120,60 L130,60 M140,60 L150,60 M160,60 L170,60 M180,60 L190,60" stroke="#1a1410" strokeWidth="3" opacity="0.3" />
              {/* People */}
              <circle cx="50" cy="150" r="15" fill="#1a1410" />
              <path d="M35,180 Q50,160 65,180" stroke="#1a1410" strokeWidth="4" fill="none" />
              <circle cx="250" cy="150" r="15" fill="#1a1410" />
              <path d="M235,180 Q250,160 265,180" stroke="#1a1410" strokeWidth="4" fill="none" />
              <text x="150" y="195" fontSize="14" fill="#c0392b" textAnchor="middle" fontWeight="bold">Tài xế công nghệ</text>
            </svg>
            <p className="text-center text-text-muted font-medium">Tắt ứng dụng đồng loạt, biểu tình tại trụ sở.</p>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <div className="text-right text-xs text-text-muted italic mb-2 block md:hidden">
          Vuốt ngang để xem đầy đủ bảng ➡️
        </div>
        <div className="mb-16 overflow-x-auto bg-white rounded-xl shadow-sm border border-border">
          <Table className="min-w-[600px] w-full">
            <TableHeader>
              <TableRow className="bg-accent-red hover:bg-accent-red">
                <TableHead className="text-white font-bold py-4">Tiêu Chí</TableHead>
                <TableHead className="text-white font-bold py-4">Thế Kỷ 19</TableHead>
                <TableHead className="text-white font-bold py-4">Hiện Nay</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={idx % 2 === 0 ? "bg-[#faf8f4]" : "bg-white"}
                >
                  <TableCell className="font-semibold text-text-ink border-r border-border/50">{row.criteria}</TableCell>
                  <TableCell className="text-text-muted border-r border-border/50">{row.past}</TableCell>
                  <TableCell className="text-text-ink font-medium">{row.present}</TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Key Difference Callout */}
        <Card className="bg-white shadow-lg border-none overflow-hidden mb-16 relative">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold">Ngày Trước</h3>
                </div>
                <ul className="space-y-4 text-text-muted">
                  <li className="flex gap-3"><span className="text-accent-red font-bold">Đối tượng:</span> Chủ xưởng, quản đốc, máy móc cơ khí</li>
                  <li className="flex gap-3"><span className="text-accent-red font-bold">Hành động:</span> Đình công, biểu tình nhà máy, đập phá máy móc</li>
                </ul>
              </div>

              <div className="w-full h-px md:w-px md:h-auto bg-accent-red shrink-0"></div>

              <div className="flex-1 p-8 md:p-12 bg-[#fffbf5]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-red"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-accent-red">Ngày Nay</h3>
                </div>
                <ul className="space-y-4 text-text-ink">
                  <li className="flex gap-3"><span className="text-accent-red font-bold">Đối tượng:</span> Ứng dụng (App), thuật toán, trí tuệ nhân tạo (AI)</li>
                  <li className="flex gap-3"><span className="text-accent-red font-bold">Hành động:</span> Tắt app đồng loạt, offline, kêu gọi qua mạng xã hội</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section Conclusion Badge */}
      <div className="w-full bg-accent-red text-white py-12 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="font-serif text-2xl md:text-3xl leading-relaxed italic">
            "Công nghệ không làm mất đi đấu tranh giai cấp — mà chỉ làm nó chuyển sang hình thức hiện đại hơn."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
