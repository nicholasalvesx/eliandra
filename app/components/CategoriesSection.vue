<template>
  <section id="categories" class="py-24 bg-[#0F0F0F] relative overflow-hidden">
    <!-- Subtle background pattern -->
    <div
      class="absolute inset-0 opacity-[0.03]"
      style="background-image: radial-gradient(#C4933F 1px, transparent 1px); background-size: 24px 24px"
    />

    <!-- Gold glow top -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 rounded-full opacity-60"
      style="background: linear-gradient(90deg, transparent, #C4933F, transparent)"
    />

    <div class="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
      <!-- Header -->
      <div ref="headerRef" :class="['text-center mb-16 reveal', headerVisible && 'visible']">
        <p class="text-[#C4933F] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Catálogo
        </p>
        <h2 class="section-title text-4xl sm:text-5xl text-white mb-4">
          O que você encontra aqui
        </h2>
        <div class="gold-divider mt-5" />
        <p class="text-white/50 mt-5 max-w-lg mx-auto text-base leading-relaxed">
          Uma seleção completa de produtos de beleza para cada momento da sua rotina.
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div
          v-for="(cat, i) in categories"
          :key="cat.name"
          ref="cardRefs"
          :class="[
            'group relative rounded-2xl p-6 text-center cursor-default overflow-hidden reveal',
            'border border-white/5 bg-white/5 hover:bg-[#C4933F]/10 hover:border-[#C4933F]/40',
            'transition-all duration-300 hover:scale-105',
            cardsVisible[i] && 'visible',
          ]"
          :style="{ transitionDelay: `${i * 0.08}s` }"
        >
          <div class="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
            {{ cat.emoji }}
          </div>
          <h3 class="text-white text-sm font-semibold mb-1">{{ cat.name }}</h3>
          <p class="text-white/40 text-xs">{{ cat.sub }}</p>
        </div>
      </div>

      <!-- CTA inside section -->
      <div
        ref="ctaRef"
        :class="[
          'mt-14 text-center reveal',
          ctaVisible && 'visible',
        ]"
      >
        <p class="text-white/60 mb-5 text-base">
          Não encontrou o que procura? Fale com a Ana diretamente!
        </p>
        <a
          href="https://wa.me/5588996449335?text=Olá%20Ana!%20Estou%20procurando%20um%20produto..."
          target="_blank"
          rel="noopener"
          class="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Perguntar disponibilidade
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  { emoji: '🌸', name: 'Perfumes', sub: 'Fragrâncias diversas' },
  { emoji: '💄', name: 'Maquiagem', sub: 'Base, batom e mais' },
  { emoji: '✨', name: 'Skincare', sub: 'Cuidado facial' },
  { emoji: '💆', name: 'Cabelos', sub: 'Tratamento capilar' },
  { emoji: '🧴', name: 'Corpo', sub: 'Hidratantes e banho' },
  { emoji: '🎁', name: 'Presentes', sub: 'Kits e combos' },
  { emoji: '☀️', name: 'Proteção Solar', sub: 'FPS para todos' },
  { emoji: '🧖', name: 'Anti-Idade', sub: 'Tratamentos premium' },
  { emoji: '💅', name: 'Unhas', sub: 'Esmaltes e cuidados' },
  { emoji: '🪥', name: 'Higiene', sub: 'Produtos pessoais' },
  { emoji: '🌙', name: 'Noturno', sub: 'Rotina da noite' },
  { emoji: '👶', name: 'Infantil', sub: 'Linhas baby' },
]

const headerRef = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])
const ctaRef = ref<HTMLElement | null>(null)
const headerVisible = ref(false)
const cardsVisible = ref(categories.map(() => false))
const ctaVisible = ref(false)

const { stop: stopHeader } = useIntersectionObserver(
  headerRef,
  ([entry]) => {
    if (entry.isIntersecting) { headerVisible.value = true; stopHeader() }
  },
  { threshold: 0.2 }
)

const { stop: stopCta } = useIntersectionObserver(
  ctaRef,
  ([entry]) => {
    if (entry.isIntersecting) { ctaVisible.value = true; stopCta() }
  },
  { threshold: 0.3 }
)

onMounted(() => {
  nextTick(() => {
    cardRefs.value.forEach((card, i) => {
      const { stop } = useIntersectionObserver(
        card,
        ([entry]) => {
          if (entry.isIntersecting) { cardsVisible.value[i] = true; stop() }
        },
        { threshold: 0.1 }
      )
    })
  })
})
</script>
