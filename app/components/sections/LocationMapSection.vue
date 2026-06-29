<template>
  <SectionWrapper id="find-us" color="none" class="map-bg">
    <div class="map" v-reveal>
      <h2 class="sr-only">Where to find Bowes Park Pride</h2>
      <img
        src="/find-map.png"
        alt="Map showing where to find Bowes Park Pride on Myddleton Road, London N22. Nearest stations: Bowes Park rail (2 min walk), Bounds Green tube (8 min walk), Alexandra Palace rail (18 min walk) and Wood Green tube (20 min walk)."
        class="map-img"
      />
    </div>
  </SectionWrapper>
</template>

<style lang="scss" scoped>
.map-bg {
  @include section-bg("/street.webp");
}

.map {
  text-align: center;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.map-img {
  width: 100%;
  max-width: 520px;
  height: auto;
  margin-inline: auto;
  border-radius: 12px;
}
</style>
