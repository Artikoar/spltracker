<template>
  <div v-if="launchesAreLoading === 'loaded'" class="wrapper">
    <div class="content">
      <div class="mpControl-container">
        <div class="mpControl" ref="mpControl">
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
      </div>
      <div ref="mapBox" class="mapBox"></div>
    </div>
  </div>
  <div v-if="launchesAreLoading === 'error'">
    <h2>
      Oops, an error occurred. Contact us on
      <router-link to="/bug">bug report page</router-link>.
    </h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import months from '../utils/months';
import mapboxgl from 'mapbox-gl';

export default {
  data() {
    return {
      months: months,
      map: null,
      padsMarkers: [],
      mapStyle: 'mapbox://styles/mapbox/streets-v11',
    };
  },
  async created() {
    await this.fetchUpcomingLaunches();
    await this.initMap();
  },
  methods: {
    ...mapActions('launches', ['fetchUpcomingLaunches']),
    async initMap() {
      mapboxgl.accessToken =
        'pk.eyJ1IjoiYXJ0aWtvYXIiLCJhIjoiY2t5Z2NmenVpMHdqdTMwcXA4Y3psc3BvbiJ9.jIgq67pGbzSkdCh12tsTPA';
      if (this.$refs.mapBox) {
        this.map = await new mapboxgl.Map({
          container: this.$refs.mapBox,
          style: this.mapStyle,
          center: [0, 0], // starting position [lng, lat]
          zoom: 1,
          pitchWithRotate: false,
        });
        this.map.dragRotate.disable();
        this.map.touchZoomRotate.disableRotation();
        this.$refs.mapBox.querySelector('.mapboxgl-ctrl-bottom-left').remove();
        this.$refs.mapBox.querySelector('.mapboxgl-ctrl-attrib-inner').remove();
        this.$refs.mapBox.querySelector('.mapboxgl-ctrl-bottom-right').remove();
        this.map.on('load', () => {
          this.initMarkers();
        });
      }
    },
    initMarkers() {
      const pads = [];
      for (let launch of this.getUpcomingLaunches) {
        if (launch.pad.longitude && launch.pad.latitude) {
          if (
            this.getUpcomingLaunches.filter(
              (currentLaunch) => currentLaunch.pad.id === launch.pad.id
            ).length > 1
          ) {
            pads.push(launch.pad.id);
          } else {
            this.setMarkerForPad(launch);
          }
        }
      }
      console.log(pads);
    },
    setMarkerForPad(launch) {
      const div = document.createElement('div');
      const h3 = document.createElement('h3');
      h3.textContent = launch.name;
      h3.classList.add('popup-map-class');
      h3.addEventListener('click', () => {
        this.$router.push(`/launch/${launch.id}`);
      });
      div.appendChild(h3);
      const popup = new mapboxgl.Popup({ offset: 25 }).setDOMContent(h3);
      new mapboxgl.Marker({ color: 'red' })
        .setLngLat([launch.pad.longitude, launch.pad.latitude])
        .setPopup(popup)
        .addTo(this.map);
    },
  },
  computed: {
    ...mapGetters('launches', [
      'getNextLaunch',
      'launchesAreLoading',
      'getUpcomingLaunches',
    ]),
  },
  watch: {
    launchesAreLoading() {
      if (this.launchesAreLoading === 'loaded' && this.map && this.map.loaded) {
        this.initMarkers();
      }
    },
    mapStyle() {
      this.map.setStyle(this.mapStyle);
    },
  },
};
</script>

<style>
.popup-map-class {
  color: black;
}
.popup-map-class:hover {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160) solid underline;
  cursor: pointer;
}
</style>
<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.content {
  position: absolute;
  height: 100%;
  width: calc(100% - 5rem);
}
.mpControl-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
}
.mpControl {
  z-index: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #333333;
  padding: 1rem;
  border-radius: 0rem 0rem 2rem 2rem;
}
.mapBox {
  position: absolute;
  width: 100%;
  height: 100%;
}
.radioItem {
  display: flex;
  align-items: center;
  padding-right: 1rem;
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
@media screen and (max-width: 600px) {
  .wrapper {
    padding: 0 0rem 5rem 0rem;
  }
  .content {
    height: calc(100% - 5rem);
    width: 100%;
  }
  .mpControl {
    width: 100%;
    border-radius: 0rem;
  }
}
@media screen and (min-width: 600px) {
  .wrapper {
    padding: 0 0rem 0rem 5rem;
  }
  .content {
    height: 100%;
    width: calc(100% - 5rem);
  }
}
</style>
