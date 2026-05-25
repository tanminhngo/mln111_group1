
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { BookOpen, Users, Briefcase } from "lucide-react"

export function IntroSection() {
  return (
    <section id="section-1" className="min-h-screen py-24 px-4 relative flex items-center">
      <div className="absolute top-0 right-0 text-[20rem] font-serif font-bold text-text-muted opacity-5 select-none leading-none -mt-16 -mr-16">
        01
      </div>
      
      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Mở Đầu: Vấn Đề Thực Tiễn</h2>
          <div className="w-24 h-1 bg-accent-red mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border-accent-gold/20 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-8 flex flex-col justify-center h-full space-y-6">
                <div className="flex justify-between items-center pb-6 border-b border-border">
                  <span className="text-xl font-medium">Nền tảng gọi xe</span>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Grab</Badge>
                    <Badge variant="outline" className="text-yellow-600 border-yellow-200 bg-yellow-50">Be</Badge>
                    <Badge variant="outline" className="text-black border-gray-200 bg-gray-50">Uber</Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-bg-muted rounded-lg">
                    <p className="text-sm text-text-muted mb-2">Định danh hiện tại</p>
                    <Badge variant="gold" className="text-base py-1 px-4">"Đối tác"</Badge>
                  </div>
                  <div className="p-4 bg-bg-muted rounded-lg flex flex-col justify-center items-center">
                    <p className="text-sm text-text-muted mb-2">Thực tế</p>
                    <Badge variant="destructive" className="text-base py-1 px-4">"Nhân viên?"</Badge>
                  </div>
                </div>
                <p className="text-text-muted italic text-center mt-4 font-serif">
                  Sự mập mờ trong định danh tạo ra kẽ hở trong việc bảo vệ quyền lợi người lao động.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <Card className="bg-bg-surface hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-accent-red/10 p-3 rounded-full text-accent-red">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Lý luận Mác - Lênin</h3>
                  <p className="text-text-muted text-sm">Áp dụng lý thuyết giai cấp vào phương thức sản xuất mới (kinh tế nền tảng).</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-bg-surface hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Đóng vai mô phỏng</h3>
                  <p className="text-text-muted text-sm">Phân tích từ góc nhìn của Tài xế (người lao động) và Nền tảng (giới chủ).</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-bg-surface hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-accent-gold/20 p-3 rounded-full text-accent-gold">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phân tích tình huống</h3>
                  <p className="text-text-muted text-sm">Sử dụng dữ liệu thực tế từ các cuộc đình công của tài xế công nghệ tại VN.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
