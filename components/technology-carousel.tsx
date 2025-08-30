"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { FaAws, FaDocker } from "react-icons/fa" 
import { SiGrafana } from "react-icons/si" //

const technologies = [
  {
    name: "AWS",
    icon: <FaAws className="w-10 h-10 text-[#FF9900]" />, // cor oficial
  },
  {
    name: "SQL",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4z" />
        <path d="M4 9v6c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
        <path d="M4 15v2c0 2.21 3.58 4 8 4s8-1.79 8-4v-2c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
      </svg>
    ),
  },
  {
    name: "Veeam",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M4 6h16v2H4V6zm0 4h16v2H4v-2zm0 4h16v2H4v-2zm0 4h16v2H4v-2z" />
        <path d="M2 4h20v16H2V4zm2 2v12h16V6H4z" />
        <circle cx="6" cy="8" r="1" />
        <circle cx="6" cy="12" r="1" />
        <circle cx="6" cy="16" r="1" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: <FaDocker className="w-10 h-10 text-[#2496ED]" />, // cor oficial
  },
  {
    name: "GitHub CI/CD",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Linux",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 00.08-.668 1.43 1.43 0 00.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 00-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.25-.24.397-.68.638-.33 1.108-.33z" />
      </svg>
    ),
  },
  {
    name: "Windows Server",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.351" />
      </svg>
    ),
  },
  {
    name: "Zabbix",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M6 6h12v3l-8 6h8v3H6v-3l8-6H6V6z" />
      </svg>
    ),
  },
  {
    name: "Grafana",
    icon: <SiGrafana className="w-10 h-10 text-[#F46800]" />, // cor oficial Grafana
  },
  {
    name: "Prometheus",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.28 2.16.28 2.16-.36 2.64-2.57 4.68-4.49 6.68z" />
      </svg>
    ),
  },
  {
    name: "VMware",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M2 4h20v3H2V4zm0 5h20v3H2V9zm0 5h20v3H2v-3zm0 5h20v3H2v-3z" />
        <circle cx="5" cy="5.5" r="1" />
        <circle cx="5" cy="10.5" r="1" />
        <circle cx="5" cy="15.5" r="1" />
        <circle cx="5" cy="20.5" r="1" />
      </svg>
    ),
  },
]

const translations = {
  en: {
    title: "Technologies I Work With",
  },
  "pt-br": {
    title: "Tecnologias que Trabalho",
  },
}

export function TechnologyCarousel() {
  const { language } = useLanguage()
  const t = translations[language]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const getVisibleTechnologies = () => {
    const visible = []
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % technologies.length
      visible.push(technologies[index])
    }
    return visible
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.title}</h3>
        </div>

        <div className="flex justify-center items-center gap-8 md:gap-12 py-8 min-h-[200px]">
          {getVisibleTechnologies().map((tech, index) => (
            <div
              key={`${tech.name}-${currentIndex}-${index}`}
              className={`flex flex-col items-center gap-4 transition-all duration-500 ${
                index === 2 ? "scale-125 opacity-100" : "scale-100 opacity-70"
              }`}
            >
              <div className="bg-accent/10 p-8 rounded-full w-24 h-24 flex items-center justify-center text-accent">
                {tech.icon}
              </div>
              <span className="text-base font-medium text-center whitespace-nowrap px-2">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-accent" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
