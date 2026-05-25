
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"
import { DollarSign, Shield, Hand, Compass } from "lucide-react"

export function ClassDefinitionSection() {
  const insights = [
    {
      title: "Thu nhập",
      icon: <DollarSign className="w-5 h-5" />,
      desc: "Phụ thuộc vào thuật toán, không có lương cơ bản."
    },
    {
      title: "Vị trí",
      icon: <Compass className="w-5 h-5" />,
      desc: "Nằm ngoài hệ thống an sinh xã hội truyền thống."
    },
    {
      title: "Kiểm soát",
      icon: <Shield className="w-5 h-5" />,
      desc: "Bị giám sát chặt chẽ qua app (đánh giá, tỷ lệ nhận/hủy)."
    },
    {
      title: "Phụ thuộc",
      icon: <Hand className="w-5 h-5" />,
      desc: "Không sở hữu nền tảng, hoàn toàn phụ thuộc vào chủ app."
    }
  ]

  return (
    <section id="section-2" className="min-h-screen py-24 px-4 bg-bg-muted relative">
      <div className="absolute top-0 right-0 text-[20rem] font-serif font-bold text-black opacity-[0.03] select-none leading-none -mt-16 -mr-16">
        02
      </div>

      <div className="max-w-5xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Khái Niệm Giai Cấp</h2>
          <div className="w-24 h-1 bg-accent-red"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-stretch mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 bg-bg-surface p-8 md:p-10 shadow-md border-l-8 border-accent-red rounded-r-xl flex flex-col justify-center"
          >
            <blockquote className="font-serif italic text-xl md:text-2xl leading-relaxed text-text-ink">
              "Giai cấp là những tập đoàn người to lớn gồm những người khác nhau về địa vị của họ trong một hệ thống sản xuất xã hội nhất định trong lịch sử, về quan hệ của họ đối với những tư liệu sản xuất, về vai trò của họ trong tổ chức lao động xã hội, và như vậy là khác nhau về cách thức hưởng thụ và về phần của cải ít hoặc nhiều mà họ được hưởng."
            </blockquote>
            <p className="mt-4 text-right font-bold text-accent-red">— V.I. Lênin</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 flex items-center justify-center"
          >
            <img 
              src="/digital_exploitation.png" 
              alt="Kiểm soát thuật toán" 
              className="w-full max-w-sm rounded-xl shadow-lg border border-border object-cover aspect-[4/3] md:aspect-auto"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-md transition-all border-none bg-bg-surface/80">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center text-accent-red mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
