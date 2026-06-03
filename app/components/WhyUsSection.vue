<template>
  <section id="why-us" class="py-20 sm:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-8">
      <!-- Header -->
      <div ref="headerRef" :class="['text-center mb-12 sm:mb-16 reveal', headerVisible && 'visible']">
        <p class="text-[#C4933F] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          Nossos Diferenciais
        </p>
        <h2 class="section-title text-3xl sm:text-4xl md:text-5xl text-[#0F0F0F] mb-4">
          Por que escolher a Ana Cosméticos?
        </h2>
        <div class="gold-divider mt-5" />
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div
          v-for="(feature, i) in features"
          :key="feature.title"
          ref="cardRefs"
          :class="['group text-center reveal', cardsVisible[i] && 'visible']"
          :style="{ transitionDelay: `${i * 0.12}s` }"
        >
          <!-- Icon circle -->
          <div
            class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center
                   bg-white border border-[#C4933F]/15 transition-all duration-300
                   group-hover:bg-[#C4933F] group-hover:shadow-md group-hover:shadow-[#C4933F]/20 group-hover:scale-105"
          >
            <svg
              class="w-7 h-7 sm:w-8 sm:h-8 text-[#C4933F] group-hover:text-white transition-colors duration-300"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path v-if="feature.icon === 'trophy'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
              <path v-else-if="feature.icon === 'bolt'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              <path v-else-if="feature.icon === 'tag'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3zM6 6h.008v.008H6V6z" />
              <path v-else-if="feature.icon === 'bag'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>

          <h3 class="font-serif text-base sm:text-xl font-semibold text-[#0F0F0F] mb-2 sm:mb-3">
            {{ feature.title }}
          </h3>
          <p class="text-[#6B6B6B] text-xs sm:text-sm leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- Quote banner -->
      <div
        ref="quoteRef"
        :class="[
          'mt-16 sm:mt-20 relative bg-[#111009] rounded-2xl sm:rounded-3xl px-6 py-10 sm:p-14 text-center overflow-hidden reveal',
          quoteVisible && 'visible',
        ]"
      >
        <div class="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full opacity-[0.07] pointer-events-none"
          style="background: radial-gradient(circle, #D4A855, transparent 70%); transform: translate(30%, -30%)" />
        <div class="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full opacity-[0.07] pointer-events-none"
          style="background: radial-gradient(circle, #D4A855, transparent 70%); transform: translate(-30%, 30%)" />

        <div class="relative z-10">
          <div class="text-[#C4933F] text-5xl sm:text-6xl font-serif leading-none mb-3 sm:mb-4">"</div>
          <p class="text-white/90 text-base sm:text-xl font-light italic font-serif max-w-2xl mx-auto leading-relaxed">
            Diamante • Preço e qualidade você encontra aqui. Pronta-entrega e encomendas.
            Ficou interessado? Entre em contato.
          </p>
          <div class="mt-5 sm:mt-6 flex items-center justify-center gap-3">
            <div class="w-6 sm:w-8 h-px bg-[#C4933F]/40" />
            <span class="text-[#C4933F]/80 text-xs font-semibold tracking-widest uppercase">Ana Cosméticos</span>
            <div class="w-6 sm:w-8 h-px bg-[#C4933F]/40" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: 'trophy',
    title: 'Revendedora Diamante',
    description: 'O mais alto nível de excelência em vendas e qualidade de atendimento.',
  },
  {
    icon: 'bolt',
    title: 'Pronta-Entrega',
    description: 'Grande variedade disponível para entrega imediata. Sem espera.',
  },
  {
    icon: 'tag',
    title: 'Melhor Preço',
    description: 'Preço e qualidade lado a lado. Os melhores cosméticos pelo valor justo.',
  },
  {
    icon: 'bag',
    title: 'Encomendas',
    description: 'Não encontrou? Fazemos encomendas do produto exato que você deseja.',
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
  (entries) => { if (entries[0]?.isIntersecting) { headerVisible.value = true; stopHeader() } },
  { threshold: 0.2 }
)
const { stop: stopQuote } = useIntersectionObserver(
  quoteRef,
  (entries) => { if (entries[0]?.isIntersecting) { quoteVisible.value = true; stopQuote() } },
  { threshold: 0.2 }
)

onMounted(() => {
  nextTick(() => {
    cardRefs.value.forEach((card, i) => {
      const { stop } = useIntersectionObserver(
        card,
        (entries) => { if (entries[0]?.isIntersecting) { cardsVisible.value[i] = true; stop() } },
        { threshold: 0.1 }
      )
    })
  })
})
</script>
