<template>
  <section id="brands" class="py-24 bg-[#FAFAFA]">
    <div class="max-w-7xl mx-auto px-5 sm:px-8">
      <!-- Header -->
      <div ref="headerRef" :class="['text-center mb-16 reveal', headerVisible && 'visible']">
        <p class="text-[#C4933F] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Parceiras Oficiais
        </p>
        <h2 class="section-title text-4xl sm:text-5xl text-[#0F0F0F] mb-4">
          Marcas que trabalhamos
        </h2>
        <div class="gold-divider mt-5" />
        <p class="text-[#6B6B6B] mt-5 max-w-lg mx-auto text-base leading-relaxed">
          Revendedora autorizada das maiores marcas de cosméticos do Brasil, com produtos originais
          e garantia de qualidade.
        </p>
      </div>

      <!-- Brands Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(brand, i) in brands"
          :key="brand.name"
          ref="cardRefs"
          :class="[
            'card-gold rounded-2xl p-8 text-center bg-white cursor-default reveal',
            cardsVisible[i] && 'visible',
          ]"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <!-- Brand color circle -->
          <div
            class="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl shadow-lg"
            :style="{ background: brand.gradient }"
          >
            {{ brand.emoji }}
          </div>

          <h3 class="font-serif text-xl font-semibold text-[#0F0F0F] mb-2">
            {{ brand.name }}
          </h3>

          <p class="text-[#6B6B6B] text-sm leading-relaxed mb-4">
            {{ brand.description }}
          </p>

          <!-- Category tags -->
          <div class="flex flex-wrap gap-1.5 justify-center">
            <span
              v-for="tag in brand.tags"
              :key="tag"
              class="px-2.5 py-1 rounded-full text-xs font-medium"
              :style="{ background: brand.tagBg, color: brand.tagColor }"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const brands = [
  {
    name: 'O Boticário',
    emoji: '🌸',
    description: 'Fragrâncias, maquiagem e skincare com sofisticação e inovação.',
    tags: ['Perfumes', 'Maquiagem', 'Skincare'],
    gradient: 'linear-gradient(135deg, #6B2D8B, #3D1152)',
    tagBg: '#F5EEF8',
    tagColor: '#6B2D8B',
  },
  {
    name: 'Natura',
    emoji: '🌿',
    description: 'Cosméticos naturais e sustentáveis com ingredientes da biodiversidade brasileira.',
    tags: ['Natural', 'Sustentável', 'Cabelos'],
    gradient: 'linear-gradient(135deg, #00C77F, #007A4D)',
    tagBg: '#E8F8F2',
    tagColor: '#007A4D',
  },
  {
    name: 'Avon',
    emoji: '💄',
    description: 'Beleza acessível com maquiagem, perfumes e cuidados corporais de qualidade.',
    tags: ['Maquiagem', 'Perfumes', 'Corpo'],
    gradient: 'linear-gradient(135deg, #1E88E5, #0D47A1)',
    tagBg: '#EBF3FB',
    tagColor: '#0D47A1',
  },
  {
    name: 'Eudora',
    emoji: '✨',
    description: 'Elegância e sofisticação em fragrâncias, maquiagem e tratamentos capilares.',
    tags: ['Fragrâncias', 'Elegância', 'Premium'],
    gradient: 'linear-gradient(135deg, #E91E8C, #9C0060)',
    tagBg: '#FCE8F4',
    tagColor: '#9C0060',
  },
]

const headerRef = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])
const headerVisible = ref(false)
const cardsVisible = ref(brands.map(() => false))

const { stop: stopHeader } = useIntersectionObserver(
  headerRef,
  ([entry]) => {
    if (entry.isIntersecting) {
      headerVisible.value = true
      stopHeader()
    }
  },
  { threshold: 0.2 }
)

onMounted(() => {
  nextTick(() => {
    cardRefs.value.forEach((card, i) => {
      const { stop } = useIntersectionObserver(
        card,
        ([entry]) => {
          if (entry.isIntersecting) {
            cardsVisible.value[i] = true
            stop()
          }
        },
        { threshold: 0.15 }
      )
    })
  })
})
</script>
