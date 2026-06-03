<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
  >
    <!-- Background radial glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20"
        style="background: radial-gradient(circle, #C4933F 0%, #7A5520 40%, transparent 70%)"
      />
      <!-- Decorative dots pattern -->
      <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(#C4933F 1px, transparent 1px); background-size: 32px 32px;" />
    </div>

    <!-- Top golden line -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4933F] to-transparent opacity-60" />

    <!-- Content -->
    <div class="relative z-10 text-center px-5 sm:px-8 max-w-4xl mx-auto pt-24 pb-16">
      <!-- Logo -->
      <div class="flex justify-center mb-8 animate-fade-in">
        <img
          src="/logo.png"
          alt="Ana Cosméticos"
          class="h-28 sm:h-36 w-auto drop-shadow-[0_0_40px_rgba(196,147,63,0.5)]"
        />
      </div>

      <!-- Brand name -->
      <h1
        class="section-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold-gradient mb-4 animate-fade-up"
        style="animation-delay: 0.1s"
      >
        Ana Cosméticos
      </h1>

      <!-- Tagline -->
      <p
        class="text-white/70 text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-6 animate-fade-up"
        style="animation-delay: 0.2s"
      >
        Beleza, qualidade e preço justo em Itapipoca
      </p>

      <!-- Brand badges -->
      <div
        class="flex flex-wrap justify-center gap-2 mb-10 animate-fade-up"
        style="animation-delay: 0.3s"
      >
        <span
          v-for="brand in brands"
          :key="brand"
          class="px-3 py-1 rounded-full border border-[#C4933F]/40 text-[#C4933F] text-xs sm:text-sm font-medium tracking-wider"
        >
          {{ brand }}
        </span>
      </div>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
        style="animation-delay: 0.4s"
      >
        <a
          href="https://wa.me/5588996449335"
          target="_blank"
          rel="noopener"
          class="btn-gold flex items-center gap-3 px-8 py-4 rounded-full text-base w-full sm:w-auto justify-center"
        >
          <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Falar no WhatsApp
        </a>

        <a
          href="https://www.instagram.com/_anacosmeticss/"
          target="_blank"
          rel="noopener"
          class="btn-outline-gold flex items-center gap-3 px-8 py-4 rounded-full text-base w-full sm:w-auto justify-center"
        >
          <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          Ver no Instagram
        </a>
      </div>

      <!-- Stats -->
      <div
        class="mt-16 pt-10 border-t border-white/10 grid grid-cols-3 gap-6 animate-fade-up"
        style="animation-delay: 0.5s"
      >
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="section-title text-2xl sm:text-3xl text-gold-gradient font-semibold">
            {{ stat.value }}
          </div>
          <div class="text-white/50 text-xs sm:text-sm mt-1 tracking-wide">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Bottom golden line -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4933F] to-transparent opacity-40" />
  </section>
</template>

<script setup lang="ts">
const brands = ['O Boticário', 'Natura', 'Avon', 'Eudora']

const stats = [
  { value: '22,8K', label: 'Seguidores' },
  { value: 'Diamante', label: 'Revendedora' },
  { value: '4', label: 'Marcas Premium' },
]
</script>
