import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Briefcase, Smartphone, Scale, Wallet, BrainCircuit, Zap, CheckCircle } from "lucide-react"

export function AnalysisPlaceholderSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="section-8" className="min-h-screen py-24 px-4 bg-bg-muted relative flex items-center justify-center">
      <div className="absolute top-0 right-0 text-[20rem] font-serif font-bold text-black opacity-[0.03] select-none leading-none -mt-16 -mr-16">
        08
      </div>

      <div className="max-w-6xl mx-auto w-full z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-4xl font-bold">Phân Tích</h2>
          </div>
          <h3 className="text-2xl font-serif text-text-muted mb-4 max-w-3xl mx-auto leading-relaxed">
            Tài xế là "người làm chủ" hay "người làm thuê kiểu mới"?
          </h3>
          <div className="w-24 h-1 bg-accent-red mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* 6.1 */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-bg-surface border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="bg-bg-muted/30 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-serif">Vì sao có thể xem tài xế là "người làm chủ"?</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4 text-text-muted">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <span>Tự sở hữu xe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <span>Tự chọn thời gian làm việc</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <span>Không bị chấm công trực tiếp</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <span>Có thể bật/tắt ứng dụng bất cứ lúc nào</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-accent-gold/5 border border-accent-gold/20 rounded-lg">
                  <p className="font-semibold text-accent-gold">=&gt; Bề ngoài giống lao động tự do.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 6.2 */}
          <motion.div variants={itemVariants} className="lg:row-span-2">
            <Card className="h-full bg-bg-surface border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="bg-bg-muted/30 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-red/10 flex items-center justify-center text-accent-red">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-serif">Thực chất: Tài xế là "người làm thuê kiểu mới"</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-8">
                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-3 text-lg text-text-ink">
                    <Scale className="w-5 h-5 text-accent-red" />
                    a. Không kiểm soát hoạt động sản xuất
                  </h4>
                  <ul className="space-y-2 pl-7 text-text-muted list-disc ml-4">
                    <li>Giá cước do app quyết định</li>
                    <li>Thuật toán phân phối cuốc xe</li>
                    <li>App quyết định thưởng – phạt</li>
                  </ul>
                  <p className="pl-7 mt-2 font-medium text-text-ink">=&gt; Quyền kiểm soát nằm ở nền tảng.</p>
                </div>

                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-3 text-lg text-text-ink">
                    <Wallet className="w-5 h-5 text-accent-red" />
                    b. Phụ thuộc vào nền tảng để kiếm sống
                  </h4>
                  <p className="pl-7 text-text-muted mb-2">Nếu không có ứng dụng:</p>
                  <ul className="space-y-2 pl-7 text-text-muted list-disc ml-4">
                    <li>Khó tiếp cận khách hàng</li>
                    <li>Không có hệ thống thanh toán</li>
                    <li>Khó cạnh tranh trên thị trường</li>
                  </ul>
                  <p className="pl-7 mt-2 font-medium text-text-ink">=&gt; Tài xế phụ thuộc kinh tế vào app.</p>
                </div>

                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-3 text-lg text-text-ink">
                    <BrainCircuit className="w-5 h-5 text-accent-red" />
                    c. Bị quản lý bằng AI và thuật toán
                  </h4>
                  <ul className="space-y-2 pl-7 text-text-muted list-disc ml-4">
                    <li>Chấm điểm sao</li>
                    <li>Theo dõi hiệu suất</li>
                    <li>Khóa tài khoản tự động</li>
                    <li>Điều hướng hành vi lao động</li>
                  </ul>
                  <p className="pl-7 mt-2 font-medium text-text-ink">=&gt; Đây là hình thức quản lý lao động hiện đại.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 6.3 */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-accent-gold/5 border-accent-gold/20 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="border-b border-accent-gold/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-gold flex items-center justify-center text-white shadow-sm">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-serif">Kết luận</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4 text-text-ink">Theo tiêu chí của Lenin:</p>
                <p className="mb-4 text-text-ink">Tài xế công nghệ thực chất là: <strong className="text-accent-red text-lg font-serif">"Người làm thuê kiểu mới"</strong></p>
                <p className="font-medium mb-2 text-text-ink">Vì:</p>
                <ul className="space-y-3 text-text-muted">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0 mt-2" />
                    <span>Không nắm quyền kiểm soát hoạt động sản xuất</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0 mt-2" />
                    <span>Phụ thuộc vào nền tảng số</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0 mt-2" />
                    <span>Lao động bị điều khiển bởi thuật toán</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0 mt-2" />
                    <span>Thu nhập phụ thuộc vào doanh nghiệp công nghệ</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
