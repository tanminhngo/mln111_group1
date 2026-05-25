
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"
import { Factory, Smartphone, ArrowRight, Share2, Globe, Cpu, Users2 } from "lucide-react"

export function ModernStruggleSection() {
  const characteristics = [
    {
      icon: <Users2 className="w-5 h-5" />,
      title: "Tính phân tán",
      desc: "Không tập trung ở nhà máy, kết nối qua mạng xã hội (Groups Facebook, Zalo)."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Kẻ thù vô hình",
      desc: "Đối thủ trực tiếp là 'Thuật toán' (app), không phải mặt đối mặt với ông chủ."
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Bản chất xuyên quốc gia",
      desc: "Nền tảng đa quốc gia, tiền chảy về công ty mẹ ở nước ngoài."
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      title: "Lan tỏa nhanh",
      desc: "Đình công lây lan chớp nhoáng qua một lời kêu gọi tắt app trên mạng."
    }
  ]

  return (
    <section id="section-6" className="min-h-screen py-24 px-4 bg-[#f5f1eb] relative">
      <div className="absolute top-0 right-0 text-[20rem] font-serif font-bold text-black opacity-[0.03] select-none leading-none -mt-16 -mr-16">
        06
      </div>

      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Đặc Điểm Đấu Tranh Giai Cấp Hiện Đại</h2>
          <div className="w-24 h-1 bg-accent-red mb-8"></div>
          <p className="text-text-muted max-w-2xl text-lg">
            Sự biến đổi của hình thái đấu tranh trong kỷ nguyên số.
          </p>
        </motion.div>

        <div className="mb-16">
          <Card className="bg-bg-surface overflow-hidden border-none shadow-lg">
            <CardContent className="p-0 flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-8 md:p-12 bg-gray-100 flex flex-col items-center justify-center text-center border-r border-gray-200">
                <Factory className="w-16 h-16 text-gray-400 mb-6" />
                <h3 className="font-serif text-2xl font-bold mb-2 text-gray-700">Công nhân truyền thống</h3>
                <p className="text-gray-500">Tập trung tại xí nghiệp, bị giám sát bởi đốc công, đấu tranh qua công đoàn cơ sở.</p>
              </div>
              
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center shadow-md z-10 border border-gray-100">
                <ArrowRight className="text-accent-red w-6 h-6" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 bg-[#fff5f5] flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/modern_struggle.png')] bg-cover bg-center"></div>
                <Smartphone className="w-16 h-16 text-accent-red mb-6 relative z-10" />
                <h3 className="font-serif text-2xl font-bold mb-2 text-accent-red relative z-10">Công nhân nền tảng</h3>
                <p className="text-red-900/90 font-medium relative z-10">Phân tán trên đường phố, bị quản lý bởi thuật toán, đấu tranh qua hội nhóm mạng xã hội.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {characteristics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border">
                <div className="w-12 h-12 shrink-0 bg-accent-red/10 text-accent-red rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
