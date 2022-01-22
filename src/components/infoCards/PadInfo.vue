<template>
  <base-card v-if="pad && pad.id">
    <template v-slot:title>Launchpad</template>
    <template v-slot:subtitle v-if="pad && pad.wiki_url">
      <a target="_blank" :href="pad.wiki_url"></a
      >{{ pad.location.name ? pad.location.name : pad.name }}</template
    >
    <template v-slot:subtitle v-else>{{
      pad.location.name ? pad.location.name : pad.name
    }}</template>
    <template v-slot:default>
      <div class="data-content">
        <table class="data-values">
          <tr>
            <td>Country code</td>
            <td>{{ pad.location.country_code }}</td>
          </tr>
          <tr>
            <td>Pad name</td>
            <td>{{ pad.name }}</td>
          </tr>
          <tr>
            <td>Total launches</td>
            <td>{{ pad.total_launch_count }}</td>
          </tr>
        </table>
        <div class="mpControl" ref="mpControl">
          <button @click="flyToLocation" class="fly-to-btn">
            Zoom to launch location
          </button>
          <div class="styleChoose">
            <div class="radioItem">
              <input
                id="style-streets"
                name="styleToogle"
                type="radio"
                value="mapbox://styles/mapbox/streets-v11"
                checked
                v-model="mapStyle"
              />
              <label for="style-streets">streets</label>
            </div>
            <div class="radioItem">
              <input
                id="style-satellite"
                name="styleToogle"
                type="radio"
                value="mapbox://styles/mapbox/satellite-streets-v11"
                v-model="mapStyle"
              />
              <label for="style-satellite">satellite</label>
            </div>
            <div class="radioItem">
              <input
                id="style-dark"
                name="styleToogle"
                type="radio"
                value="mapbox://styles/mapbox/dark-v10"
                v-model="mapStyle"
              />
              <label for="style-dark">dark</label>
            </div>
          </div>
        </div>
        <div class="mapBox" ref="mapBox"></div>
      </div>
    </template>
  </base-card>
</template>

<script>
import mapboxgl from 'mapbox-gl';

export default {
  props: ['pad'],
  data() {
    return {
      map: null,
      position: [this.pad.longitude, this.pad.latitude],
      launchPadMarker: null,
      mapStyle: 'mapbox://styles/mapbox/streets-v11',
    };
  },
  async mounted() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYXJ0aWtvYXIiLCJhIjoiY2t5Z2NmenVpMHdqdTMwcXA4Y3psc3BvbiJ9.jIgq67pGbzSkdCh12tsTPA';
    if (this.$refs.mapBox) {
      this.map = await new mapboxgl.Map({
        container: this.$refs.mapBox,
        style: this.mapStyle,
        center: this.position, // starting position [lng, lat]
        zoom: 9,
        pitchWithRotate: false
      });
      this.launchPadMarker = new mapboxgl.Marker({ color: 'red' })
        .setLngLat(this.position)
        .addTo(this.map);
      this.map.dragRotate.disable();
      this.map.touchZoomRotate.disableRotation();
      this.$el.querySelector('.mapboxgl-ctrl-bottom-left').remove();
      this.$el.querySelector('.mapboxgl-ctrl-attrib-inner').remove();
      this.$el.querySelector('.mapboxgl-ctrl-bottom-right').remove();
    }
  },
  watch: {
    mapStyle() {
      this.map.setStyle(this.mapStyle);
    },
  },
  methods: {
    flyToLocation() {
      this.map.flyTo({
        center: this.position,
        zoom: 9,
        bearing: 0,
        speed: 0.8,
        curve: 1,
        essential: true,
      });
    },
  },
};
</script>

<style scoped>
.radioItem {
  display: flex;
  align-items: center;
}
.radioItem label {
  padding-left: 0.3rem;
}
.styleChoose {
  padding: 0.3rem;
  background: #333333;
  color: aliceblue;
  min-width: 49%;
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.mpControl {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 0.5rem;
}
.mapBox {
  margin-top: 1rem;
  border-radius: 1rem;
  width: 100%;
  height: 25vh;
}
.fly-to-btn {
  font-family: inherit;
  font-size: 1rem;
  color: aliceblue;
  background-color: #333333;
  border-radius: 1rem;
  min-width: 49%;
  padding: 0.3rem;
  border: none;
}
.fly-to-btn:active {
  background: #222222;
  padding: calc(0.3rem - 2px);
  border: 2px solid aliceblue;
}
.data-content {
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
}
.data-values {
  width: 100%;
  border-collapse: collapse;
}
.data-values tr {
  border-bottom: 2px solid #333333;
}
.data-values tr:hover {
  border-radius: 1rem;
  background: #222222;
  border-color: #222222;
}
.data-values td {
  padding-top: 0.2rem;
  padding-bottom: 0.3rem;
}
@media screen and (max-width: 600px) {
  .styleChoose {
    width: 100%;
    margin-top: 0.5rem;
  }
  .fly-to-btn {
    width: 100%;
  }
}
</style>
