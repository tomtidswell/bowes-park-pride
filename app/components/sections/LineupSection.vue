<template>
  <SectionWrapper id="lineup" color="none" class="lineup-bg">
    <div class="lineup" v-reveal>
      <div class="lineup-images">
        <img
          src="/main-stage-times.png"
          alt="Main Stage, Sunday 5th July, Myddleton Road N22. 12.00–12.10pm opening with Mayor of Haringey Dawn Barnes and founders Ben &amp; Giulio. 12.20–12.40pm Tola Sokota, singer. 1.00–1.30pm Bollyqueer, dance troupe. 1.45–2.00pm Chai T Grande, drag diva. 2.00–2.45pm Topsie Redfern, drag diva. 3.00–3.45pm Four Play, drag divas. 4.00–4.45pm Homoparody, dance troupe. 4.50–5.00pm Issy Everett, flash mob. 5.00–5.45pm Aidan Sadler, cabaret."
          class="lineup-img"
        />
        <img
          src="/street-stage-times.png"
          alt="Street Stage, Sunday 5th July, Myddleton Road N22. 12.20–12.40pm Issy Everett, flash mob tutorial. 12.40–1.00pm Bluebell End, drag diva. 1.40–2.00pm Lily Lavin, street performer. 2.30–3.00pm Tottenham Community Choir, choir. 3.30–3.50pm R Voices, choir. 4.30–4.50pm Barberfellas, acapella group."
          class="lineup-img"
        />
      </div>
    </div>
  </SectionWrapper>
</template>

<style lang="scss" scoped>
.lineup-bg {
  @include section-bg("/street3.webp");
}

.lineup {
  text-align: center;
}

.lineup-images {
  display: flex;
  gap: 24px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
}

.lineup-img {
  flex: 1 1 0;
  min-width: 0;
  width: 100%;
  height: auto;
  border-radius: 12px;
}
</style>
