<template>
  <section id="why-us" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-5 sm:px-8">
      <!-- Header -->
      <div ref="headerRef" :class="['text-center mb-16 reveal', headerVisible && 'visible']">
        <p class="text-[#C4933F] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Nossos Diferenciais
        </p>
        <h2 class="section-title text-4xl sm:text-5xl text-[#0F0F0F] mb-4">
          Por que escolher a Ana Cosméticos?
        </h2>
        <div class="gold-divider mt-5" />
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(feature, i) in features"
          :key="feature.title"
          ref="cardRefs"
          :class="[
            'group text-center reveal',
            cardsVisible[i] && 'visible',
          ]"
          :style="{ transitionDelay: `${i * 0.12}s` }"
        >
          <!-- Icon circle -->
          <div
            class="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl
                   bg-[#FEFBF0] border border-[#C4933F]/20 transition-all duration-300
                   group-hover:bg-[#C4933F] group-hover:shadow-lg group-hover:shadow-[#C4933F]/30
                   group-hover:scale-110"
          >
            {{ feature.icon }}
          </div>

          <h3 class="font-serif text-xl font-semibold text-[#0F0F0F] mb-3">
            {{ feature.title }}
          </h3>

          <p class="text-[#6B6B6B] text-sm leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- Testimonial quote -->
      <div
        ref="quoteRef"
        :class="[
          'mt-20 relative bg-[#0F0F0F] rounded-3xl p-10 sm:p-14 text-center overflow-hidden reveal',
          quoteVisible && 'visible',
        ]"
      >
        <!-- Background decoration -->
        <div
          class="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
          style="background: radial-gradient(circle, #C4933F, transparent 70%); transform: translate(30%, -30%)"
        />
        <div
          class="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
          style="background: radial-gradient(circle, #C4933F, transparent 70%); transform: translate(-30%, 30%)"
        />

        <div class="relative z-10">
          <div class="text-[#C4933F] text-6xl font-serif leading-none mb-4">"</div>
          <p class="text-white/90 text-lg sm:text-xl font-light italic font-serif max-w-2xl mx-auto leading-relaxed">
            Diamante • Preço e qualidade você encontra aqui. Pronta-entrega e encomendas.
            Ficou interessado? Entre em contato.
          </p>
          <div class="mt-6 flex items-center justify-center gap-3">
            <div class="w-8 h-px bg-[#C4933F]/60" />
            <span class="text-[#C4933F] text-sm font-semibold tracking-widest uppercase">Ana Cosméticos</span>
            <div class="w-8 h-px bg-[#C4933F]/60" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: '🏆',
    title: 'Revendedora Diamante',
    description:
      'Reconhecida como revendedora Diamante, o mais alto nível de excelência em vendas e qualidade de atendimento.',
  },
  {
    icon: '⚡',
    title: 'Pronta-Entrega',
    description:
      'Grande variedade de produtos disponíveis para entrega imediata. Não precisa esperar para ter seu produto.',
  },
  {
    icon: '💰',
    title: 'Melhor Preço',
    description:
      'Preço e qualidade lado a lado. Encontre os melhores cosméticos sem pagar além do justo.',
  },
  {
    icon: '🛍️',
    title: 'Encomendas',
    description:
      'Não encontrou o que procura? Fazemos encomendas do produto exato que você deseja.',
  },
]

const headerRef = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])
const quoteRef = ref<HTMLElement | null>(null)
const headerVisible = ref(false)
const cardsVisible = ref(features.map(() => false))
const quoteVisible = ref(false)

const { stop: stopHeader } = useIntersectionObserver(
  headerRef,
  ([entry]) => {
    if (entry.isIntersecting) { headerVisible.value = true; stopHeader() }
  },
  { threshold: 0.2 }
)

const { stop: stopQuote } = useIntersectionObserver(
  quoteRef,
  ([entry]) => {
    if (entry.isIntersecting) { quoteVisible.value = true; stopQuote() }
  },
  { threshold: 0.2 }
)

onMounted(() => {
  nextTick(() => {
    cardRefs.value.forEach((card, i) => {
      const { stop } = useIntersectionObserver(
        card,
        ([entry]) => {
          if (entry.isIntersecting) { cardsVisible.value[i] = true; stop() }
        },
        { threshold: 0.15 }
      )
    })
  })
})
</script>
