import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { ArrowLeftRight, Users, DollarSign, ShieldAlert, ShieldCheck } from "lucide-react"

export function CollectiveOfflineSection() {
  const reasons = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Hành Động Tập Thể",
      desc: "Người lao động cùng nhau offline đồng loạt"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Áp Lực Kinh Tế",
      desc: "Gây thiệt hại doanh thu cho nền tảng"
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Phản Đối Bóc Lột",
      desc: "Chống chính sách chiết khấu bất lợi"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Bảo Vệ Quyền Lợi",
      desc: "Đòi quyền lợi cho người lao động số"
    }
  ]

  return (
    <section id="section-9" className="min-h-screen py-24 px-4 bg-bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[10rem] sm:text-[20rem] font-serif font-bold text-text-muted opacity-5 select-none leading-none -mt-16 -mr-16 pointer-events-none">
        09
      </div>

      <div className="max-w-5xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">"Tắt Ứng Dụng Tập Thể" — Có Phải Đấu Tranh Giai Cấp?</h2>
          <div className="w-24 h-1 bg-accent-red mx-auto mb-8"></div>
        </motion.div>

        {/* 10.1 Opposing Forces Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-24 relative">
          {/* Vertical line behind items on mobile */}
          <div className="md:hidden absolute top-10 bottom-10 left-1/2 w-[2px] bg-gradient-to-b from-red-200 via-accent-red to-blue-200 z-0 -translate-x-1/2"></div>

          {/* Left Block */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 relative z-10"
          >
            <Card className="bg-[#fff5f5] border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4 text-center text-red-900">Công Ty Nền Tảng</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-red-800">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    Tăng lợi nhuận
                  </li>
                  <li className="flex items-center gap-3 text-red-800">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    Tăng chiết khấu
                  </li>
                  <li className="flex items-center gap-3 text-red-800">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    Kiểm soát lao động
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Center Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="z-10 flex flex-col items-center my-4 md:my-0"
          >
            <Badge className="bg-accent-red hover:bg-accent-red/90 text-white px-4 py-2 text-sm flex items-center gap-2 shadow-lg relative z-10 border border-[#b8860b]/30">
              <ArrowLeftRight className="w-4 h-4" />
              Mâu Thuẫn Lợi Ích
            </Badge>
          </motion.div>

          {/* Animated line behind badge */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-red-300 via-gray-300 to-blue-300 z-0 -translate-y-1/2"></div>

          {/* Right Block */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 relative z-10"
          >
            <Card className="bg-[#f0f4ff] border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4 text-center text-blue-900">Tài Xế</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-blue-800">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    Bảo vệ thu nhập
                  </li>
                  <li className="flex items-center gap-3 text-blue-800">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    Quyền lợi tốt hơn
                  </li>
                  <li className="flex items-center gap-3 text-blue-800">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    Phản đối chính sách
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* 10.2 Why it IS class struggle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="bg-white border-border/50 shadow-sm hover:shadow-md transition-all h-full">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-accent-red/10 p-3 rounded-full text-accent-red shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why it is a modern class struggle - Detailed explanation Q&A */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <Card className="bg-[#FAF6EE] border-2 border-[#b8860b]/30 shadow-md">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-accent-red mb-6 text-center">
                Vì sao “tắt app tập thể” là hình thức đấu tranh giai cấp hiện đại?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-red/10 text-accent-red flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">1</div>
                    <p className="text-sm text-text-ink leading-relaxed">
                      <strong>Người lao động cùng hành động tập thể:</strong> Không còn là sự đơn lẻ phản kháng, người lao động đồng loạt offline để tạo ra sức mạnh đàm phán thống nhất.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-red/10 text-accent-red flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">2</div>
                    <p className="text-sm text-text-ink leading-relaxed">
                      <strong>Gây áp lực kinh tế trực tiếp lên doanh nghiệp:</strong> Việc dừng cung cấp dịch vụ đột ngột làm đứt gãy dịch vụ, trực tiếp cắt giảm doanh thu và gây áp lực tài chính.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-red/10 text-accent-red flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">3</div>
                    <p className="text-sm text-text-ink leading-relaxed">
                      <strong>Không diễn ra ở nhà máy mà chuyển sang môi trường số</strong>
                      Cuộc đình công chuyển dịch sang không gian mạng, sử dụng chính ứng dụng công nghệ để phản kháng.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-red/10 text-accent-red flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">4</div>
                    <p className="text-sm text-text-ink leading-relaxed">
                      <strong>Phụ thuộc vào thuật toán và chiết khấu:</strong> Đấu tranh trực tiếp phản ánh sự bất mãn trước sự thống trị vô hình của hệ thống giám sát tự động, chính sách thưởng/phạt và mức chiết khấu đơn phương.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-red/10 text-accent-red flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">5</div>
                    <p className="text-sm text-text-ink leading-relaxed">
                      <strong>Vạch trần bản chất "đối tác tự do":</strong> Cho thấy dù được khoác chiếc áo đối tác độc lập, người lao động thực chất vẫn chịu sự kiểm soát, chi phối và bóc lột vô cùng chặt chẽ từ giới chủ doanh nghiệp.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
